import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthModal from './auth/AuthModal';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';
import logo from '../assets/logo.png';
import { signupUser } from '../authService'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [loginModalOpen, setLoginModalOpen] = React.useState(false);
  const [signupModalOpen, setSignupModalOpen] = React.useState(false);

  const handleLogin = (data: { username: string; password: string }) => {
    console.log('Login:', data);
    setLoginModalOpen(false);
  };

  const handleSignup = async (data: {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    phone: string;
    allergies: string;
  }) => {
    try {
      const user = await signupUser(data);
      alert('Signup successful! You can now log in.');
      setSignupModalOpen(false);
    } catch (error: any) {
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-navy-900 text-white z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Allergy Team Logo" className="h-11" />
              <span className="text-2xl font-bold text-white">Allergy Team</span>
            </Link>

            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/conditions">Conditions</NavLink>
              <NavLink href="/well-being">Well-Being</NavLink>
              <NavLink href="/ask-question">Ask Questions</NavLink>
              <button
                onClick={() => setLoginModalOpen(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Login
              </button>
              <button
                onClick={() => setSignupModalOpen(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
              >
                Sign Up
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <NavLink href="/conditions" mobile>
                Conditions
              </NavLink>
              <NavLink href="/well-being" mobile>
                Well-Being
              </NavLink>
              <NavLink href="/ask-question" mobile>
                Ask Questions
              </NavLink>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setLoginModalOpen(true);
                }}
                className="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSignupModalOpen(true);
                }}
                className="block w-full px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
              >
                Sign Up
              </button>
            </div>
          )}
        </nav>
      </header>

      <AuthModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} title="Login">
        <LoginForm onSubmit={handleLogin} onCancel={() => setLoginModalOpen(false)} />
      </AuthModal>

      <AuthModal isOpen={signupModalOpen} onClose={() => setSignupModalOpen(false)} title="Sign Up">
        <SignupForm onSubmit={handleSignup} onCancel={() => setSignupModalOpen(false)} />
      </AuthModal>
    </>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; mobile?: boolean }> = ({ href, children, mobile }) => (
  <Link to={href} className={`text-gray-200 hover:text-white transition-colors ${mobile ? 'block py-2' : ''}`}>
    {children}
  </Link>
);

export default Header;
