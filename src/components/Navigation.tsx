
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Cpu, Zap, User, Search } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Zap },
    { path: '/marketplace', label: 'Marketplace', icon: Search },
    { path: '/terminal', label: 'Terminal', icon: Cpu },
    { path: '/dashboard', label: 'Dashboard', icon: User },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple group-hover:animate-glow transition-all duration-300">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                DecentraGPU
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                      isActive
                        ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30'
                        : 'text-gray-300 hover:text-neon-blue hover:bg-white/5'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300">
              Connect Wallet
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 rounded-lg mt-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-2 ${
                      isActive
                        ? 'bg-neon-blue/20 text-neon-blue'
                        : 'text-gray-300 hover:text-neon-blue hover:bg-white/5'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple">
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
