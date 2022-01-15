import {useState, createContext} from 'react'
import CookieConsent from "react-cookie-consent";

import Card from './ui/Card.js'
import Header from './components/Header.js'
import Categories from './components/Categories';
import MainWindow from './components/MainWindow';
import {ThemeProvider, useModal} from './store/ThemeContext'

import './App.css';





export default function App() {



  return (
    <>
    <ThemeProvider>
    <div className="App">
    <Header />
    <h1 className="text-center text-4xl font-black tracking-widest mb-4">Animal Crossing Museum Tracker</h1>


    <Categories/>

    <MainWindow/>


<CookieConsent
  location="bottom"
  buttonText="I Agree"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
</CookieConsent>
    </div>
    </ThemeProvider>
    </>
  );
}

