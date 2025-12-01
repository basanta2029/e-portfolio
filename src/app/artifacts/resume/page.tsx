import ArtifactPage from '@/components/ArtifactPage';

export default function ResumePage() {
  return (
    <ArtifactPage
      title="Professional Resume"
      description="A professionally formatted resume highlighting education, skills, experience, and achievements."
      embedUrl="https://docs.google.com/document/d/1fr602n8cNmPVwyvn7CHpZwsp_CtAJoE0TTAQrtOJY8M/preview"
      reflectionPoints={[
        "Created a visually appealing and ATS-friendly resume format",
        "Learned to quantify achievements and use action verbs effectively",
        "Developed skills in presenting qualifications concisely",
        "Tailored content to highlight relevant skills for target positions",
      ]}
    />
  );
}
