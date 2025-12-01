import ArtifactPage from '@/components/ArtifactPage';

export default function ReportPage() {
  return (
    <ArtifactPage
      title="Business Report"
      description="A comprehensive business report demonstrating analytical thinking, research skills, and professional report writing."
      pdfPath="/artifacts/report.pdf"
      // Or use embedUrl for Google Docs: embedUrl="https://docs.google.com/document/d/YOUR_DOC_ID/preview"
      reflectionPoints={[
        "Conducted thorough research and synthesized information from multiple sources",
        "Learned to organize complex information in a clear, logical structure",
        "Developed skills in data analysis and presenting findings professionally",
        "Applied visual elements effectively to enhance understanding",
      ]}
    />
  );
}
