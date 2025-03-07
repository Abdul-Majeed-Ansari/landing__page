import { Menu, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">LOGO</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">HOME</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">DISCOVERY</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">PHOTOS</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">CONTACT</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;