import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vedic-900 text-cream-50">
      <div className="section-padding bg-vedic-800">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">🕉️</span>
                <div>
                  <div className="font-display text-xl font-600">VEDIQ</div>
                  <div className="text-sm text-saffron-300">पथ</div>
                </div>
              </div>
              <p className="text-cream-200 text-sm">
                Helping children build focus, confidence & values.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display font-600 mb-4">Program</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/programs" className="text-cream-200 hover:text-cream-50 transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="/weekend-program" className="text-cream-200 hover:text-cream-50 transition-colors">
                    Weekend Program
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-cream-200 hover:text-cream-50 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-cream-200 hover:text-cream-50 transition-colors">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-display font-600 mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-cream-200 hover:text-cream-50 transition-colors">
                    About VediqPath
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-cream-200 hover:text-cream-50 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-display font-600 mb-4">Connect</h4>
              <div className="space-y-3">
                <p className="text-sm text-cream-200">📍 Noida, Uttar Pradesh</p>
                <a
                  href="https://www.instagram.com/vediqpath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream-200 hover:text-cream-50 transition-colors text-sm"
                >
                  <Instagram size={18} />
                  @vediqpath
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-vedic-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-200">
              <p>&copy; {currentYear} VediqPath. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-cream-50 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-cream-50 transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
