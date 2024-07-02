"use client";
import { ResultType, SubjectScoreType } from "@/types";
import {
  ColumnDef,
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatDate, toTitleCase } from "@/lib/utils";
import { testsConfig } from "@/config/tests";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { useState } from "react";

const DummyData: ResultType[] = [
  {
    id: "1",
    test: "Last one before the storm",
    testId: "a",
    category: "engineering",
    studentName: "Alpha Male",
    subjectScores: [
      { subject: "mathematics", score: 50, total: 80 },
      { subject: "physics", score: 40, total: 60 },
      { subject: "chemistry", score: 10, total: 20 },
      { subject: "english", score: 10, total: 10 },
      { subject: "iq", score: 6, total: 10 },
    ],
    marks: 95,
    total: 200,
    createdAt: new Date(),
  },
  {
    id: "2",
    test: "Last one before the storm",
    testId: "b",
    category: "engineering",
    studentName: "Zaeben Male",
    subjectScores: [
      { subject: "mathematics", score: 50, total: 80 },
      { subject: "physics", score: 40, total: 60 },
      { subject: "chemistry", score: 10, total: 20 },
      { subject: "english", score: 10, total: 10 },
      { subject: "iq", score: 6, total: 10 },
    ],
    marks: 0,
    total: 200,
    createdAt: new Date(),
  },
  {
    id: "3",
    test: "Last one before the storm",
    testId: "c",
    category: "engineering",
    studentName: "Sabun Male",
    subjectScores: [
      { subject: "mathematics", score: 50, total: 80 },
      { subject: "physics", score: 40, total: 60 },
      { subject: "chemistry", score: 10, total: 20 },
      { subject: "english", score: 10, total: 10 },
      { subject: "iq", score: 6, total: 10 },
    ],
    marks: 175,
    total: 200,
    createdAt: new Date(2024, 12, 4),
  },
];

function RenderArrow(sortValue: boolean | "asc" | "desc") {
  return sortValue === false ? "" : sortValue === "asc" ? "▼" : "▲";
}

function ControlSort(
  setSorting: (sort: ColumnSort[]) => void,
  field: string,
  direction: "asc" | "desc" | boolean
) {
  // toggle flow, empty -> down -> up -> empty
  if (direction === false) {
    setSorting([{ id: field, desc: false }]);
    return;
  }
  if (direction === "asc") {
    setSorting([{ id: field, desc: true }]);
    return;
  }
  setSorting([]);
}

const columns: ColumnDef<ResultType>[] = [
  { accessorKey: "id", header: "ID", enableSorting: false },
  { accessorKey: "studentName", header: "Name", enableSorting: true },
  {
    accessorKey: "category",
    header: "Category",
    enableSorting: false,
    cell(props) {
      return toTitleCase(props.getValue() as string);
    },
  },
  {
    accessorKey: "marks",
    header: "Marks",
    enableSorting: true,
  },
  { accessorKey: "total", header: "Total", enableSorting: false },
  {
    accessorKey: "createdAt",
    header: "Attempted At",
    cell(props) {
      return formatDate(props.getValue() as Date, {
        dateStyle: "short",
        timeStyle: "short",
      });
    },
    enableSorting: true,
  },
  {
    accessorKey: "test",
    enableSorting: false,
    header: "Test",
    cell(props) {
      return (
        <div className="max-w-[250px] text-nowrap overflow-x-hidden overflow-ellipsis">
          {props.cell.getValue() as string}
        </div>
      );
    },
  },
  {
    accessorKey: "subjectScores",
    enableSorting: false,
    header: () => <p className="text-center">Scores</p>,
    cell(props) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-full flex justify-center items-center">
              <Button size="icon" variant="outline" className="h-6 w-6">
                <Icons.ellipsis className="h-5 w-5" />
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            {/* <div className="flex gap-2">
            {(props.cell.getValue() as SubjectScoreType[]).map((score) => (
              <div key={score.subject} className="flex flex-col gap-1">
                <div>{toTitleCase(score.subject)}</div>
                <div>
                  {score.score}/{score.total}
                </div>
              </div>
            ))}
          </div> */}
            <pre>{JSON.stringify(props.cell.getValue(), null, 2)}</pre>
          </DialogContent>
        </Dialog>
      );
    },
  },
];

export default function ResultsTable() {
  const [sorting, setSorting] = useState<ColumnSort[]>([]);

  const table = useReactTable<ResultType>({
    data: DummyData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      columnVisibility: {
        test: false,
      },
    },
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });
  return (
    <div className="flex flex-col gap-2">
      {/* @Table Operations */}
      <div className="pl-1 pr-2 flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <Input
            placeholder="Filter Names"
            // value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            // onChange={(event) =>
            //   table.getColumn("email")?.setFilterValue(event.target.value)
            // }
            className="max-w-sm"
          />
          <div className="flex gap-4">
            {/* @Filter by Test Name (ID in actual) */}
            <Select defaultValue="a">
              <SelectTrigger className="min-w-[125px] max-w-[250px]">
                <SelectValue placeholder="Select a test" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tests</SelectLabel>
                  <SelectItem value="a">Test A</SelectItem>
                  <SelectItem value="b">Test B</SelectItem>
                  <SelectItem value="c">Test C</SelectItem>
                  <SelectItem value="d">Test D</SelectItem>
                  <SelectItem value="e">Test E</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* @Filter by Category */}
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="all">All </SelectItem>
                  {testsConfig.categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {toTitleCase(category)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          {/* @Table Header */}
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      // if sortable, add cursor pointer
                      className={
                        header.column.getCanSort() ? "cursor-pointer" : ""
                      }
                      key={header.id}
                      // if sortable, add onClick event
                      onClick={() => {
                        if (!header.column.getCanSort()) return;
                        ControlSort(
                          setSorting,
                          header.id,
                          header.column.getIsSorted()
                        );
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {RenderArrow(header.column.getIsSorted())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {/* @Table Body */}
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
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
              // @No Results
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
    </div>
  );
}
