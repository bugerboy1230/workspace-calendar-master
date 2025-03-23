
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Calendar, ClipboardList, FolderKanban, Home, Layers, Plus, Settings, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

type NavItemProps = {
  to: string;
  icon: React.ElementType;
  label: string;
  end?: boolean;
};

const NavItem = ({ to, icon: Icon, label, end }: NavItemProps) => {
  const location = useLocation();
  const isActive = end ? location.pathname === to : location.pathname.startsWith(to);
  
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <NavLink
            to={to}
            end={end}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 group w-full",
              isActive 
                ? "bg-accent text-accent-foreground" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        </TooltipTrigger>
        <TooltipContent side="right" className="hidden md:hidden">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Sidebar = () => {
  return (
    <div className="h-screen pt-16 fixed left-0 top-0 w-64 border-r border-border bg-background/80 backdrop-blur-md z-40">
      <div className="flex flex-col h-full">
        <div className="p-2">
          <Button className="w-full justify-start gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4" />
            Create New Task
          </Button>
        </div>
        
        <ScrollArea className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            <NavItem to="/" icon={Home} label="Dashboard" end />
            <NavItem to="/tasks" icon={ClipboardList} label="Tasks" />
            <NavItem to="/projects" icon={FolderKanban} label="Projects" />
            <NavItem to="/calendar" icon={Calendar} label="Calendar" />
            <NavItem to="/teams" icon={Users} label="Teams" />
          </nav>
          
          <div className="mt-8 px-4">
            <h3 className="text-xs font-semibold text-muted-foreground mb-2 px-2">WORKSPACES</h3>
            <nav className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-3 px-3 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Marketing
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 px-3 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Product Development
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 px-3 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Design System
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 px-3 text-sm text-muted-foreground">
                <Plus className="h-4 w-4" />
                Add Workspace
              </Button>
            </nav>
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t border-border mt-auto">
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
