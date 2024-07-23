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

    if ((hour >= 6 && hour <= 11) || (hour >= 18 && hour <= 23)) {

      $('.main #time_shadow').removeClass().addClass('shadowMiddle');

    }





    // 12~17시 일때 안 어두움


    else if (hour >= 12 && hour <= 17) {

      $('.main #time_shadow').removeClass().addClass('shadowLow');

    }





    // 00~05시 일때 많이 어두움

    else {
      $('.main #time_shadow').removeClass().addClass('shadowHigh');

    }











    // 특정 커맨드를 입력시 관련 노래 재생



    $(window).keydown(function (e) {



      clearInterval(zero_time);

      clearInterval(one_time);

      // esc 키를 누를시에
      if (e.key === 'Escape') {


        // 컨트롤 c 클래스와 현재 재생중인 음악의 on 클래스를 제거후
        // esc키를 누르고 다시 ctrl c ctrl v를 눌러야 재생하게 하도록함
        $('.main .record_box .player>.play_this').removeClass('ctrlC');
        $('.main .record_box .music_box>ul>li').removeClass('on');


        // esc 음악이 재생함
        $('.main .record_box .player>.play_this').text('ESC');

      }


      // ctrl c를 누르고(ctrlC 클래스 부여)
      if ((e.key === 'c' || e.key === 'C') && e.ctrlKey) {

        $('.main .record_box .player>.play_this').addClass('ctrlC');

      }


      // ctrl v를 누르면 ctrl c ctrl v 재생(ctrlC클래스가 있는지 검사하여 확인)
      if ((e.key === 'v' || e.key === 'V') && e.ctrlKey && $('.main .record_box .player>.play_this').hasClass('ctrlC')) {

        $('.main .record_box .music_box>ul>li').removeClass('on');
        $('.main .record_box .player>.play_this').text('ctrl c + ctrl v');

      }


    })











  }, 100);













  // menu버튼을 누르면 들어가게 하고
  // 들어간 상태에서 다시 menu버튼을 누르면 돌아오게 하라


  $('nav>span').click(function () {


    // on클래스를 toggle시켜서 접고 여는 행위가 가능하게 함
    $('nav').toggleClass('on');

    // 히스토리 마지막 시그니쳐 사운드가 버튼을 가리지 않게하여 움직임
    $('.history_zone .years .years_info .signiture_deco.sign2').toggleClass('move');

  })













  // 메뉴의 리스트 클릭시에

  $('nav li').click(function () {


    // 해당 순번 기억
    let i = $(this).index();


    // .wrap이 움직이면서 화면이 전환됨
    $('.wrap').stop().animate({ 'top': `${i * -100}%` })


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

        $('section.intro>.intro_area>span').stop().animate({ 'opacity': '1' }, 100);

      }

      // overCount가 홀수면 안보임(0.1초 후에)
      if (overCount % 2 === 1) {

        $('section.intro>.intro_area>span').stop().animate({ 'opacity': '0' }, 100);

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




























  // 히스토리



  // 히스토리들의 기본 left값 지정


  for (let history = 1; history <= 10; history++) {

    $(`.history_inner .history_zone_${history}`).css({ 'left': `${(history - 1) * 100}%` })

  }




  // 카운트 값만큼 움직이게 함

  let historyCount = 0;



  // 마우스 휠 이벤트를 사용하였을 때


  $(window).mousewheel(function (e, x) {




    if ($('nav ul>li:nth-child(3)').hasClass('on')) {


      // 스크롤을 내렸을 때

      if (x < 0) {

        // 9미만일때(left -900px이 마지막 구간)
        if (historyCount < 9) {

          // 카운트를 올린후 왼쪽으로 이동
          historyCount++;



          $('.history_inner').stop().animate({ 'left': `${historyCount * -100}%` }, 500);
        }



      }

      // 스크롤을 올렸을 때

      if (x > 0) {
        // 0 초과일때(left 0px이 첫번째 구간)
        if (historyCount > 0) {

          // 카운트를 내린후 오쪽으로 이동
          historyCount--;
          $('.history_inner').stop().animate({ 'left': `${historyCount * -100}%` }, 500)
        }




      }


      // 스크롤에 의해 화면전환했을 때 해당 화면에 맞는 on클래스를 상단의 li에 적용


      $('.history_bar li').removeClass('on');

      $('.history_bar li').eq(historyCount).addClass('on');

    }


  })







  // 상단의 리스트르르 클릭했을 때 클릭한 부분만큼 화면이 전환되게 함

  $('.history_bar li').click(function () {

    let his = $(this).index();

    historyCount = his;

    $('.history_bar li').removeClass('on');

    $(this).addClass('on');

    $('.history_inner').stop().animate({ 'left': `${historyCount * -100}%` }, 500);

  })






































  // 앨범 이벤트





  // 앨범을 이동시킬 변수 선언

  let ac = 0;




  $('.album_play .play_buttons li:nth-child(3)').click(function () {

    if (ac > -1) {

      // 변수 1씩 감소
      // ac 3 기준, 1이 left 0, 2가 33.3333%기준으로 끝점에 있었기에
      // ac -1 기준  0이 left 0, 1이 33.3333%에 있어야 됨
      ac--;


      // 변수에 따라 앨범을 움직임


      $('.album_list ul').stop().animate({ 'left': `${ac * -33.3333}%` }, 1000);


      // 기존 가운데에 있던 리스트의 on클래스 제거후

      $('.album_list li').removeClass();


      // 새로 가운데로 오게 될 리스트에 on클래스를 줌

      $('.album_list li').eq(ac + 1).addClass('on');



      // 상단의 리스트들도 바뀐 앨범에 따라 on값 변경


      $('.album_click li').removeClass('on');


      $('.album_click li').eq(ac + 1).addClass('on');

    }


  })


  // 버튼1 클릭시

  $('.album_play .play_buttons li:nth-child(4)').click(function () {


    // ac가 3미만일 때
    if (ac < 3) {

      // 변수 1씩 추가
      // ac 0 기준, 1이 left 0, 2가 33.3333%기준으로 시작점에 있었기에
      // ac 3 기준  4(ac(3) + 1)가 left 0, 5(ac(3) + 2)가 33.3333%에 있어야 됨

      ac++;


      // 변수에 따라 앨범을 움직임


      $('.album_list ul').stop().animate({ 'left': `${ac * -33.3333}%` }, 1000);


      // 기존 가운데에 있던 리스트의 on클래스 제거후

      $('.album_list li').removeClass();


      // 새로 가운데로 오게 될 리스트에 on클래스를 줌

      $('.album_list li').eq(ac + 1).addClass('on');



      // 상단의 리스트들도 바뀐 앨범에 따라 on값 변경
      $('.album_click li').removeClass('on');


      $('.album_click li').eq(ac + 1).addClass('on');


    }



  })









  // 상부의 리스트를 클릭하면 해당 앨범으로 이동

  $('.album_click li').click(function () {


    let albumI = $(this).index();

    $('.album_click li').removeClass();

    $(this).addClass('on');


    ac = albumI - 1;


    $('.album_list ul').stop().animate({ 'left': `${(ac) * -33.3333}%` }, 1000);


    // 기존 가운데에 있던 리스트의 on클래스 제거후

    $('.album_list li').removeClass();


    // 새로 가운데로 오게 될 리스트에 on클래스를 줌

    $('.album_list li').eq(ac + 1).addClass('on');





    // 앨범 이름을 클릭하면 해당 부분의 재생 표시가 나고
    // 나머지 이름들은 정지 표시가 남




    $('.album_click li .play').find('i:nth-child(1)').removeClass('on');

    $('.album_click li .play').find('i:nth-child(2)').addClass('on');

    $(this).find('i:nth-child(2)').removeClass('on');

    $(this).find('i:nth-child(1)').addClass('on');










  })






  // 유튜브 스포티파이 이동 이벤트


  setInterval(() => {


    // 첫번째 앨범 재생될 때

    if ($('.album_list ul li:nth-child(1)').hasClass('on')) {

      // 유튜브, 스포티파이는 첫번째 앨범 링크로감(나머지도 모두 동일)

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/medo8dj_-28?si=f99cX8fi_VKdKril");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/track/0YjaYbmmCgUUwOVAA3wqiV");

    }


    if ($('.album_list ul li:nth-child(2)').hasClass('on')) {

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/Sq9DmUBdQMs?si=lINrii9mkWV3rcwF");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/track/5PFqdHy3b9PGgfns2uVpE6");

    }

    if ($('.album_list ul li:nth-child(3)').hasClass('on')) {

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/PRLuDnZtsOY?si=aso1lPnerqVlUni2");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/track/7qyUYMwT1UBUFHtvL2EVAC");

    }

    if ($('.album_list ul li:nth-child(4)').hasClass('on')) {

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/_6kZcZvFmHc?si=Pc8gqmpcq2NZZRqC");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/track/1GeX7W2VtmtceoW9fzZ8Oc");

    }

    if ($('.album_list ul li:nth-child(5)').hasClass('on')) {

      $('.album_play .play_app li:nth-child(1)').find('a').attr("href", "https://youtu.be/q3HdmX9kIek?si=Tnk84Sl-1rKv1jU4");

      $('.album_play .play_app li:nth-child(2)').find('a').attr("href", "https://open.spotify.com/search/%EA%B0%80%EC%8A%B5%EA%B8%B0");

    }





  }, 1000)















  // 뒤로가기 적용시 재생/정지

  $('.album_play .play_buttons li').eq(2).click(function () {

    $('.album_click li').find('i:nth-child(1)').removeClass('on');

    $('.album_click li').find('i:nth-child(2)').addClass('on');

    $(`.album_click li:nth-child(${ac + 2}) .play`).find('i:nth-child(2)').removeClass('on');

    $(`.album_click li:nth-child(${ac + 2}) .play`).find('i:nth-child(1)').addClass('on');
  })




  // 앞으로 가기 적용시 재생/정지



  $('.album_play .play_buttons li').eq(3).click(function () {

    $('.album_click li').find('i:nth-child(1)').removeClass('on');

    $('.album_click li').find('i:nth-child(2)').addClass('on');

    $(`.album_click li:nth-child(${ac + 2}) .play`).find('i:nth-child(2)').removeClass('on');

    $(`.album_click li:nth-child(${ac + 2}) .play`).find('i:nth-child(1)').addClass('on');


  })








  // 앨범 리스트에서의 재생/멈춤


  $('.album_click li span').click(function (e) {

    // 부모요소의 이벤트 버블링을 막음

    // 부모 클래스를 클릭했을 때 
    // 앨범 이름을 클릭하면 해당 부분의 재생 표시가 나고
    // 나머지 이름들은 정지 표시가 나는 이벤트와 충돌함

    e.stopPropagation();

    // 클릭한 리스트가 on클래스가 존재할경우 
    // 리스트에 있는 아이콘에 onclass를 토글함(재생 및 정지)

    if ($(this).parent('li').hasClass('on')) {

      $(this).find('i').toggleClass('on');

    }




  })











  // 앨범별 기본 재생시간 



  



  setInterval(function(){

    if($('.album_click li').eq(0).hasClass('on')){

      $('.full_minutes').text('03');


      $('.full_seconds').text('20');

    }


    if($('.album_click li').eq(1).hasClass('on')){


      $('.full_minutes').text('03');


      $('.full_seconds').text('30');
    }


    if($('.album_click li').eq(2).hasClass('on')){

      $('.full_minutes').text('03');


      $('.full_seconds').text('29');

    }

    if($('.album_click li').eq(3).hasClass('on')){


      $('.full_minutes').text('03');


      $('.full_seconds').text('41');
    }

    if($('.album_click li').eq(4).hasClass('on')){


      $('.full_minutes').text('04');


      $('.full_seconds').text('02');

    }


  },500)






































})