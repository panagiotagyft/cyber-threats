// src/components/socialsidebar/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import { FaGithub, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// Απευθείας διαδρομές για τις εικόνες από τον φάκελο 'public'
const rigasPhotoUrl = process.env.PUBLIC_URL + '/assets/team_photos/rigas.png';
const panagiotaPhotoUrl = process.env.PUBLIC_URL + '/assets/team_photos/panagiota.png';
const panagiotisPhotoUrl = process.env.PUBLIC_URL + '/assets/team_photos/panagiotis.png';


const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        // Το Sidebar, με κλάση που αλλάζει ανάλογα με την κατάσταση
        // Τώρα το κουμπί toggle είναι ΜΕΣΑ σε αυτό το div
        <div className={`social-sidebar ${isSidebarOpen ? 'open' : ''}`}>
            {/* Κουμπί Toggle - Μεταφέρθηκε μέσα στο sidebar */}
            <button
                className="sidebar-toggle-btn" // Δεν χρειάζεται πλέον η κλάση 'open' εδώ
                onClick={toggleSidebar}
                aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            >
                {isSidebarOpen ? <FaChevronLeft size={30} /> : <FaChevronRight size={30} />}
            </button>

            {/* Το περιεχόμενο του Sidebar */}
            <ul>
                {/* Πρώτη φωτογραφία (Rigas) */}
                <li>
                    <a href="https://github.com/rigas2k19" target="_blank" rel="noopener noreferrer" aria-label="Rigas's Photo">
                        <img src={rigasPhotoUrl} alt="Rigas" className="sidebar-photo" />
                        <FaGithub size={24} className="github-hover-icon" />
                    </a>
                </li>

                {/* Δεύτερη φωτογραφία (Panagiota) */}
                <li>
                    <a href="https://github.com/panagiotagyft" target="_blank" rel="noopener noreferrer" aria-label="Panagiota's Photo">
                        <img src={panagiotaPhotoUrl} alt="Panagiota" className="sidebar-photo" />
                        <FaGithub size={24} className="github-hover-icon" />
                    </a>
                </li>

                {/* Τρίτη φωτογραφία (Panagiotis) */}
                <li>
                    <a href="https://github.com/panafaso" target="_blank" rel="noopener noreferrer" aria-label="Panagiotis's Photo">
                        <img src={panagiotisPhotoUrl} alt="Panagiotis" className="sidebar-photo" />
                        <FaGithub size={24} className="github-hover-icon" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;