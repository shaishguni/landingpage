import Stacks from './Stacks'

const Video = () => {
  return (
    <div className="pt-24">
       <div>
      <div  className="cursor-pointer aspect-square">
        <video
       
         muted={true}
         preload="auto"
          src="video.mp4"
          width="100%" 
          height="100%" 
        >
          
        </video>
      
      </div>
      
    </div>
    </div>
  )
}

export default Video