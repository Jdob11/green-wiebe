import React, { useCallback } from 'react';

interface SignRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignRequestModal: React.FC<SignRequestModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={handleOutsideClick}
    >
      <div className="bg-navbar p-6 sm:p-8 rounded-lg w-full max-w-[90%] sm:max-w-[80%] md:max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Request a campaign sign</h2>
        <p className="mb-4 text-white text-sm sm:text-base">
          If you would like a sign for your yard or window, please let us know by clicking on the link below. You will be redirected to the BC Greens web site.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://www.bcgreens.ca/request_a_sign"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-footer text-white px-4 py-2 rounded hover:bg-blue-900 transition-colors w-full sm:w-auto text-center"
          >
            REQUEST A SIGN
          </a>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignRequestModal;