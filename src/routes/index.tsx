import { createFileRoute } from "@tanstack/react-router";
import { FreedomFm } from "@/components/freedom-fm";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <FreedomFm />;
}
