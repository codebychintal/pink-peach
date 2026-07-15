import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { SERVICES, type Project, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug/$project")({
  loader: ({ params }): { service: Service; project: Project } => {
    const service = SERVICES[params.slug];
    if (!service) throw notFound();
    const project = service.projects.find((p) => p.slug === params.project);
    if (!project) throw notFound();
    return { service, project };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.project
      ? `${loaderData.project.title} — Pink Peach`
      : "Project — Pink Peach";
    const description = loaderData?.project
      ? `${loaderData.project.title} for ${loaderData.project.client}. ${loaderData.service.title}.`
      : "Pink Peach project.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(loaderData?.project?.cover
          ? [
              { property: "og:image", content: loaderData.project.cover },
              { name: "twitter:card", content: "summary_large_image" },
            ]
          : []),
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-ivory text-noir grid place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-5xl">Project not found</h1>
        <Link to="/" className="arrow-link mt-6 inline-flex">
          Back home <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const { service, project } = Route.useLoaderData() as { service: Service; project: Project };
  const gallery = project.images.length ? project.images : [];

  return (
    <main className="bg-ivory text-noir">
      <div className="container-x pt-32 pb-10">
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="arrow-link text-olive"
        >
          <ArrowLeft size={16} /> Back to {service.title}
        </Link>
      </div>

      <section className="container-sm pb-14">
        <span className="eyebrow text-orange">{project.tag}</span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] mt-6"
        >
          {project.title}.
        </motion.h1>
        <p className="mt-6 text-sm uppercase tracking-[0.14em] text-olive">
          {project.client} · {project.year}
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="image-hover aspect-[4/5] md:aspect-[16/10] max-h-[85vh] overflow-hidden">
          <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="container-x pb-32">
          <div className="flex items-center gap-3 mb-10">
            <span className="eyebrow text-olive">Gallery</span>
            <span className="text-olive text-sm">({gallery.length})</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.08 }}
                className={`image-hover ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"}`}
              >
                <img src={src} alt={`${project.title} ${i + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-noir text-white py-24">
        <div className="container-sm text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Ready to make something <span className="text-orange">peachy?</span>
          </h2>
          <Link
            to="/"
            hash="contact"
            className="btn-primary mt-10 inline-flex"
            style={{ background: "var(--orange)" }}
          >
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
