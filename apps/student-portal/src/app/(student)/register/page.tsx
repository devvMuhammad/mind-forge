import RegisterForm from "@/components/register-form";

export default function Register() {
  return (
    <main>
      {/* @Update this later */}
      <h1>Register for our Tests</h1>
      <h2>Here is the procedure</h2>
      <ul>
        <li>Send money at one of these bank accounts</li>
        <li>Enter your valid email and name and upload the screenshot</li>
        <li>Email must be valid</li>
        <li>We'll register you within 24 hours</li>
      </ul>

      {/* @Register Form */}
      <RegisterForm />
    </main>
  );
}
