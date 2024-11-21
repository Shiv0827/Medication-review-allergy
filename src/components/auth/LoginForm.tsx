import React, { useState } from 'react';
import { loginUser } from '../../authService';
// import { loginUser } from 'project/src/authService.ts'; // Ensure this path is correct

interface LoginFormProps {
  onCancel: () => void;
}

const LoginForm = ({ onCancel }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [showDialog, setShowDialog] = useState(false); // State to control the visibility of the dialog

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      const user = await loginUser(formData.email, formData.password);
      console.log('User logged in:', user);
      // Show success message and dialog box on successful login
      setSuccessMessage('Logged in successfully!');
      setShowDialog(true);
    } catch (err: any) {
      setError(err.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false); // Close the dialog box
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-6 p-4 border rounded shadow-sm max-w-sm mx-auto bg-white">
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 text-sm font-medium text-white ${
              loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            } rounded-md`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>

      {/* Success Dialog Box */}
      {showDialog && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-green-600 text-lg">{successMessage}</p>
            <button
              onClick={handleDialogClose}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;



// import React from 'react';
// import axios from 'axios';

// import { initializeApp } from 'firebase/app';


// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);

// interface LoginFormProps {
//   onSubmit: (data: { username: string; password: string }) => void;
//   onCancel: () => void;
// }

// const LoginForm = ({ onSubmit, onCancel }: LoginFormProps) => {
//   const [formData, setFormData] = React.useState({
//     username: '',
//     password: '',
//   });
//   const [error, setError] = React.useState('');
//   const [loading, setLoading] = React.useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (!formData.username || !formData.password) {
//       setError('Please fill in all fields');
//       setLoading(false);
//       return;
//     }

//     try {
//       // Replace '/api/login' with your backend login endpoint
//       const response = await axios.post('/api/login', {
//         username: formData.username,
//         password: formData.password,
//       });

//       if (response.status === 200) {
//         // Call the onSubmit function with the response data
//         onSubmit(response.data);
//       } else {
//         setError('Invalid credentials. Please try again.');
//       }
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'An error occurred during login.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {error && (
//         <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
//           {error}
//         </div>
//       )}

//       <div>
//         <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//           Username
//         </label>
//         <input
//           type="text"
//           id="username"
//           value={formData.username}
//           onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>

//       <div className="flex justify-end space-x-3">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           disabled={loading}
//           className={`px-4 py-2 text-sm font-medium text-white ${
//             loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
//           } rounded-md`}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;

// import React from 'react';
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// interface LoginFormProps {
//   onSubmit: (data: { username: string; password: string }) => void;
//   onCancel: () => void;
// }

// const LoginForm = ({ onSubmit, onCancel }: LoginFormProps) => {
//   const [formData, setFormData] = React.useState({
//     username: '',
//     password: '',
//   });
//   const [error, setError] = React.useState('');
//   const [loading, setLoading] = React.useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (!formData.username || !formData.password) {
//       setError('Please fill in all fields');
//       setLoading(false);
//       return;
//     }

//     try {
//       // Firebase authentication
//       const userCredential = await signInWithEmailAndPassword(auth, formData.username, formData.password);
//       const user = userCredential.user;

//       // Call the onSubmit function with the logged-in user details
//       onSubmit({
//         username: user.email || '',
//         password: formData.password,
//       });
//     } catch (err: any) {
//       setError(err.message || 'An error occurred during login.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {error && (
//         <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
//           {error}
//         </div>
//       )}

//       <div>
//         <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//           Email
//         </label>
//         <input
//           type="email"
//           id="username"
//           value={formData.username}
//           onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//         />
//       </div>

//       <div className="flex justify-end space-x-3">
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           disabled={loading}
//           className={`px-4 py-2 text-sm font-medium text-white ${
//             loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
//           } rounded-md`}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default LoginForm;