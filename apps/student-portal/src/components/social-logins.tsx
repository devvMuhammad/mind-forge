// @Imports
import { Button } from "@repo/ui/components/ui/button";
import { Icons } from "@repo/ui/components/icons";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";

// @Export
export default function SocialLogins() {
  return (
    <div className="flex justify-between">
      <Button
        // onClick={() => signIn("google", { callbackUrl: "/" })}
        size="lg"
        className="flex-1 mr-2 bg-white hover:bg-black/5 text-gray-500 border-2 px-6 rounded-md"
      >
        <Icons.google className="mr-2 size-5" />
        Log in with Google
      </Button>

      <Button
        // onClick={() => signIn("github", { callbackUrl: "/" })}
        size="lg"
        className="flex-1 ml-2 bg-white hover:bg-black/5 text-gray-500 border-2 px-6 rounded-md"
      >
        <Icons.github className="mr-2 size-5" />
        Log in with Github
      </Button>

      <Button
        // onClick={() => signIn("github", { callbackUrl: "/" })}
        size="lg"
        className="flex-1 ml-2 bg-white hover:bg-black/5 text-gray-500 border-2 px-6 rounded-md"
      >
        <Icons.facebook className="mr-2 size-5" />
        Log in with Facebook
      </Button>
    </div>
  );
}
