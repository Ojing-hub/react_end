import React from 'react'
const siteText = [
    {
        text:["make","site compliant with","KimMyeongHyeon",],
        title:"1차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간: 3일","프로그램: html5, css3, javascript, react 등",],
    },
    {
        text:["make","site compliant with","KimMyeongHyeon2",],
        title:"2차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간: 3일","프로그램: html5, css3, javascript, react 등",],
    },
    {
        text:["make","site compliant with","3imMyeongHyeon",],
        title:"3차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간: 3일","프로그램: html5, css3, javascript, react 등",],
    },
    {
        text:["make","site compliant with","KimMyeongHyeon4",],
        title:"4차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간: 3일","프로그램: html5, css3, javascript, react 등",],
    },
    {
        text:["make","site compliant with","5KimMyeongHyeon",],
        title:"5차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간: 3일","프로그램: html5, css3, javascript, react 등",],
    },
    {
        text:["make","site compliant with","Kim6yeongHyeon",],
        title:"6차 포트폴리오",
        code:"/",
        view:"/",
        info:["site coding","제작 기간: 3일","프로그램: html5, css3, javascript, react 등",],
    },
]

const Site = () => {
  return (
    <section id='site'>
      <div className="site_inner">
        <div className="site_title">
            Site Coding <em>나의 작품들</em>
        </div>
        <div className="site_wrap">
            {siteText.map((site,key)=>(
                <div className={`site_item s${key+1}`} key={key}>
                <span className='num'>{key+1}.</span>
                <div className="text">
                    <div>{site.text[0]}</div>
                    <div>{site.text[1]}</div>
                    <div>{site.text[2]}</div>
                </div>
                <h3 className='title'>{site.title}</h3>
                <div className="btn">
                    <a href={site.code}>code</a>
                    <a href={site.view}>view</a>
                </div>
                <div className="info">
                    <span>{site.info[0]}</span>
                    <span>{site.info[1]}</span>
                    <span>{site.info[2]}</span>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Site