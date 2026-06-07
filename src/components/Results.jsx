import Figure from './Figure.jsx';

export default function Results() {
  return (
    <section id="results">
      <div className="container">
        <span className="section-label">Results</span>
        <h2>Four interlocking findings</h2>

        {/* ── Finding 1: Choropleth ── */}
        <h3 style={{ color: 'var(--gold)', marginTop: '2rem' }}>
          1 · Aid efficiency varies dramatically across territories
        </h3>
        <p>
          The choropleth maps reveal a stark spatial pattern: territories with the
          most intense conflict (dark crimson) cluster along the north-eastern border,
          while higher aid-per-death ratios (light yellow) appear in more accessible
          urban centres. The gap widened substantially by the end of the analysis period.
        </p>

        <div className="figure-pair">
          <Figure
            src="/figures/drc_choropleth_start.png"
            caption="Aid efficiency — Q1 2021 (start of analysis period)"
          />
          <Figure
            src="/figures/drc_choropleth_end.png"
            caption="Aid efficiency — Q4 2026 (end of analysis period)"
          />
        </div>

        <Figure
          src="/figures/drc_choropleth.gif"
          caption="Animated choropleth — quarterly aid efficiency across all 146 territories, 2021–2026. Dark crimson = under-served; light yellow = over-served."
        />

        {/* ── Finding 2: Scatter ── */}
        <h3 style={{ color: 'var(--gold)', marginTop: '2.5rem' }}>
          2 · Aid and violence are weakly correlated at the town level
        </h3>
        <p>
          Plotting average aid spend vs. average deaths per month reveals a large
          cluster of towns that receive almost no aid regardless of conflict level.
          Underserved towns (bottom quartile of log($/death)) include some of the
          highest-death territories; overserved towns tend to be accessible provincial
          capitals.
        </p>
        <Figure
          src="/figures/scatter_conflict_aid.png"
          caption="Log average aid spend vs. log average deaths per month by territory. Red = underserved; orange = overserved; blue = other. Top-5 extreme towns labelled."
        />

        {/* ── Finding 3: Violence → Aid regression ── */}
        <h3 style={{ color: 'var(--gold)', marginTop: '2.5rem' }}>
          3 · Violence negatively predicts future aid (counterintuitively)
        </h3>
        <p>
          Two-way fixed-effects regressions show that a 1-unit increase in
          log(deaths) at lag 1, 3, and 6 months is associated with a{' '}
          <strong>decrease</strong> in log(aid spend) — all coefficients significant
          at p &lt; 0.05. This suggests aid does not rapidly re-allocate toward emerging
          hotspots; if anything, sudden violence disrupts existing project activity.
        </p>
        <Figure
          src="/figures/violence_aid_regression.png"
          caption="TWFE regression: log(lagged deaths) → log(aid spend). Negative coefficients across all three lag specifications (town + month FE, clustered SE)."
        />

        {/* ── Finding 4: Under-served trend ── */}
        <h3 style={{ color: 'var(--gold)', marginTop: '2.5rem' }}>
          4 · The USAID freeze sharply accelerated under-service
        </h3>
        <p>
          The count of bottom-quartile (under-served) territories was statistically
          stable at ~27 per quarter through Q4 2024. After the Trump administration's
          January 2025 USAID freeze, the count surged to 58 by Q4 2026 — a{' '}
          <strong>+1.0 percentage point per quarter</strong> post-break slope
          (p &lt; 0.001), versus a flat −0.01 ppt/quarter pre-break trend (p = 0.92).
        </p>

        <div className="callout">
          Mann-Kendall test: τ = 0.535, p = 0.0004 — strong monotonic increase in
          under-served territory count over the full 2021–2026 window.
        </div>

        <Figure
          src="/figures/underserved_trend.png"
          caption="% of territories classified as under-served each quarter. Black dashed line = pre-2025 trend (flat); gold dashed line = post-freeze trend (steep rise). Vertical line marks Jan 2025."
        />

        <Figure
          src="/figures/aid_displacement_regression.png"
          caption="Aid spending and net displacement flow — province fixed-effects regression. Neither log(new project spend) nor log(total active spend) significantly predicts displacement flows at the province level."
        />
      </div>
    </section>
  );
}
