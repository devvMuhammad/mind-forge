import { DropdownMenuItem } from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import React from "react";
import { Icons } from "./icons";

export default function QuestionDelete() {
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false);
  return (
    <>
      <DropdownMenuItem
        className="bg-red-500 text-white cursor-pointer"
        onSelect={(e) => {
          e.preventDefault();
          setShowDeleteAlert(true);
        }}
      >
        Delete
      </DropdownMenuItem>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this snippet?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              // onClick={async (event) => {
              //   event.preventDefault();
              //   setIsDeleteLoading(true);

              //   const deleted = await deletePost(post.id);

              //   if (deleted) {
              //     setIsDeleteLoading(false);
              //     setShowDeleteAlert(false);
              //     router.refresh();
              //   }
              // }}
              className="bg-red-600 focus:ring-red-600"
            >
              {/* {isDeleteLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : ( */}
              <Icons.trash className="mr-2 h-4 w-4" />
              {/* )} */}
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
