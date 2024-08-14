'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import { Classroom } from '@prisma/client';

export const columns: ColumnDef<Classroom>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: 'NAME'
  },
  {
    accessorKey: 'teacherName',
    header: 'TEACHER'
  },
  {
    accessorKey: 'startTime',
    header: 'START TIME'
  },
  {
    accessorKey: 'endTime',
    header: 'END TIME'
  },
  {
    accessorKey: `startDay`,
    header: 'FROM'
  },
  {
    accessorKey: 'endDay',
    header: 'TO'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];