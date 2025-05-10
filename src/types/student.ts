
export interface Student {
  studentId: string;
  name: string;
  email: string;
  points: number;
  badges: number;
  grade: number;
  className: string;
}

export interface StudentProgress {
  completedMissions: number;
  recentActivity: {
    action: string;
    mission?: string;
    badge?: string;
    date: string;
  }[];
}
