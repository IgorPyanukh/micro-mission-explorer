
export type UserRole = "student" | "teacher" | "admin";

export interface User {
  id: string;
  name: string;
  role: UserRole;
  schoolId?: string;
  classId?: string;
  avatar?: string;
}

export type MissionStatus = "available" | "in-progress" | "completed" | "verified";

export interface Mission {
  id: string;
  title: string;
  description: string;
  status: MissionStatus;
  points: number;
  deadline?: string;
  instructions: string;
  imageUrl?: string;
  badgeId?: string;
  requiresImage?: boolean;
  requiresText?: boolean;
  hasMultipleChoice?: boolean;
  requiresNumericInput?: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  color: string;
  type?: "achievement" | "completion" | "excellence" | "special" | "default";
}

export interface MissionSubmission {
  id: string;
  missionId: string;
  studentId: string;
  imageUrl?: string;
  text?: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  feedback?: string;
  aiClassification?: string;
  metaData?: {
    gpsLocation?: string;
    deviceInfo?: string;
  };
}

export interface Class {
  id: string;
  name: string;
  teacherId: string;
  schoolId: string;
  students: string[]; // student IDs
  missions: string[]; // mission IDs
}
