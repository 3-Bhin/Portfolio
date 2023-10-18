// 헤더 오늘 날짜 표시

let element = document.getElementById("date"),
        today = new Date();
    function getTodayLabel() {
      let WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      let day = today.getDay(),
          todayLabel = WEEKDAY[day] + 'day';

      return todayLabel;
    }

    console.log(today);
    // id : date 값에 날짜 표시
    element.innerHTML = getTodayLabel() + ', ' + today.toLocaleDateString('ko-KR');


// 오프셋 값 받아오기
// let projectPageY=
window.addEventListener('scroll', function(){
  let scrollValue=window.scrollY;
  console.log( scrollValue );
  let bgtext=document.querySelector('.project-bg')
  if(scrollValue>=1900){
    bgtext.innerHTML='team project';
  }else{
    bgtext.innerHTML='individual project';
  }
});

