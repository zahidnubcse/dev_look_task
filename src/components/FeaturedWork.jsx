import React from "react";
import StickyScrollAdvanced from "../ui/StickyScrollAdvanced";

const content = [
  {
    client: "Gymshark",
    category: "Digital PR",
    title: "100M+ impressions from a single campaign",
    stat: "100M+",
    statLabel: "impressions",
    tags: ["Digital PR", "Content"],
    accent: "#E8FF47",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
        <span className="text-white/10 text-[20vw] font-black">GS</span>
      </div>
    ),
  },
  {
    client: "PrettyLittleThing",
    category: "Onsite SEO",
    title: "3× organic traffic in just 6 months",
    stat: "3×",
    statLabel: "organic growth",
    tags: ["Onsite SEO", "Strategy"],
    accent: "#FF6B6B",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-rose-950 to-zinc-900 flex items-center justify-center">
        <span className="text-white/10 text-[20vw] font-black">PLT</span>
      </div>
    ),
  },
  {
    client: "boohoo",
    category: "Content Experience",
    title: "Search-first content driving real revenue",
    stat: "£4.2M",
    statLabel: "attributed revenue",
    tags: ["Content", "Data & Insights"],
    accent: "#47CAFF",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-sky-950 to-zinc-900 flex items-center justify-center">
        <span className="text-white/10 text-[20vw] font-black">boo</span>
      </div>
    ),
  },
  {
    client: "Heinz",
    category: "Digital PR",
    title: "The campaign that broke the internet",
    stat: "850+",
    statLabel: "media placements",
    tags: ["Digital PR", "Social"],
    accent: "#FFB347",
    content: (
      <div className="w-full h-full bg-gradient-to-br from-amber-950 to-zinc-900 flex items-center justify-center">
        <span className="text-white/10 text-[20vw] font-black">HNZ</span>
      </div>
    ),
  },
];

export default function FeaturedWork() {
  return (
    <section className="w-full px-4 mt-10 mb-10">
      <StickyScrollAdvanced  content={content} />
    </section>
  );
}