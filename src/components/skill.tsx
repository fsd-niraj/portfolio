import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "java",
  "swift",
  "python",
  "javascript",
  "dart",
  "react",
  "nodedotjs",
  "android",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "express",
  "jest",
  "docker",
  "git",
  "github",
  "androidstudio",
  "figma",
  "mongodb",
  "socket",
  "apache",
  "zsh",
  "postman",
  "sqlite",
  "sentry",
  "redis",
];

export function IconCloudSkills() {
  return (
    <div className="size-full max-w-lg overflow-hidden m-auto">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
