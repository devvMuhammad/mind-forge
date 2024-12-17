"use client";

import { useState, useTransition } from "react";
import { selectCategory } from "@/app/actions/student/select-category";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { testsConfig } from "@/config/tests";
import { toTitleCase } from "@/lib/utils";

export default function SelectCategory() {
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!category) {
      setError("Please select a category");
      return;
    }

    try {
      startTransition(async () => {
        const response = await selectCategory({ category });
        if (response?.error) {
          setError(response?.error);
          return;
        }
        setCategory("");
      });
    } catch (err) {
      setError("Failed to submit category");
      console.error(err);
    }
  };

  return (
    <section>
      <div className="inline-block space-y-4 p-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Select
              value={category}
              onValueChange={setCategory}
              disabled={isPending}
            >
              <SelectTrigger className="w-[340px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {testsConfig.categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {toTitleCase(category)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>

          <Button type="submit" className="mt-4 w-full" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
}
