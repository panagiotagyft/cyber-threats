import React, { useState, useEffect  } from 'react';
import './Home.css';
import TableauEmbed from '../../components/tableauembed/TableauEmbed';

// import Button from '@mui/material/Button';
import { FaArrowUp } from 'react-icons/fa';
// import { LanguageContext } from "../../context/LanguageContext";


export default function Home() {
    // const { language, translations } = useContext(LanguageContext);

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 200) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='home'>         
            
            <h5> Cybersecurity Threats Overview </h5>
            
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