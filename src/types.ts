export interface Job {
  id: string;
  title: string;
  company: string;
  type: 'full-time' | 'part-time' | 'contract';
  location: string;
  description: string;
  created_at: string;
}

export type JobFormData = Omit<Job, 'id' | 'created_at'>;