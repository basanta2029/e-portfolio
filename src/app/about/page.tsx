export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Computer Science Student | Researcher | Problem Solver
          </p>
        </div>

        {/* Video Introduction Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Video Introduction
          </h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
            {/* Video Embed Placeholder - Replace with your actual video */}
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              {/*
                TO ADD YOUR VIDEO:
                Option 1: YouTube embed - uncomment and replace YOUR_VIDEO_ID:
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  allowFullScreen
                />
              */}
              <div className="text-center text-gray-500 dark:text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">Video Introduction Coming Soon</p>
                <p className="text-sm mt-2">Elevator pitch video will be added here</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Bio */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Background
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m Basanta Baral, a Computer Science student at Howard University with an expected
              graduation in May 2026. With a 3.85 GPA and recognition as a Howard Leadership Scholar,
              I&apos;ve dedicated myself to pushing the boundaries of what technology can achieve while
              maintaining academic excellence.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in tech spans multiple domains. Currently, I serve as a Teaching Assistant
              for Data Structures & Algorithms, where I help fellow students master complex concepts
              in C++. Alongside teaching, I&apos;m conducting research in Quantum Computing, exploring
              the intersection of classical and quantum paradigms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Previously, I contributed to ML/NLP research focused on mental health analysis, where
              I saw firsthand how technology can make a meaningful impact on people&apos;s lives. These
              experiences have shaped my approach to technical communication&mdash;I believe complex
              ideas deserve clear explanations, and good documentation can be the bridge between
              innovation and adoption.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond academics, I&apos;ve been recognized as a TMCF Meta Scholar, won the MLH x Google
              DeepMind Vibe Coding Challenge, and earned AWS certifications. These achievements
              reflect my commitment to continuous learning and applying knowledge to real-world challenges.
            </p>
          </div>
        </section>

        {/* Education Highlight */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Howard University
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  B.S. Computer Science | Expected May 2026
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  GPA: 3.85/4.0 | Dean&apos;s List | Howard Leadership Scholarship (Full Merit)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Relevant Coursework: Data Structures & Algorithms, Operating Systems, Software Engineering,
                  Computer Networks, Database Systems
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>

          {/* Technical Skills */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'React', 'TensorFlow', 'AWS', 'Docker', 'Git', 'Linux'].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Communication Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Communication & Professional Skills</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Technical Writing & Documentation',
                'Research & Data Analysis',
                'Team Collaboration',
                'Teaching & Mentoring',
                'Problem Solving',
                'Professional Presentations',
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3 flex items-center"
                >
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I&apos;m always excited to connect with fellow students, researchers, and professionals.
              Whether you want to discuss technology, explore collaboration opportunities, or just say hello,
              feel free to reach out!
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:basanta.baral@bison.howard.edu"
                className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium">basanta.baral@bison.howard.edu</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/basantabaral"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p className="text-gray-900 dark:text-white font-medium">linkedin.com/in/basantabaral</p>
                </div>
              </a>

              <a
                href="https://github.com/basanta2029"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <p className="text-gray-900 dark:text-white font-medium">github.com/basanta2029</p>
                </div>
              </a>

              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white font-medium">202-386-0148</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
