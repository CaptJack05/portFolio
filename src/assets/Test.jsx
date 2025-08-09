import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Smartphone, Calendar, MapPin, Award, BookOpen, User, FolderOpen, MessageCircle, Download, Instagram, ChevronRight, Star, Zap, Cpu, Wifi, Rocket, Trophy, GraduationCap, ArrowLeft, Clock, Tag, Briefcase, FileText, Eye, ArrowRight } from 'lucide-react';

// Import all assets
import HemImage from './assets/image.png';
import Resume from './assets/Hemchandra-Resume.pdf';
import DroneImage from './assets/drone-project.jpg';
import SwarmDroneImage from './assets/swarm-drone.jpg';
import RFDroneImage from './assets/rf-drone.jpg';
import IoTImage from './assets/iot-home.jpg';
import EdTechImage from './assets/edtech.jpg';
import BlogImage1 from './assets/blog1.jpg';
import BlogImage2 from './assets/blog2.jpg';
import BlogImage3 from './assets/blog3.jpg';
import IITCertificate from './assets/iit-certificate.jpg';
import NDRFCertificate from './assets/ndrf-certificate.jpg';
import TechnofarmCertificate from './assets/technofarm-certificate.jpg';

// Fallback images for missing assets
const fallbackImages = {
  HemImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  DroneImage: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
  SwarmDroneImage: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=600&h=400&fit=crop",
  RFDroneImage: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&h=400&fit=crop",
  IoTImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  EdTechImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  BlogImage1: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",
  BlogImage2: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&h=400&fit=crop",
  BlogImage3: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
  IITCertificate: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
  NDRFCertificate: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=800&h=600&fit=crop",
  TechnofarmCertificate: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop"
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showCertificate, setShowCertificate] = useState(null);

  // Set document title
  useEffect(() => {
    document.title = "Hemchandra Jha - Portfolio";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== 'home') return;
      
      const sections = ['home', 'about', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (page, data = null) => {
    setCurrentPage(page);
    if (page === 'project-detail' && data) {
      setSelectedProject(data);
    } else if (page === 'blog-detail' && data) {
      setSelectedBlog(data);
    }
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const projects = [
    {
      id: 1,
      title: "Autonomous Drones for Search & Rescue",
      shortDescription: "AI-driven autonomous drone system for emergency medical and food supply missions",
      fullDescription: "Developed a comprehensive autonomous drone system for the NDRF (National Disaster Response Force) focused on search and rescue operations. The system integrates advanced AI algorithms for real-time decision making, obstacle avoidance, and mission-critical supply delivery in emergency scenarios.",
      image: DroneImage || fallbackImages.DroneImage,
      tags: ["ROS 2", "Machine Learning", "Sensor Fusion", "AI", "C++", "Python"],
      category: "AI/Robotics",
      duration: "Jan 2025 - Jun 2025",
      organization: "NDRF R&D Project",
      githubUrl: "https://github.com/CaptJack05",
      driveUrl: "https://drive.google.com/drive/folders/154PlQ6qgesHOTkh6kPbryHOA8WRCjX6u?usp=drive_link",
      features: [
        "Real-time obstacle detection and avoidance",
        "Autonomous navigation using GPS and computer vision",
        "Emergency supply drop mechanism",
        "Live video streaming for rescue coordination",
        "Weather-resistant design for harsh conditions"
      ]
    },
    {
      id: 2,
      title: "Swarm Drone Technology",
      shortDescription: "AI-driven swarm-based drone system developed during IIT Delhi research internship",
      fullDescription: "Research project focusing on coordinated multi-drone systems capable of collaborative task execution. Implemented swarm intelligence algorithms for distributed decision making and coordinated flight patterns.",
      image: SwarmDroneImage || fallbackImages.SwarmDroneImage,
      tags: ["Swarm Intelligence", "AI", "ROS 2", "Python", "Multi-agent Systems"],
      category: "Research",
      duration: "Jun 2025 - Jul 2025",
      organization: "IIT Delhi",
      githubUrl: "https://github.com/CaptJack05",
      driveUrl: "https://drive.google.com/drive/folders/154PlQ6qgesHOTkh6kPbryHOA8WRCjX6u?usp=drive_link",
      features: [
        "Distributed swarm intelligence algorithms",
        "Real-time inter-drone communication",
        "Coordinated mission planning",
        "Fault-tolerant swarm behavior",
        "Scalable architecture for multiple drones"
      ]
    },
    {
      id: 3,
      title: "Custom RF-Controlled Drone",
      shortDescription: "Built from scratch drone with custom RF communication system",
      fullDescription: "Designed and developed a complete drone system including custom PCB design, flight controller programming, and RF communication protocol for remote control operations.",
      image: RFDroneImage || fallbackImages.RFDroneImage,
      tags: ["C++", "Arduino", "RF Communication", "PCB Design", "Hardware"],
      category: "Hardware",
      duration: "Personal Project",
      organization: "Self",
      githubUrl: "https://github.com/CaptJack05",
      driveUrl: "https://drive.google.com/drive/folders/154PlQ6qgesHOTkh6kPbryHOA8WRCjX6u?usp=drive_link",
      features: [
        "Custom flight controller firmware",
        "Long-range RF communication",
        "Real-time telemetry data",
        "Modular design for easy maintenance",
        "Custom PCB with optimized power management"
      ]
    },
    {
      id: 4,
      title: "IoT Home Automation System",
      shortDescription: "ESP32-based smart home automation with web interface",
      fullDescription: "Comprehensive home automation solution using ESP32 microcontroller with web-based control interface, mobile app integration, and voice control capabilities.",
      image: IoTImage || fallbackImages.IoTImage,
      tags: ["ESP32", "C++", "IoT", "API", "PCB Design", "Web Hooks"],
      category: "IoT",
      duration: "May 2023 - Sep 2023",
      organization: "Technofarm Internship",
      githubUrl: "https://github.com/CaptJack05",
      driveUrl: "https://drive.google.com/drive/folders/154PlQ6qgesHOTkh6kPbryHOA8WRCjX6u?usp=drive_link",
      features: [
        "Voice-controlled device management",
        "Mobile app with real-time monitoring",
        "Energy consumption tracking",
        "Automated scheduling and scenes",
        "Secure cloud connectivity"
      ]
    },
    {
      id: 5,
      title: "Code for Challenge - EdTech Platform",
      shortDescription: "Interactive coding environment for educational purposes",
      fullDescription: "Multipurpose educational technology platform providing interactive coding environment with real-time collaboration, automated testing, and progress tracking for students and educators.",
      image: EdTechImage || fallbackImages.EdTechImage,
      tags: ["React", "Spring Boot", "MongoDB", "JavaScript", "REST API"],
      category: "Web Development",
      duration: "Academic Project",
      organization: "MAIT",
      githubUrl: "https://github.com/CaptJack05",
      driveUrl: "https://drive.google.com/drive/folders/154PlQ6qgesHOTkh6kPbryHOA8WRCjX6u?usp=drive_link",
      features: [
        "Real-time code collaboration",
        "Automated code testing and evaluation",
        "Progress tracking and analytics",
        "Multiple programming language support",
        "Interactive learning modules"
      ]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Autonomous Drones for Disaster Response",
      excerpt: "How AI and robotics are revolutionizing search and rescue operations through autonomous drone technology.",
      content: `During my internship with NDRF's R&D division, I had the opportunity to work on one of the most impactful projects of my career - developing autonomous drones for search and rescue operations.

Traditional search and rescue operations in disaster scenarios face several challenges including limited accessibility to dangerous areas, time constraints in emergency situations, risk to human rescue personnel, and coordination complexities in large-scale disasters.

We developed an AI-driven autonomous drone system that addresses these challenges through advanced navigation systems using ROS 2 framework, AI-powered decision making with machine learning algorithms, and sensor fusion technology combining multiple sensor inputs.

The project utilized cutting-edge technologies including ROS 2 for distributed system architecture, Machine Learning for object detection and decision making, Sensor Fusion combining GPS, IMU, LiDAR, and camera data, and C++ and Python for system programming and AI implementation.

The autonomous drone system successfully demonstrated 95% accuracy in survivor detection, ability to operate in adverse weather conditions, reduced response time by 60% compared to traditional methods, and zero risk to human rescue personnel in preliminary operations.

This project represents a significant step forward in using technology to save lives and improve disaster response capabilities.`,
      author: "Hemchandra Jha",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "AI & Robotics",
      image: BlogImage1 || fallbackImages.BlogImage1
    },
    {
      id: 2,
      title: "Swarm Intelligence: The Future of Multi-Drone Systems",
      excerpt: "Exploring the fascinating world of swarm-based drone technology and its applications in various industries.",
      content: `Swarm intelligence is a collective behavior that emerges from decentralized, self-organized systems. In the context of drones, it means multiple autonomous drones working together to achieve common goals.

During my research internship at IIT Delhi, I dove deep into the world of swarm-based drone technology. The experience was both challenging and rewarding.

Key research areas included distributed decision making - how individual drones make decisions that benefit the entire swarm, communication protocols for efficient ways for drones to share information, and fault tolerance ensuring the swarm continues to function even if individual drones fail.

Working with swarm systems presented unique challenges including coordination without centralized control, real-time communication between multiple agents, scalability as swarm size increases, and emergency protocols for system failures.

Swarm drone technology has numerous applications including search and rescue for covering large areas quickly, environmental monitoring with distributed sensor networks, agriculture for precision farming and crop monitoring, and infrastructure inspection with coordinated inspection of large structures.

Our swarm system incorporated multi-agent reinforcement learning, distributed consensus algorithms, real-time communication protocols, and adaptive behavior algorithms.

The future of drone technology lies in coordination and collaboration, not just individual capability.`,
      author: "Hemchandra Jha",
      date: "February 28, 2025",
      readTime: "6 min read",
      category: "Research",
      image: BlogImage2 || fallbackImages.BlogImage2
    },
    {
      id: 3,
      title: "IoT and Home Automation: Building Smart Spaces",
      excerpt: "A deep dive into creating intelligent home automation systems using ESP32 and modern IoT technologies.",
      content: `The Internet of Things (IoT) has transformed how we interact with our living spaces. During my internship at Technofarm, I had the opportunity to work on cutting-edge home automation systems.

The ESP32 microcontroller is perfect for IoT applications because of its built-in WiFi and Bluetooth connectivity, low power consumption, versatile GPIO options, strong community support, and cost-effective solution.

Our home automation system consisted of a hardware layer with ESP32 microcontrollers as node controllers, various sensors for temperature, humidity, motion, and light, actuators including relays, servos, and LED strips, and custom PCB designs for reliability.

The software layer included firmware written in C++ for real-time operations, RESTful API for device communication, web dashboard for user interface, and mobile app for remote control.

Cloud integration provided secure data transmission using HTTPS, real-time notifications via webhooks, historical data storage and analytics, and voice control integration.

Features implemented included voice control with integration with popular voice assistants, scheduling with automated routines based on time and conditions, energy monitoring to track and optimize power consumption, security with motion detection and alert systems, and climate control with intelligent HVAC management.

The system successfully demonstrated 30% reduction in energy consumption, 95% uptime reliability, seamless user experience across devices, and easy installation and maintenance.

Smart homes are not just about convenience; they're about creating more efficient, secure, and comfortable living spaces.`,
      author: "Hemchandra Jha",
      date: "January 20, 2025",
      readTime: "7 min read",
      category: "IoT",
      image: BlogImage3 || fallbackImages.BlogImage3
    }
  ];

  const experiences = [
    {
      title: "Research Intern",
      organization: "IIT Delhi",
      duration: "Jun 2025 - Jul 2025",
      description: "Swarm Drone Technology & AI Systems",
      certificate: IITCertificate || fallbackImages.IITCertificate,
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "R&D Project",
      organization: "NDRF",
      duration: "Jan 2025 - Jun 2025",
      description: "Autonomous Drone Development for Search & Rescue",
      certificate: NDRFCertificate || fallbackImages.NDRFCertificate,
      icon: Rocket,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "IoT Developer Intern",
      organization: "Technofarm",
      duration: "May 2023 - Sep 2023",
      description: "IoT Solutions & Web Development",
      certificate: TechnofarmCertificate || fallbackImages.TechnofarmCertificate,
      icon: Wifi,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const achievements = [
    {
      title: "Cognizance 2025 - IIT Roorkee",
      award: "Winner - Sky Maneuver Event",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "Innovation Mela 2025 - MAIT Delhi",
      award: "Best Innovation of the Year (1st Position)",
      icon: Star,
      color: "text-purple-400"
    },
    {
      title: "Promatu 2025 - IIT Jodhpur",
      award: "2nd Runner Up - Battle Bot",
      icon: Award,
      color: "text-orange-400"
    },
    {
      title: "SARC 2025 - IIT Madras",
      award: "Top 10 Finalist Teams",
      icon: GraduationCap,
      color: "text-green-400"
    }
  ];

  const skills = [
    {
      category: "Programming",
      icon: Code,
      items: ["C/C++", "Python", "Java", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Web Development",
      icon: Palette,
      items: ["React", "Node.js", "MongoDB", "Spring Boot"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "IoT & Hardware",
      icon: Cpu,
      items: ["ESP32", "Arduino", "PCB Design", "RF Communication"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "AI & Robotics",
      icon: Rocket,
      items: ["ROS 2", "Machine Learning", "Computer Vision", "Sensor Fusion"],
      color: "from-orange-500 to-red-500"
    }
  ];

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigateToPage('home')}
          >
            Hemchandra Jha
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => navigateToPage('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currentPage === 'home'
                    ? 'text-purple-400 bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === 'about' && currentPage === 'home'
                    ? 'text-purple-400 bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                About
              </button>
              <button
                onClick={() => navigateToPage('projects')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currentPage === 'projects' || currentPage === 'project-detail'
                    ? 'text-purple-400 bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => navigateToPage('blog')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currentPage === 'blog' || currentPage === 'blog-detail'
                    ? 'text-purple-400 bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === 'contact' && currentPage === 'home'
                    ? 'text-purple-400 bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => navigateToPage('home')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => navigateToPage('projects')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Projects
            </button>
            <button
              onClick={() => navigateToPage('blog')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // Certificate Modal Component
  const CertificateModal = ({ certificate, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-slate-900 rounded-2xl max-w-4xl w-full p-4 border border-white/10" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
          >
            <X size={20} />
          </button>
          <img 
            src={certificate} 
            alt="Certificate"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );

  // Home Page Component
  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={HemImage || fallbackImages.HemImage}
                  alt="Hemchandra Jha"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Hi, I'm Hemchandra Jha
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
            Electronics & Communication Engineering Student
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about <span className="text-purple-400 font-semibold">AI</span>, <span className="text-pink-400 font-semibold">Robotics</span>, and <span className="text-cyan-400 font-semibold">IoT</span>. 
            Building autonomous systems and exploring cutting-edge technologies to create impactful solutions for tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => navigateToPage('projects')}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Rocket className="inline w-5 h-5 mr-2" />
              Explore Projects
            </button>
            <button 
              onClick={() => navigateToPage('blog')}
              className="px-6 sm:px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="inline w-5 h-5 mr-2" />
              Read Blog
            </button>
            <a 
              href={Resume}
              download="Hemchandra-Resume.pdf"
              className="px-6 sm:px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <Download className="inline w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/CaptJack05" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/hemchandra-jha-36a973280" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300">
              <Linkedin size={28} />
            </a>
            <a href="https://www.instagram.com/__hc.j/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-pink-400 transform hover:scale-110 transition-all duration-300"
            >
              <Instagram size={28} />
            </a>
            <a href="mailto:hcjha05@gmail.com" 
               className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className="text-gray-400 cursor-pointer hover:text-white transition-colors" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              A passionate researcher and innovator exploring the frontiers of technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                  <User className="mr-3 text-purple-400" size={24} />
                  Who I Am
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a 3rd-year Electronics and Communication Engineering undergraduate at Maharaja Agrasen Institute of Technology, 
                  driven by an insatiable curiosity for cutting-edge technology. My passion lies in the intersection of AI, robotics, 
                  and IoT, where I'm constantly exploring how these technologies can solve real-world problems.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                  <Zap className="mr-3 text-pink-400" size={24} />
                  What Drives Me
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Research, innovation, and entrepreneurship fuel my journey. I believe in creating technology that not only pushes boundaries 
                  but also makes a meaningful impact on society. From autonomous drones for disaster response to swarm intelligence systems, 
                  I'm committed to building the future.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                  <GraduationCap className="mr-3 text-cyan-400" size={24} />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <p className="font-semibold text-white">B.Tech - Electronics & Communication</p>
                      <p className="text-purple-400">Maharaja Agrasen Institute of Technology</p>
                      <p className="text-sm text-gray-400">New Delhi</p>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 sm:mt-0">2023-2027</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <p className="font-semibold text-white">Class 12th - CBSE</p>
                      <p className="text-pink-400">Arwachin Bharti Bhawan Sr. Sec. School</p>
                      <p className="text-sm text-gray-400">83%</p>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 sm:mt-0">2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">Professional Experience</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <exp.icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                  <p className="text-purple-400 font-medium mb-2">{exp.organization}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <button
                    onClick={() => setShowCertificate(exp.certificate)}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    <Eye size={16} className="mr-2" />
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">Skills & Technologies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="inline-block bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-white">Achievements</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <achievement.icon className={`${achievement.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`} size={32} />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                      <p className="text-gray-300">{achievement.award}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Exploring the intersection of AI, robotics, and innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => navigateToPage('project-detail', project)}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{project.organization}</span>
                      <ChevronRight className="text-purple-400 group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigateToPage('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Latest Blog Posts
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Insights, experiences, and learnings from my tech journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer" onClick={() => navigateToPage('blog-detail', post)}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigateToPage('blog')}
              className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Read All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Ready to collaborate on exciting projects or discuss innovative ideas?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:hcjha05@gmail.com" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm">hcjha05@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/hemchandra-jha-36a973280" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-sm">Connect professionally</p>
                    </div>
                  </a>
                  
                  <a href="https://github.com/CaptJack05" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Github className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm">Check out my code</p>
                    </div>
                  </a>

                  <a href="https://www.instagram.com/__hc.j/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Instagram className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-sm">Follow my journey</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea rows="5" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none" placeholder="Tell me about your project or idea..."></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Projects Page Component
  const ProjectsPage = () => (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my work in AI, robotics, IoT, and web development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer" onClick={() => navigateToPage('project-detail', project)}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.organization}</span>
                    <ArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Blog Page Component
  const BlogPage = () => (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Thoughts, experiences, and insights from my journey in technology
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer" onClick={() => navigateToPage('blog-detail', post)}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Project Detail Page Component
  const ProjectDetailPage = () => {
    if (!selectedProject) return null;
    
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <button 
            onClick={() => navigateToPage('projects')}
            className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </button>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <div className="relative h-64 sm:h-96">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-purple-500/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 sm:p-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">{selectedProject.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-400">
                <span className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  {selectedProject.duration}
                </span>
                <span className="flex items-center">
                  <Briefcase size={18} className="mr-2" />
                  {selectedProject.organization}
                </span>
              </div>
              
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-gray-300 px-4 py-2 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  <Github className="mr-2" size={20} />
                  View on GitHub
                </a>
                <a 
                  href={selectedProject.driveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  <FolderOpen className="mr-2" size={20} />
                  View Project Files
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Blog Detail Page Component
  const BlogDetailPage = () => {
    if (!selectedBlog) return null;
    
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <button 
            onClick={() => navigateToPage('blog')}
            className="flex items-center text-pink-400 hover:text-pink-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </button>

          <article className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <div className="relative h-64 sm:h-96">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-pink-500/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {selectedBlog.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 sm:p-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{selectedBlog.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-400">
                <span>By {selectedBlog.author}</span>
                <span>•</span>
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {selectedBlog.readTime}
                </span>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                  {selectedBlog.content}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'projects' && <ProjectsPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'project-detail' && <ProjectDetailPage />}
      {currentPage === 'blog-detail' && <BlogDetailPage />}
      
      {/* Certificate Modal */}
      {showCertificate && (
        <CertificateModal 
          certificate={showCertificate} 
          onClose={() => setShowCertificate(null)} 
        />
      )}
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hemchandra Jha
              </h3>
              <p className="text-gray-400">Building the future with technology</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/CaptJack05" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hemchandra-jha-36a973280" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/__hc.j/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:hcjha05@gmail.com" 
                 className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 Hemchandra Jha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;