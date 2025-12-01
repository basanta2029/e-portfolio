import ArtifactPage from '@/components/ArtifactPage';

export default function ProposalPage() {
  return (
    <ArtifactPage
      title="Group Proposal"
      description="A collaborative project proposal showcasing teamwork, planning, and professional proposal writing skills."
      pdfPath="/artifacts/proposal.pdf"
      // Or use embedUrl for Google Docs: embedUrl="https://docs.google.com/document/d/YOUR_DOC_ID/preview"
      reflectionPoints={[
        "Collaborated effectively with team members to develop a cohesive proposal",
        "Learned to structure proposals with clear objectives and methodology",
        "Practiced justifying project needs and anticipated outcomes",
        "Developed skills in project planning and timeline development",
      ]}
    />
  );
}
