import { X } from 'lucide-react';

export const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-indigo-900/20 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-medium text-indigo-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-indigo-400 hover:text-indigo-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
