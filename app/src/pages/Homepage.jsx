import React from 'react';
import "./Homepage.css"

export default function HomePage() {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="header-inner">
          <h1 className="brand">Product Transparency</h1>
          <div className="nav-actions">
            <button className="btn">Sign in</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <div className="hero-inner">
            <h2 className="hero-title">Build trust through clear product transparency</h2>
            <p className="hero-sub">Collect structured product information, generate clean transparency reports, and empower informed choices.</p>
            <div className="hero-ctas">
              <button className="btn btn-primary">Submit a Product</button>
              <button className="btn">See Example Report</button>
            </div>
          </div>
        </section>

        <section className="features">
          <h3 className="section-title">Key features</h3>
          <div className="feature-list">
            <div className="feature-item">
              <h4>Dynamic Form</h4>
              <p>AI-driven follow-up questions adapt to product inputs to capture precise details.</p>
            </div>

            <div className="feature-item">
              <h4>Transparent Reports</h4>
              <p>Generate clear, downloadable PDF reports summarizing sourcing, ingredients, and certifications.</p>
            </div>

            <div className="feature-item">
              <h4>Scoring & Validation</h4>
              <p>Optional product scoring and validation rules to highlight health and sustainability signals.</p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h3 className="section-title">How it works</h3>
          <ol className="steps">
            <li>
              <strong>Enter basic product info</strong>
              <p>Provide the product name, category, and primary ingredients.</p>
            </li>
            <li>
              <strong>Answer follow-up questions</strong>
              <p>AI generates targeted questions about sourcing, certifications, and packaging.</p>
            </li>
            <li>
              <strong>Review & download report</strong>
              <p>Preview the structured transparency report and download as PDF.</p>
            </li>
          </ol>
        </section>

        <section className="callout">
          <h3>For teams and companies</h3>
          <p>Sign up for company-specific access to manage product submissions, collaborators, and reports.</p>
          <div className="callout-actions">
            <button className="btn">Request Access</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Product Transparency — Built with Health, Wisdom & Virtue.</p>
          <p className="small">Altibbe | Hedamo assignment</p>
        </div>
      </footer>
    </div>
  );
}
