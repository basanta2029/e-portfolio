'use client';

import Link from 'next/link';

interface ArtifactPageProps {
  title: string;
  description: string;
  pdfPath?: string;
  embedUrl?: string;
  reflectionPoints?: string[];
}

export default function ArtifactPage({
  title,
  description,
  pdfPath,
  embedUrl,
  reflectionPoints = [],
}: ArtifactPageProps) {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/artifacts"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Artifacts
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* Document Display */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="w-full h-[800px]"
              allowFullScreen
            />
          ) : pdfPath ? (
            <div>
              <iframe
                src={pdfPath}
                className="w-full h-[800px]"
                title={title}
              />
              <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                <a
                  href={pdfPath}
                  download
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          ) : (
            <div className="h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="font-medium">Document Not Yet Added</p>
                <p className="text-sm mt-2">Add your PDF to /public/artifacts/ or provide an embed URL</p>
              </div>
            </div>
          )}
        </div>

        {/* Reflection Points */}
        {reflectionPoints.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Reflection on This Artifact
            </h2>
            <ul className="space-y-3">
              {reflectionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
