import ForumPost from "@/components/forum/ForumPost";
import { buttonVariants } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

// Dummy data for forum posts
const forumPosts = [
  {
    id: "1",
    studentName: "Alice Johnson",
    title: "Understanding React Hooks",
    description:
      "I'm having trouble understanding how to use React Hooks effectively. Can someone explain the useEffect hook in more detail?",
    category: "React",
  },
  {
    id: "2",
    studentName: "Bob Smith",
    title: "Best practices for state management",
    description:
      "What are the current best practices for state management in large React applications? Redux, Context API, or something else?",
    category: "State Management",
  },
  {
    id: "3",
    studentName: "Charlie Brown",
    title: "Optimizing performance in Next.js",
    description:
      "I'm working on a Next.js project and I'm looking for ways to optimize its performance. Any tips or tricks you can share?",
    category: "Next.js",
  },
  {
    id: "4",
    studentName: "Diana Prince",
    title: "Implementing authentication in a MERN stack",
    description:
      "I'm building a MERN (MongoDB, Express, React, Node.js) application and I need help implementing user authentication. What's the best approach?",
    category: "Authentication",
  },
  {
    id: "5",
    studentName: "Ethan Hunt",
    title: "Debugging techniques for React Native",
    description:
      "What are some effective debugging techniques for React Native applications? I'm struggling with identifying and fixing issues in my app.",
    category: "React Native",
  },
];

export default function Forum() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-6">Recent Discussions</h1>
        <Link
          href="/forum/create"
          className={buttonVariants({ variant: "default" })}
        >
          <PlusIcon className="mr-4" /> Create Post
        </Link>
      </div>

      <div>
        {forumPosts.map(function (post) {
          return (
            <ForumPost
              key={post.id}
              id={post.id}
              studentName={post.studentName}
              title={post.title}
              description={post.description}
              category={post.category}
            />
          );
        })}
      </div>
    </div>
  );
}
