export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid lg:grid-cols-2 h-screen">
      <aside className="flex h-full justify-center items-center">
        {children}
      </aside>

      {/* -- @Side Image */}
      <div className="hidden lg:block relative w-full bg-red-300">
        {/* <Image
      src="/assets/images/login/multi-colored-butterfly.webp"
      alt="login-butterfly-image"
      fill
      sizes="50vw"
      style={{
        objectFit: "cover",
        // objectPosition: "bottom",
      }}
    /> */}
      </div>
    </main>
  );
}
