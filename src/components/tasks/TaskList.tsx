
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TaskCard from './TaskCard';

type TaskListProps = {
  title: string;
  count: number;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  tasks: any[];
  onTaskClick?: (id: string) => void;
};

const statusColors = {
  'todo': 'border-slate-200',
  'in-progress': 'border-blue-200',
  'review': 'border-amber-200',
  'done': 'border-green-200',
};

const TaskList = ({ title, count, status, tasks, onTaskClick }: TaskListProps) => {
  return (
    <div className="flex flex-col h-full min-w-[300px] max-w-[300px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {count}
          </span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className={`flex-1 p-2 rounded-md border-t-2 ${statusColors[status]} bg-background/50 overflow-hidden`}>
        <div className="h-full overflow-y-auto pr-1 space-y-2">
          {tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              {...task} 
              onClick={onTaskClick}
            />
          ))}
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground p-3 h-auto mb-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add new task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
