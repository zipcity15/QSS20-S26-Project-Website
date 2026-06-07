export default function Methods() {
  const steps = [
    {
      label: '00 → IATI Cleaning',
      detail: 'Geocode 4,900+ aid projects to Admin-1/2 boundaries. Deduplicate on project × province key.',
    },
    {
      label: '01 → IDP Cleaning',
      detail: 'Parse ~100 monthly OCHA Excel files. Deduplicate by event ID, filter to matching snapshot month.',
    },
    {
      label: '02 → Aid × Displacement Merge',
      detail: 'Vectorised 6-month rolling window: for each province-month, sum new project spend and total active spend.',
    },
    {
      label: '03 → Aid–Displacement Regression',
      detail: 'Province fixed-effects PanelOLS. Dependent: net monthly flow. Independent: log new-project spend, log active spend.',
    },
    {
      label: '04 → Displacement Analysis',
      detail: 'Summary statistics and visualisations of displacement causes, magnitudes, and province breakdown.',
    },
    {
      label: '05 → Conflict Cleaning',
      detail: 'Spatial join UCDP events to Admin-2 polygons. Aggregate deaths and incident counts to territory × month.',
    },
    {
      label: '06 → Conflict × Aid Merge',
      detail: 'Build balanced 146-territory × 72-month panel. Fractional spend allocation across active project months.',
    },
    {
      label: '07 → Aid–Violence Scatter',
      detail: 'Town-level scatter: log(aid/month) vs log(deaths/month). Categorise underserved / overserved by quartile.',
    },
    {
      label: '08 → Aid–Violence Regression',
      detail: 'Two-way FE (town + month) PanelOLS with 1-, 3-, and 6-month lagged death counts. Town-clustered SE.',
    },
    {
      label: '09 → Choropleth Map',
      detail: 'Quarterly log(aid) − log(deaths) efficiency metric per territory. Static PNGs + 24-frame animated GIF.',
    },
    {
      label: '10 → Under-served Trend',
      detail: 'OLS and Mann-Kendall trend tests on quarterly count of bottom-quartile territories. Breakpoint at Jan 2025.',
    },
  ];

  return (
    <section id="methods">
      <div className="container">
        <span className="section-label">Methods</span>
        <h2>An 11-step reproducible pipeline</h2>

        <p>
          Each notebook corresponds to exactly one task — cleaning, merging,
          modelling, or visualisation. All shared helpers live in{' '}
          <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0 4px', borderRadius: 4 }}>utils.py</code>.
          Paths are derived portably via <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0 4px', borderRadius: 4 }}>Path(__file__).resolve().parents[1]</code> —
          no hardcoded machine paths anywhere.
        </p>

        <div className="pipeline" style={{ marginTop: '2rem' }}>
          {steps.map(({ label, detail }) => (
            <div className="pipeline-step" key={label}>
              <h3>{label}</h3>
              <p>{detail}</p>
            </div>
          ))}
        </div>

        <div className="card-grid" style={{ marginTop: '2.5rem' }}>
          <div className="card">
            <h3>Aid Efficiency Metric</h3>
            <p style={{ fontSize: '0.9rem' }}>
              <code>metric = log(aid_spend + 1) − log(deaths_filled)</code><br />
              Higher = more aid per death (over-served). Lower = less aid per death
              (under-served). Quarters in the bottom 25th percentile are flagged.
            </p>
          </div>
          <div className="card">
            <h3>Death-Fill Imputation</h3>
            <p style={{ fontSize: '0.9rem' }}>
              Zero-death months use carry-forward (up to 5 months). After 6+
              consecutive zeros the series falls back to a small constant (0.5),
              preventing log(0) without assuming deaths truly ceased.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
