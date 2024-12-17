"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ResultScore {
  score: number;
  total: number;
  subject: string;
}

interface ResultData {
  id: number;
  created_at: string;
  scores: ResultScore[];
  profiles: {
    id: string;
    name: string;
    role: string;
    category: string;
    created_at: string;
  };
  tests: {
    id: string;
    title: string;
    attempts: number;
    category: string;
    published: boolean;
    created_at: string;
    last_changed: string;
    last_changed_by: string;
  };
}

// Subject Performance Dialog Component
const SubjectPerformanceDialog = ({ scores }: { scores: ResultScore[] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subject-wise Performance</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Performance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scores.map((subject) => (
              <TableRow key={subject.subject}>
                <TableCell className="capitalize">{subject.subject}</TableCell>
                <TableCell>{subject.score}</TableCell>
                <TableCell>{subject.total}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      subject.score === subject.total
                        ? "default"
                        : "destructive"
                    }
                  >
                    {((subject.score / subject.total) * 100).toFixed(0)}%
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export function ResultsTable({ data }: { data: ResultData[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const columns: ColumnDef<ResultData>[] = [
    {
      accessorKey: "id",
      header: "Number",
      cell: ({ row }) => <div className="font-medium">{row.original.id}</div>,
    },
    {
      accessorKey: "tests.title",
      header: "Test Name",
      cell: ({ row }) => <div>{row.original.tests.title}</div>,
    },
    {
      accessorKey: "profiles.name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Student Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div>{row.original.profiles.name}</div>,
    },
    {
      id: "totalMarks",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Marks
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const totalScore = row.original.scores.reduce(
          (sum, score) => sum + score.score,
          0
        );
        const totalPossible = row.original.scores.reduce(
          (sum, score) => sum + score.total,
          0
        );
        return (
          <div>
            <Badge
              className="ml-10"
              variant={totalScore > 0 ? "default" : "destructive"}
            >
              {totalScore}/{totalPossible}
            </Badge>
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Details",
      cell: ({ row }) => (
        <SubjectPerformanceDialog scores={row.original.scores} />
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="space-y-4">
      <Input
        placeholder="Filter by name..."
        value={
          (table.getColumn("profiles.name")?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn("profiles.name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
