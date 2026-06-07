export default function Question() {
  return (
    <section id="question">
      <div className="container">
        <span className="section-label">Research Question</span>
        <h2>Does humanitarian aid reach the communities that need it most?</h2>

        <p>
          Eastern DRC — encompassing Nord-Kivu, Sud-Kivu, and Ituri — is one of the
          world's longest-running humanitarian crises. Armed groups, intercommunal
          violence, and chronic displacement have displaced millions over decades.
          Billions of dollars in international aid flow into the region each year, yet
          anecdotal accounts suggest the distribution is deeply uneven.
        </p>

        <div className="callout">
          <strong>Core question:</strong> Is aid spending geographically correlated with
          conflict intensity and displacement — and if not, which communities are being
          systematically under-served?
        </div>

        <p>
          A secondary question emerged from real-world events during the data collection
          period: the Trump administration's January 2025 USAID freeze dramatically cut
          U.S.-backed humanitarian funding. Did this shock increase the number of
          under-served territories, and can we detect that signal in the data?
        </p>

        <div className="card-grid" style={{ marginTop: '1.5rem' }}>
          {[
            {
              title: 'Aid–Displacement Link',
              body: 'Do provinces receiving more aid experience lower net displacement flows? (Province FE panel regression)',
            },
            {
              title: 'Aid–Violence Link',
              body: 'Does lagged conflict violence predict future aid spending at the territory level? (Two-way FE regression)',
            },
            {
              title: 'Under-served Trend',
              body: 'Is the share of under-served territories growing over time, and did the USAID freeze accelerate that trend?',
            },
          ].map(({ title, body }) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
