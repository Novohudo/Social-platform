import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from "./Music.module.css";
import radio from "../../img/radio.svg";

const Music = () => {
 const [stations, setStations] = useState([]);
 const [currentStation, setCurrentStation] = useState(null);
 const [isPlaying, setIsPlaying] = useState(false);
 const stationsLimit = 12;

 useEffect(() => {
  const fetchStations = async () => {
   try {
    const response = await fetch("https://de1.api.radio-browser.info/json/stations");
    const data = await response.json();
    setStations(data.slice(0, stationsLimit));
   } catch (error) {
    console.error("Some error:", error);
   }
  };
  fetchStations();
 }, []);

 const handlePlay = (station) => {
  setCurrentStation(station);
  setIsPlaying(true);
 };

 const handleStop = () => {
  setCurrentStation(null);
  setIsPlaying(false);
 };

 return (
  <div className={s.container}>
   <h2>Stations List</h2>
   <hr />
   <TransitionGroup component="ul" className={`${s.stations} fade`}>
    {stations.map((station) => (
     <CSSTransition key={station.id} timeout={300} classNames="fade">
      <li>
       <button onClick={() => handlePlay(station)}>
        {station.name}
        <img src={radio} alt={"..."} />
       </button>
      </li>
     </CSSTransition>
    ))}
   </TransitionGroup>
   {currentStation && (
    <div className={s.player}>
     <h3>Now Playing: {currentStation.name}</h3>
     <audio onPause={handleStop} src={currentStation.url} controls autoPlay={isPlaying} />
    </div>
   )}
  </div>
 );
};

export default Music;
