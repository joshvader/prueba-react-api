import MiApi from './components/MiApi'
import BgVideo from "./media/video.mp4"

function App() {
  

  return (
    <>
      <main  id="hero">
        <div className='flex flex-col justify-center items-center w-4/5 m-auto relative info'>
        <img src="https://fontmeme.com/permalink/240511/7e093698814ee1119a00c8761816b2d2.png" alt="" />
        
          <MiApi/>
        </div>
         <video  muted autoPlay loop src={BgVideo} type="video/mp4"></video>
         <div className='capa'></div>
         
      </main>
      
      </>
  )
}

export default App
