import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, phone, message, offMarket } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Build tags based on form data
    const tags = ['Website Lead'];
    if (offMarket === true) tags.push('Off-Market Interest');

    // ═══ FOLLOW UP BOSS: Create/update person ═══
    // This sends the lead directly into your FUB CRM.
    // Set the FUB_API_KEY environment variable in Vercel dashboard.
    const fubApiKey = process.env.FUB_API_KEY;

    if (fubApiKey) {
      try {
        const noteBody = [
          message || '(No message provided)',
          offMarket === true ? '⭐ Interested in off-market properties' : '',
        ].filter(Boolean).join('\n\n');

        await fetch('https://api.followupboss.com/v1/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${Buffer.from(fubApiKey + ':').toString('base64')}`,
          },
          body: JSON.stringify({
            source: 'griffinsweet.com',
            type: offMarket ? 'Property Inquiry' : 'General Inquiry',
            message: noteBody,
            person: {
              firstName: name.split(' ')[0],
              lastName: name.split(' ').slice(1).join(' ') || '',
              emails: [{ value: email }],
              phones: phone ? [{ value: phone }] : [],
              tags,
            },
          }),
        });
      } catch (fubError) {
        // Log but don't fail — still want to capture the lead
        console.error('FUB API error:', fubError);
      }
    }

    // ═══ EMAIL NOTIFICATION (via Vercel/Resend — add later) ═══
    // For now, the FUB integration handles notification.
    // Future: add Resend or SendGrid for instant email alerts.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
