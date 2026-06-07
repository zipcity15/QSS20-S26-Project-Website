import Figure from './Figure.jsx';

export default function DataSection() {
  return (
    <section id="data">
      <div className="container">
        <span className="section-label">Data</span>
        <h2>Three independent data streams, two geographic scopes</h2>

        <p>
          The project runs two parallel analyses with different geographic coverage.
          The <strong>aid–displacement</strong> analysis focuses on eastern DRC
          (Nord-Kivu, Sud-Kivu, Ituri), where IDP monitoring data is available.
          The <strong>aid–violence</strong> analysis is <strong>national</strong> —
          covering all 146 Admin-2 territories across the DRC — using geocoded
          conflict events and IATI aid data.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>🌐 IATI Aid Registry</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>
              International Aid Transparency Initiative · National coverage
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              4,900+ humanitarian projects nationwide with GPS coordinates, start/end
              dates, and total disbursements. Spend is allocated fractionally across
              each month a project is active.
            </p>
          </div>
          <div className="card">
            <h3>🏠 OCHA IDP Monitoring</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>
              UN OCHA · Eastern DRC only (3 provinces)
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Monthly Excel snapshots of displacement departures and returnees by
              province across Nord-Kivu, Sud-Kivu, and Ituri. ~100 files processed;
              deduplication by event ID ensures each movement is counted once.
            </p>
          </div>
          <div className="card">
            <h3>⚔️ UCDP Conflict Events</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>
              Uppsala Conflict Data Program (GED) · National coverage
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Geocoded violent incidents 2021–2024 with best-estimate death counts,
              spanning all of DRC. Spatially joined to Admin-2 polygons via
              point-in-polygon + nearest-neighbour fallback.
            </p>
          </div>
        </div>

        <div className="figure-pair">
          <Figure
            src="/figures/idp_net_flow_monthly.png"
            caption="Net monthly IDP flow (displaced − returnees) in eastern DRC, 2021–2026. Red = net displacement; blue = net return. Eastern provinces only."
          />
          <Figure
            src="/figures/displaced_returnees_by_province.png"
            caption="Cumulative displaced persons vs. returnees by province (eastern DRC). Nord-Kivu accounts for the largest share of both."
          />
        </div>

        <Figure
          src="/figures/displacement_causes_top10.png"
          caption="Top causes of displacement in eastern DRC. Armed attacks and intercommunal conflict dominate."
        />

        <div className="callout gold">
          <strong>Spatial join methodology:</strong> Aid project GPS points are assigned
          to Admin-1 provinces and Admin-2 territories using point-in-polygon joins with
          a 55 km nearest-neighbour fallback for border points — implemented in{' '}
          <code>assign_admin_level()</code> in <code>utils.py</code>.
        </div>
      </div>
    </section>
  );
}
