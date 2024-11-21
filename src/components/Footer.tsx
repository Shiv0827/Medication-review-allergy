import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Related Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <LinkColumn
            title="Quick Links"
            links={['More Allergies ', 'Allergies News', 'Allergies Reference']}
          />
          <LinkColumn
            title="Resources"
            links={['Allergies Videos', 'Find an Allergist', 'Allergy Map']}
          />
          <LinkColumn
            title="Conditions"
            links={["Children's Allergies", 'Eye Allergies', 'Food Allergies']}
          />
          <LinkColumn
            title="Tools"
            links={['Drug Interaction Checker', 'Severe Allergies', 'Allergies A-Z']}
          />
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-blue-800 pt-8 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">
              Sign up for our free Allergies Newsletter
            </h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 text-blue-200">
              By clicking Subscribe, I agree to the Terms & Conditions & Privacy Policy
            </p>
          </div>
        </div>

        {/* Social Media & App Downloads */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-blue-800 pt-8">
          <div className="flex gap-6 mb-6 md:mb-0">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Youtube} />
          </div>
          
          <div className="flex gap-4">
            <AppStoreButton store="App Store" />
            <AppStoreButton store="Google Play" />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="text-center mt-12 text-sm text-blue-200">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Editorial Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
          <p>© {new Date().getFullYear()} Allergies Resource Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const LinkColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="text-blue-200 hover:text-white">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <a href="#" className="text-blue-200 hover:text-white">
    <Icon className="w-6 h-6" />
  </a>
);

const AppStoreButton = ({ store }: { store: string }) => (
  <a
    href="#"
    className="inline-flex items-center px-4 py-2 border border-blue-200 rounded text-sm hover:bg-blue-800"
  >
    Get it on {store}
  </a>
);

export default Footer;