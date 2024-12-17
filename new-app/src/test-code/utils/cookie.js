"use server";

import { cookies } from "next/headers";

export async function setCookie(user) {
  cookies().set("user", JSON.stringify(user));
}

export async function deleteCookie() {
  cookies().delete("user");
}
