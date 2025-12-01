import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to My E-Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            A showcase of my growth as a technical communicator
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Meet Me
            </Link>
            <Link
              href="/artifacts"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Portfolio Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Artifacts */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Professional Artifacts
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Collection of professional documents including memos, reports, proposals, and presentations.
              </p>
              <Link href="/artifacts" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View Artifacts &rarr;
              </Link>
            </div>

            {/* Card 2: Video Introduction */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Video Introduction
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A personal elevator pitch introducing myself as a professional and my career aspirations.
              </p>
              <Link href="/about" className="text-green-600 dark:text-green-400 font-medium hover:underline">
                Watch Video &rarr;
              </Link>
            </div>

            {/* Card 3: Reflection */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Learning Reflection
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                My reflection on growth as a technical communicator and ethical stance on AI in writing.
              </p>
              <Link href="/reflection" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                Read Reflection &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6</div>
              <div className="text-gray-600 dark:text-gray-400">Artifacts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">1</div>
              <div className="text-gray-600 dark:text-gray-400">Video Intro</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">15</div>
              <div className="text-gray-600 dark:text-gray-400">Weeks of Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">1</div>
              <div className="text-gray-600 dark:text-gray-400">Reflection</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
