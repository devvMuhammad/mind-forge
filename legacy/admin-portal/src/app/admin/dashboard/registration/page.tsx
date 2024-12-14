import RegistrationTable from "@/components/registration-table";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Images from "./images";
import PageTitle from "@/components/page-title";

const cdn =
  "https://hgbzsceblfigpnzgrqcp.supabase.co/storage/v1/object/public/transaction_proof/";

export default async function Registration() {
  const supabase = createClient();
  const { data, error } = await supabase.from("registrations").select("*");

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }

  return (
    <>
      <PageTitle
        heading="Registrations"
        description="View Students' Registrations here in form of a table"
        containsButton={false}
      />
      <RegistrationTable registrations={data} />

      {/* <pre className="overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
      {data.map((row) => (
        <div key={row.id}>
        <a href={cdn + row.screenshot_url}>{cdn + row.screenshot_url}</a>
        <img src={cdn + row.screenshot_url} alt="image" />
        </div>
      ))} */}
    </>
  );
}

//! STORING THIS FOR FUTURE PURPOSE (THIS IS INCASE I USE PRIVATE BUCKET IN FUTURE)
/*
- first, you need to get the list of the images and their names
- generate signed urls using their names
- use those signed urls as src for the images

 const { data: bucketData, error: bucketError } = await supabase.storage
    .from("transaction_proof")
    .list("", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (bucketError) {
    console.error(bucketError);
    throw new Error("Failed to fetch data");
  }

  const { data: signedUrlData, error: signedUrlError } = await supabase.storage
    .from("transaction_proof")
    .createSignedUrls(
      bucketData.reduce((acc: string[], elm) => {
        acc.push(elm.name);
        return acc;
      }, []),
      60 * 60 * 24,
    );

  if (signedUrlError) {
    console.error(signedUrlError);
    throw new Error("Failed to fetch data");
  }
 */
