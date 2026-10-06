import { ContactSection } from "@/components/contact/contact-section";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Contact RURA",
  "Contact RURA, a fictional industrial technology company. This form is a demo and does not send messages.",
  "/contact",
);

export default function ContactPage() {
  return <ContactSection as="h1" lines={["Have a", "question?"]} full />;
}
