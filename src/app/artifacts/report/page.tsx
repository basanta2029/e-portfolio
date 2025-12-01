import ArtifactPage from '@/components/ArtifactPage';

export default function ReportPage() {
  return (
    <ArtifactPage
      title="Business Report"
      description="A detailed report showing research, analysis, and recommendations."
      pdfPath="/artifacts/report.pdf"
      reflectionPoints={[
        "Learned how to organize a lot of information in a way that makes sense",
        "Practiced supporting my points with actual data instead of just opinions",
        "Got better at writing executive summaries that capture the main ideas",
        "Understood that visuals like charts can explain things faster than paragraphs",
      ]}
    />
  );
}
