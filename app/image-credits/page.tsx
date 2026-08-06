export default function ImageCredits() {
  return (
    <main style={{ minHeight: "100vh", background: "#07130f", color: "#fff", padding: "80px 7vw" }}>
      <p style={{ color: "#e2b53e", letterSpacing: ".18em", textTransform: "uppercase", fontSize: 12 }}>BULTAUN website</p>
      <h1 style={{ fontSize: "clamp(42px,6vw,82px)", lineHeight: 1.05, maxWidth: 900 }}>Image Credits & Licensing</h1>
      <p style={{ maxWidth: 760, color: "#c2cdc8", lineHeight: 1.8 }}>The following third-party images are used to present the Wau–Bulolo region accurately while BULTAUN develops its own corporate photography library.</p>

      <section style={{ maxWidth: 900, marginTop: 60, display: "grid", gap: 30 }}>
        <article style={{ padding: 30, border: "1px solid rgba(226,181,62,.35)", background: "rgba(255,255,255,.03)" }}>
          <h2>Wau–Bulolo aerial landscape</h2>
          <p style={{ color: "#c2cdc8", lineHeight: 1.7 }}>Aerial photograph of mountain terrain between Bulolo and Wau, Papua New Guinea. Creator: Sherwin John Carlquist. Used under Creative Commons Attribution 4.0 International. The website applies cropping, colour overlays and tonal treatment.</p>
          <a href="https://commons.wikimedia.org/wiki/File:(Aerial_view_of_the_topography_of_Papua_New_Guinea)_-_DPLA_-_41f643be8659067f709272acd3904ca0.jpg" target="_blank" rel="noreferrer" style={{ color: "#f0c85d" }}>View source and licence</a>
        </article>

        <article style={{ padding: 30, border: "1px solid rgba(226,181,62,.35)", background: "rgba(255,255,255,.03)" }}>
          <h2>Bulolo satellite view</h2>
          <p style={{ color: "#c2cdc8", lineHeight: 1.7 }}>NASA World Wind satellite imagery of Bulolo. The source file is identified as public domain. The website applies cropping, overlays and location labels.</p>
          <a href="https://commons.wikimedia.org/wiki/File:Bulolo.png" target="_blank" rel="noreferrer" style={{ color: "#f0c85d" }}>View source and public-domain statement</a>
        </article>

        <article style={{ padding: 30, border: "1px solid rgba(226,181,62,.35)", background: "rgba(255,255,255,.03)" }}>
          <h2>Bulolo mining heritage archive</h2>
          <p style={{ color: "#c2cdc8", lineHeight: 1.7 }}>Historical photograph of the Bulolo Gold Dredging Company in Morobe District. Australian War Memorial accession 132916. The item is marked copyright expired and public domain.</p>
          <a href="https://www.awm.gov.au/collection/C260624" target="_blank" rel="noreferrer" style={{ color: "#f0c85d" }}>View archival record</a>
        </article>
      </section>

      <a href="/" style={{ display: "inline-block", marginTop: 50, color: "#f0c85d" }}>← Return to BULTAUN homepage</a>
    </main>
  );
}
