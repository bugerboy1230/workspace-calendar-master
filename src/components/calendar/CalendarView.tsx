
import React, { useState } from 'react';
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Event = {
  id: string;
  title: string;
  date: Date;
  color: string;
};

type CalendarViewProps = {
  events: Event[];
  onEventClick?: (event: Event) => void;
};

const CalendarView = ({ events, onEventClick }: CalendarViewProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endDate = endOfWeek(currentDate, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  
  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(day, event.date));
  };

  const navigateToPreviousWeek = () => {
    setCurrentDate(addDays(currentDate, -7));
  };

  const navigateToNextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">
            {format(startDate, 'MMMM d')} - {format(endDate, 'MMMM d, yyyy')}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={navigateToPreviousWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={() => setCurrentDate(new Date())}>
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={navigateToNextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-4">
        {days.map((day, i) => {
          const isToday = isSameDay(day, new Date());
          const dayEvents = getEventsForDay(day);
          
          return (
            <Card 
              key={i} 
              className={cn(
                "h-40 overflow-hidden bg-background/50", 
                isToday ? "border-accent ring-1 ring-accent" : ""
              )}
            >
              <div className="flex flex-col h-full">
                <div className={cn(
                  "text-center py-1 font-medium text-sm",
                  isToday ? "bg-accent text-accent-foreground" : "bg-muted/50 text-muted-foreground"
                )}>
                  <div>{format(day, 'EEE')}</div>
                  <div>{format(day, 'd')}</div>
                </div>
                
                <div className="flex-1 p-1 overflow-y-auto">
                  {dayEvents.map(event => (
                    <div 
                      key={event.id}
                      className="mb-1 text-xs cursor-pointer"
                      onClick={() => onEventClick?.(event)}
                    >
                      <Badge 
                        className="w-full justify-start py-1 px-2 font-normal"
                        style={{ backgroundColor: event.color }}
                      >
                        {event.title}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
