import React from 'react';
import { Link } from 'react-router-dom';
import image from './Capture.JPG'

function Map() {
    return (
      <header style={headerStyle1}>
        <h1>Traval planner  </h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        <div>
          <br/>
       <button class="button1" type="button">Hill Country </button>
       <button class="button1" type="button">Kandy  </button>
       <button class="button1" type="button">Cultural Triangle  </button>
       <button class="button1" type="button">Yala national Park</button>
       <button class="button1" type="button">Southwest coast</button>
       <button class="button1" type="button">Colombo</button>
       </div>

       
        <image class="img1" src = {image} />
        <div>
       <button class="btnnext" type="button">Next</button>

       </div>
      
        <br/>
      
  
      </header>
  
    )
  }
  
  const headerStyle1 = {
    background: '#833',
    color: '#fff',
    textAlign: 'center',
    padding: '100px'
    
  }
  
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }
  
  export default Map;