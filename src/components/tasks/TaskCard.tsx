
import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Clock, 
  MessageSquare, 
  MoreHorizontal, 
  PaperclipIcon 
} from 'lucide-react';
import { format } from 'date-fns';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

type PriorityType = 'low' | 'medium' | 'high';

type StatusType = 'todo' | 'in-progress' | 'review' | 'done';

type TaskCardProps = {
  id: string;
  title: string;
  description?: string;
  status: StatusType;
  priority: PriorityType;
  dueDate?: Date;
  assignee?: {
    id: string;
    name: string;
    avatar?: string;
  };
  attachments?: number;
  comments?: number;
  onClick?: (id: string) => void;
};

const priorityColors = {
  low: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  high: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
};

const statusIcons = {
  'todo': Circle,
  'in-progress': Circle,
  'review': Circle,
  'done': CheckCircle2,
};

const TaskCard = ({
  id,
  title,
  description,
  status,
  priority,
  dueDate,
  assignee,
  attachments = 0,
  comments = 0,
  onClick,
}: TaskCardProps) => {
  const StatusIcon = statusIcons[status];
  const dueDateFormatted = dueDate ? format(dueDate, 'MMM d') : '';
  const isOverdue = dueDate && dueDate < new Date() && status !== 'done';
  
  return (
    <Card 
      className={cn(
        "task-card p-4 mb-3 cursor-pointer animate-slide-in",
        status === 'done' && "opacity-70"
      )}
      onClick={() => onClick?.(id)}
    >
      <div className="flex items-start gap-3">
        <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full p-0 -mt-0.5">
          <StatusIcon className={cn(
            "h-5 w-5", 
            status === 'done' 
              ? "text-green-500 fill-green-500" 
              : "text-muted-foreground"
          )} />
        </Button>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h4 className={cn(
              "font-medium text-sm mb-1 line-clamp-2", 
              status === 'done' && "line-through opacity-70"
            )}>
              {title}
            </h4>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 -mr-2">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[180px]">
                <DropdownMenuItem>Edit task</DropdownMenuItem>
                <DropdownMenuItem>Move to...</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {description && (
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{description}</p>
          )}
          
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className={cn("text-xs font-normal", priorityColors[priority])}>
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </Badge>
            
            {dueDate && (
              <Badge 
                variant="outline" 
                className={cn(
                  "text-xs font-normal flex items-center gap-1",
                  isOverdue && "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                )}
              >
                <Calendar className="h-3 w-3" />
                {dueDateFormatted}
              </Badge>
            )}
          </div>
          
          <div className="flex justify-between items-center mt-3">
            {assignee ? (
              <Avatar className="h-6 w-6">
                <AvatarImage src={assignee.avatar} alt={assignee.name} />
                <AvatarFallback className="text-xs">{assignee.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            ) : (
              <span></span>
            )}
            
            <div className="flex items-center gap-2 text-muted-foreground">
              {attachments > 0 && (
                <div className="flex items-center text-xs">
                  <PaperclipIcon className="h-3 w-3 mr-1" />
                  {attachments}
                </div>
              )}
              
              {comments > 0 && (
                <div className="flex items-center text-xs">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  {comments}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
