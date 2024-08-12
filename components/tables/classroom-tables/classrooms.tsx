'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { useState } from 'react';
import { Classroom, User } from '@prisma/client';
import { CreateClassroomModal } from '@/components/modal/create-classroom-modal';

interface ClassroomProps {
  data: Classroom[];
  teachers: User[];
}

export const ClassroomTable: React.FC<ClassroomProps> = ({ data, teachers }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <CreateClassroomModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title='Create Classroom'
          description='Add a new Classroom'
          teachers={teachers}
      />
      <div className="flex items-start justify-between">
        <Heading
          title={`Classrooms (${data.length})`}
          description="Manage classrooms"
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