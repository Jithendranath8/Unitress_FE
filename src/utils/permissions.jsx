import { Permission, UserRole } from '../types/auth';

const rolePermissions = {
  admin: {
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  manager: {
    view: true,
    create: true,
    edit: true,
    delete: false,
  },
  user: {
    view: true,
    create: false,
    edit: false,
    delete: false,
  },
};

const getPermissions = (UserRole) => {
  return rolePermissions[role];
};
