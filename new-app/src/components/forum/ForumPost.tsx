import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/./components/ui/badge";
import { toTitleCase } from "@/lib/utils";

function ForumPost(props: {
  id: string;
  studentName: string;
  title: string;
  description: string;
  category: string;
  studentPicture?: string;
}) {
  return (
    <Link href={`/forum/${props.id}`}>
      <Card className="mb-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src={
                    props.studentPicture ||
                    `https://api.dicebear.com/6.x/initials/svg?seed=${props.studentName}`
                  }
                />
                <AvatarFallback>
                  {props.studentName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{props.title}</CardTitle>
                <CardDescription>{props.studentName}</CardDescription>
              </div>
            </div>
            <Badge variant="secondary">{toTitleCase(props.category)}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {props.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ForumPost;
