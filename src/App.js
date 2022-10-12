import './App.scss';
import {useState,useEffect} from 'react'

function App() {
  const [isOpen,setIsOpen] = useState(false)
  const [isScroll,setIsScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false))
  },[])
  

  return (
    <div className="App">
      <div className='home'>
        <div className={`header ${isScroll ? 'active' : ''}`}>
          <div className='headerItem'>
            <div className='header__logo'>
              <img src="https://vannilla-js-basic-project-10-scroll.netlify.app/logo.svg" alt='ptc' />
            </div>
            <div className='nav'>
              <div className='navItem'>Home</div>
              <div className='navItem'>About</div>
              <div className='navItem'>Services</div>
              <div className='navItem'>Tours</div>
            </div>

            <div className='barIcon' onClick={() => setIsOpen(!isOpen)}>
              <svg className='mobileBtnItem' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" width='30' height='30' viewBox="0 0 512 351.67"><path fill-rule="nonzero" d="M0 0h512v23.91H0V0zm0 327.76h512v23.91H0v-23.91zm0-163.88h512v23.91H0v-23.91z"/></svg>
            </div>


          </div>

          <div className='navMobile' style={{height: `${isOpen? 'auto' : '0px'}`}}>
            <div className='navItem'>Home</div>
            <div className='navItem'>About</div>
            <div className='navItem'>Services</div>
            <div className='navItem'>Tours</div>
          </div>
        </div>

        <div className='homeContent'>
          <div className='homeContent__header'>SCROLL PROJECT</div>
          <p className='homeContent__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos neque sunt in? Id, necessitatibus quos quisquam distinctio laudantium fugiat?</p>
          <div className='homeContent__btn'>
            <div className='homeContent__btn__item'>EXPLORE TOURS</div>
          </div>
        </div>
      </div>

      <div className='about'>
        <h3>ABOUT <span>US</span></h3>
      </div>
      <div className='about whiteContent'>
        <h3>OUR <span>SERVICES</span></h3>
      </div>
      <div className='about'>
        <h3>FEATURED <span>TOURS</span></h3>
      </div>
      <div className='footer'>
        <p>Copyright © Backroads Travel Tours Company 2022. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
