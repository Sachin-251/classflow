import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';
import getCurrentUser from '../actions/getCurrentUser';
import { navItemsPrincipal, navItemsStudent, navItemsTeacher } from '@/constants/data';

export const metadata: Metadata = {
  title: 'ClassFlow',
  description: 'A seamless classroom management solution for principals, teachers, and students. Effortlessly organize classrooms, schedules, and assignments with intuitive tools designed to streamline education.'
};

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const user = await getCurrentUser();
  const navItems = user?.role === 'PRINCIPAL' ? navItemsPrincipal : user?.role === 'TEACHER' ? navItemsTeacher : navItemsStudent;

  return (
    <div className="flex">
      <Sidebar navItems={navItems} />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}