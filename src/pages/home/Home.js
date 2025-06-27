import React, { useState, useEffect  } from 'react';
import './Home.css';
import TableauEmbed from '../../components/tableauembed/TableauEmbed';
import { FaArrowUp, FaChevronDown } from 'react-icons/fa';

export default function Home() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            setShowScroll(window.scrollY > 200);
        };
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.text-content');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className='home'>         
            
            <h5>Welcome to Our Cybersecurity Threats Portal</h5>
            <div
                className="scroll-indicator"
                onClick={scrollToNextSection}
                style={{ cursor: 'pointer', marginBottom: '20rem' }}
            >
                <FaChevronDown size={30} className="blink" />
            </div>

            <div className="text-content">
                <p>
                    In an age where every byte of data—and every connected device—can become an attack vector, understanding the landscape of cyber risks is essential for individuals, businesses, and critical infrastructure.
                </p>
                <p>
                    This portal will guide you through:
                </p>
                <ul>
                    <li><strong>What Are Cybersecurity Threats?</strong> From basic scams to state-sponsored campaigns and why they matter.</li>
                    <li><strong>Common Types of Threats</strong> Including malware, phishing, zero‑day exploits, insider threats, and DoS/DDoS attacks.</li>
                    <li><strong>Anatomy of an Attack</strong> Step-by-step look at reconnaissance, intrusion, privilege escalation, and data exfiltration.</li>
                    <li><strong>Risk Assessment & Mitigation</strong> Vulnerability scanning, layered defenses, endpoint protection, and incident response planning.</li>
                    <li><strong>Latest Trends & Emerging Threats</strong> AI-driven attacks, IoT vulnerabilities, cloud misconfigurations, and fileless malware.</li>
                    <li><strong>Resources & Further Reading</strong> Tools, frameworks, whitepapers, and community links.</li>
                </ul>
                <p>
                    Explore the visualizations below to see two critical metrics reflecting the global impact of cyber incidents from 2015 to 2024.
                </p>
            </div>

            <div className="text-content">
                
                <p>
                    As our digital dependency grows, so do cyber threats — in scale, complexity, and cost. This overview
                    highlights two critical metrics that reflect the global impact of cyber incidents from 2015 to 2024:
                </p>
                <p>
                    <strong>Financial Loss Per Year:</strong> The monetary cost of cybersecurity breaches, measured in millions of dollars.
                </p>
                <p>
                    <strong>Number of People Affected Per Year:</strong> The number of individuals impacted by data breaches, identity theft, and other cyber incidents.
                </p>
                <p>
                    These visualizations provide a decade-long view of cybersecurity threats, helping contextualize the
                    rising risks in our interconnected world.
                </p>
            </div>
            
            <div className="tableau-section">
                <div className="tableau-wrapper">
                    <h2>Financial Loss / year</h2>
                    <TableauEmbed url="https://public.tableau.com/views/GlobalCybersecurityThreatsIndexDashboard/FinancialLossyear" />
                </div>

                <div className="tableau-wrapper">
                    <h2>Number of people affected / year</h2>
                    <TableauEmbed url="https://public.tableau.com/views/GlobalCybersecurityThreatsIndexDashboard/Numberofaffectedyear" />
                </div>
            </div>
            
            {showScroll && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp size={24} />
                </button>
            )}
        </div>
    );
}