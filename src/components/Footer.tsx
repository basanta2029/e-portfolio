export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-slate-300 text-sm">
            Technical Writing E-Portfolio
          </p>
          <p className="text-slate-400 text-sm mt-2">
            &copy; {new Date().getFullYear()} Basanta Baral
          </p>
        </div>
      </div>
    </footer>
  );
}
