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
            Meet the person behind the portfolio
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
                Option 1: YouTube embed
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  allowFullScreen
                />

                Option 2: Vimeo embed
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
                  allowFullScreen
                />

                Option 3: Direct video file (put in /public folder)
                <video controls className="w-full h-full rounded-lg">
                  <source src="/your-video.mp4" type="video/mp4" />
                </video>
              */}
              <div className="text-center text-gray-500 dark:text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">Video Introduction Coming Soon</p>
                <p className="text-sm mt-2">Replace this placeholder with your elevator pitch video</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <strong>Instructions:</strong> Replace the placeholder above with your video embed code or upload your video file to the public folder.
            </p>
          </div>
        </section>

        {/* Professional Bio */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Background
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {/* TODO: Replace with your actual bio */}
              I am Basanta Baral, a dedicated student with a passion for [YOUR FIELD].
              Throughout my academic journey, I have developed strong skills in technical
              communication, problem-solving, and collaborative work.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              My experience includes [BRIEF DESCRIPTION OF YOUR EXPERIENCE]. I am committed
              to continuous learning and applying my knowledge to real-world challenges.
            </p>
          </div>
        </section>

        {/* Key Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Technical Writing',
              'Professional Communication',
              'Research & Analysis',
              'Team Collaboration',
              'Problem Solving',
              'Presentation Skills',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3 flex items-center"
              >
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I&apos;m always open to discussing new opportunities and collaborations.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Email:</strong> your.email@example.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>LinkedIn:</strong> linkedin.com/in/yourprofile
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
