'use client';

import Link from 'next/link';

interface ArtifactPageProps {
  title: string;
  description: string;
  pdfPath?: string;
  embedUrl?: string;
  downloadPath?: string;
  downloadLabel?: string;
  reflectionPoints?: string[];
}

export default function ArtifactPage({
  title,
  description,
  pdfPath,
  embedUrl,
  downloadPath,
  downloadLabel = "Download File",
  reflectionPoints = [],
}: ArtifactPageProps) {
  return (
    <div className="min-h-screen py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/artifacts"
          className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Artifacts
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            {title}
          </h1>
          <p className="text-xl text-slate-600">
            {description}
          </p>
        </div>

        {/* Document Display */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
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
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <a
                  href={pdfPath}
                  download
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          ) : downloadPath ? (
            <div className="h-[400px] flex items-center justify-center bg-slate-100">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto mb-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <p className="text-slate-700 font-medium mb-4">This file is available for download</p>
                <a
                  href={downloadPath}
                  download
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {downloadLabel}
                </a>
              </div>
            </div>
          ) : (
            <div className="h-[400px] flex items-center justify-center bg-slate-100">
              <div className="text-center text-slate-500">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="font-medium">Document Not Yet Added</p>
              </div>
            </div>
          )}
        </div>

        {/* Reflection Points */}
        {reflectionPoints.length > 0 && (
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              What I Learned
            </h2>
            <ul className="space-y-3">
              {reflectionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
