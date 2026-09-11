export interface RatePackage {
  id: string;
  name: string;
  category?: 'code8' | 'advanced' | 'hire';
  price: string;
  priceNum: number;
  duration: string;
  badge?: string;
  popular?: boolean;
  savings?: string;
  description: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  transmission: 'Manual' | 'Automatic' | 'Not Sure';
  pickupLocation: string;
  message: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  area: string;
  license: string;
  text: string;
  rating: number;
  result: string;
}

export interface GoogleReviewItem {
  id: string;
  author: string;
  rating: number;
  relativeTime: string;
  text: string;
  suburb?: string;
  testPassed?: string;
  avatarColor?: string;
}
