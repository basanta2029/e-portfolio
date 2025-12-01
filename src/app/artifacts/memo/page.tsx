import ArtifactPage from '@/components/ArtifactPage';

export default function MemoPage() {
  return (
    <ArtifactPage
      title="Professional Memo"
      description="A workplace memo I wrote to practice clear, direct communication."
      pdfPath="/artifacts/memo.pdf"
      reflectionPoints={[
        "Learned that memos need to get to the point quickly since busy people skim them",
        "Practiced using headers and bullet points to make information easy to find",
        "Got better at writing for a specific audience instead of just writing generally",
        "Understood why formatting matters just as much as the words themselves",
      ]}
    />
  );
}
