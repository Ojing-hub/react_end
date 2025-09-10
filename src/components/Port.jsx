import React, { useEffect, useRef } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import port_img1 from "../assets/img/port1.png"
import port_img2 from "../assets/img/port2.png"
import port_img3 from "../assets/img/port3.png"
import port_img4 from "../assets/img/port4.png"
import port_img5 from "../assets/img/port5.png"
import port_img6 from "../assets/img/port6.png"

const portText=[
    {
        url:"/",
        img:port_img1,
        alt:"1차 포트폴리오 이미지",
        title:"1차 포트폴리오",
        desc:"1차 개인프로젝트는 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, facere! Accusamus eligendi delectus molestiae quo cupiditate ut voluptatum soluta nulla, molestias dignissimos possimus, illo, blanditiis tempore. Maxime, excepturi. Incidunt, perferendis?"
    },
    {
        url:"/",
        img:port_img2,
        alt:"2차 포트폴리오 이미지",
        title:"2차 포트폴리오",
        desc:"2차 개인프로젝트는 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, facere! Accusamus eligendi delectus molestiae quo cupiditate ut voluptatum soluta nulla, molestias dignissimos possimus, illo, blanditiis tempore. Maxime, excepturi. Incidunt, perferendis?"
    },
    {
        url:"/",
        img:port_img3,
        alt:"3차 포트폴리오 이미지",
        title:"3차 포트폴리오",
        desc:"3차 개인프로젝트는 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, facere! Accusamus eligendi delectus molestiae quo cupiditate ut voluptatum soluta nulla, molestias dignissimos possimus, illo, blanditiis tempore. Maxime, excepturi. Incidunt, perferendis?"
    },
    {
        url:"/",
        img:port_img4,
        alt:"4차 포트폴리오 이미지",
        title:"4차 포트폴리오",
        desc:"4차 개인프로젝트는 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, facere! Accusamus eligendi delectus molestiae quo cupiditate ut voluptatum soluta nulla, molestias dignissimos possimus, illo, blanditiis tempore. Maxime, excepturi. Incidunt, perferendis?"
    },
    {
        url:"/",
        img:port_img5,
        alt:"5차 포트폴리오 이미지",
        title:"5차 포트폴리오",
        desc:"5차 개인프로젝트는 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, facere! Accusamus eligendi delectus molestiae quo cupiditate ut voluptatum soluta nulla, molestias dignissimos possimus, illo, blanditiis tempore. Maxime, excepturi. Incidunt, perferendis?"
    },
    {
        url:"/",
        img:port_img6,
        alt:"6차 포트폴리오 이미지",
        title:"6차 포트폴리오",
        desc:"6차 개인프로젝트는 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, facere! Accusamus eligendi delectus molestiae quo cupiditate ut voluptatum soluta nulla, molestias dignissimos possimus, illo, blanditiis tempore. Maxime, excepturi. Incidunt, perferendis?"
    },
]

const Port = () => {

    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;

        let scrolltween = gsap.to(sections,{
            xPercent : -120 * (sections.length - 1),
            ease:"none",

            scrollTrigger:{
                trigger: horizontal,
                start: "top 50px",
                end: "+=3000",
                pin: true,
                scrub: 1,
            }
        });
        return()=>{
            scrolltween.kill();
        }
    },[]);
    // useEffect(()=>{}) : 랜더링할 때마다 실행되는 문법
    // useEffect(()=>{},[]) : 화면에 첫 렌더링될 때 한 번 실행
    // useEffect(()=>{},[value]) : 화면에 첫 렌더링 될 때 한 번 실행하고 벨류값이 바뀔 때 실행하는 문법

    return (
        <section id='port' ref={horizontalRef}>
            <div className="port_inner">
                <div className="port_title">
                    portfolio <em>포폴 작업물</em>
                </div>
                <div className="port_wrap">
                    {portText.map((port,key)=>(
                        <div className={`port_item p${key+1}`} ref={(el)=>(sectionsRef.current[key] = el)}>
                            <div className="num">0{key+1}.</div>
                            <a href={port.url} target='_blank' className='img' rel='noreferrer'>
                                <img src={port.img} alt={port.alt} />
                            </a>
                            <h3 className='title'>{port.title}</h3>
                            <p className='desc'>{port.desc}</p>
                            <a href={port.url} target='_blank' className='site' rel='noreferrer'>
                                사이트 보기
                            </a>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default Port