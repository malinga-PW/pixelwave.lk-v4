import { redirect } from "next/navigation";

// /ai-chatbot redirects to homepage (content now merged into home)
export default function AIChatbotRedirect() {
  redirect("/");
}
