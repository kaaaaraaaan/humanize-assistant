
import { ContentHumanizer } from "@/components/ContentHumanizer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12 px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Content Humanizer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your text into natural, human-like content with the power of AI
          </p>
        </div>
        <ContentHumanizer />
      </div>
    </div>
  );
};

export default Index;
