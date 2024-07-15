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
} from "@repo/ui/components/ui/table";
import { useState } from "react";

type ResultType = {
  id: string;
  studentName: string;
  marks: number;
  total: number;
  createdAt: string;
};
// dummy data
const DummyData: ResultType[] = [
  {
    id: "1",
    studentName: "Alpha Male",
    marks: 95,
    total: 200,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: "2",
    studentName: "Zaeben Male",
    marks: 0,
    total: 200,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: "3",
    studentName: "Sabun Male",
    marks: 175,
    total: 200,
    createdAt: new Date().toLocaleDateString(),
  },
];
// columns
const columns: ColumnDef<ResultType>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "studentName", header: "Name" },
  { accessorKey: "marks", header: "Marks" },
  { accessorKey: "total", header: "Total" },
  { accessorKey: "createdAt", header: "Attempted At" },
];

export default function ResultsTable() {
  const table = useReactTable({
    data: DummyData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        {/* Render columns */}
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
        {/* Actual Table Data */}
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
