import ProfileDropdown from "./profile-dropdown";
import { getSession } from "@/app/actions/auth";

//! auth shit will be handled later
export default async function UserProfile() {
  const { error, data } = await getSession();
  if (error) {
    console.log(error);
    return null;
  }

  console.log(data.user);

  const name = data.user.user_metadata.name;
  const email = data.user.email;
  return <ProfileDropdown name={name} email={email as string} />;
}
