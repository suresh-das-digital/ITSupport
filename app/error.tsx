// app/error.tsx
'use client'; // Error boundaries must be client components

import { useEffect } from 'react';
import Link from 'next/link';

// The error component receives the error object and a reset function
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  
  // Log the error for debugging purposes
  useEffect(() => {
    console.error('An unexpected error occurred:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
        We encountered an issue while loading this page. Please try again.
      </p>
      
      {/* Button to attempt recovery */}
      <button
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        onClick={() => reset()} // The reset function attempts to re-render the segment
      >
        Try reloading the page
      </button>

      <Link href="/" className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
        Go back to Homepage
      </Link>
    </div>
  );
}