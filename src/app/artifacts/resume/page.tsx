import ArtifactPage from '@/components/ArtifactPage';

export default function ResumePage() {
  return (
    <ArtifactPage
      title="Professional Resume"
      description="A professionally formatted resume highlighting education, skills, experience, and achievements."
      pdfPath="/artifacts/resume.pdf"
      // Or use embedUrl for Google Docs: embedUrl="https://docs.google.com/document/d/YOUR_DOC_ID/preview"
      reflectionPoints={[
        "Created a visually appealing and ATS-friendly resume format",
        "Learned to quantify achievements and use action verbs effectively",
        "Developed skills in presenting qualifications concisely",
        "Tailored content to highlight relevant skills for target positions",
      ]}
    />
  );
}
