import { HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Dialog } from '../ui/Dialog';
import { ADMIN_EMAILS, MANAGER_EMAILS } from '../../config/roleConfig';

export const LoginCredentials = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-indigo-600 hover:text-indigo-800 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-colors shadow-sm"
        title="View test credentials"
      >
        <HelpCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Test Credentials</span>
      </button>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Test Credentials"
      >
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-indigo-900 mb-2">Admin Emails:</h3>
            <ul className="list-disc list-inside text-indigo-700">
              {ADMIN_EMAILS.map(email => (
                <li key={email}>{email}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-indigo-900 mb-2">Manager Emails:</h3>
            <ul className="list-disc list-inside text-indigo-700">
              {MANAGER_EMAILS.map(email => (
                <li key={email}>{email}</li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-indigo-600 mt-4">
            Note: Any password will work for testing purposes
          </p>
        </div>
      </Dialog>
    </div>
  );
};