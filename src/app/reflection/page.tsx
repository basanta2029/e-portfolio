export default function Reflection() {
  return (
    <div className="min-h-screen py-16 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            My Reflection
          </h1>
          <p className="text-xl text-slate-600">
            What I learned about technical writing and my thoughts on AI
          </p>
        </div>

        {/* Main Content */}
        <article className="space-y-8">
          {/* Section 1: Growth */}
          <section className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              How I Grew as a Technical Communicator
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                Before this class, I thought of writing as something separate from my computer science
                work. I could code, and I could write, but I did not see them as connected. This course
                changed that. I now understand that being able to explain technical concepts clearly is
                just as important as being able to build them.
              </p>

              <p>
                Working as a TA for Data Structures and Algorithms, I already knew that explaining
                things to students was hard. But this class gave me actual tools to do it better. I
                learned to think about who I am writing for before I start writing. I learned that the
                structure of a document matters as much as what it says. And I learned that good
                formatting is not about making things look pretty, it is about making them easier to read.
              </p>

              <p>
                The assignments in this portfolio show how I improved:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>The memo</strong> taught me that professional communication needs to be direct.
                  Busy people skim, so I have to put the most important information first and keep
                  everything short.
                </li>
                <li>
                  <strong>The resume and cover letter</strong> made me think about how to present myself
                  to someone who does not know me. Every word counts when you only have one page.
                </li>
                <li>
                  <strong>The group proposal</strong> was challenging because I had to work with others
                  and combine our different writing styles into something that read like one person
                  wrote it. That took a lot of editing and compromise.
                </li>
                <li>
                  <strong>The business report</strong> pushed me to organize a lot of information in a
                  way that makes sense. I had to support my points with evidence, not just opinions.
                </li>
              </ul>

              <p>
                I will use these skills throughout my career. Whether I am writing documentation for
                code, sending emails to my team, or presenting research findings, the ability to
                communicate clearly will make my work more useful to others. Good ideas are not enough
                if nobody understands them.
              </p>
            </div>
          </section>

          {/* Section 2: AI Ethics */}
          <section className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              My Take on AI in Technical Writing
            </h2>

            <div className="space-y-4 text-slate-700">
              <p>
                I have actually worked with machine learning and natural language processing in my
                research, so I understand how these AI writing tools work under the hood. They are
                impressive, but they are not magic. They predict what words should come next based on
                patterns they learned from huge amounts of text. They do not actually understand what
                they are writing.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                What I Think AI Is Good For
              </h3>

              <p>
                I think AI tools can help with writing when used carefully. They are useful for
                brainstorming ideas when you are stuck, checking grammar, or suggesting different ways
                to phrase something. If English is not your first language, they can help you sound more
                natural. I have used them myself to help polish my writing.
              </p>

              <p>
                The problem comes when people use AI to do the thinking for them instead of just helping
                them express their own thinking. There is a difference between using a tool and letting
                a tool replace you.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                Why This Matters in Computer Science
              </h3>

              <p>
                In my field, technical writing has real consequences. If I write bad documentation for
                my code, other developers will waste hours trying to figure out what I meant. If a
                research paper is unclear, nobody can reproduce the results. If instructions are wrong,
                systems can break or even create security problems.
              </p>

              <p>
                AI writing tools sometimes make things up that sound correct but are not. They
                &quot;hallucinate&quot; facts. In computer science, you cannot afford that. A small error in
                documentation can cause big problems downstream. So even if AI helps me write faster, I
                still have to verify everything myself.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                My Rules for Using AI
              </h3>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Be honest about it.</strong> If AI helped me write something significant, I
                  should say so. Hiding it feels dishonest.
                </li>
                <li>
                  <strong>Always check the output.</strong> AI makes mistakes. I need to read everything
                  it produces and verify any facts before using them.
                </li>
                <li>
                  <strong>Keep my own voice.</strong> The ideas should be mine. AI can help me say them
                  better, but it should not be generating my thoughts.
                </li>
                <li>
                  <strong>Use it as a tool, not a crutch.</strong> If I stop being able to write without
                  AI, I have lost something important.
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-slate-800 mt-6">
                Looking Ahead
              </h3>

              <p>
                AI is going to keep getting better, and more people are going to use it for writing.
                That is fine. But I think the people who will stand out are the ones who can actually
                think clearly and communicate well, with or without AI assistance. The tool does not
                make you good at writing. Understanding your audience, organizing your ideas, and
                saying things clearly does. Those are skills I want to keep developing, and this course
                helped me do that.
              </p>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              The Short Version
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 border border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Biggest Improvement
                </h3>
                <p className="text-slate-600 text-sm">
                  Learning to think about my audience before I start writing, instead of just writing
                  and hoping people understand.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Still Working On
                </h3>
                <p className="text-slate-600 text-sm">
                  Using visuals better. Charts and diagrams can explain things faster than paragraphs,
                  but I default to text too often.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Most Useful Assignment
                </h3>
                <p className="text-slate-600 text-sm">
                  The business report, because it forced me to organize complex information and support
                  my claims with actual evidence.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-2">
                  My AI Approach
                </h3>
                <p className="text-slate-600 text-sm">
                  Use it as a helper, not a replacement. Be honest about when I use it. Always verify
                  what it produces.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
