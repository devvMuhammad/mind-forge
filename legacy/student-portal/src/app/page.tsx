import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSession, logout } from "@/actions/auth";
import Pricing from "@/components/pricing";
import Payment from "@/components/payment";

export default async function Page() {
  const { data, error } = await getSession();
  return (
    <>
      <p>
        Register <Link href="/register">Here</Link>
      </p>
      <form action={logout}>
        <Button type="submit">Logout</Button>
      </form>
      <Link href="/auth/login">Log in here</Link>
      <pre>{JSON.stringify(data || error, null, 2)}</pre>
      <Pricing />
      <Payment />
    </>
  );
}
