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

const DummyData: ResultType[] = [
  {
    id: "1",
    test: "Last one before the storm",
    testId: "a",
    category: "engineering",
    studentName: "John Doe",
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
    id: "1",
    test: "Last one before the storm",
    testId: "a",
    category: "engineering",
    studentName: "John Doe",
    subjectScores: [
      { subject: "mathematics", score: 50, total: 80 },
      { subject: "physics", score: 40, total: 60 },
      { subject: "chemistry", score: 10, total: 20 },
      { subject: "english", score: 10, total: 10 },
      { subject: "iq", score: 6, total: 10 },
    ],
    marks: 175,
    total: 200,
    createdAt: new Date(),
  },
];

const columns: ColumnDef<ResultType>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "studentName", header: "Name" },
  {
    accessorKey: "category",
    header: "Category",
    cell(props) {
      return toTitleCase(props.getValue() as string);
    },
  },
  { accessorKey: "marks", header: "Marks" },
  { accessorKey: "total", header: "Total" },
  {
    accessorKey: "createdAt",
    header: "Attempted At",
    cell(props) {
      return formatDate(props.getValue() as Date, {
        dateStyle: "short",
        timeStyle: "short",
      });
    },
  },
  {
    accessorKey: "test",
    header: "Test",
    cell(props) {
      return (
        <div className="max-w-[250px] text-nowrap overflow-x-hidden overflow-ellipsis">
          {props.cell.getValue() as string}
        </div>
      );
    },
  },
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

  // console.log("header groups", table.getHeaderGroups());
  // console.log("get row models", table.getRowModel());

  return (
    <div className="flex flex-col gap-2">
      <div className="pl-1 pr-2 flex justify-between items-center">
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
        {/* @Select Element for sorting by various means */}
        <Select defaultValue="students.1">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="students.1">Students (A-Z)</SelectItem>
              <SelectItem value="students.-1">Students (Z-A)</SelectItem>
              <SelectItem value="marks.1">Marks: High to Low</SelectItem>
              <SelectItem value="marks.-1">Marks: Low to High</SelectItem>
              <SelectItem value="date.1">Earliest Submission</SelectItem>
              <SelectItem value="date.-1">Oldest Submission</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
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
    </div>
  );
}
