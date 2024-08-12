import getStudents from '@/app/actions/getStudents';
import { Breadcrumbs } from '@/components/breadcrums';
import PageContainer from '@/components/layout/page-container';
import { StudentTable } from '@/components/tables/student-tables/students';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Students', link: '/dashboard/students' }
];
export default async function page() {

  const students = await getStudents();

  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <StudentTable data={students} />
      </div>
    </PageContainer>
  );
}