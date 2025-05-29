
import { ReactNode } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface CustomTableProps {
  children: ReactNode;
}

export function CustomTable({ children, ...props }: CustomTableProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <Table {...props}>
        {children}
      </Table>
    </div>
  );
}

export function CustomTableHeader({ children, ...props }: { children: ReactNode }) {
  return <TableHeader {...props}>{children}</TableHeader>;
}

export function CustomTableBody({ children, ...props }: { children: ReactNode }) {
  return <TableBody {...props}>{children}</TableBody>;
}

export function CustomTableRow({ children, ...props }: { children: ReactNode }) {
  return <TableRow {...props}>{children}</TableRow>;
}

export function CustomTableHead({ children, ...props }: { children: ReactNode }) {
  return <TableHead {...props}>{children}</TableHead>;
}

export function CustomTableCell({ children, ...props }: { children: ReactNode }) {
  return <TableCell {...props}>{children}</TableCell>;
}
