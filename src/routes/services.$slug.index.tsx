import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import { SERVICES, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug/")({
  loader: ({ params }): { service: Service } => {
    const service = SERVICES[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.service ? `${loaderData.service.title} — Pink Peach` : "Service — Pink Peach";
    const description = loaderData?.service?.intro ?? "Pink Peach service.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-ivory text-noir grid place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-5xl">Service not found</h1>
        <Link to="/" className="arrow-link mt-6 inline-flex">Back home <ArrowUpRight size={16} /></Link>
      </div>
    </div>
  ),
});

const fillers = [hero3, hero5, hero6, hero2, hero1, hero4];

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: Service };
  return (
    <main className="bg-ivory text-noir">
      <div className="container-x pt-32 pb-16">
        <Link to="/" className="arrow-link text-olive">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>

      <section className="container-sm pb-16">
        <span className="eyebrow text-orange">{service.eyebrow}</span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] mt-6"
        >
          {service.title}.
        </motion.h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-olive leading-relaxed">
          {service.intro}
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.12em] text-orange">
          {service.deliverables}
        </p>
      </section>

      <section className="container-x pb-32">
        <div className="flex items-center gap-3 mb-10">
          <span className="eyebrow text-olive">Selected Projects</span>
          <span className="text-olive text-sm">({service.projects.length})</span>
        </div>

        <div className={`grid gap-6 ${service.projects.length > 1 ? "md:grid-cols-2" : ""}`}>
          {service.projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
            >
              <Link
                to="/services/$slug/$project"
                params={{ slug: service.slug, project: p.slug }}
                className="group block"
              >
                <div className={`image-hover ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"}`}>
                  <img src={p.cover} alt={p.title} loading="lazy" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl inline-flex items-center gap-2">
                      {p.title}
                      <ArrowUpRight size={20} className="opacity-60 group-hover:opacity-100 transition" />
                    </h3>
                    <p className="text-sm text-olive mt-1">{p.client} · {p.year}</p>
                  </div>
                  <span className="pill text-olive shrink-0">{p.tag}</span>
                </div>
              </Link>
              {service.projects.length === 1 && (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {(p.images.length ? p.images : fillers).slice(0, 4).map((f, idx) => (
                    <div key={idx} className="image-hover aspect-[4/3]">
                      <img src={f} alt="" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-noir text-white py-24">
        <div className="container-sm text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Ready to make something <span className="text-orange">peachy?</span>
          </h2>
          <Link to="/" hash="contact" className="btn-primary mt-10 inline-flex" style={{ background: "var(--orange)" }}>
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
