import ArtifactPage from '@/components/ArtifactPage';

export default function PresentationPage() {
  return (
    <ArtifactPage
      title="Homework Presentation"
      description="A professional presentation showing how I communicate complex ideas visually."
      embedUrl="https://docs.google.com/presentation/d/1EiU4FRstR8ZwbVedPlzCYscRW8QyYdMAXoZKzVNvNfE/embed?start=false&loop=false&delayms=3000"
      reflectionPoints={[
        "Built slides that actually support the message instead of overwhelming it",
        "Learned that less text and more visuals keeps the audience engaged",
        "Got better at breaking down technical topics into simple, clear points",
        "Practiced speaking confidently while letting the slides complement my words",
      ]}
    />
  );
}
