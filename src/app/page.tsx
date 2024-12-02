import { AboutMeSection } from '@components/about-me';
import { Sidebar } from '@components/sidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-screen-lg px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Sidebar />
          <main className="md:col-span-2">
            <AboutMeSection />
          </main>
        </div>
      </div>
    </div>
  );
}
