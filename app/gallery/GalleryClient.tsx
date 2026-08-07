"use client";

import { useEffect, useState } from "react";

const images = [
  { src: "/hero-wau-bulolo.jpg", title: "Wau–Bulolo landscape", caption: "Regional mountain landscape illustrating BULTAUN's initial geographic focus.", category: "Landscapes" },
  { src: "/river-landscape.jpg", title: "River and customary land", caption: "River landscape reflecting the environmental and landowner context of alluvial mining development.", category: "Landscapes" },
  { src: "/excavator-operations.jpg", title: "Excavator operations", caption: "Field equipment illustrating earthmoving capability used in alluvial mining projects.", category: "Operations" },
  { src: "/wash-plant.jpg", title: "Alluvial wash plant", caption: "Processing equipment illustrating gravity-based gold recovery operations.", category: "Operations" },
  { src: "/workers-field.jpg", title: "Field activity", caption: "People working in a field environment associated with small-scale mining activity.", category: "Operations" },
  { src: "/cat-excavator.jpg", title: "Mining equipment", caption: "Heavy equipment suitable for site preparation and material movement.", category: "Equipment" },
  { src: "/gold-nuggets-hand.jpg", title: "Natural gold", caption: "Gold recovered from alluvial material.", category: "Gold" },
  { src: "/gold-concentrate.jpg", title: "Gold concentrate", caption: "Concentrated gold-bearing material prior to final cleaning or refining.", category: "Gold" },
  { src: "/gold-on-rock.jpg", title: "Gold-bearing material", caption: "Visible gold presented with natural rock material.", category: "Gold" },
  { src: "/gold-bar.jpg", title: "Finished gold product", caption: "A finished gold product illustrating a possible downstream form after processing and refining.", category: "Gold" },
];

const categories = ["All", "Landscapes", "Operations", "Equipment", "Gold"];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof images)[number] | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const visible = activeCategory === "All" ? images : images.filter((image) => image.category === activeCategory);

  return (
    <>
      <div className="galleryFilters" aria-label="Gallery categories">
        {categories.map((category) => (
          <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className="photoGrid interactiveGallery">
        {visible.map((image, index) => (
          <button className={`photoCard galleryButton ${index < 2 && activeCategory === "All" ? "wide" : ""}`} key={image.src} onClick={() => setSelected(image)}>
            <img src={image.src} alt={image.title} loading="lazy" />
            <span className="galleryCategory">{image.category}</span>
            <span className="galleryCaption"><strong>{image.title}</strong><small>{image.caption}</small></span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button className="lightboxClose" aria-label="Close image" onClick={() => setSelected(null)}>×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={selected.src} alt={selected.title} />
            <figcaption><strong>{selected.title}</strong><span>{selected.caption}</span></figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
