import { ProfileSection } from './profile';
import { SkillsSection } from './skills';

export function Sidebar() {
  return (
    <aside className="md:col-span-1">
      <ProfileSection />
      <SkillsSection />
    </aside>
  );
}
