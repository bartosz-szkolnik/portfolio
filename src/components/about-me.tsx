import { Card, CardContent, CardHeader, CardTitle } from './common/card';

export function AboutMeSection() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">I am a software enginner...</p>
      </CardContent>
    </Card>
  );
}
