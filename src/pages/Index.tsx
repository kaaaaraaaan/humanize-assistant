
import { ContentHumanizer } from "@/components/ContentHumanizer";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
