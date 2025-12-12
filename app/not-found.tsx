// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800 p-6">
      <p className="text-9xl font-extrabold text-gray-300 dark:text-gray-700">
        404
      </p>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
        We apologize, but the URL you requested could not be found on our server.
      </p>
      
      <Link 
        href="/" 
        className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-700 transition duration-300"
      >
        Return to the Homepage
      </Link>
    </div>
  );
}