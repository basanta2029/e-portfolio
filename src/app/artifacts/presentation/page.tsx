import ArtifactPage from '@/components/ArtifactPage';

export default function PresentationPage() {
  return (
    <ArtifactPage
      title="Homework Presentation"
      description="A professional presentation demonstrating visual communication skills and effective information delivery."
      pdfPath="/artifacts/presentation.pdf"
      // For Google Slides, use: embedUrl="https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID/embed"
      reflectionPoints={[
        "Created visually engaging slides that support the spoken message",
        "Learned principles of effective slide design and visual hierarchy",
        "Practiced distilling complex information into digestible visual formats",
        "Developed presentation skills for professional communication",
      ]}
    />
  );
}
