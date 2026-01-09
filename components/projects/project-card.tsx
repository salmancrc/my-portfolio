import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";
import CustomTooltip from "@/components/ui/custom-tooltip";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg">
      <div className="relative w-full h-[200px] bg-muted flex items-center justify-center">
        <Image
          className="rounded-lg border border-border object-contain"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3">
        <h5 className="text-xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap justify-between items-center">
          <ChipContainer textArr={project.category} />
          {/* <Link href={`/projects/${project.id}`}>
            <Button variant={"default"} className="mt-2">
              Read more
              <Icons.chevronRight className="w-4 ml-1" />
            </Button>
          </Link> */}

          <div className="rounded-full bg-background p-1">
            {project.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-1 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`Open ${project.companyName} website in new tab`}
                >
                  <Icons.externalLink className="w-5 h-5" />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </div>
        {/* <Link href={`/projects/${project.id}`}>
          <Button variant={"default"} className="mt-2">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
