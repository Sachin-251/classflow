'use client';
import { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/modal';
import CreateTeacher from '../forms/create-teacher';
import CreateStudent from '../forms/create-student';

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  role: string;
}

export const CreateUserModal: React.FC<CreateUserModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  role
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
      {role === 'TEACHER' ? (
        <CreateTeacher onClose={onClose} />
      ) : (
        <CreateStudent onClose={onClose} />
      )}
    </Modal>
  );
};