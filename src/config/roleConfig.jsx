export const ADMIN_EMAILS = [
    'admin@example.com',
    'superadmin@example.com',
  ];
  
  export const MANAGER_EMAILS = [
    'manager@example.com',
    'lead@example.com',
  ];
  
  export const getUserRole = (email) => {
    if (ADMIN_EMAILS.includes(email)) return 'admin';
    if (MANAGER_EMAILS.includes(email)) return 'manager';
    return 'user';
  };
  