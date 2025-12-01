import ArtifactPage from '@/components/ArtifactPage';

export default function ProposalPage() {
  return (
    <ArtifactPage
      title="Group Proposal"
      description="A project proposal I worked on with my team to pitch an idea."
      pdfPath="/artifacts/proposal.pdf"
      reflectionPoints={[
        "Learned how to combine different writing styles into one cohesive document",
        "Practiced dividing work fairly and meeting deadlines as a team",
        "Got better at giving and receiving feedback without taking it personally",
        "Understood that proposals need to anticipate questions readers might have",
      ]}
    />
  );
}
