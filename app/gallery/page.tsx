import { PageHero, Section, SiteShell } from "../components/SiteShell";

const images = [
  ["/hero-wau-bulolo.jpg", "Wau–Bulolo landscape", "Regional mountain landscape illustrating BULTAUN's initial geographic focus."],
  ["/river-landscape.jpg", "River and customary land", "River landscape reflecting the environmental and landowner context of alluvial mining development."],
  ["/excavator-operations.jpg", "Excavator operations", "Field equipment illustrating the type of earthmoving capability used in alluvial mining projects."],
  ["/wash-plant.jpg", "Alluvial wash plant", "Processing equipment illustrating gravity-based gold recovery operations."],
  ["/workers-field.jpg", "Field activity", "People working in a field environment associated with small-scale mining activity."],
  ["/cat-excavator.jpg", "Mining equipment", "Heavy equipment suitable for site preparation and material movement."],
  ["/gold-nuggets-hand.jpg", "Natural gold", "Gold recovered from alluvial material."],
  ["/gold-concentrate.jpg", "Gold concentrate", "Concentrated gold-bearing material prior to final cleaning or refining."],
  ["/gold-on-rock.jpg", "Gold-bearing material", "Visible gold presented with natural rock material."],
  ["/gold-bar.jpg", "Finished gold product", "A finished gold product illustrating a possible downstream form after processing and refining."],
];

export default function Gallery(){
  return <SiteShell>
    <PageHero eyebrow="Media Centre" title="Land, Operations and Gold" intro="An authentic visual collection illustrating the landscapes, equipment, field activity and gold products associated with BULTAUN's development vision." />
    <section className="goldGallery">
      <div className="goldGalleryInner">
        <p className="eyebrow dark">Photo gallery</p>
        <h2>A Visual Story of Responsible Mining Development</h2>
        <p className="galleryNote">These photographs illustrate the regional environment and the types of alluvial mining activity, equipment and gold products relevant to BULTAUN's proposed business model. They do not, by themselves, confirm ownership or operation of any depicted project or asset.</p>
        <div className="photoGrid">
          {images.map(([src,title,caption],index)=><figure className={`photoCard ${index<2?'wide':''}`} key={src}><img src={src} alt={title} loading="lazy"/><figcaption><strong>{title}</strong><br/>{caption}</figcaption></figure>)}
        </div>
        <p className="photoDisclaimer">Publication rights, locations and ownership descriptions should be verified before the website is promoted publicly or the images are used in investor materials.</p>
      </div>
    </section>
    <Section dark title="Build the BULTAUN Visual Library"><p>As formal projects develop, this gallery can be expanded with approved project photography, landowner consultations, environmental monitoring, training, workforce development and community initiatives.</p><a className="pageCta" href="/contact">Contact BULTAUN</a></Section>
  </SiteShell>
}
