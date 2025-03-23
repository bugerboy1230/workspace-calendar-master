
// Mock data for the dashboard
export const projects = [
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

export const tasks = [
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
