import { Sidebar } from '@components/sidebar';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
