import ArtifactPage from '@/components/ArtifactPage';

export default function ResumePage() {
  return (
    <ArtifactPage
      title="Resume"
      description="My resume showing my education, skills, and experience."
      embedUrl="https://docs.google.com/document/d/1fr602n8cNmPVwyvn7CHpZwsp_CtAJoE0TTAQrtOJY8M/preview"
      reflectionPoints={[
        "Learned to use strong action verbs instead of passive language",
        "Practiced fitting everything important onto one page without it feeling cramped",
        "Got feedback on what employers actually look for when scanning resumes",
        "Realized my resume needs to change depending on what job I am applying for",
      ]}
    />
  );
}
