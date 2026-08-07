import { PageHero, Section, SiteShell } from "../components/SiteShell";
import GalleryClient from "./GalleryClient";

export default function Gallery(){
  return <SiteShell>
    <PageHero eyebrow="Media Centre" title="Land, Operations and Gold" intro="An authentic visual collection illustrating the landscapes, equipment, field activity and gold products associated with BULTAUN's development vision." />
    <section className="goldGallery">
      <div className="goldGalleryInner">
        <p className="eyebrow dark">Photo gallery</p>
        <h2>A Visual Story of Responsible Mining Development</h2>
        <p className="galleryNote">Browse by category, then select any image to open a larger view. These photographs illustrate the regional environment and the types of alluvial mining activity, equipment and gold products relevant to BULTAUN's proposed business model. They do not, by themselves, confirm ownership or operation of any depicted project or asset.</p>
        <GalleryClient />
        <p className="photoDisclaimer">Publication rights, locations and ownership descriptions should be verified before the website is promoted publicly or the images are used in investor materials.</p>
      </div>
    </section>
    <Section dark title="Build the BULTAUN Visual Library"><p>As formal projects develop, this gallery can be expanded with approved project photography, landowner consultations, environmental monitoring, training, workforce development and community initiatives.</p><a className="pageCta" href="/contact">Contact BULTAUN</a></Section>
  </SiteShell>
}
