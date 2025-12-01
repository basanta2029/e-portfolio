import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to My E-Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Documenting my journey as a technical communicator
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              About Me
            </Link>
            <Link
              href="/artifacts"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            What You&apos;ll Find Here
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Artifacts */}
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Professional Artifacts
              </h3>
              <p className="text-slate-600 mb-4">
                Memos, reports, proposals, and presentations from my coursework. Real examples of how I communicate professionally.
              </p>
              <Link href="/artifacts" className="text-blue-600 font-medium hover:underline">
                View Artifacts &rarr;
              </Link>
            </div>

            {/* Card 2: Video Introduction */}
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Video Introduction
              </h3>
              <p className="text-slate-600 mb-4">
                A quick elevator pitch about who I am, what I do, and where I&apos;m headed professionally.
              </p>
              <Link href="/about" className="text-emerald-600 font-medium hover:underline">
                Watch Video &rarr;
              </Link>
            </div>

            {/* Card 3: Reflection */}
            <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                My Reflection
              </h3>
              <p className="text-slate-600 mb-4">
                Honest thoughts on what I learned this semester and where I stand on using AI in technical writing.
              </p>
              <Link href="/reflection" className="text-violet-600 font-medium hover:underline">
                Read Reflection &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-slate-600">Artifacts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">1</div>
              <div className="text-slate-600">Video Intro</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600">15</div>
              <div className="text-slate-600">Weeks of Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">1</div>
              <div className="text-slate-600">Reflection</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
