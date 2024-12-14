"use client";
import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Database } from "@/types/supabase";
import { formatDate, toTitleCase } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// base cdn link
const CDN =
  "https://hgbzsceblfigpnzgrqcp.supabase.co/storage/v1/object/public/transaction_proof/";

type RegistrationType = Database["public"]["Tables"]["registrations"]["Row"];

// columns
const columns: ColumnDef<RegistrationType>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "category",
    header: "Category",
    cell: (props) => toTitleCase(props.getValue() as string),
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: (props) => formatDate(new Date(props.getValue() as string)),
  },
  {
    accessorKey: "screenshot_url",
    header: "Screenshot",
    cell: (props) => {
      const url = CDN + (props.getValue() as string);
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">I</Button>
          </DialogTrigger>
          <DialogContent>
            <img src={url} alt="image" />
          </DialogContent>
        </Dialog>
      );
    },
  },
];

export default function RegistrationTable({
  registrations,
}: {
  registrations: RegistrationType[];
}) {
  const table = useReactTable({
    data: registrations,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
