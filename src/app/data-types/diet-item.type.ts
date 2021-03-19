export interface DietItem {
  traineeId: number;
  dayNumber: number;
  breakfast: string;
  breakfastTime?: string;
  morningSnack?: string;
  morningSnackTime?: string;
  lunch: string;
  lunchTime?: string;
  afternoonSnack?: string;
  afternoonSnackTime?: string;
  dinner: string;
  dinnerTime?: string;
}
