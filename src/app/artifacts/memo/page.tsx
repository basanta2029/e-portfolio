import ArtifactPage from '@/components/ArtifactPage';

export default function MemoPage() {
  return (
    <ArtifactPage
      title="Professional Memo"
      description="A formal memorandum demonstrating professional workplace communication skills and proper memo formatting."
      pdfPath="/artifacts/memo.pdf"
      // Or use embedUrl for Google Docs: embedUrl="https://docs.google.com/document/d/YOUR_DOC_ID/preview"
      reflectionPoints={[
        "Learned proper memo formatting and structure for workplace communication",
        "Developed skills in conveying information concisely and professionally",
        "Practiced audience awareness by tailoring language to the intended readers",
        "Applied principles of clarity and directness in professional writing",
      ]}
    />
  );
}
