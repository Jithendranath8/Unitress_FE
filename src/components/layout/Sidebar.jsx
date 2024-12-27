import { Home, Users, Settings, FileText, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const menuItems = [
  { label: 'Dashboard', icon: Home, href: '/', roles: ['user', 'manager', 'admin'] },
  { label: 'Users', icon: Users, href: '/users', roles: ['manager', 'admin'] },
  { label: 'Reports', icon: FileText, href: '/reports', roles: ['manager', 'admin'] },
  { label: 'Settings', icon: Settings, href: '/settings', roles: ['admin'] },
];

export const Sidebar = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const filteredMenuItems = menuItems.filter((item) => 
    user?.role && item.roles.includes(user.role)
  );

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen fixed left-0 top-0 pt-16">
      <nav className="mt-8">
        <ul className="space-y-2">
          {filteredMenuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-full p-4">
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white w-full"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
