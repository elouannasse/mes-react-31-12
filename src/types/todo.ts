export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type FilterValue = 'all' | 'active' | 'completed';
