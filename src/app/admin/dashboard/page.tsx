import TestCard from "@/components/test-card";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  // const data = await checkServerSession();
  // console.log("data inside the server component", data);
  // if (data.error) redirect("/login");
  return (
    <>
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <h1 className="font-semibold text-2xl md:text-3xl">Snippets</h1>
          <p className="text-base text-muted-foreground">
            View, Create, Delete & Edit your Snippets here
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TestCard />
      </div>
    </>
  );
}
