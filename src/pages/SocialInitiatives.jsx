import React, { useEffect, useState } from 'react'
import { Heart, Eye, Target, BookOpen, Users, Globe, Clock } from 'lucide-react';
import './SocialInitiatives.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import placeholderLogo from '../assets/placeholder-logo.png';
import { 
  faArrowRight, faUsers, faCalendarAlt, 
  faProjectDiagram, faAward, faLightbulb, faCalendar, faBars 
} from '@fortawesome/free-solid-svg-icons';

 

const SocialInitiatives = () => {
  // Past initiatives data extracted from the content
  const pastInitiatives = [
    {
      title: "KREC English Medium School Visit",
      description: "A career workshop teaching basic science to students. Packed with laughter, playful games, and wide beaming smiles, the few hours spent here left our members with a renewed zeal to give back to the world.",
      icon: <BookOpen size={24} strokeWidth={1.5} />,
      year: "2019"
    },
    {
      title: "Collection Drive for St. Joseph's Prashanth Nivas",
      description: "Students from NITK contributed clothes, books, and stationery to be given to the elderly, differently-abled and school-going children, following our motto of giving back to the society.",
      icon: <Heart size={24} strokeWidth={1.5} />,
      year: "2019"
    },
    {
      title: "LGBTQ+ Awareness",
      description: "ISTE, as an ally of the LGBTQ+ community, continues to mould itself to be the safest space possible for our very own. Through fun events and discussions, our members continue to learn and grow.",
      icon: <Users size={24} strokeWidth={1.5} />,
      year: "2020"
    },
    {
      title: "Zero Waste Initiative",
      description: "With at least 8 million tons of plastic entering the oceans each year, ISTE NITK social initiatives created a Zero Waste Kit which one should keep with them to help protect our planet.",
      icon: <Globe size={24} strokeWidth={1.5} />,
      year: "2021"
    },
    {
      title: "About Bloody Time",
      description: "An event to shed light on menstrual health and break the taboo surrounding it, featuring Gynaecologist Dr. Trupta Naik who offered empathetic understanding of the topic.",
      icon: <BookOpen size={24} strokeWidth={1.5} />,
      year: "2022"
    },
    {
      title: "It's okay not to be okay",
      description: "An open mic event hosted with the Rotaract Club of NITK to raise awareness on mental health issues and combat the stigma surrounding them.",
      icon: <Heart size={24} strokeWidth={1.5} />,
      year: "2023"
    },
    {
      title: "Pride Month Celebration",
      description: "ISTE NITK celebrated Pride Month by creating a safe space for members of the LGBTQ+ community to come together and learn through fun events and discussions.",
      icon: <Users size={24} strokeWidth={1.5} />,
      year: "2023"
    },
    {
      title: "To Be Honest",
      description: "An event inviting attendees to enter a room full of metaphorical mirrors and share their honest and thought-provoking views and ideas on various social issues.",
      icon: <Eye size={24} strokeWidth={1.5} />,
      year: "2024"
    }
  ];

  const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize any animations or scroll triggers here
    // For example, you could use GSAP here if you add it to your project

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
     <header className={isScrolled ? 'header-scrolled' : ''}>
             <div className="container">
               <nav className="navbar">
                 <a href="#" className="logo">
                   <img src={placeholderLogo} alt="ISTE NITK Logo" />
                   <div className="logo-text">
                     ISTE NITK
                     <span>Indian Society for Technical Education</span>
                   </div>
                 </a>
                 <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
                   <li className="menu-item"><a href="/">Home</a></li>
                   <li className="menu-item"><a href="#about">About</a></li>
                   <li className="menu-item dropdown">
                     <a href="#sigs">SIGs</a>
                     <ul className="dropdown-menu">
                       <li><a href="#charge">Charge</a></li>
                       <li><a href="#crypt">Crypt</a></li>
                       <li><a href="#create">Create</a></li>
                       <li><a href="#chronicle">Chronicle</a></li>
                       <li><a href="#catalyst">Catalyst</a></li>
                       <li><a href="#credit">Credit</a></li>
                       <li><a href="#clutch">Clutch</a></li>
                       <li><a href="#concrete">Concrete</a></li>
                     </ul>
                   </li>
                   <li className="menu-item"><a href="/meettheteam">Our Team</a></li>
                   <li className="menu-item"><a href="#events">Events</a></li>
                   <li className="menu-item"><a href="/projects">Projects</a></li>
                   <li className="menu-item"><a href="#blogs">Blogs</a></li>
                   <li className="menu-item"><a href="https://iste.nitk.ac.in/#/she">SHE</a></li>
                   <li className="menu-item"><a href="/socialinitiatives">Social Initiatives</a></li>
                   <li className="menu-item"><a href="#gallery">Gallery</a></li>
                 </ul>
                 <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                   <FontAwesomeIcon icon={faBars} />
                 </button>
               </nav>
             </div>
           </header>
      
      <div className="mt-hero">
        <div className = "hero-text">
          <h1>Social Initiatives</h1>
        <p>Fostering a socially inclusive environment at NITK to develop awareness and open-minded attitudes towards various social issues.</p>
      </div>
      </div>

      <div className="so-container">
        <div className="infographic-container">
          <div className="info-section">
            <div className="info-graphic">
              <div className="info-circle">
                <Heart size={64} strokeWidth={1.5} />
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">Description</h2>
              <div className="info-text">
                <p>
                  Since 2017, at Social Initiatives ISTE NITK, our motive has been to nurture a socially
                  inclusive environment in which students of NITK develop a healthy open-minded
                  attitude and awareness towards various social issues, like inequality, indiscrimination,
                  mental health issues etc., and thereby inculcate a cooperative and caring nature towards
                  everyone else.
                </p>
                <p>
                  To bring about these, we regularly organize events and workshops related to social
                  awareness in NITK and have received a positive response from the students. Some of the
                  activities are open mic events, group discussions on social topics and interviews with
                  people to share their views and opinions on a particular topic. We aim to continue
                  organizing such events and make a positive contribution to society.
                </p>
              </div>
            </div>
          </div>

          <div className="info-section appear-animation">
            <div className="info-graphic">
              <div className="info-circle">
                <Eye size={64} strokeWidth={1.5} />
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">Vision</h2>
              <div className="info-text">
                <p>
                  To create a united community of people, considerate and respectful towards themselves,
                  each-other and the world and to take actions that initiate lasting changes for the future.
                  To provide a safe and non-judgemental space to every member to express and accept
                  themselves.
                </p>
              </div>
            </div>
          </div>

          <div className="info-section appear-animation">
            <div className="info-graphic">
              <div className="info-circle">
                <Target size={64} strokeWidth={1.5} />
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">Mission</h2>
              <div className="info-text">
                <ul className="mission-list">
                  <li>
                    Conducting various events in college for social awareness and to make sure maximum
                    people participate in it.
                  </li>
                  <li>
                    Engaging the students of NITK to cultivate an attitude of acceptance towards pre-existing
                    societal differences and diversities.
                  </li>
                  <li>
                    Creating stronger bonds between the students by helping them indulge in various
                    activities helping them understand the importance of coexistence.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
       

      <div className="scroll-container">
        <div className="scroll-content">
            <span><img src ="/src/assets/AnshVivekMalhotra.jpg" /></span>
            <span><img src ="/src/assets/hari.jpg" /></span>
            <span><img src ="/src/assets/HemantSomanna.jpg" /></span>
            <span><img src ="/src/assets/NisargRajdeep.jpg" /></span>
            <span><img src ="/src/assets/PranavSalunkhe.jpeg" /></span>
            <span><img src ="/src/assets/AnshVivekMalhotra.jpg" /></span>
            <span><img src ="/src/assets/AnshVivekMalhotra.jpg" /></span>
            <span><img src ="/src/assets/AnshVivekMalhotra.jpg" /></span>
            <span><img src ="/src/assets/AnshVivekMalhotra.jpg" /></span>
            <span><img src ="/src/assets/hari.jpg" /></span>
            <span><img src ="/src/assets/HemantSomanna.jpg" /></span>
            <span><img src ="/src/assets/NisargRajdeep.jpg" /></span>
            <span><img src ="/src/assets/PranavSalunkhe.jpeg" /></span>
            <span><img src ="/src/assets/AnshVivekMalhotra.jpg" /></span>
            <span><img src ="/src/assets/AnshVivekMalhotra.jpg" /></span>
            <span><img src ="/src/assets/AnshVivekMalhotra.jpg" /></span>
        </div>
        </div>

        <div className="container">
        <div className="infographic-container">
        <div className="info-section">
            <div className="info-graphic">
              <div className="info-circle">
                <Clock size={64} strokeWidth={1.5} />
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">Past Events</h2>
              <div className="info-text">
                <p>
                  Over the years, ISTE NITK Social Initiatives has organized numerous events and activities 
                  that have made a significant impact on our community. From raising awareness about important 
                  social issues to giving back to society, here's a glimpse of our journey.
                </p>
              </div>
            </div>
          </div>
           <div className="timeline-container">
          {pastInitiatives.map((initiative, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animation-timeline`}>
              <div className="timeline-content">
                <div className="timeline-icon">
                  {initiative.icon}
                </div>
                <div className="timeline-year">{initiative.year}</div>
                <h3 className="timeline-title">{initiative.title}</h3>
                <p className="timeline-description">{initiative.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
      
    </>
  );
};

export default SocialInitiatives;