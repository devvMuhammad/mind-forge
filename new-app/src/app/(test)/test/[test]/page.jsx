import Test from "./Test";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { engineeringMCQs } from "./data/engineering";
import { medicalMCQs } from "./data/medical";
import { icsMCQs } from "./data/ics";

export async function getStaticParams() {
  return [{ test: "engineering", test: "biosciences" }];
}
export default async function page({ params }) {
  // const user = cookies().get("user");
  // // console.log("thi is the user", user.value);
  // console.log("this is the params", params);
  const mcqArray = {
    engineering: engineeringMCQs,
    medical: medicalMCQs,
    ics: icsMCQs,
  };
  // console.log("this is the mcqs accesed", mcqArray[params.test]);
  // if (!user || !mcqArray[params.test]) {
  //   console.log("redirecting with params", params);
  //   redirect("/");
  //   // return;
  // }

  // if (!mcqArray[params.test]) {
  //   redirect("/");
  // }

  return <Test mcqBank={mcqArray.engineering} />;
}
