import getTeachers from '@/app/actions/getTeachers';
import { Breadcrumbs } from '@/components/breadcrums';
import PageContainer from '@/components/layout/page-container';
import { TeacherTable } from '@/components/tables/teacher-tables/teachers';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Teachers', link: '/dashboard/teachers' }
];
export default async function page() {

  const teachers = await getTeachers();

  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <TeacherTable data={teachers} />
      </div>
    </PageContainer>
  );
}