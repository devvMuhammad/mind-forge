import Post from "./Post";

const postTest = {
  id: "1",
  studentName: "Alice Johnson",
  title: "Understanding React Hooks",
  description:
    "I'm having trouble understanding how to use React Hooks effectively. Can someone explain the useEffect hook in more detail?",
  category: "React",
  content:
    "I've been working with React for a while now, but I'm still struggling to fully grasp the concept of Hooks, especially useEffect. I understand that it's used for side effects, but I'm not sure when to use it and how to properly structure my dependencies array. Can someone provide a detailed explanation or some practical examples of when and how to use useEffect? Additionally, are there any common pitfalls or best practices I should be aware of when working with Hooks in general? Any insights or resources would be greatly appreciated!",
  createdAt: "2023-06-15T10:30:00Z",
  likes: 15,
  replies: [
    {
      id: "1-1",
      author: "Eva Green",
      content:
        "The useEffect hook is used for side effects in functional components. It runs after every render by default. You can control when it runs by passing a dependency array as the second argument. If the array is empty, it only runs once after the initial render.",
      createdAt: "2023-06-15T11:00:00Z",
    },
    {
      id: "1-2",
      author: "Frank White",
      content:
        "A common pitfall is forgetting to include all dependencies in the array. This can lead to stale closures. Always include all variables from the component scope that the effect uses.",
      createdAt: "2023-06-15T11:30:00Z",
    },
  ],
};

export default function PostPage() {
  return <Post post={postTest} />;
}
