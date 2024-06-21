import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import EditQuestionForm from "./edit-question-form";

export default function QuestionEdit() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          {/* <Link href={`/editor/${post.id}`} className="flex w-full"> */}
          {/* <Link href="#" className="flex w-full"> */}
          View
          {/* </Link> */}
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogHeader>
            <DialogTitle>Form to Edit Question</DialogTitle>
          </DialogHeader>
        </DialogHeader>
        <EditQuestionForm />
      </DialogContent>
    </Dialog>
  );
}
