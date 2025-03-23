
import React from 'react';
import { Filter, Plus, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TaskList from '@/components/tasks/TaskList';

// Mock data
const todoTasks = [
  {
    id: '1',
    title: 'Research competitors',
    description: 'Analyze top competitors in the market',
    status: 'todo',
    priority: 'medium',
    dueDate: new Date(2023, 9, 20),
  },
  {
    id: '2',
    title: 'Create wireframes',
    status: 'todo',
    priority: 'high',
    dueDate: new Date(2023, 9, 18),
    assignee: { id: '2', name: 'Sarah Chen' },
  },
  {
    id: '3',
    title: 'Review documentation',
    status: 'todo',
    priority: 'low',
    dueDate: new Date(2023, 9, 25),
  },
];

const inProgressTasks = [
  {
    id: '4',
    title: 'Design system components',
    description: 'Create reusable UI components for the design system',
    status: 'in-progress',
    priority: 'high',
    dueDate: new Date(2023, 9, 19),
    assignee: { id: '1', name: 'Alex Kim' },
    comments: 5,
  },
  {
    id: '5',
    title: 'API integration',
    status: 'in-progress',
    priority: 'medium',
    dueDate: new Date(2023, 9, 21),
    assignee: { id: '3', name: 'David Park' },
    attachments: 2,
  },
];

const reviewTasks = [
  {
    id: '6',
    title: 'User testing results',
    description: 'Review user testing feedback and prioritize changes',
    status: 'review',
    priority: 'high',
    dueDate: new Date(2023, 9, 17),
    assignee: { id: '4', name: 'Linda Lee' },
    comments: 3,
  },
];

const doneTasks = [
  {
    id: '7',
    title: 'Project kickoff meeting',
    status: 'done',
    priority: 'medium',
    dueDate: new Date(2023, 9, 15),
    assignee: { id: '1', name: 'Alex Kim' },
  },
  {
    id: '8',
    title: 'Initial requirements',
    status: 'done',
    priority: 'high',
    dueDate: new Date(2023, 9, 12),
    assignee: { id: '2', name: 'Sarah Chen' },
    attachments: 1,
    comments: 2,
  },
];

const Tasks = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">Manage and organize your tasks</p>
        </div>
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search tasks..." 
            className="pl-9 bg-muted/50"
          />
        </div>
        
        <div className="flex items-center gap-2 ml-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tasks</SelectItem>
              <SelectItem value="my-tasks">My Tasks</SelectItem>
              <SelectItem value="unassigned">Unassigned</SelectItem>
              <SelectItem value="due-soon">Due Soon</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4 min-w-max">
          <TaskList
            title="To Do"
            count={todoTasks.length}
            status="todo"
            tasks={todoTasks}
          />
          
          <TaskList
            title="In Progress"
            count={inProgressTasks.length}
            status="in-progress"
            tasks={inProgressTasks}
          />
          
          <TaskList
            title="In Review"
            count={reviewTasks.length}
            status="review"
            tasks={reviewTasks}
          />
          
          <TaskList
            title="Done"
            count={doneTasks.length}
            status="done"
            tasks={doneTasks}
          />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
