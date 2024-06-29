"use client";
import { ResultType } from "@/types";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DummyData: ResultType[] = [
  {
    id: "1",
    testId: "1",
    category: "engineering",
    studentName: "John Doe",
    subjectScores: [
      { subject: "mathematics", score: 50, total: 80 },
      { subject: "physics", score: 40, total: 60 },
      { subject: "chemistry", score: 10, total: 20 },
      { subject: "english", score: 10, total: 10 },
      { subject: "iq", score: 6, total: 10 },
    ],
    marks: 10,
    total: 200,
  },
  {
    id: "1",
    testId: "1",
    category: "engineering",
    studentName: "John Doe",
    subjectScores: [
      { subject: "mathematics", score: 50, total: 80 },
      { subject: "physics", score: 40, total: 60 },
      { subject: "chemistry", score: 10, total: 20 },
      { subject: "english", score: 10, total: 10 },
      { subject: "iq", score: 6, total: 10 },
    ],
    marks: 10,
    total: 200,
  },
];

const columns: ColumnDef<ResultType>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "studentName", header: "Name" },
  { accessorKey: "testId", header: "Test ID" },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "marks", header: "Marks" },
  { accessorKey: "total", header: "Total" },
  // { accessorKey: "subjectScores.0.score", header: "Maths" },
  // { accessorFn: (row) => row.subjectScores[1].score, header: "Physics" },
  // { accessorKey: "subjectScores.2.score", header: "Chemistry" },
  // { accessorKey: "subjectScores.3.score", header: "English" },
];

export default function ResultsTable() {
  const table = useReactTable({
    data: DummyData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log("header groups", table.getHeaderGroups());
  console.log("get row models", table.getRowModel());

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
