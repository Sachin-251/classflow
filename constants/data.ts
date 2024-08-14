import { NavItem } from "@/types";

export const navItemsPrincipal: NavItem[] = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'dashboard',
      label: 'Dashboard'
    },
    {
      title: 'Teachers',
      href: '/dashboard/teachers',
      icon: 'user',
      label: 'teachers'
    },
    {
      title: 'Students',
      href: '/dashboard/students',
      icon: 'student',
      label: 'students'
    },
    {
        title: 'Classrooms',
        href: '/dashboard/classrooms',
        icon: 'kanban',
        label: 'classrooms'
    },
    {
        title: 'Timetables',
        href: '/dashboard/timetables',
        icon: 'calendar',
        label: 'timetables'
    },
    {
      title: 'Profile',
      href: '/dashboard/profile',
      icon: 'profile',
      label: 'profile'
    },
  ];

  export const navItemsTeacher: NavItem[] = [
    {
      title: 'Students',
      href: '/dashboard/students',
      icon: 'student',
      label: 'students'
    },
    {
        title: 'Timetables',
        href: '/dashboard/timetables',
        icon: 'calendar',
        label: 'timetables'
    },
    {
      title: 'Profile',
      href: '/dashboard/profile',
      icon: 'profile',
      label: 'profile'
    },
  ];

  export const navItemsStudent: NavItem[] = [
    {
      title: 'Classmates',
      href: '/dashboard/students',
      icon: 'student',
      label: 'classmates'
    },
    {
        title: 'Timetable',
        href: '/dashboard/timetable',
        icon: 'calendar',
        label: 'timetables'
    },
    {
      title: 'Profile',
      href: '/dashboard/profile',
      icon: 'profile',
      label: 'profile'
    },
  ];

  export const timeArray: string[] = [
  "6:00 AM", "6:30 AM",
  "7:00 AM", "7:30 AM",
  "8:00 AM", "8:30 AM",
  "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM",
  "10:00 PM"
]

export const weekdays: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
