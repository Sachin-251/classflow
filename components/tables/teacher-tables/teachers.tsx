'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { useState } from 'react';
import { CreateUserModal } from '@/components/modal/create-user-modal';
import { User } from '@prisma/client';

interface TeacherProps {
  data: User[];
}

export const TeacherTable: React.FC<TeacherProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <CreateUserModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title='Create Account'
          description='Add a new teacher account'
          role='TEACHER'
      />
      <div className="flex items-start justify-between">
        <Heading
          title={`Teachers (${data.length})`}
          description="Manage teachers"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => setOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};