import Figure from './Figure.jsx';

export default function Results() {
  return (
    <section id="results">
      <div className="container">
        <span className="section-label">Results</span>
        <h2>Five interlocking findings</h2>

        {/* ── Finding 1: Choropleth — national ── */}
        <h3 style={{ color: 'var(--gold)', marginTop: '2rem' }}>
          1 · Aid efficiency varies dramatically across DRC territories
        </h3>
        <p>
          Mapping log(aid spend) − log(deaths) across all 164 national Admin-2
          territories reveals a stark spatial pattern: territories with the most intense
          conflict (dark crimson) cluster along the north-eastern border, while higher
          aid-per-death ratios (light yellow) concentrate in more accessible urban
          centres. The gap widened substantially by the end of the analysis period.{' '}
          <em style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>National scope.</em>
        </p>

        <div className="figure-pair">
          <Figure
            src="/figures/drc_choropleth_start.png"
            caption="Aid efficiency across all DRC territories — Q1 2021"
          />
          <Figure
            src="/figures/drc_choropleth_end.png"
            caption="Aid efficiency across all DRC territories — Q4 2026"
          />
        </div>

        <Figure
          src="/figures/drc_choropleth.gif"
          caption="Animated choropleth — quarterly aid efficiency across all 146 national DRC territories, 2021–2026. Dark crimson = under-served; light yellow = over-served."
        />

        {/* ── Finding 2: Scatter — national ── */}
        <h3 style={{ color: 'var(--gold)', marginTop: '2.5rem' }}>
          2 · Aid and violence are weakly correlated at the town level
        </h3>
        <p>
          Across all DRC territories, plotting average aid spend vs. average deaths
          per month reveals a large cluster of towns that receive almost no aid
          regardless of conflict level. Underserved towns (bottom quartile of
          log($/death)) include some of the highest-death territories; overserved towns
          tend to be accessible provincial capitals.{' '}
          <em style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>National scope.</em>
        </p>
        <Figure
          src="/figures/scatter_conflict_aid.png"
          caption="Log average aid spend vs. log average deaths per month — all DRC territories. Red = underserved; orange = overserved; blue = other. Top-5 extreme towns labelled."
        />

        {/* ── Finding 3: Violence → Aid regression — national ── */}
        <h3 style={{ color: 'var(--gold)', marginTop: '2.5rem' }}>
          3 · Violence negatively predicts future aid (counterintuitively)
        </h3>
        <p>
          Across all national Admin-2 territories, two-way fixed-effects regressions
          show that a 1-unit increase in log(deaths) at lag 1, 3, and 6 months is
          associated with a <strong>decrease</strong> in log(aid spend) — none of the
          coefficients are statistically significant (p = 0.24, 0.56, 0.26). Aid does
          not rapidly re-allocate toward emerging hotspots; if anything, the negative
          point estimates suggest violence may disrupt existing project activity.{' '}
          <em style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>National scope.</em>
        </p>
        <Figure
          src="/figures/violence_aid_regression.png"
          caption="TWFE regression: log(lagged deaths) → log(aid spend), all DRC territories. Negative coefficients across all three lag specifications (town + month FE, clustered SE)."
        />

        {/* ── Finding 4: Under-served trend — national ── */}
        <h3 style={{ color: 'var(--gold)', marginTop: '2.5rem' }}>
          4 · The USAID freeze sharply accelerated under-service nationally
        </h3>
        <p>
          Across all DRC territories, the share of under-served territories was
          statistically stable (~25%) through Q4 2024 — pre-break slope of
          −0.085%/quarter (p = 0.23). After the Trump administration's January 2025
          USAID freeze, the share surged to 44% by Q4 2026 — a{' '}
          <strong>+1.0 percentage point per quarter</strong> post-break slope (p &lt; 0.001),
          nearly doubling the under-served share in under two years.{' '}
          <em style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>National scope.</em>
        </p>

        <div className="callout">
          Mann-Kendall test: τ = 0.497, p = 0.0009 — strong monotonic increase in
          under-served territory share over the full 2021–2026 window.
        </div>

        <Figure
          src="/figures/underserved_trend.png"
          caption="% of DRC territories classified as under-served each quarter. Black dashed = pre-2025 trend (flat); gold dashed = post-freeze trend (steep rise). Vertical line marks Jan 2025."
        />

        {/* ── Finding 5: Aid–Displacement — eastern DRC only ── */}
        <h3 style={{ color: 'var(--gold)', marginTop: '2.5rem' }}>
          5 · Aid and displacement flows are decoupled in eastern DRC
        </h3>
        <p>
          In a separate province-level analysis focused on the three eastern provinces
          (Nord-Kivu, Sud-Kivu, Ituri), neither new project aid spend nor total active
          spend significantly predicts net monthly displacement flows. Aid timing and
          targeting appear to miss the displacement cycle entirely.{' '}
          <em style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>Eastern DRC only.</em>
        </p>
        <Figure
          src="/figures/aid_displacement_regression.png"
          caption="Province FE regression: aid spending → net displacement flow (eastern DRC only). Neither spend variable reaches significance."
        />
      </div>
    </section>
  );
}
