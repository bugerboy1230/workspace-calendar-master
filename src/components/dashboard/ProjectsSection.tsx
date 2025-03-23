
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkspaceCard from '@/components/workspace/WorkspaceCard';
import { projects } from '@/data/mockData';

const ProjectsSection = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">현재 프로젝트</h2>
        <Button variant="link" asChild>
          <Link to="/projects" className="flex items-center text-accent">
            모든 프로젝트 보기
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <WorkspaceCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
