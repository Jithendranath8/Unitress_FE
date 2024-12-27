export const UserRoles = ['user', 'manager', 'admin'];

export const createUser = (id, name, email, role, avatar) => ({
  id,
  name,
  email,
  role,
  avatar,
});

export const createPermission = (view, create, edit, del) => ({
  view,
  create,
  edit,
  delete: del,
});
