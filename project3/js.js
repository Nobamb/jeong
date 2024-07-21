$(document).ready(function () {











  // 로고 클릭시에
  $('h1').click(function () {

    // 프로필 화면이 토글된다.(화면이 커지고 작아짐)

    $('section.profile').toggleClass('on');

    $('section.wrap article').toggleClass('blind');

  })







  // 로고 span 마우스를 갖다댈 시에
  $('h1>span').mouseenter(function () {

    // 로고 span에 off줌(그림자 제거)
    $(this).addClass('off');


    // 로고 span에 마우스를 뗄 시에
    $(this).mouseleave(function () {

      // off를 없앰(그림자 생김)
      $(this).removeClass('off');

    })

  })




  // 로고 time 호버 시에도 동일한 이벤트
  $('h1 .time').mouseenter(function () {

    $('h1>span').addClass('off');

    $('h1 .time').mouseleave(function () {

      $('h1>span').removeClass('off');

    })

  })





  setInterval(function () {


    // 현재 날짜의 시, 분, 초 변수 생성
    let time = new Date();

    let hour = time.getHours();

    let min = time.getMinutes();

    let sec = time.getSeconds();



    // 표시할 시, 분, 초(9이하일땐 앞에 0이 붙게 함)
    let thisHour = 0;

    let thisMin = 0;

    let thisSec = 0;



    // 시, 분, 초가 9 이하일때 앞에 0이 붙은 채로 표시,
    // 10 이상일땐 그대로 표시


    if (hour <= 9) {

      thisHour = '0' + hour;

    }


    else {

      thisHour = hour;

    }




    if (min <= 9) {

      thisMin = '0' + min;

    }


    else {

      thisMin = min;
    }





    if (sec <= 9) {

      thisSec = '0' + sec;

    }


    else {

      thisSec = sec;

    }




    $('h1 .time span').eq(0).text(thisHour);

    $('h1 .time span').eq(1).text(thisMin);

    $('h1 .time span').eq(2).text(thisSec);





    // 시간 관련 이벤트들











    




    // setinterval 나중에 함수 외부로 옮기기(clear 해도 바로 생김)




    // 노래 관련 시간 이벤트



    let zero_time = setInterval(() => {
      // 12시가 되고 1시간동안은
      if (hour === 0 && (min >= 0 && min <= 59)) {

        // 기본 노래로 12:00 노래가 재생

        $('.main .record_box .music_box>ul>li').removeClass('on');
        $('.main .record_box .player>.play_this').text('12 : 00');

      }
    }, 1000);



    let one_time = setInterval(() => {

      if (hour === 1 && (min >= 0 && min <= 59)) {

        // 기본 노래로 12:00 노래가 재생

        $('.main .record_box .music_box>ul>li').removeClass('on');
        $('.main .record_box .player>.play_this').text('1 : 00');

      }

    }, 1000)







    // 다시 레코드 내의 음악 리스트들을 누르면 setinreval해제
    // 해제해야 다른 노래들을 재생 가능

    $('.main .record_box .music_box>ul>li').click(function () {

      clearInterval(zero_time);

      clearInterval(one_time);
    })








    // 메인 배경 색 변경



    // 06~11시, 18~23시 일때 중간 어두움

    for (let shadow = 0; shadow <= 1; shadow++) {


      // if (hour >= 6 + (shadow * 12) && hour <= 11 + (shadow * 12) ) {


      if (hour >= 0) {

        console.log(shadow + 100);

        console.log(hour);
      }



    }








  // 특정 커맨드를 입력시 관련 노래 재생



  $(window).keydown(function (e) {


    
    clearInterval(zero_time);

    clearInterval(one_time);


    if (e.key === 'Escape') {

      $('.main .record_box .music_box>ul>li').removeClass('on');
      $('.main .record_box .player>.play_this').text('ESC');

    }


    if ((e.key === 'c' || e.key === 'C') && e.ctrlKey) {

      $('.main .record_box .player>.play_this').addClass('ctrlC');

    }



    if ((e.key === 'v' || e.key === 'V') && e.ctrlKey && $('.main .record_box .player>.play_this').hasClass('ctrlC')) {

      $('.main .record_box .music_box>ul>li').removeClass('on');
      $('.main .record_box .player>.play_this').text('ctrl c + ctrl v');

    }


  })











  }, 100);













  // menu버튼을 누르면 들어가게 하고
  // 들어간 상태에서 다시 menu버튼을 누르면 돌아오게 하라


  $('nav.on>span').click(function () {


    // on클래스를 toggle시켜서 접고 여는 행위가 가능하게 함
    $('nav').toggleClass('on');


  })





  // 메뉴의 리스트 클릭시에

  $('nav li').click(function () {


    // 해당 순번 기억
    let i = $(this).index();


    // .wrap이 움직이면서 화면이 전환됨
    $('.wrap').animate({ 'top': `${i * -100}%` })


    // 이전의 리스트는 지우고
    $('nav li').removeClass('on');


    // 현재 리스트의 이벤트 적용
    $(this).addClass('on');


  })








  // 인트로





  // 자동차 사진 내의 숫자 생성



  // 숫자 카운트
  let count = 0;


  // 시그니쳐 사운드 카운트
  let signCount = 0;



  let persent = setInterval(() => {


    // 0.03초마다 1씩 추가
    count++;


    // 시그니쳐 카운트 = 카운트 수에서 25를 나눈 값
    signCount = count / 25;


    // 시그니쳐 사운드 수는 총 4개니까 4번 반복
    for (let sign = 0; sign < 4; sign++) {

      // 시그니쳐 카운트가 25가 될때마다(정수가 될때만 작동함)
      if (sign === signCount) {
        // 이전 시그니쳐 사운드는 현재 화면에서 올라가서 없어지고,
        $('.signiture li').eq(sign - 1).css({ 'top': '0%' }).stop().animate({ 'top': '-100%' }), 10;

        // 현재 시그니쳐 사운드가 밑에서 올라와서 등장함
        $('.signiture li').eq(sign).css({ 'top': '100%' }).stop().animate({ 'top': '0%' }), 10;

      }

    }


    // 0.03초마다 span에 숫자를 적어줌
    $('section.intro>.intro_area>span').text(count);


    // 0.03초마다 바늘이 오른쪽으로 움직임
    $('section.intro .niddle').css({ 'transform': `rotate(${(count / 100) * 98}deg)` })


    // 숫자가 100이 되면 off클래스를 줌
    if (count >= 100) {

      $('section.intro>.intro_area>span').addClass('off');

      clearInterval(persent);

    }

  }, 30);













  // off 클래스가 생길 시에 깜빡거리는 연출 발생


  let overCount = 0;



  let over = setInterval(() => {

    // off클래스가 발생시에만 작동(숫자가 100이 될때)

    if ($('section.intro>.intro_area>span').hasClass('off')) {

      // 0.3초마다 1씩 증가
      overCount++

      // overCount가 짝수면 보임(0.1초 후에)
      if (overCount % 2 === 0) {

        $('section.intro>.intro_area>span').animate({ 'opacity': '1' }, 100);

      }

      // overCount가 홀수면 안보임(0.1초 후에)
      if (overCount % 2 === 1) {

        $('section.intro>.intro_area>span').animate({ 'opacity': '0' }, 100);

      }


      // overCount가 7이면 아예 안보이게 clearinterval 적용
      if (overCount === 3) {


        clearInterval(over);

        $('section.intro .slush').addClass('on');

      }



    }

  }, 300);





  // 자르는 연출



  let slush = setInterval(() => {


    // slush에 on적용시(검은 화면생성)

    if ($('section.intro .slush').hasClass('on')) {

      // 자르는 연출들 생성
      // 애니메이션 시간은 무조건 setinteval 시간보다 적게 줘야함(안그러면 애니메이션 멈춤)

      $('section.intro .slush>img:nth-child(1)').stop().animate({ 'opacity': 1, 'top': '50%', 'left': '50%' }, 300, function () {

        $('section.intro .slush>img:nth-child(2)').stop().animate({ 'opacity': 1, 'left': '50%', 'top': '50%' }, 300, function () {

          // 생성후엔 setinterval 종료
          clearInterval(slush);

          // slush 종료
          $('section.intro .slush').removeClass('on');

          // 조각내기 시작

          $('section.intro .intro_break').addClass('on');

          // 기존 

          $('section.intro .intro_area').hide();

        })

      })

    }
    // 애니메이션이 0.5초이므로 0.6초로 생성
  }, 600);







  setInterval(() => {

    // break on클래스 적용시

    if ($('section.intro .intro_break').hasClass('on')) {

      // 각 조각들이 날라감

      $('section.intro .intro_break img').addClass('on');

    }

    // 조각들이 날아가게 되면

    if ($('section.intro .intro_break img').hasClass('on')) {

      // 2초동안 opacity값 변경

      $('section.intro').animate({ 'opacity': 0 }, 1000, function () {

        // opaicity 변경후에 display none(메인화면들 클릭하기 위해)

        $('section.intro').hide();


        $('.main .record_box').addClass('on');

      })

    }
  }, 300);





























  // 레코드에 마우스를 올려두면


  $('.main .record_box .record').mouseenter(function () {


    // 레코드 내의 박스가 오른쪽으로 나옴

    $('.main .record_box .music_box').addClass('on');


    // 마우스를 떼면(레코드 박스의 영역을 포함한 부모 영역)

    $('.main .record_box').mouseleave(function () {

      // 레코드 내의 박스가 다시 들어감
      $('.main .record_box .music_box').removeClass('on');

    })


  })





  // 레코드 내의 음악 리스트 클릭시


  $('.main .record_box .music_box>ul>li').click(function () {

    // 음악리스트에 있던 on 클래스 제거

    $('.main .record_box .music_box>ul>li').removeClass('on');

    // 클릭한 리스트는 on(강조 효과)

    $(this).addClass('on');

    // 클릭한 리스트의 글자 지정

    let music_text = $(this).text();


    // ctrl c ctrl v 이스터에그 해제(지정 안해주면 ctrl v만 눌러도 작동)
    $('.main .record_box .player>.play_this').removeClass('ctrlC');


    // 지정한 글자를 플레이중인 노래명에 갖다 붙임

    $('.main .record_box .player>.play_this').text(music_text);

  })



  // play/pause 버튼 클릭시

  $('.main .record_box .player>.play').click(function () {

    // 멈춤 또는 재생 아이콘 변경

    $('.main .record_box .player>.play i').toggleClass('on');

  })







  setInterval(() => {


    if ($('.main .record_box .player>.play .fa-play').hasClass('on')) {

      $('.main .record_box .record').css({ 'animation-play-state': 'paused' });

    }

    else {

      $('.main .record_box .record').css({ 'animation-play-state': 'running' });

    }


  }, 300)







































































  // sns 이벤트






  // 아이콘이 도는 효과


  $('.sns .sns_all li a').mouseenter(function () {

    let sns1 = $(this).parent('li').index();

    $('.sns .sns_all li .sns_app').removeClass('on');

    $('.sns .sns_all li .sns_app').eq(sns1).addClass('on');



  })





  $('.sns .sns_all li a').mouseleave(function () {

    let sns2 = $(this).parent('li').index();

    $('.sns .sns_all li .sns_app').removeClass('on');


  })




























  // 필모그래피



  // 필모그래피들의 기본 left값 지정


  for (let filmo = 1; filmo <= 10; filmo++) {

    $(`.filmo_inner .filmo_zone_${filmo}`).css({ 'left': `${(filmo - 1) * 100}%` })

  }




  // 카운트 값만큼 움직이게 함

  let filmoCount = 0;



  // 마우스 휠 이벤트를 사용하였을 때


  $(window).mousewheel(function (e, x) {


    if ($('nav ul>li:nth-child(3)').hasClass('on')) {


      // 스크롤을 내렸을 때

      if (x < 0) {

        // 9미만일때(left -900px이 마지막 구간)
        if (filmoCount < 9) {

          // 카운트를 올린후 왼쪽으로 이동
          filmoCount++;



          $('.filmo_inner').stop().animate({ 'left': `${filmoCount * -100}%` }, 1000)
        }



      }

      // 스크롤을 올렸을 때

      if (x > 0) {
        // 0 초과일때(left 0px이 첫번째 구간)
        if (filmoCount > 0) {

          // 카운트를 내린후 오쪽으로 이동
          filmoCount--;
          $('.filmo_inner').stop().animate({ 'left': `${filmoCount * -100}%` }, 1000)
        }




      }


    }





  })


























})