import lunett1 from "@/assets/lunett-1.webp.asset.json";
import lunett2 from "@/assets/lunett-2.webp.asset.json";
import lunett3 from "@/assets/lunett-3.webp.asset.json";
import lunett4 from "@/assets/lunett-4.webp.asset.json";
import lunett5 from "@/assets/lunett-5.webp.asset.json";
import lunett6 from "@/assets/lunett-6.webp.asset.json";

import contentCreation1 from "@/assets/content-creation-1.jpg.asset.json";
import contentCreation2 from "@/assets/content-creation-2.jpg.asset.json";
import postProductionAsset from "@/assets/post-production.jpg.asset.json";
import advertisingAsset from "@/assets/advertising.jpg.asset.json";
import adQnt from "@/assets/ad-qnt.jpeg.asset.json";
import adTower28 from "@/assets/ad-tower28.jpeg.asset.json";
import adSuperoot from "@/assets/ad-superoot.jpeg.asset.json";
import adRhode from "@/assets/ad-rhode.jpeg.asset.json";

import pulpa1 from "@/assets/pulpa-1.webp.asset.json";
import pulpa2 from "@/assets/pulpa-2.webp.asset.json";
import pulpa3 from "@/assets/pulpa-3.webp.asset.json";
import pulpa4 from "@/assets/pulpa-4.webp.asset.json";
import pulpa5 from "@/assets/pulpa-5.webp.asset.json";

import contur1 from "@/assets/contur-1.webp.asset.json";
import contur2 from "@/assets/contur-2.webp.asset.json";
import contur3 from "@/assets/contur-3.webp.asset.json";
import contur4 from "@/assets/contur-4.webp.asset.json";
import contur5 from "@/assets/contur-5.webp.asset.json";
import contur6 from "@/assets/contur-6.webp.asset.json";

import nocaff1 from "@/assets/nocaff-1.jpg.asset.json";
import nocaff32 from "@/assets/nocaff-3-2.jpg.asset.json";
import nocaff4 from "@/assets/nocaff-4.jpg.asset.json";
import nocaff5 from "@/assets/nocaff-5.jpg.asset.json";
import nocaff6 from "@/assets/nocaff-6.jpg.asset.json";
import nocaff7 from "@/assets/nocaff-7.jpg.asset.json";
import nocaff8 from "@/assets/nocaff-8.jpg.asset.json";
import nocaff9 from "@/assets/nocaff-9.jpg.asset.json";
import nocaff10 from "@/assets/nocaff-10.jpg.asset.json";
import nocaffFeatured from "@/assets/nocaff-featured.jpg.asset.json";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  cover: string;
  tag: string;
  images: string[];
};

export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  deliverables: string;
  projects: Project[];
};

// Featured cover = can-with-glasses shot. Rest = gallery.
const nocaffGallery = [
  nocaff6.url,
  nocaff32.url,
  nocaff1.url,
  nocaff9.url,
  nocaff10.url,
  nocaff5.url,
  nocaff4.url,
  nocaff7.url,
  nocaff8.url,
];

export const SERVICES: Record<string, Service> = {
  "brand-identity": {
    slug: "brand-identity",
    eyebrow: "Service 01",
    title: "Brand Identity",
    intro:
      "Your brand is more than a logo. We build brand identities from strategy to visual system — naming, marks, color, typography, and tone — so what people see, hear, and feel about you is unmistakably yours.",
    deliverables:
      "Brand Strategy · Logo & Visual Identity · Color & Typography · Guidelines · Tone of Voice",
    projects: [
      {
        slug: "no-caff",
        title: "No-CAFF",
        client: "No-CAFF",
        year: "2025",
        cover: nocaffFeatured.url,
        tag: "Beverage · Identity",
        images: nocaffGallery,
      },
      { slug: "pulpa", title: "PULPA", client: "PULPA", year: "2025", cover: pulpa5.url, tag: "Beverage · Identity", images: [pulpa1.url, pulpa2.url, pulpa3.url, pulpa4.url] },
      { slug: "contur", title: "CONTUR", client: "CONTUR", year: "2024", cover: contur1.url, tag: "F&B · Identity", images: [contur2.url, contur3.url, contur4.url, contur5.url, contur6.url] },
      { slug: "lunett", title: "LUNETT", client: "LUNETT", year: "2024", cover: lunett1.url, tag: "Eyewear · Identity", images: [lunett2.url, lunett3.url, lunett4.url, lunett5.url, lunett6.url] },
    ],
  },
  "content-production": {
    slug: "content-production",
    eyebrow: "Service 02",
    title: "Content Production",
    intro:
      "Scroll-stopping photo, video, and copy tailored for every platform — the kind of content that builds a world around your brand instead of just filling a feed.",
    deliverables:
      "Photography · Videography · Copywriting · Social Content · Campaign Assets · Brand Films",
    projects: [
      { slug: "red-room", title: "Red Room Editorial", client: "Vogue Editorial", year: "2025", cover: contentCreation1.url, tag: "Editorial · Photo & Video", images: [contentCreation2.url] },
    ],
  },
  "post-production": {
    slug: "post-production",
    eyebrow: "Service 03",
    title: "Post-Production & Editing",
    intro:
      "Rough footage becomes polished, powerful stories in our hands — short-form social cuts to long-form brand films, obsessed over frame by frame.",
    deliverables:
      "Video Editing · Color Grading · Motion Graphics · Sound Design · Reels & Short-Form · Brand Film Post",
    projects: [
      { slug: "watermelon-summer", title: "Watermelon Summer", client: "Fresh Co.", year: "2025", cover: postProductionAsset.url, tag: "Brand Film · Post", images: [] },
    ],
  },
  "advertising": {
    slug: "advertising",
    eyebrow: "Service 04",
    title: "Advertising Campaigns",
    intro:
      "Big ideas that move people — and move product. From concept through media, creative, and reporting, we build campaigns to perform.",
    deliverables:
      "Campaign Strategy · Creative · Digital (Meta, Google, TikTok) · OOH & Print · Reporting",
    projects: [
      { slug: "rhode-billboards", title: "Rhode Billboard Series", client: "Rhode", year: "2025", cover: advertisingAsset.url, tag: "OOH · Campaign", images: [adRhode.url, adQnt.url, adTower28.url, adSuperoot.url] },
    ],
  },
};
