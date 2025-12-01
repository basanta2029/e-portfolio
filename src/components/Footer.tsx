export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            Technical Writing E-Portfolio | Created for ENGL Course
          </p>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} Basanta Baral. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
