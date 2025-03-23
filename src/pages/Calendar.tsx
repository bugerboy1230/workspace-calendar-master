
import React, { useState } from 'react';
import { ChevronDown, Filter, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CalendarView from '@/components/calendar/CalendarView';

// Mock data
const events = [
  {
    id: '1',
    title: 'Team Meeting',
    date: new Date(2023, 9, 16, 10, 0),
    color: '#63b3ed',
  },
  {
    id: '2',
    title: 'Product Demo',
    date: new Date(2023, 9, 17, 14, 0),
    color: '#fc8181',
  },
  {
    id: '3',
    title: 'Design Review',
    date: new Date(2023, 9, 18, 11, 0),
    color: '#68d391',
  },
  {
    id: '4',
    title: 'Client Call',
    date: new Date(2023, 9, 19, 15, 30),
    color: '#f6ad55',
  },
];

const CalendarPage = () => {
  const [date, setDate] = useState<Date>(new Date());
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">View and manage your schedule</p>
        </div>
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4" />
          Add Event
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="md:w-64 w-full">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <span>{format(date, 'MMMM yyyy')}</span>
                <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
          
          <div className="mt-4 space-y-1">
            <h3 className="text-sm font-medium mb-2">Calendars</h3>
            <div className="space-y-1">
              <div className="flex items-center">
                <input type="checkbox" id="cal-1" className="mr-2" defaultChecked />
                <label htmlFor="cal-1" className="text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                  Work
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="cal-2" className="mr-2" defaultChecked />
                <label htmlFor="cal-2" className="text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>
                  Personal
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="cal-3" className="mr-2" defaultChecked />
                <label htmlFor="cal-3" className="text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  Meetings
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="cal-4" className="mr-2" defaultChecked />
                <label htmlFor="cal-4" className="text-sm flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                  Deadlines
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Upcoming Events</h3>
            <div className="space-y-2">
              {events.slice(0, 3).map((event) => (
                <div 
                  key={event.id} 
                  className="p-2 border rounded-md text-sm bg-background hover:bg-muted/50 cursor-pointer"
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {format(event.date, 'EEE, MMM d • h:mm a')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="bg-card p-4 rounded-md border">
            <Tabs defaultValue="week">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Events</SelectItem>
                      <SelectItem value="meetings">Meetings</SelectItem>
                      <SelectItem value="deadlines">Deadlines</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <TabsContent value="day" className="mt-0">
                <div className="h-[500px] flex items-center justify-center bg-muted/20 rounded-md">
                  <span className="text-muted-foreground">Day view coming soon</span>
                </div>
              </TabsContent>
              
              <TabsContent value="week" className="mt-0">
                <CalendarView events={events} />
              </TabsContent>
              
              <TabsContent value="month" className="mt-0">
                <div className="h-[500px] flex items-center justify-center bg-muted/20 rounded-md">
                  <span className="text-muted-foreground">Month view coming soon</span>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
