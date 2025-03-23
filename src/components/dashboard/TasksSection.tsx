
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TaskCard from '@/components/tasks/TaskCard';
import { tasks } from '@/data/mockData';

const TasksSection = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Your Tasks</h2>
        <Button variant="link" asChild>
          <Link to="/tasks" className="flex items-center text-accent">
            View all tasks
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </TabsContent>
        
        <TabsContent value="today">
          <Card className="p-6 text-center">
            <p className="text-sm text-muted-foreground">No tasks due today.</p>
          </Card>
        </TabsContent>
        
        <TabsContent value="upcoming">
          <Card className="p-6 text-center">
            <p className="text-sm text-muted-foreground">No upcoming tasks.</p>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed">
          <Card className="p-6 text-center">
            <p className="text-sm text-muted-foreground">No completed tasks.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TasksSection;
