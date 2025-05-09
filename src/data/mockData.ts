
import { User, Mission, Badge, MissionSubmission, Class } from "../types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "student1",
    name: "Alex Johnson",
    role: "student",
    schoolId: "school1",
    classId: "class1",
    avatar: "/placeholder.svg"
  },
  {
    id: "teacher1",
    name: "Ms. Smith",
    role: "teacher",
    schoolId: "school1",
    avatar: "/placeholder.svg"
  },
  {
    id: "admin1",
    name: "Principal Davis",
    role: "admin",
    avatar: "/placeholder.svg"
  }
];

// Mock Missions
export const mockMissions: Mission[] = [
  {
    id: "mission1",
    title: "Identify Plant Cells",
    description: "Capture and classify different types of plant cells using your microscope",
    status: "available",
    points: 100,
    deadline: "2024-12-31",
    instructions: "1. Prepare a slide with a thin slice of an onion\n2. Focus your microscope\n3. Take a clear photo\n4. Label the cell structures you can identify",
    imageUrl: "/placeholder.svg",
    badgeId: "badge1"
  },
  {
    id: "mission2",
    title: "Observe Pond Water Microorganisms",
    description: "Find and classify microorganisms in pond water samples",
    status: "in-progress",
    points: 150,
    instructions: "1. Collect a water sample from a pond\n2. Place a drop on a slide\n3. Observe under microscope\n4. Take photos of at least 3 different microorganisms",
    imageUrl: "/placeholder.svg",
    badgeId: "badge2"
  },
  {
    id: "mission3",
    title: "Compare Animal and Plant Cells",
    description: "Identify key differences between animal and plant cells",
    status: "completed",
    points: 200,
    instructions: "1. Prepare two slides: one with cheek cells and one with plant leaf cells\n2. Take clear photos of both\n3. Label cell structures\n4. Explain at least 3 differences you observed",
    imageUrl: "/placeholder.svg",
    badgeId: "badge3"
  },
  {
    id: "mission4",
    title: "Blood Cell Analysis",
    description: "Observe and identify different blood cell types",
    status: "available",
    points: 175,
    instructions: "1. Use the prepared blood smear slide\n2. Focus on areas with well-separated cells\n3. Take photos of red and white blood cells\n4. Measure the approximate size of each type",
    imageUrl: "/placeholder.svg",
    badgeId: "badge4"
  }
];

// Mock Badges
export const mockBadges: Badge[] = [
  {
    id: "badge1",
    name: "Plant Explorer",
    description: "Successfully identified plant cell structures",
    imageUrl: "/placeholder.svg",
    color: "bg-app-green"
  },
  {
    id: "badge2",
    name: "Pond Detective",
    description: "Found and classified pond microorganisms",
    imageUrl: "/placeholder.svg",
    color: "bg-app-blue"
  },
  {
    id: "badge3",
    name: "Cell Comparer",
    description: "Documented differences between cell types",
    imageUrl: "/placeholder.svg",
    color: "bg-app-purple"
  },
  {
    id: "badge4",
    name: "Blood Analyst",
    description: "Correctly identified blood cell types",
    imageUrl: "/placeholder.svg",
    color: "bg-app-red"
  },
  {
    id: "badge5",
    name: "First Submission",
    description: "Completed your first mission",
    imageUrl: "/placeholder.svg",
    color: "bg-app-yellow"
  }
];

// Mock Classes
export const mockClasses: Class[] = [
  {
    id: "class1",
    name: "Biology 101",
    teacherId: "teacher1",
    schoolId: "school1",
    students: ["student1", "student2", "student3"],
    missions: ["mission1", "mission2", "mission3", "mission4"]
  }
];

// Mock Submissions
export const mockSubmissions: MissionSubmission[] = [
  {
    id: "submission1",
    missionId: "mission3",
    studentId: "student1",
    imageUrl: "/placeholder.svg",
    text: "I observed plant cells have a cell wall and central vacuole, which animal cells lack. Animal cells have irregular shapes while plant cells are more rectangular.",
    submittedAt: "2023-11-15T10:30:00",
    status: "approved",
    feedback: "Excellent observations! Your images clearly show the differences.",
    aiClassification: "Plant Cell - Onion Epidermal",
    metaData: {
      gpsLocation: "School Science Lab",
      deviceInfo: "iPhone 12, iOS 15.4"
    }
  }
];

// Student Progress Data
export const studentProgress = {
  totalPoints: 320,
  completedMissions: 3,
  availableMissions: 5,
  badges: ["badge1", "badge3", "badge5"],
  recentActivity: [
    { date: "2023-11-15", action: "Completed mission", mission: "Compare Animal and Plant Cells" },
    { date: "2023-11-10", action: "Earned badge", badge: "First Submission" },
    { date: "2023-11-05", action: "Started mission", mission: "Observe Pond Water Microorganisms" }
  ]
};

// Leaderboard Data
export const leaderboardData = [
  { studentId: "student1", name: "Alex Johnson", points: 320, badges: 3 },
  { studentId: "student2", name: "Emma Wilson", points: 450, badges: 4 },
  { studentId: "student3", name: "Noah Brown", points: 280, badges: 2 },
  { studentId: "student4", name: "Olivia Davis", points: 410, badges: 3 },
  { studentId: "student5", name: "William Thompson", points: 220, badges: 2 }
];

// Class Performance Data for Admin Dashboard
export const classPerformanceData = [
  { classId: "class1", name: "Biology 101", avgPoints: 336, missionCompletionRate: 0.78, studentCount: 5 },
  { classId: "class2", name: "Biology 102", avgPoints: 290, missionCompletionRate: 0.65, studentCount: 6 },
  { classId: "class3", name: "Advanced Biology", avgPoints: 405, missionCompletionRate: 0.85, studentCount: 4 }
];
