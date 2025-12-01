export default function Reflection() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Reflection on Learning & AI Ethics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My growth as a technical communicator and ethical stance on AI in writing
          </p>
        </div>

        {/* Main Reflection Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Section 1: Growth as a Technical Communicator */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              My Growth as a Technical Communicator
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                When I began this Technical Writing course, I approached writing the way many computer
                science students do&mdash;as a necessary but secondary skill to coding. I could write
                functional code comments and basic documentation, but I hadn&apos;t truly considered
                the art and strategy behind effective technical communication. This course fundamentally
                changed that perspective.
              </p>

              <p>
                One of the most transformative realizations was understanding that technical writing
                isn&apos;t just about conveying information&mdash;it&apos;s about bridging the gap
                between complex technical concepts and diverse audiences. As a Teaching Assistant for
                Data Structures & Algorithms, I explain intricate concepts like recursion, tree
                traversals, and graph algorithms to students with varying backgrounds. This course
                gave me frameworks to do that more effectively, teaching me to consider my audience&apos;s
                prior knowledge, anticipate their questions, and structure explanations logically.
              </p>

              <p>
                The artifacts in this portfolio demonstrate my growth across several dimensions:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Professional Formatting & Structure:</strong> Through creating the memo and
                  business report, I learned that how information is presented matters as much as the
                  information itself. Proper headings, white space, and visual hierarchy guide readers
                  through complex material&mdash;skills directly applicable to writing technical
                  documentation for software projects.
                </li>
                <li>
                  <strong>Audience Awareness:</strong> Each document required me to shift perspective.
                  The cover letter needed to speak to hiring managers; the proposal needed to convince
                  stakeholders; the memo needed to inform colleagues efficiently. In my research work
                  on quantum computing and ML/NLP, I now better understand how to tailor papers and
                  presentations for academic versus industry audiences.
                </li>
                <li>
                  <strong>Collaborative Writing:</strong> The group proposal was particularly valuable.
                  In software engineering, documentation is rarely written in isolation. Learning to
                  merge different writing styles, negotiate content decisions, and maintain a unified
                  voice mirrors the collaborative documentation practices I&apos;ll encounter in
                  professional development teams.
                </li>
                <li>
                  <strong>Persuasive Communication:</strong> Writing the cover letter and proposal
                  developed my ability to make compelling arguments&mdash;a skill essential for
                  pitching project ideas, writing grant proposals for research, or advocating for
                  technical decisions in code reviews.
                </li>
              </ul>

              <p>
                As I prepare for a career in computer science&mdash;whether in software engineering,
                research, or the intersection of both&mdash;I recognize that technical communication
                will be a differentiating skill. The best code is useless if no one understands how
                to use it. The most groundbreaking research means nothing if it can&apos;t be
                communicated clearly. This course has equipped me to be not just a programmer who
                writes, but a technical communicator who codes.
              </p>
            </div>
          </section>

          {/* Section 2: Ethical Stance on AI */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              My Ethical Stance on AI in Technical Writing
            </h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                As someone who has worked directly with machine learning and natural language
                processing&mdash;having contributed to ML/NLP research focused on mental health
                analysis&mdash;I bring a unique perspective to the ethics of AI in technical writing.
                I understand both the remarkable capabilities of these tools and their fundamental
                limitations.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                My Position on AI-Assisted Writing
              </h3>

              <p>
                I believe generative AI tools like ChatGPT and Claude can be valuable aids in the
                writing process when used thoughtfully and transparently. They excel at certain
                tasks: brainstorming ideas, suggesting alternative phrasings, checking grammar, and
                helping overcome writer&apos;s block. However, I firmly believe they should augment
                human thinking, not replace it.
              </p>

              <p>
                The key distinction I draw is between AI as a <em>tool</em> versus AI as an
                <em>author</em>. Using AI to help refine your own ideas is similar to using a
                thesaurus or asking a colleague for feedback. Having AI generate content that you
                then claim as your original thought crosses an ethical line.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                Context of Computer Science
              </h3>

              <p>
                In computer science, technical writing carries particular weight. Documentation
                determines whether software is usable. Research papers must be precise enough for
                others to reproduce results. Code comments guide future developers (including your
                future self). The stakes for accuracy are high&mdash;incorrect technical documentation
                can lead to security vulnerabilities, system failures, or wasted engineering hours.
              </p>

              <p>
                This context shapes my ethical stance significantly. AI language models can
                &quot;hallucinate&quot;&mdash;generating plausible-sounding but factually incorrect
                information. In a field where a misplaced semicolon breaks programs and incorrect
                API documentation wastes days of debugging, we cannot afford to blindly trust
                AI-generated technical content. Human expertise and verification remain essential.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                Principles for Ethical AI Use
              </h3>

              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Transparency:</strong> If AI significantly contributed to a piece of
                  writing, that should be disclosed. In academic and professional contexts, honesty
                  about our tools and methods is foundational to trust.
                </li>
                <li>
                  <strong>Human Oversight:</strong> Every AI-assisted output should be critically
                  reviewed by a human who understands the subject matter. The human remains
                  responsible for accuracy and appropriateness.
                </li>
                <li>
                  <strong>Preserving Original Thinking:</strong> The core ideas, arguments, and
                  analysis should originate from human thought. AI can help express ideas more
                  clearly, but shouldn&apos;t generate the ideas themselves for work claimed as
                  one&apos;s own.
                </li>
                <li>
                  <strong>Verification:</strong> Any factual claims, technical specifications, or
                  code examples suggested by AI must be independently verified. This is
                  non-negotiable in technical fields.
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                Perspective from My Background
              </h3>

              <p>
                Coming from Nepal and now studying in the United States, I&apos;ve navigated
                multiple educational systems and communication styles. This experience taught me
                that clear communication isn&apos;t just about language proficiency&mdash;it&apos;s
                about understanding context, audience, and purpose. AI tools can help bridge language
                gaps for non-native speakers like myself, which I see as a legitimate and even
                democratizing use. However, relying on AI to think for us&mdash;rather than to help
                us express our thinking&mdash;undermines the very purpose of education and
                professional development.
              </p>

              <p>
                My experience in ML research also gives me insight into how these models work. They
                are statistical pattern matchers trained on existing text&mdash;they don&apos;t
                truly &quot;understand&quot; the way humans do. They can produce remarkably
                coherent text while being completely wrong about facts or logic. Understanding
                this technical reality reinforces my belief that human judgment must remain central.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                Looking Forward
              </h3>

              <p>
                AI writing tools will only become more powerful and prevalent. Rather than resist
                this change, I believe we should develop clear ethical frameworks and best practices
                for their use. In my future career&mdash;whether in software development, research,
                or technical leadership&mdash;I am committed to using AI tools responsibly,
                maintaining transparency about their use, and always ensuring that human expertise,
                judgment, and accountability remain at the center of technical communication.
              </p>

              <p>
                The goal isn&apos;t to avoid AI, but to use it in ways that enhance rather than
                diminish our humanity, creativity, and integrity as communicators.
              </p>
            </div>
          </section>

          {/* Section 3: Key Takeaways */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Takeaways
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Greatest Strength Developed
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Audience awareness&mdash;the ability to tailor complex technical information for
                  different readers, from fellow researchers to non-technical stakeholders.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Area for Continued Growth
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Visual communication&mdash;learning to better integrate diagrams, charts, and
                  visual aids into technical documentation and presentations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Most Valuable Assignment
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  The business report&mdash;it challenged me to research deeply, organize complex
                  findings, and present actionable recommendations professionally.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  AI Ethics Commitment
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I will use AI as a tool to enhance my communication, never as a replacement for
                  my own thinking, and always with transparency and verification.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
