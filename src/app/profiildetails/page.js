"use client"
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import styles from "@/styles/ProfiilDetails.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";


const ProfileDetails = () => {
  const [clientType, setClientType] = useState("private");

  return (
    <div className="container-body">
      <div className="header">
        {/* <IoIosArrowBack className="back-icon"/> */}
        <Link href='/' className="back-icon-wrapper">
            <IoIosArrowBack className="back-icon"/>
        </Link>
        <h1 className="title">Profiiliandmed</h1>
      </div>
     
      <div className="toggleGroup">
        <label className="radioLabel">
          <input
            type="radio"
            name="clientType"
            value="private"
            checked={clientType === "private"}
            onChange={() => setClientType("private")}
            className="radioInput"
          />
          <span className="radio"></span> Eraklient
        </label>

        <label className="radioLabel">
          <input
            type="radio"
            name="clientType"
            value="business"
            checked={clientType === "business"}
            onChange={() => setClientType("business")}
            className="radioInput"
          />
          <span className="radio"></span> Äriklient
        </label>
      </div>


      <form className="form">
        <div className="input-form">
            <label>Nimi</label>
            <div className="inputWrapper">
              <input type="text" value="Dmitry Cherny" readOnly />
              <MdKeyboardArrowDown className="down-icon" />
            </div>
        </div>

        <div className="input-form">
            <label>Email</label>
            <div className="inputWrapper">
              <input type="email" value="dmitry@cherny.ee" readOnly />
              <MdKeyboardArrowDown className="down-icon" />
            </div>
        </div>

        <div className="input-form">
            <label>Telefon</label>
            <div className="inputWrapper">
              <input type="tel" value="+372 503 8466" readOnly />
              <MdKeyboardArrowDown className="down-icon" />
            </div>
        </div>

        <div className="input-form">
            <label>Riik</label>
            <div className="inputWrapper">
              <input type="text" value="Eesti" readOnly />
              <MdKeyboardArrowDown className="down-icon" />
            </div>
        </div>

        <div className="input-form">
            <label>Minu auto</label>
            <input type="text" value="955THZ" readOnly />
        </div>

        <p className="deleteAccount">Kustuta minu konto</p>

        <button className="saveButton">Salvesta</button>
      </form>
    </div>
  );
};

export default ProfileDetails;
