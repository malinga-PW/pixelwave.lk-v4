import { redirect } from "next/navigation";

// /home redirects to the Ai Agency homepage (/)
export default function HomeRedirect() {
  redirect("/");
}
