import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2">Gadget Heaven</h3>
          <p className="text-gray-600 text-sm">Bringing you the best in tech innovation and excellence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h4 className="font-medium mb-3">Services</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Product Support</li>
              <li>Warranty Info</li>
              <li>Order & Shipping</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Company</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-600 mt-12">
          <p>&copy; {new Date().getFullYear()} Gadget Heaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;