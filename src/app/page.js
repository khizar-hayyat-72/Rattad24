import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { FaGlobe, FaBell, FaSearch, FaHeart, FaList, FaUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { HiMiniSpeakerWave } from "react-icons/hi2";


const Lemmikud = () => {
  return (
    <div className="leekmuid-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-logo">
          <img src="/logo.png" alt="Rattad24" className="logo" />
          <h1>Rattad24</h1>
        </div>
        <div className="header-icons">
          <div className="eesti-logo">
          <img src="/eesti.svg" alt="Esindued" className="icon" />
            <span>Eesti</span>
          </div>
          <CiGlobe className="icon" />
          <div className="notification-container">
            <BsBell className="icon notification"/>
            <span className="badge">1</span>
          </div>
          
        </div>
      </header>

      {/* Title and Filter */}
      <div className="title">
        <h1>Minu lemmikud</h1>
        <div className="filters">
          <button className="active">Kõik</button>
          <button>Tallinn</button>
          <button>Harjumaa</button>
          <button>Narva</button>
        </div>
      
      </div>

      {/* Tyre List */}
      <div className="tyre-list top">
        {/* Single Tyre Card */}
        <div className="tyre-card">
          <div className="tyre-info">
            <div className="tyre-info-flex-1">
                <div className="tyre-info-flex-2">
                  <h2>Continental Conti Contact 7</h2>
                  <p><span className="stock green"></span> Laos: 2 tk &nbsp; <span>Asukoht: Vesse ladu</span></p>
                  <div className="tags">
                    <span className="rating">8.6</span>
                    <span className="tag second">Põhjamaine</span>
                    <span className="tag speaker"><HiMiniSpeakerWave className="speaker-icon"/><span> 68db </span></span>
                    <span className="tag speaker"><HiMiniSpeakerWave className="speaker-icon"/> D</span>
                    <span className="tag speaker"><HiMiniSpeakerWave className="speaker-icon"/> D</span>
                  </div>
                </div> 
                <img src="/tyre.png" alt="Tyre" className="tyre-image" />
                {/* <div className="img-container">
                  <img src="/tyre.png" alt="Tyre" className="tyre-image" />
                </div> */}
            </div>
           
            <p>Kasutaud (5-6mm) 🌞 225/55/19 H91 DOT25</p>
            <p className="price">€1.180,00 / tk <span className="installment">Kuumakse al. €90</span></p>
          </div>
         
          <div className="heart-bcg">
              <FaHeart className="heart-icon" />
          </div>
          
        </div>
      </div>

      {/* Tyre List */}
      <div className="tyre-list">
        {/* Single Tyre Card */}
        <div className="tyre-card">
          <div className="tyre-info">
            <div className="tyre-info-flex-1">
                <div className="tyre-info-flex-2">
                  <h2>Hankook Ventus Prime 2k 115</h2>
                  <p><span className="stock orange"></span> Tellimisel &nbsp; <span>Asukoht: Vesse ladu</span></p>
                  <div className="tags">
                    <span className="rating">8.6</span>
                    <span className="tag speaker"><HiMiniSpeakerWave className="speaker-icon"/><span> 68db </span></span>
                    <span className="tag speaker"><HiMiniSpeakerWave className="speaker-icon"/> D</span>
                    <span className="tag speaker"><HiMiniSpeakerWave className="speaker-icon"/> D</span>
                  </div>
                </div> 
                <img src="/tyre.png" alt="Tyre" className="tyre-image" />
                {/* <div className="img-container">
                  <img src="/tyre.png" alt="Tyre" className="tyre-image" />
                </div> */}
            </div>
           
            <p>Kasutaud (5-6mm) 🌞 225/55/19 H91 DOT25</p>
            <p className="price">€1.180,00 / tk <span className="installment">Kuumakse al. €90</span></p>
          </div>
         
          <div className="heart-bcg">
              <FaHeart className="heart-icon" />
          </div>
          
        </div>
      </div>

      {/* Tyre List */}
      <div className="tyre-list">
        {/* Single Tyre Card */}
        <div className="tyre-card">
          <div className="tyre-info">
            <div className="tyre-info-flex-1">
                <div className="tyre-info-flex-2">
                  <h2>Ice Blazer WST3</h2>
                  <p><span className="stock green"></span> Laos: 2 tk &nbsp; <span>Asukoht: Vesse ladu</span></p>
                  <div className="tags">
                    <span className="rating">8.6</span>
                    <span className="tag second">Põhjamaine</span>
                    <span className="tag speaker"><HiMiniSpeakerWave className="speaker-icon"/><span> 68db </span></span>
                    <span className="tag speaker"><HiMiniSpeakerWave className="speaker-icon"/> D</span>
                    <span className="tag speaker"><HiMiniSpeakerWave className="speaker-icon"/> D</span>
                  </div>
                </div> 
                <img src="/tyre.png" alt="Tyre" className="tyre-image" />
                {/* <div className="img-container">
                  <img src="/tyre.png" alt="Tyre" className="tyre-image" />
                </div> */}
            </div>
           
            <p>Kasutaud (5-6mm) 🌞 225/55/19 H91 DOT25</p>
            <p className="price">€1.180,00 / tk <span className="installment">Kuumakse al. €90</span></p>
          </div>
         
          <div className="heart-bcg">
              <FaHeart className="heart-icon" />
          </div>
          
        </div>
      </div>
     

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item"><CiSearch className="nav-icon" /><span>Otsing</span></div>
        <div className="nav-item"><GoHeart className="nav-icon" /><span>Lemmikud</span></div>
        <div className="nav-item"> <img src="/Esindued.svg" alt="Esindued" className="nav-icon" /><span>Esindused</span></div>
        <Link href="/profiildetails" className="no-underline">
                <div className="nav-item"><FiUser className="nav-icon" /><span>Profiil</span></div>
        </Link>
      </nav>
    </div>
  );
};

export default Lemmikud;