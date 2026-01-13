
export enum UserRole {
  STUDENT = 'student',
  TUTOR = 'tutor',
  ADMIN = 'admin'
}

export interface Tutor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  hourlyRate: number;
  cryptoRate: string;
  imageUrl: string;
  type: 'AI' | 'Human';
  trustScore: number;
  students: number;
  verified: boolean;
}

export interface Booking {
  id: string;
  title: string;
  tutorName: string;
  time: string;
  status: 'upcoming' | 'past' | 'live';
  tutorImage: string;
  escrowAmount: string;
}

export interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
  isAi: boolean;
}
