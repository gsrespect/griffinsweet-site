import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-gray">
          <h1 className="font-serif">Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At Griffin Sweet Real Estate ("we", "us", or "our"), we are committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <h3>Collection of your Information</h3>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number.
          </p>
          <h3>Use of your Information</h3>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. 
            Specifically, we may use information collected about you via the Site to:
            <ul className="list-disc pl-5 mt-2">
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions.</li>
              <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
            </ul>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
