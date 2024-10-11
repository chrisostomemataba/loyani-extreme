"use client";  // Client-side component

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons
import styles from '../../styles/footer.module.css';  // Custom CSS for footer

export default function Footer() {
  return (
    <footer className={`${styles.footer} py-12`}>
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-primary mb-4">Loyani Safaris</h4>
            <p className="text-muted leading-relaxed mb-4">
              Discover the beauty of Africa with Loyani Safaris. Our tailored tours offer unforgettable adventures that bring you closer to nature, culture, and the wild.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted hover:text-secondary transition duration-300">Home</a></li>
              <li><a href="/about" className="text-muted hover:text-secondary transition duration-300">About Us</a></li>
              <li><a href="/safaris" className="text-muted hover:text-secondary transition duration-300">Safari Tours</a></li>
              <li><a href="/contact" className="text-muted hover:text-secondary transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-primary mb-4">Contact Us</h4>
            <p className="text-muted mb-2"><strong>Email:</strong> info@loyanisafaris.com</p>
            <p className="text-muted mb-2"><strong>Phone:</strong> +1 800 123 4567</p>
            <p className="text-muted mb-4"><strong>Address:</strong> 123 Safari Lane, Serengeti, TZ</p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-muted hover:text-secondary transition duration-300">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="text-muted hover:text-secondary transition duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-muted hover:text-secondary transition duration-300">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center text-muted">
          <p>&copy; 2024 Loyani Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
