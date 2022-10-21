import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

export default function Header(){
  return(
    <header>
      <h1 className="App title"><HighlightIcon />Keeper</h1>
      <ul className="nav-items">
      <li><a href=""> Contact Us</a></li>
      <li><a href="">Help</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Log In</a></li>
      <li><a href="">Sign Up</a></li>
      </ul>
    </header>
  ); }