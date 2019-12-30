import React from 'react';
import cat from './cat.png'
import cat1 from './cat1.png'
function Header() {
    return <div className="header">
          <img src={cat} width="22" height="22" alt="img"/>
         Emoji Search
       <img src={cat1} width="22" height="22" alt="img"/>
    </div>
   
  }

  export default Header;