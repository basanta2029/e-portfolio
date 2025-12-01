import ArtifactPage from '@/components/ArtifactPage';

export default function PresentationPage() {
  return (
    <ArtifactPage
      title="Homework Presentation"
      description="A professional presentation demonstrating visual communication skills and effective information delivery."
      downloadPath="/artifacts/presentation.pptx"
      downloadLabel="Download Presentation (.pptx)"
      reflectionPoints={[
        "Created visually engaging slides that support the spoken message",
        "Learned principles of effective slide design and visual hierarchy",
        "Practiced distilling complex information into digestible visual formats",
        "Developed presentation skills for professional communication",
      ]}
    />
  );
}
