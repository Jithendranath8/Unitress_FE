import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      <main className="ml-64 pt-16 pb-16">
        <div className="p-6">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
