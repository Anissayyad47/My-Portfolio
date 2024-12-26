import React from 'react';
import "./Navbar.css";
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


export default function Navbar() {
  return (
    <>
    <nav class="navbar">
        <div class="container">
            <a href="#" class="logo">ANIS SAYYAD</a>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skilss</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
    <section><About></About></section>
    <section><Skills></Skills></section>
    <section><Projects></Projects></section>
    <section><Contact></Contact></section>
    </>
  )
}
