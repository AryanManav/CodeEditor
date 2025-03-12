import React from 'react'
import './Practice.css'

import { NavLink } from 'react-router-dom';
// import '../../public/java.png'

const Practice = () => {
  return (
    <>
      <div className="prac">
        <div className="pracupper">
          <h1 className='phead'>Upgrade your skills!!!</h1>
          <p className="pabt">Practice over 5000+ problems in coding languages like Python, Java, JavaScript, C++, SQL and HTML. Start with beginner friendly problems and solve hard problems as you become better.</p>
        </div>
        <div className="praclower">
          <h1 className='plhead'>Choose your Language</h1>
          <div className="langs">
            <NavLink to='/learnjava'>
              <section className='praclang'>
                <img className='imagelang' src="../../public/java.png" alt="Java" />
                <p className='praclangname'>JAVA</p>
              </section>
            </NavLink>

            <NavLink to='/learnpython'>
              <section className='praclang'>
                <img className='imagelang' src="../../public/python.png" alt="Java" />
                <p className='praclangname'>PYTHON</p>
              </section>
            </NavLink>

          </div>
        </div>
      </div>
    </>
  )
}

export default Practice
