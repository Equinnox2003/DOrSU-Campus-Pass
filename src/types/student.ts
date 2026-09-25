import type { ImageSourcePropType } from 'react-native';

export interface StudentProfile {
  name: string;
  idNumber: string;
  program: string;
  yearLevel: string;
  avatarUrl: string;
  avatarSource?: ImageSourcePropType;  
  campus: string;
}

export interface StatusBadgeProps {
  isActive: boolean;
}
