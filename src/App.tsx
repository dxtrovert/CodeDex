import { useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';

import heroGif from './assets/hero.gif';
import coursePython from './assets/course-python.gif';
import courseHtml from './assets/course-html.gif';
import courseCss from './assets/course-css.gif';
import pikacodeLogo from './assets/pikacode-logo.png';
import pokeballImg from './assets/pokeball.png';
import worldMapImg from './assets/world-map.png';
import searchSvg from './assets/search.svg';

type Course = {
  title: string;
  category: string;
  image: string;
};

const courses: Course[] = [
  { title: 'Python', category: 'data science', image: coursePython },
  { title: 'HTML', category: 'web development', image: courseHtml },
  { title: 'CSS', category: 'web development', image: courseCss },
  { title: 'AI', category: 'AI', image: courseHtml },
  { title: 'C++', category: 'computer science', image: courseCss },
  { title: 'ML', category: 'data science', image: coursePython },
];

const categories = ['popular', 'web development', 'data science', 'computer science', 'AI', 'game development'];
const courseDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra efficitur odio et blandit. Morbi faucibus justo eu imperdiet bibendum.';

function App() {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'popular' || course.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, search]);

  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="content-width nav-inner">
          <a className="brand" href="#top" aria-label="PikaCode home">
            <img src={pokeballImg} alt="Pokéball" className="brand-icon" />
            <span className="brand-text">PIKACODE</span>
          </a>

          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
            <a href="#courses" onClick={() => setMenuOpen(false)}>LEARN</a>
            <a href="#courses" onClick={() => setMenuOpen(false)}>PRACTICE</a>
            <a href="#journey" onClick={() => setMenuOpen(false)}>BUILD</a>
            <a href="#footer" onClick={() => setMenuOpen(false)}>PRICING</a>
          </nav>

          <button className="signup-button" type="button">SIGN UP</button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-gif" src={heroGif} alt="Animated pixel-art coding adventure" />
          <div className="hero-content">
            <img id="hero-title" className="hero-logo" src={pikacodeLogo} alt="PikaCode" />
            <button className="primary-button" type="button">GET STARTED</button>
            <p className="hero-tagline">THE MOST FUN AND BEGINNER-FRIENDLY WAY TO LEARN TO CODE</p>
          </div>
        </section>

        <section className="courses-section" id="courses" aria-labelledby="courses-title">
          <div className="content-width">
            <h2 id="courses-title">EXPLORE 250+ HOURS OF FREE INTERACTIVE CODING LESSONS</h2>
            <div className="course-controls">
              <label className="search-box">
                <span className="sr-only">Search courses</span>
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="search" />
                <img src={searchSvg} alt="Search" className="search-icon" />
              </label>
              <div className="category-list" aria-label="Course categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={activeCategory === category ? 'category active' : 'category'}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="course-grid">
              {visibleCourses.map((course) => (
                <article className="course-card" key={course.title}>
                  <img src={course.image} alt={course.title} className="course-art-img" />
                  <div className="course-copy">
                    <span className="course-label">course</span>
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-desc">{courseDescription}</p>
                  </div>
                </article>
              ))}
            </div>

            {visibleCourses.length === 0 && <p className="empty-state">No courses match your search.</p>}

            <button className="explore-button" type="button">EXPLORE MORE</button>
          </div>
        </section>

        <section className="journey-section" id="journey" aria-labelledby="journey-title">
          <div className="content-width">
            <h2 id="journey-title">
              JOIN OVER A MILLION LEARNERS IN A JOURNEY THROUGH THE WORLD OF PROGRAMMING
            </h2>
            <div className="map-container">
              <img className="map-image" src={worldMapImg} alt="World map showing the PikaCode learning path" />
            </div>
            <dl className="stats">
              <div>
                <dt className="mint">1M+</dt>
                <dd>LEARNERS</dd>
              </div>
              <div>
                <dt className="yellow">100+</dt>
                <dd>COURSES</dd>
              </div>
              <div>
                <dt className="pink">3M+</dt>
                <dd>EXERCISES</dd>
              </div>
              <div>
                <dt className="green">84K+</dt>
                <dd>BUILDS</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="content-width footer-inner">
          <div className="footer-brand">
            <img src={pokeballImg} alt="Pokéball" className="brand-icon" />
            <span className="brand-text">PIKACODE</span>
          </div>
          <div className="footer-columns">
            <FooterColumn title="Company" links={['About', 'Blog', 'Shop', 'Community', 'Help Center', 'Pricing', 'For Schools']} />
            <FooterColumn title="Practice" links={['Challenges', 'Projects', '#30NitesOfCode']} />
            <FooterColumn title="Courses" links={['All Courses', 'Python', 'Intermediate Python', 'NumPy', 'SQL', 'GenAI', 'Pandas', 'Matplotlib']} />
            <FooterColumn links={['Machine Learning', 'HTML', 'CSS', 'JavaScript', 'Intermediate JavaScript']} />
            <FooterColumn links={['React', 'Node.js', 'p5.js', 'Command Line', 'Git & GitHub', 'GitHub Copilot', 'C++', 'C#', 'Java', 'Data Structures & Algorithms', 'Phaser', 'Lua', 'UI/UX Design']} />
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, links }: { title?: string; links: string[] }) {
  return (
    <div className="footer-column">
      {title ? <h3>{title}</h3> : <div style={{ height: '37px' }} />}
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#top">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
