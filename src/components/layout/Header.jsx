import { Bell, Settings, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const Header = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{user?.name}</span>
            {user?.avatar ? (
              <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
            ) : (
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-500" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};