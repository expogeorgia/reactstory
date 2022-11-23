import React from 'react';
import './style/header.css'
import logo from './img/logo.jpeg';


function Header() {
  return (
<div className='header'>
  <div className='logo'>
  <img src={logo} alt="BigCo Inc. logo" style={{ width: '50px'}}/>
    <button>კონტაკტი</button>    
  </div>
<button >საოპერაციო</button>
<button >ფინანსები</button>
<button >ადმინისტრაცია</button>
<button >გაყიდვები</button>
<button >მარკეტინგი</button>
<button >პავილიონები</button>
<button >ტექნიკური</button>
</div>
  );
}

export default Header;