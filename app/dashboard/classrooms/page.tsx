import getClassrooms from '@/app/actions/getClassrooms';
import getTeachers from '@/app/actions/getTeachers';
import { Breadcrumbs } from '@/components/breadcrums';
import PageContainer from '@/components/layout/page-container';
import { ClassroomTable } from '@/components/tables/classroom-tables/classrooms';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Classrooms', link: '/dashboard/classrooms' }
];
export default async function page() {

  const classrooms = await getClassrooms();
  const teachers = await getTeachers();
  const availableTeachers = teachers?.filter((teacher) => teacher?.classroomIds?.length <= 0);

  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <ClassroomTable data={classrooms} teachers={availableTeachers} />
      </div>
    </PageContainer>
  );
}