
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Clock, MoreHorizontal, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

type WorkspaceCardProps = {
  id: string;
  title: string;
  description: string;
  progress: number;
  dueDate: string;
  members: { id: string; name: string; avatar?: string }[];
  category: string;
  categoryColor: string;
};

const WorkspaceCard = ({
  id,
  title,
  description,
  progress,
  dueDate,
  members,
  category,
  categoryColor,
}: WorkspaceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md animate-scale-in">
      <CardHeader className="p-4 pb-0 flex flex-row justify-between items-start">
        <div>
          <Badge 
            className="mb-2"
            style={{ backgroundColor: categoryColor, color: '#fff' }}
          >
            {category}
          </Badge>
          <Link to={`/projects/${id}`}>
            <h3 className="text-lg font-medium hover:text-accent transition-colors">{title}</h3>
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[180px]">
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit workspace</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex -space-x-2">
          {members.slice(0, 3).map((member) => (
            <Avatar key={member.id} className="h-7 w-7 border-2 border-background">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback className="text-xs">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          ))}
          {members.length > 3 && (
            <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-xs font-medium border-2 border-background">
              +{members.length - 3}
            </div>
          )}
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5 mr-1" />
          <span>{dueDate}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkspaceCard;
