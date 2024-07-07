import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button>Shit yar</Button>
      <Link href="/register">Register Here</Link>
    </main>
  );
}
