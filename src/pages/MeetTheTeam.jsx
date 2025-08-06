import React, { useEffect, useState } from 'react';
import './MeetTheTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import placeholderLogo from '../assets/placeholder-logo.png';
import { 
  faArrowRight, faUsers, faCalendarAlt, 
  faProjectDiagram, faAward, faLightbulb, faCalendar, faBars 
} from '@fortawesome/free-solid-svg-icons';


const MeetTheTeam = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState('Admin Core');

  // Team member data with categories
  const teamMembers = [
    {
      id: 1,
      name: 'Hari Sharan',
      role: 'Convener',
      category: 'Admin Core',
      image: '/src/assets/hari.jpg',
      bio: 'A vibrant and creative individual who loves football, mystery novels, and music production. He enjoys deep conversations, midnight debates, and making meaningful connections while spreading positivity.',
      social: {
        linkedin: 'https://www.linkedin.com/in/hari-sharan-9584b1226/',
        github: 'https://github.com/alexjohnson',
        twitter: 'https://twitter.com/alexjohnson'
      }
    },
    {
      id: 2,
      name: 'Hemanth Somanna',
      role: 'Joint Convener',
      category: 'Admin Core',
      image: '/src/assets/HemantSomanna.jpg',
      bio: ' He is a non-fiction fanatic who loves animals and nature almost as much as he loves binge-watching movies and shows. When not lost in a book, you can find him nodding his head to some sweet tunes or tapping his foot to the beat. Just dont try to get in the way of his love for Michael Scott!',
      social: {
        linkedin: 'https://linkedin.com/in/sarahwilliams',
        github: 'https://github.com/sarahwilliams',
        twitter: 'https://twitter.com/sarahwilliams'
      }
    },
    {
      id: 3,
      name: 'Pranav Salunkhe',
      role: 'Crypt SIG Head',
      category: 'Core Members',
      image: '/src/assets/PranavSalunkhe.jpeg',
      bio: 'He loves listening to music 24/7 more than anything else.</br><u>Technical Interests</u>: Fullstack, GenAI, Startups',
      social: {
        linkedin: 'https://linkedin.com/in/michaelchen',
        github: 'https://github.com/michaelchen',
        twitter: 'https://twitter.com/michaelchen'
      }
    },
    {
      id: 4,
      name: 'Nisarg Rajdeep',
      role: 'Publicity Coordinator',
      category: 'Auxiliary Core Members',
      image: '/src/assets/NisargRajdeep.jpg',
      bio: 'Helloo mate, Nisarg here. I like window seat and a notepad, to collect the mosaic of stories around me. I like to read, I read a lot be it anything. I am also an undercover TVA officer 🤫.',
      social: {
        linkedin: 'https://linkedin.com/in/priyapatel',
        github: 'https://github.com/priyapatel',
        twitter: 'https://twitter.com/priyapatel'
      }
    },
    {
      id: 5,
      name: 'Ansh Malhotra',
      role: 'Technical Affairs Secretary',
      category: 'Auxiliary Core Members',
      image: '/src/assets/AnshVivekMalhotra.jpg',
      bio: "Hey there! I'm Ansh Vivek Malhotra, currently a Computer Science undergrad at NIT Karnataka. I've dabbled in everything from app development to leading tech projects. When I'm not geeking out, you’ll find me mentoring, designing, or just goofing around with my college club. That's how I became Anshtastic!! Outside the tech realm, you’ll find me exploring new interests or embarking on playful escapades with friends. I’ve mastered the art of turning late-night discussions into laugh-out-loud moments and enjoy spreading positivity wherever I go. For me, life’s an adventure, and I’m here to make every experience as exciting and memorable as possible!",
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        github: 'https://github.com/davidkim',
        twitter: 'https://twitter.com/davidkim'
      }
    },
    {
      id: 6,
      name: 'N Hari Krishna',
      role: '-----',
      category: 'Executive Members',
      image: '/images/team/emma.jpg',
      bio: 'A vibrant and creative individual who loves football, mystery novels, and music production. He enjoys deep conversations, midnight debates, and making meaningful connections while spreading positivity.',
      social: {
        linkedin: 'https://linkedin.com/in/emmarodriguez',
        github: 'https://github.com/emmarodriguez',
        twitter: 'https://twitter.com/emmarodriguez'
      }
    },
  ];

  // List of all categories
  const categories = [
    'Admin Core',
    'Core Members',
    'Auxiliary Core Members',
    'Executive Members'
  ];


  // Filter team members based on active category
  const filteredMembers = teamMembers.filter(member => member.category === activeCategory);

  // Handle category button click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

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
    <div className='cont'>
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
  
  <div className="white-team-hero">
    <h1>Meet Our Team</h1>
    <p>The brilliant minds behind ISTE NITK working together to create innovative solutions and foster a thriving tech community.</p>
    
    <div className="white-team-categories">
      {categories.map(category => (
        <button 
          key={category}
          className={`white-category-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  </div>

  <div className="white-team-container">
    <div className="white-team-grid">
      {filteredMembers.map((member) => (
        <div className="white-team-card" key={member.id}>
          <div className="member-image-container">
            <img src={member.image} alt={member.name} className="member-image" />
          </div>
          <h3 className="member-name">{member.name}</h3>
          <p className="member-role">{member.role}</p>
          <div className="social-links">
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={member.social.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="member-bio-hover">
          <p dangerouslySetInnerHTML={{ __html: member.bio }}></p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default MeetTheTeam;