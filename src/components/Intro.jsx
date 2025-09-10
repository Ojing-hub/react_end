import React from 'react'

import img_m from "../assets/img/portrait.png"

const introText = {
  title: "MBC academy",
  desc: ["talent is","found at the end of the","effort"]
}

const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro_inner">
        <h1 className="intro_title">
          {introText.title}
        </h1>
        <div className="intro_lines">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
        <div className="intro_text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={img_m} alt="메인이미지" />
          </div>
        </div>
        <div className="intro_lines bottom">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </section>
  )
}

export default Intro