import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { LinkPreview } from "./link-preview";

interface AboutUsCardProps {
  name: string;
  title: string;
  description: string;
  githubUrl: string;
}

export function AboutUsCard({
  name,
  title,
  description,
  githubUrl,
}: AboutUsCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <LinkPreview url={githubUrl} width={300} height={200}>
          <h3 className="text-2xl font-bold hover:underline cursor-pointer">
            {name}
          </h3>
        </LinkPreview>
        <p className="text-sm text-gray-600">{title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
