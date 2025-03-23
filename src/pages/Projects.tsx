
import React from 'react';
import { FilePlus, Filter, LayoutGrid, List, Plus, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import WorkspaceCard from '@/components/workspace/WorkspaceCard';

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
  {
    id: '3',
    title: 'Brand Identity Guidelines',
    description: 'Develop comprehensive brand guidelines including logo usage, color palette, typography, and imagery.',
    progress: 90,
    dueDate: 'Sep 30',
    members: [
      { id: '2', name: 'Sarah Chen' },
      { id: '4', name: 'Linda Lee' },
    ],
    category: 'Marketing',
    categoryColor: '#f6ad55',
  },
  {
    id: '4',
    title: 'Product Redesign',
    description: 'Redesign core product features to improve usability and customer satisfaction.',
    progress: 30,
    dueDate: 'Dec 15',
    members: [
      { id: '1', name: 'Alex Kim' },
      { id: '3', name: 'David Park' },
      { id: '5', name: 'Michael Wong' },
    ],
    category: 'Product',
    categoryColor: '#fc8181',
  },
  {
    id: '5',
    title: 'Marketing Campaign',
    description: 'Plan and execute Q4 marketing campaign across digital and traditional channels.',
    progress: 15,
    dueDate: 'Jan 10',
    members: [
      { id: '4', name: 'Linda Lee' },
      { id: '6', name: 'Jennifer Smith' },
    ],
    category: 'Marketing',
    categoryColor: '#f6ad55',
  },
  {
    id: '6',
    title: 'Customer Portal',
    description: 'Build a self-service customer portal for account management and support.',
    progress: 60,
    dueDate: 'Oct 25',
    members: [
      { id: '1', name: 'Alex Kim' },
      { id: '3', name: 'David Park' },
      { id: '7', name: 'Robert Johnson' },
    ],
    category: 'Development',
    categoryColor: '#68d391',
  },
];

const Projects = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage and track all your projects</p>
        </div>
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4" />
          Create Project
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search projects..." 
            className="pl-9 bg-muted/50"
          />
        </div>
        
        <div className="flex items-center gap-2 ml-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="product">Product</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          
          <Tabs defaultValue="grid" className="w-auto">
            <TabsList className="h-9">
              <TabsTrigger value="grid" className="px-3">
                <LayoutGrid className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="list" className="px-3">
                <List className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <WorkspaceCard key={project.id} {...project} />
        ))}
        
        <div className="border border-dashed rounded-lg flex flex-col items-center justify-center p-6 min-h-[220px] bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <FilePlus className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-1">Create a new project</h3>
          <p className="text-sm text-muted-foreground text-center">
            Start tracking a new initiative or workstream
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
