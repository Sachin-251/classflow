'use client';
import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/modal';
import CreateTeacher from '../forms/create-teacher';
import CreateStudent from '../forms/create-student';
import CreateClassroom from '../forms/create-classroom';
import { User } from '@prisma/client';

interface CreateClassroomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  teachers: User[];
}

export const CreateClassroomModal: React.FC<CreateClassroomModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  teachers
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title={title}
      description={description}
      isOpen={isOpen}
      onClose={onClose}
    >
        <CreateClassroom onClose={onClose} teachers={teachers} />
    </Modal>
  );
};