"use client";

export default function error({ error }: { error: Error }) {
  return (
    <>
      <h1>error here</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
}
