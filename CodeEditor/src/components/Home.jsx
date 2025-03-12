import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <><div className="homecont">
      <div className='upperhome'>
        <div className="ulefthome">
          <img src="https://i.morioh.com/210625/5583e165.webp" alt="CodeMaster" className='uimage' />
        </div>
        <div className="urighthome">
          <h1 className="uhead">A NEW WAY TO LEARN</h1>
          <p className="uabt">CodeMaster is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
        </div>
      </div>
      <div className='lowerhome'>
      <div className="llefthome">
          <img src="https://i.pinimg.com/564x/75/1b/49/751b494eedb8960206aaa5a5dd053627.jpg" alt="CodeMaster" className='limage' />
        </div>
        <div className="lrighthome">
          <h1 className="lhead">START EXPLORING</h1>
          <p className="labt">Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
