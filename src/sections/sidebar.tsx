import { ProfileSection } from './profile';
import { SkillsSection } from './skills';

export function Sidebar() {
  return (
    <div className="sticky top-8">
      <ProfileSection />
      <SkillsSection />
    </div>
  );
}
