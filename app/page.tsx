'use client';

/* eslint-disable @next/next/no-img-element -- native images keep the GitHub Pages export dependency-free */

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.16 },
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));

    let frame = 0;
    const updateScrollState = () => {
      frame = 0;
      const root = document.documentElement;
      const max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      root.style.setProperty('--scroll-progress', String(window.scrollY / max));
      root.style.setProperty('--hero-shift', `${Math.min(window.scrollY * 0.16, 180)}px`);
      document.querySelector('.site-header')?.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollState);
    };
    updateScrollState();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="HMG home">
          <img src="/assets/hmg-logo-white.png" alt="HMG — Build Your Trust" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#outcomes">Why HMG</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#network">Network</a>
          <a href="#support">Support</a>
          <a className="nav-cta" href="#contact">Start a conversation</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">BREWING INGREDIENTS · VIETNAM</p>
          <h1>
            Ingredients for
            <span>brewing confidence.</span>
          </h1>
          <p className="hero-copy">
            HMG connects brewers with trusted hop, malt and yeast partners — then helps turn the right
            ingredients into consistent, distinctive beer.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#outcomes">Explore our approach</a>
            <a className="button button-ghost" href="#contact">Discuss your next brew</a>
          </div>
        </div>
        <div className="hero-proof" aria-label="HMG highlights">
          <div><strong>20+</strong><span>years in Vietnam</span></div>
          <div><strong>03</strong><span>ingredient pillars</span></div>
          <div><strong>08</strong><span>global partners</span></div>
        </div>
        <a className="scroll-cue" href="#outcomes" aria-label="Scroll to discover">
          <span>Scroll to discover</span><i aria-hidden="true" />
        </a>
      </section>

      <section className="outcomes section" id="outcomes">
        <div className="section-intro" data-reveal>
          <p className="eyebrow dark">START WITH THE OUTCOME</p>
          <h2>Brewers buy results — not a longer catalog.</h2>
          <p>We begin with the beer you want to make and the process you need to protect.</p>
        </div>
        <div className="outcome-grid">
          <article className="outcome-card" data-reveal>
            <span>01</span><h3>Consistency</h3>
            <p>Ingredient choices aligned with your recipe, equipment and quality targets.</p>
          </article>
          <article className="outcome-card" data-reveal>
            <span>02</span><h3>Efficiency</h3>
            <p>Technical fit that supports reliable trials, smoother operations and supply confidence.</p>
          </article>
          <article className="outcome-card" data-reveal>
            <span>03</span><h3>Differentiation</h3>
            <p>Distinct aroma, flavor and fermentation outcomes for products people remember.</p>
          </article>
        </div>
      </section>

      <section className="ingredient-preview section" id="ingredients">
        <div data-reveal>
          <p className="eyebrow dark">ONE LOCAL PARTNER</p>
          <h2>Hop. Malt. Yeast.<br />One connected decision.</h2>
        </div>
        <div className="ingredient-orbit" aria-label="Hop, malt and yeast solutions">
          <span>HOP</span><span>MALT</span><span>YEAST</span>
        </div>
      </section>

      <section className="solutions section" aria-label="Ingredient solutions">
        <article className="solution solution-hop" data-reveal>
          <div className="solution-media"><img src="/assets/story/hop-field.jpg" alt="Hop field at harvest" /></div>
          <div className="solution-copy">
            <span className="solution-number">01 / HOP</span>
            <h3>Build aroma with intention.</h3>
            <p>Start with the sensory target, then match variety, format and application to the brewhouse.</p>
            <ul><li>Aroma direction</li><li>Bitterness efficiency</li><li>Process fit</li></ul>
          </div>
        </article>
        <article className="solution solution-malt" data-reveal>
          <div className="solution-media"><img src="/assets/story/malt.jpg" alt="Specialty malt and beer color samples" /></div>
          <div className="solution-copy">
            <span className="solution-number">02 / MALT</span>
            <h3>Design flavor from the foundation.</h3>
            <p>Balance extract, color and flavor with the processing reality behind every recipe.</p>
            <ul><li>Base & specialty</li><li>Flavor architecture</li><li>Supply continuity</li></ul>
          </div>
        </article>
        <article className="solution solution-yeast" data-reveal>
          <div className="solution-media"><img src="/assets/story/beer.jpg" alt="Beer tasting glasses" /></div>
          <div className="solution-copy">
            <span className="solution-number">03 / YEAST</span>
            <h3>Turn fermentation into a signature.</h3>
            <p>Select for attenuation, aroma, timing and handling — not for a strain name alone.</p>
            <ul><li>Fermentation outcome</li><li>Strain fit</li><li>Technical handling</li></ul>
          </div>
        </article>
      </section>

      <section className="heritage section" id="network">
        <div className="heritage-head" data-reveal>
          <p className="eyebrow">BUILT OVER TIME</p>
          <h2>Global ingredients.<br />Local continuity.</h2>
          <p>Since 2005, HMG has built a focused partner network around the decisions brewers make every day.</p>
        </div>
        <div className="timeline" data-reveal>
          <article><strong>2005</strong><span>HMG established</span></article>
          <article><strong>2008</strong><span>BarthHaas partnership</span></article>
          <article><strong>2010</strong><span>Crisp Malt</span></article>
          <article><strong>2012</strong><span>Soufflet Malt</span></article>
          <article><strong>2023</strong><span>Castle Malting</span></article>
          <article><strong>2024</strong><span>Barrett Burston & WHC Lab</span></article>
        </div>
      </section>

      <section className="partner-section section">
        <div className="section-split" data-reveal>
          <div><p className="eyebrow dark">8 BRANDS · 1 LOCAL CONTACT</p><h2>A network that works as one.</h2></div>
          <p>Access established ingredient specialists without managing disconnected conversations. HMG helps connect the portfolio to your brief.</p>
        </div>
        <div className="partner-marquee" data-reveal>
          <div className="partner-track">
            {[
              ['barthhaas.png','BarthHaas'],['haas.png','Haas'],['hpa.png','Hop Products Australia'],
              ['soufflet-malt.png','Soufflet Malt'],['castle-malting.jpg','Castle Malting'],['crisp-malt.jpg','Crisp Malt'],
              ['barrett-burston.png','Barrett Burston'],['whc-lab.png','WHC Lab'],
            ].map(([file, name]) => <div className="partner-logo" key={file}><img src={`/assets/partners/${file}`} alt={name} /></div>)}
          </div>
        </div>
      </section>

      <section className="support section" id="support">
        <div className="support-gallery" aria-label="HMG technical and customer activities" data-reveal>
          <img className="gallery-main" src="/assets/story/team.jpg" alt="HMG team technical activity" />
          <img src="/assets/story/event.jpg" alt="HMG customer event" />
          <img src="/assets/story/session.jpg" alt="HMG technical exchange session" />
        </div>
        <div className="support-copy" data-reveal>
          <p className="eyebrow dark">SUPPORT BEYOND DELIVERY</p>
          <h2>From brief to better brewing decisions.</h2>
          <div className="process-list">
            <article><span>01</span><div><h3>Understand the brief</h3><p>Beer style, sensory target, process, volume and commercial constraints.</p></div></article>
            <article><span>02</span><div><h3>Build the shortlist</h3><p>A focused ingredient route rather than an overwhelming product list.</p></div></article>
            <article><span>03</span><div><h3>Support the trial</h3><p>Technical exchange, sampling and practical evaluation with your team.</p></div></article>
            <article><span>04</span><div><h3>Plan the supply</h3><p>Align the chosen solution with availability and the next production step.</p></div></article>
          </div>
        </div>
      </section>

      <section className="customer-proof section">
        <div className="section-split" data-reveal>
          <div><p className="eyebrow dark">TRUSTED ACROSS THE MARKET</p><h2>Industrial scale.<br />Craft ambition.</h2></div>
          <p>HMG works across Vietnam’s brewing landscape — supporting established producers and independent makers.</p>
        </div>
        <div className="customer-columns" data-reveal>
          <div><span>INDUSTRIAL BREWERS</span><p>SABECO · HABECO · SAIGON–CENTRAL · SAIGON–KIEN GIANG · SAIGON–NGHE TINH · HA LONG BEER</p></div>
          <div><span>CRAFT BREWERS</span><p>PASTEUR STREET · EAST WEST · HEART OF DARKNESS · 7 BRIDGES · iBIERO · PLATINUM</p></div>
        </div>
      </section>

      <section className="discovery section">
        <div className="discovery-intro" data-reveal>
          <p className="eyebrow">A BETTER CONVERSATION STARTS HERE</p>
          <h2>Five questions before the first recommendation.</h2>
        </div>
        <ol className="question-list">
          {[
            'What beer are you trying to create?',
            'What must improve: flavor, consistency, efficiency or supply?',
            'What does your current process allow?',
            'How will the trial be evaluated?',
            'What does success look like at production scale?',
          ].map((question, index) => <li key={question} data-reveal><span>0{index + 1}</span><p>{question}</p></li>)}
        </ol>
      </section>

      <section className="contact" id="contact">
        <div className="contact-image" aria-hidden="true" />
        <div className="contact-overlay" aria-hidden="true" />
        <div className="contact-content" data-reveal>
          <img src="/assets/hmg-logo-white.png" alt="HMG" />
          <p className="eyebrow">YOUR NEXT BREW STARTS WITH A BETTER BRIEF</p>
          <h2>Let’s build the right ingredient route.</h2>
          <a className="contact-mail" href="mailto:minh.ct@hoangminhcorp.vn">minh.ct@hoangminhcorp.vn <span>↗</span></a>
          <div className="contact-details">
            <p>+84 909 836 789</p>
            <p>33 Street 17, Binh Trung Ward<br />Ho Chi Minh City, Vietnam</p>
            <a href="https://hopmalt.vn">hopmalt.vn</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 HMG</span><span>HOP · MALT · YEAST</span><a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
