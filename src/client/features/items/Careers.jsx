import React from 'react';
import './Careers.css';

const Careers = () => {
    return (
        <div className="career-container">
            <div className="career-title">
            <h1>Careers at Our Company</h1>
            <p>Join our team and help shape the future!</p>
            </div>
            <section className="career-opportunities">
                <h2>Current Openings</h2>
                <ul>
                    <li>Web Developer - <a href="https://resources.workable.com/web-developer-job-description">Learn more</a></li>
                    <li>In store Cashier- <a href="https://www.youtube.com/watch?v=VKiMAcbXJ6A">Learn more</a></li>
                </ul>
            </section>

            <section className="career-apply">
                <h2>How to Apply</h2>
                <p>Interested in joining our team? Send your resume and cover letter to careers@example.com.</p>
            </section>
        </div>
    );
};

export default Careers;
