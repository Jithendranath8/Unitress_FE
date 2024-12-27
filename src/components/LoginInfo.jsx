// import React from 'react';
// import { Info } from 'lucide-react';

// const LoginInfo = () => {
//   return (
//     <div className="absolute top-4 right-4">
//       <button
//         onClick={() => document.getElementById('login-info')?.showModal()}
//         className="p-2 rounded-full hover:bg-gray-100"
//       >Test Credentials
//         <Info size={24} />
//       </button>

//       <dialog id="login-info" className="p-6 rounded-lg shadow-lg">
//         <h3 className="text-lg font-semibold mb-4">Login Information</h3>
//         <div className="space-y-4">
//           <div>
//             <p className="font-medium">Admin Email:</p>
//             <p className="text-gray-600">admin@example.com</p>
//           </div>
//           <div>
//             <p className="font-medium">Manager Email:</p>
//             <p className="text-gray-600">manager@example.com</p>
//           </div>
//         </div>
//         <button
//           onClick={() => document.getElementById('login-info')?.close()}
//           className="mt-6 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
//         >
//           Close
//         </button>
//       </dialog>
//     </div>
//   );
// };

// export default LoginInfo;



import { HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Dialog } from '../components/ui/Dialog';
import { ADMIN_EMAILS, MANAGER_EMAILS } from '../config/roleConfig';

const LoginInfo = () => {
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

export default LoginInfo;