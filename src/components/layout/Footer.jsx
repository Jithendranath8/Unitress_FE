export const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200 fixed bottom-0 w-full">
        <div className="px-4 py-3 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Jithendranath. All rights reserved.
        </div>
      </footer>
    );
  };