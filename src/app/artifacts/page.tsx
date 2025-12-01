import Link from 'next/link';

const artifacts = [
  {
    id: 'memo',
    title: 'Professional Memo',
    description: 'A formal memorandum demonstrating professional workplace communication.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    id: 'resume',
    title: 'Resume',
    description: 'A professionally formatted resume highlighting skills and experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'green',
  },
  {
    id: 'cover-letter',
    title: 'Cover Letter',
    description: 'A compelling cover letter tailored for professional opportunities.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'purple',
  },
  {
    id: 'proposal',
    title: 'Group Proposal',
    description: 'A collaborative project proposal showcasing teamwork and planning skills.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'orange',
  },
  {
    id: 'report',
    title: 'Business Report',
    description: 'A comprehensive business report demonstrating analytical and writing skills.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'red',
  },
  {
    id: 'presentation',
    title: 'Homework Presentation',
    description: 'A professional presentation demonstrating public speaking and visual communication.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: 'teal',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
  green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
  purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
  orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
  red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400', border: 'border-red-200 dark:border-red-800' },
  teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-800' },
};

export default function Artifacts() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Artifacts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of professional documents created throughout the Technical Writing course,
            demonstrating my growth and skills as a technical communicator.
          </p>
        </div>

        {/* Artifacts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => {
            const colors = colorClasses[artifact.color];
            return (
              <Link
                key={artifact.id}
                href={`/artifacts/${artifact.id}`}
                className={`block bg-white dark:bg-gray-800 rounded-xl border ${colors.border} p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center mb-4 ${colors.text}`}>
                  {artifact.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {artifact.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {artifact.description}
                </p>
                <span className={`${colors.text} font-medium inline-flex items-center`}>
                  View Artifact
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>

        {/* Instructions Section */}
        <div className="mt-16 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            How to Add Your Documents
          </h3>
          <ol className="text-yellow-700 dark:text-yellow-300 space-y-2 list-decimal list-inside">
            <li>Place your PDF files in the <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">/public/artifacts/</code> folder</li>
            <li>Name them: memo.pdf, resume.pdf, cover-letter.pdf, proposal.pdf, report.pdf, presentation.pdf</li>
            <li>The individual artifact pages will automatically display them</li>
            <li>You can also embed Google Docs, Slides, or other online documents</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
