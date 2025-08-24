import Svg, { Path } from 'react-native-svg';

export const BackIcon = () => (
  <Svg width={12} height={28} viewBox="0 0 12 28" fill="none">
    <Path d="M10 26L2 14L10 2" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const CalendarIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M9 16.5C8.3 16.5 7.70833 16.2583 7.225 15.775C6.74167 15.2917 6.5 14.7 6.5 14C6.5 13.3 6.74167 12.7083 7.225 12.225C7.70833 11.7417 8.3 11.5 9 11.5C9.7 11.5 10.2917 11.7417 10.775 12.225C11.2583 12.7083 11.5 13.3 11.5 14C11.5 14.7 11.2583 15.2917 10.775 15.775C10.2917 16.2583 9.7 16.5 9 16.5ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20Z" fill="#49454F"/>
  </Svg>
);

export const ChevronLeft = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="#49454F"/>
  </Svg>
);

export const ChevronRight = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="#49454F"/>
  </Svg>
);

export const ChevronDown = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path d="M9 11.25L5.25 7.5H12.75L9 11.25Z" fill="#49454F"/>
  </Svg>
);

export const DoubleChevronDown = () => (
  <Svg width={32} height={26} viewBox="0 0 32 26" fill="none">
    <Path d="M9.33331 14.0833L16 19.5L22.6666 14.0833M9.33331 6.5L16 11.9167L22.6666 6.5" stroke="#1E1E1E" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);
