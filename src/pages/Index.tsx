
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatCards from '@/components/dashboard/StatCards';
import ProjectsSection from '@/components/dashboard/ProjectsSection';
import TasksSection from '@/components/dashboard/TasksSection';

const Index = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Alex</p>
        </div>
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4" />
          Create New Project
        </Button>
      </div>
      
      <StatCards />
      <ProjectsSection />
      <TasksSection />
    </div>
  );
};

export default Index;
