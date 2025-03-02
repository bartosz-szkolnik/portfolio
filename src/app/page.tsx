import { AboutMeSection } from '@sections/about-me';
import { ExperienceSection } from '@sections/experience';
import { Footer } from '@components/footer';
import { ProjectsSection } from '@sections/projects';
import { RecentPosts } from '@sections/recent-posts';
import { Sidebar } from '@sections/sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-screen-lg px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <aside className="relative md:col-span-1">
            <Sidebar />
          </aside>
          <main className="md:col-span-2">
            <AboutMeSection />
            <ProjectsSection />
            {false && <RecentPosts />}
            <ExperienceSection />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
