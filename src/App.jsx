
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      
      <Navbar />
      <main>
        <picture>
          <source media="(max-width:950px)" srcSet="/images/image-hero-mobile.png"></source>
          <img src='/images/image-hero-desktop.png' className='main-img' alt='Main image'></img>
        </picture>
        
        <div className='main-content'>
          <h1 className='main-title'>Make remote work</h1>
          <p className='main-text'>Get your team in sync, no matter your location. Streamline processes, 
          create team rituals, and watch productivity soar.</p>
          <button className='main-btn'>Learn more</button>
          <div className='clients'>
            <img src='/images/client-databiz.svg' alt='Client logo'></img>
            <img src='/images/client-audiophile.svg' alt='Client logo'></img>
            <img src='/images/client-meet.svg' alt='Client logo'></img>
            <img src='/images/client-maker.svg' alt='Client logo'></img>
          </div>
        </div>

      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App
