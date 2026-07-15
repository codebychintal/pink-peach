import { createFileRoute, Outlet, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = SERVICES[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  component: () => <Outlet />,
  notFoundComponent: () => (
    <div className="min-h-screen bg-ivory text-noir grid place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-5xl">Service not found</h1>
        <Link to="/" className="arrow-link mt-6 inline-flex">
          Back home <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  ),
});
