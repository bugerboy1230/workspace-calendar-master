
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Plus, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import WorkspaceCard from '@/components/workspace/WorkspaceCard';
import TaskCard from '@/components/tasks/TaskCard';

// Mock data
const projects = [
  {
    id: '1',
    title: 'Website Redesign',
    description: 'Redesign and rebuild the company website with a focus on user experience and performance.',
    progress: 75,
    dueDate: 'Oct 15',
    members: [
      { id: '1', name: 'Alex Kim' },
      { id: '2', name: 'Sarah Chen' },
      { id: '3', name: 'David Park' },
      { id: '4', name: 'Linda Lee' },
    ],
    category: 'Design',
    categoryColor: '#63b3ed',
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Create a new mobile application for both iOS and Android platforms.',
    progress: 45,
    dueDate: 'Nov 30',
    members: [
      { id: '1', name: 'Alex Kim' },
      { id: '2', name: 'Sarah Chen' },
    ],
    category: 'Development',
    categoryColor: '#68d391',
  },
];

const tasks = [
  {
    id: '1',
    title: 'Review design mockups',
    description: 'Review the latest design mockups and provide feedback to the design team.',
    status: 'in-progress' as const,
    priority: 'high' as const,
    dueDate: new Date(2023, 9, 15),
    assignee: { id: '1', name: 'Alex Kim' },
    comments: 3,
  },
  {
    id: '2',
    title: 'Fix navigation bug',
    status: 'todo' as const,
    priority: 'medium' as const,
    dueDate: new Date(2023, 9, 16),
  },
  {
    id: '3',
    title: 'Complete homepage redesign',
    status: 'done' as const,
    priority: 'high' as const,
    dueDate: new Date(2023, 9, 12),
    assignee: { id: '2', name: 'Sarah Chen' },
    attachments: 2,
  },
];

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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              Active Tasks
            </CardTitle>
            <CardDescription>Tasks requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">12</div>
            <div className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">↑ 10%</span> from last week
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Star className="h-4 w-4 text-muted-foreground" />
              Project Completion
            </CardTitle>
            <CardDescription>Overall progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2 mb-2">
              <div className="text-3xl font-bold">68%</div>
              <div className="text-xs text-muted-foreground mb-1">
                <span className="text-green-500 font-medium">↑ 5%</span> from last month
              </div>
            </div>
            <Progress value={68} className="h-1.5" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              Team Members
            </CardTitle>
            <CardDescription>Active contributors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>LL</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="outline" className="h-10 w-10 rounded-full">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Current Projects</h2>
          <Button variant="link" asChild>
            <Link to="/projects" className="flex items-center text-accent">
              View all projects
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
    </div>
  );
};

export default Index;
