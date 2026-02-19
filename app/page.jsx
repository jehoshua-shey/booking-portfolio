import Airbnb from '@/lib/svg/brands/Airbnb'
import BookingCom from '@/lib/svg/brands/BookingCom'
import Expedia from '@/lib/svg/brands/Expedia'
import Message from '@/lib/svg/brands/Message'
import React from 'react'

const page = () => {
    return (
        <React.Fragment>
            <header>
                <div className="container nav">
                    <div className="nav-left">
                        <div className="logo">
                            <div className="logo-img">
                                <img src="/me.png" alt="logo" />
                            </div>
                            JS Services
                        </div>
                        <div className="nav-links">
                            <div>Solutions</div>
                            <div>Resources</div>
                            <div>Pricing</div>
                            <div>Blog</div>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div>Login</div>
                        <div className="btn btn-black">Free demo</div>
                    </div>
                </div>
            </header>

            <section className="hero container">
                <div className="hero-bg-image">
                    <img src="/me.png" alt="" />
                </div>
                <h1>Stop <span>Losing 15–30% </span> on Every Reservation</h1>
                <p>Receive direct booking for your hotels and event venues on your own website. <span className='green bold'>No Commissions Paid.</span></p>

                <div className="hero-buttons">
                    <div className="btn btn-black">Try my free demo</div>
                    <div className="btn btn-outline">
                        <Message />
                        Get your custom booking service
                    </div>
                </div>

                <div className="badges">
                    <div><span>✔</span> Automated Reservation</div>
                    <div><span>✔</span> Control Guest Data</div>
                    <div><span>✔</span> Zero Commissions</div>
                </div>

                <div className="logos">
                    <div>
                        <Airbnb />
                        <span>15-18%</span>
                    </div>
                    <div>
                        <Expedia />
                        <span>15-30%</span>
                    </div>
                    <div>
                        <BookingCom />
                        <span>10-25%</span>
                    </div>
                    <div>
                        <img src="/peerspace.png" className='opacity-6' alt="" />
                        <span>15-20%</span>
                    </div>
                    <div>
                        <img src="/giggster.jpeg" alt="" />
                        <span>19% flat</span>
                    </div>
                </div>
            </section>

            <section className="grey-bg">
                <div className="feature-row container">
                    <div className="feature-text">
                        <h2>Depending on Third-Party Platforms Is Costing You More Than You Think</h2>
                        <p>Platforms like Booking.com, Expedia, and Airbnb are powerful distribution tools. But they take between 15–30% commission on every booking. If 60–70% of your reservations come from these third party platforms, you are not in control of your revenue stream.</p>
                    </div>
                    <div className="feature-image">
                        <img src="/booking-cost-contrast.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="container video-section">
                <div>
                    <h2>See the magic in action.</h2>
                    <p>See how our LinkedIn email finder can help your team generate more revenue in minutes.</p>
                </div>
                <div className="video-box">
                    <div className="play-btn"></div>
                </div>
            </section>

            <section className="container testimonial">
                <div className="testimonial-image"></div>
                <div className="testimonial-text">
                    <blockquote>
                        “Wiza allows us to export any Sales Navigator search into an email list which saves us a lot of time when campaigning.”
                    </blockquote>
                    <p>— Sales Director</p>
                </div>
            </section>

            <section className="container feature-row reverse">
                <div className="feature-text">
                    <h2>Scrape.</h2>
                    <p>Export entire searches, lead lists, or projects from LinkedIn.</p>
                </div>
                <div className="feature-image"></div>
            </section>

            <section className="container feature-row">
                <div className="feature-text">
                    <h2>Prospect.</h2>
                    <p>Find verified email addresses and phone numbers for your LinkedIn prospects.</p>
                </div>
                <div className="feature-image"></div>
            </section>

            <section className="container feature-row reverse">
                <div className="feature-text">
                    <h2>Enrich.</h2>
                    <p>Bulk in prospect and company enrichment for your leads.</p>
                </div>
                <div className="feature-image"></div>
            </section>

            <section className="container feature-row">
                <div className="feature-text">
                    <h2>Sync.</h2>
                    <p>Find your enriched prospects to any CRM or marketing platform.</p>
                </div>
                <div className="feature-image"></div>
            </section>

            <section className="stats container">
                <h2>Introducing Realtime Prospecting</h2>
                <div className="stats-row">
                    <div className="stat">99%<small>Email Deliverability</small></div>
                    <div className="stat">97%<small>Data Accuracy</small></div>
                </div>
            </section>

            <section className="container">
                <div className="cta">
                    <h2>Join for free today.</h2>
                    <div className="cta-form">
                        <input type="email" placeholder="Work email" />
                        <button className="btn btn-black">Create account</button>
                    </div>
                </div>
            </section>

            <section className="container">
                <h2 style={{ textAlign: "center" }}>Popular questions.</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h4>How can I unlock full lead exporting?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="faq-item">
                        <h4>How to use Sales Navigator with a CRM?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Do I need LinkedIn Sales Navigator?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>

            <section className="container">
                <h2 style={{ textAlign: "center" }}>Discover our solutions</h2>
                <div className="solution-grid">
                    <div className="solution-card">
                        <h3>Prospect</h3>
                        <button className="btn btn-black">Learn more</button>
                    </div>
                    <div className="solution-card">
                        <h3>Scrape</h3>
                        <button className="btn btn-black">Learn more</button>
                    </div>
                    <div className="solution-card">
                        <h3>Verify</h3>
                        <button className="btn btn-black">Learn more</button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container footer-grid">
                    <div className="footer-col">
                        <h5>Solutions</h5>
                        <p>LinkedIn search</p>
                        <p>Account search</p>
                        <p>Email verification</p>
                    </div>
                    <div className="footer-col">
                        <h5>Resources</h5>
                        <p>Help center</p>
                        <p>API docs</p>
                        <p>Blog</p>
                    </div>
                    <div className="footer-col">
                        <h5>Company</h5>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Privacy</p>
                    </div>
                </div>
            </footer>

        </React.Fragment>
    )
}

export default page