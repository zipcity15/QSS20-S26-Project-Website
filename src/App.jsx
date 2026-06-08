import './index.css';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Question from './components/Question.jsx';
import DataSection from './components/DataSection.jsx';
import Methods from './components/Methods.jsx';
import Results from './components/Results.jsx';
import Takeaways from './components/Takeaways.jsx';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Question />
      <DataSection />
      <Methods />
      <Results />
      <Takeaways />
      <footer>
        <p>
          Jack Zipper · QSS 20 Spring 2026 ·{' '}
          <a
            href="https://github.com/zipcity15/QSS20-S26-Final_Project-Jack_Zipper"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository ↗
          </a>
        </p>
        <p style={{ marginTop: '0.3rem' }}>
          Data: IATI · OCHA · ACLED · OCHA COD Shapefiles
        </p>
      </footer>
    </>
  );
}

export default App;
