
// Mock data for the dashboard
export const projects = [
  {
    id: '1',
    title: '웹사이트 리디자인',
    description: '사용자 경험과 성능을 중심으로 회사 웹사이트를 리디자인하고 재구축합니다.',
    progress: 75,
    dueDate: 'Oct 15',
    members: [
      { id: '1', name: '홍길동' },
      { id: '2', name: '김철수' },
      { id: '3', name: '이영희' },
      { id: '4', name: '박지민' },
    ],
    category: '디자인',
    categoryColor: '#63b3ed',
  },
  {
    id: '2',
    title: '모바일 앱 개발',
    description: 'iOS와 Android 플랫폼을 위한 새로운 모바일 애플리케이션을 제작합니다.',
    progress: 45,
    dueDate: 'Nov 30',
    members: [
      { id: '1', name: '홍길동' },
      { id: '2', name: '김철수' },
    ],
    category: '개발',
    categoryColor: '#68d391',
  },
];

export const tasks = [
  {
    id: '1',
    title: '디자인 목업 검토',
    description: '최신 디자인 목업을 검토하고 디자인 팀에 피드백을 제공합니다.',
    status: 'in-progress' as const,
    priority: 'high' as const,
    dueDate: new Date(2023, 9, 15),
    assignee: { id: '1', name: '홍길동' },
    comments: 3,
  },
  {
    id: '2',
    title: '네비게이션 버그 수정',
    status: 'todo' as const,
    priority: 'medium' as const,
    dueDate: new Date(2023, 9, 16),
  },
  {
    id: '3',
    title: '홈페이지 리디자인 완료',
    status: 'done' as const,
    priority: 'high' as const,
    dueDate: new Date(2023, 9, 12),
    assignee: { id: '2', name: '김철수' },
    attachments: 2,
  },
];
