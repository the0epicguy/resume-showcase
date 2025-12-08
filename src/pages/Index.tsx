import { CursorBlobs } from '@/components/CursorBlobs';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { TechSection } from '@/components/TechSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative">
      <CursorBlobs />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AchievementsSection />
      <TechSection />
      <Footer />

      {/* Screen reader accessibility */}
      <div className="sr-only">
        This page is a one-page resume with stacked sections: hero, projects, achievements, tech.
        Use keyboard navigation and anchors to jump sections.
      </div>
    </div>
  );
};

export default Index;
