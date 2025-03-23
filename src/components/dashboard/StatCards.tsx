
import React from 'react';
import { Clock, Star, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const StatCards = () => {
  return (
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
  );
};

export default StatCards;
