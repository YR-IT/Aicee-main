// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { User, Lock } from 'lucide-react';

// const Login: React.FC = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     setError(null); // Clear error on input change
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     // Basic client-side validation
//     if (!formData.username || !formData.password) {
//       setError('Both username and password are required.');
//       setLoading(false);
//       return;
//     }

//     // Fixed credentials for testing
//     const validUsername = 'Userisgreat';
//     const validPassword = 'admin123';

//     if (formData.username === validUsername && formData.password === validPassword) {
//       setSuccess(true);
//       setTimeout(() => navigate('/admin'), 1000); // Redirect to /admin after 1 second
//     } else {
//       setError('Invalid username or password.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        
//         {success && (
//           <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
//             Login successful! Redirecting...
//           </div>
//         )}
//         {error && (
//           <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Username</label>
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="Enter username"
//                 required
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Password</label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="Enter password"
//                 required
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-2 rounded-lg hover:from-orange-700 hover:to-red-600 transition-colors duration-300"
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSessionExpired, setIsSessionExpired] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (success) {
      localStorage.setItem('isLoggedIn', 'true'); // Set session flag
      timer = setTimeout(() => {
        setIsSessionExpired(true);
        setSuccess(false);
        localStorage.removeItem('isLoggedIn'); // Clear session on expiration
        setFormData({ username: '', password: '' });
        navigate('/');
      }, 30 * 60 * 1000); // 30 minutes in milliseconds
    }

    return () => clearTimeout(timer);
  }, [success, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setIsSessionExpired(false);

    if (!formData.username || !formData.password) {
      setError('Both username and password are required.');
      setLoading(false);
      return;
    }

    const validUsername = 'Userisgreat';
    const validPassword = 'admin123';

    if (formData.username === validUsername && formData.password === validPassword) {
      setSuccess(true);
      setTimeout(() => navigate('/admin'), 1000);
    } else {
      setError('Invalid username or password.');
    }

    setLoading(false);
  };

  if (isSessionExpired) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Session Expired</h2>
          <p className="text-gray-600 mb-6">Your session has expired. Please log in again.</p>
          <button
            onClick={() => {
              setIsSessionExpired(false);
              setFormData({ username: '', password: '' });
            }}
            className="w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-2 rounded-lg hover:from-orange-700 hover:to-red-600 transition-colors duration-300"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        
        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
            Login successful! Redirecting...
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter username"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter password"
                required
                disabled={loading}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-2 rounded-lg hover:from-orange-700 hover:to-red-600 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;