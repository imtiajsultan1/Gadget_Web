import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PurchaseModal = ({ isOpen, onClose, total }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
        <div className="text-center">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Purchase Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been confirmed.
            Total amount: <span className="font-semibold">${total}</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            A confirmation email has been sent to your registered email address.
          </p>
          <button
            onClick={onClose}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;