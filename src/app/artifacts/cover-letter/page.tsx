import ArtifactPage from '@/components/ArtifactPage';

export default function CoverLetterPage() {
  return (
    <ArtifactPage
      title="Cover Letter"
      description="A cover letter connecting my experience to what an employer needs."
      embedUrl="https://docs.google.com/document/d/1q6ufaU7GveblefTxWWqLXauzIjiiMxZmjCnjcDbhwOA/preview"
      reflectionPoints={[
        "Learned that cover letters should tell a story, not just repeat the resume",
        "Practiced connecting my specific experiences to what the job posting asked for",
        "Got better at showing enthusiasm without sounding fake or over the top",
        "Understood that each cover letter needs to be customized for the position",
      ]}
    />
  );
}
