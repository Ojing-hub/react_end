
const Link = () => {
    document.querySelectorAll('a[href^="#"]').forEach((el)=>{
        el.addEventListener("click",function(e){
            e.preventDefault();

            const targetId = this.getAttribute("href");
            // 네이베이션에서 site를 틀릭했을 때 site의 아이디 값을 targetId 넣어줘라
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({behavior:"smooth"});
            }
        });
    });
};

export default Link

// a[href^="#"] : a 태그 중에서 속성값 href 다음이 "=#"으로 시작하는 값을 가져오는 명령어
// el : a[href^="#"]을 하나하나 선택