$(document).ready(function () {



  // 기본설정 










  // 데스크탑 사이즈 미리 지정
  const desktop = 1280;













  // 윈도우 크기에 맞는 가로 세로크기 함수
  function size() {

    let winW = $(window).width();
    let winH = $(window).height();



    $('.box1').width(winW);
    $('.box1').height(winH);

    $('.hero').width(winW);
    $('.hero').height(winH);

    // $('.hero .listBox').width(winW);
    // $('.hero .listBox').height(winH);

    $('.hero .listBox li').width(winW);
    $('.hero .listBox li').height(winH);


    // 연혁 부분의 세대별 포켓몬들의 영역을 설정
    // 전체 세로 길이에 맞게 세로 화면 너비가 꽉차게 하기


    $('.years .yearsZone .gene').height(winH * 9);

    $('.years .yearsZone .gene ul').height(winH);

    $('.years .yearsZone .gene li').height(winH);



    $('.years .yearsZone .history').height(winH * 9);


    $('.years .yearsZone .history ul').height(winH * 9);


    $('.years .yearsZone .history li').height(winH);

    // // $('.listBox').width(winW * 5);
    // $('.listBox').height(winH);

    // // $('.listBox li').width(winW);

    // $('.listBox li').height(winH);


    // // $('.hero.on').width(1280 + 'px');
    // $('.hero.on').height(760 + 'px');

    // // $('hero.on .listBox').width(1280 + 'px');
    // $('hero.on .listBox').height(760 + 'px');

    // // $('hero.on .listBox li').width(1280 + 'px');

    // $('hero.on .listBox li').height(760 + 'px');


  }


  size();



  $(window).resize(function () {
    // 리사이징을 해도 윈도우 크기에 맞는 가로 세로크기
    size();

  })



























  // 헤더 설정


















  // 로그인창 이동

  $('header .util li.login').click(function (e) {

    // 다른 링크로 이동하는 효과 없앰
    // 현재페이지에서 이동할거이기에
    e.preventDefault();

    $('html,body').scrollTop(0);

    $('#sub_main').removeClass('on');

    // wrap의 off클래스 부여(display none)
    // 서브페이지에 on클래스 부여(display block)
    // 그리고 scrollevent class를 제거하여 스크롤 이벤트가 발생하지 않게 함
    $('#wrap').removeClass('scrollevent');
    $('#wrap').addClass('off');
    $('#login_main').addClass('on');



    $('header').addClass('on');
    $('.mouseZone').fadeOut();

    // 로고 클릭시엔 원상복구
    $('header h1').click(function (e) {

      e.preventDefault();

      $('html,body').scrollTop(0);

      $('#sub_main').removeClass('on');

      $('#login_main').removeClass('on');

      $('#wrap').addClass('scrollevent');
      $('#wrap').removeClass('off');



      // h1를 클릭해서 스크롤 탑으로 가게 되면 히어로크기가 윈도우 크기에 맞지 않기에
      // setinterval로 크기를 맞춤
      let inter1 = setInterval(function (e) {

        $('.hero').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

        $('.hero .listBox li').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

      }, 100)


      // 만약에 스크롤을 내리면 다시 풀림
      $(window).scroll(function () {


        if ($(window).scrollTop() > 0) {

          clearInterval(inter1);

        }

      })



      $('header').removeClass('on');
      $('.mouseZone').fadeIn();

    });



  })



  // 리뷰영역쪽 로그인에서 로그인창으로 이동


  $('.review .review_list .write .login_btn').click(function (e) {

    // 다른 링크로 이동하는 효과 없앰
    // 현재페이지에서 이동할거이기에
    e.preventDefault();

    $('html,body').scrollTop(0);

    $('#sub_main').removeClass('on');

    // wrap의 off클래스 부여(display none)
    // 서브페이지에 on클래스 부여(display block)
    // 그리고 scrollevent class를 제거하여 스크롤 이벤트가 발생하지 않게 함
    $('#wrap').removeClass('scrollevent');
    $('#wrap').addClass('off');
    $('#login_main').addClass('on');



    $('header').addClass('on');
    $('.mouseZone').fadeOut();

    // 로고 클릭시엔 원상복구
    $('header h1').click(function (e) {

      e.preventDefault();

      $('html,body').scrollTop(0);

      $('#sub_main').removeClass('on');



      $('#wrap').addClass('scrollevent');
      $('#wrap').removeClass('off');






      // h1를 클릭해서 스크롤 탑으로 가게 되면 히어로크기가 윈도우 크기에 맞지 않기에
      // setinterval로 크기를 맞춤
      let inter2 = setInterval(function (e) {

        $('.hero').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

        $('.hero .listBox li').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

      }, 100)


      // 만약에 스크롤을 내리면 다시 풀림
      $(window).scroll(function () {


        if ($(window).scrollTop() > 0) {

          clearInterval(inter2);

        }

      })



      $('header').removeClass('on');
      $('.mouseZone').fadeIn();

    });



  })
















  // 뎁스 호버 이벤트
  // 메뉴를 호버했을 때 뎁스 등장
  $('header nav>ul>li:nth-child(1) a').mouseenter(function () {

    $('header ul .game').css({ 'display': 'flex' });
    // $('header ul .game').stop().animate({ 'opacity': 1 }, 500);
    $('header ul .game').css({ 'z-index': 100 });
    $('header ul .product').css({ 'z-index': -1 });

    // 메뉴를 떠났을 때 뎁스 사라짐
    $('header').mouseleave(function () {

      $('header ul .game').css({ 'display': 'none' });
      // $('header ul .game').stop().animate({ 'opacity': 0 }, 500);
      $('header ul .game').css({ 'z-index': -1 });
      $('header ul .product').css({ 'z-index': 100 });
      $('header ul .game li a').css({ 'opacity': 1, 'color': '#58585B' });
      $('header ul .product li a').css({ 'opacity': 1, 'color': '#58585B' });

      // 2뎁스의 썸네일 사진들도 onclass를 삭제하면서 안보이게 됨
      for (let sumb1 = 0; sumb1 <= 2; sumb1++) {
        $('header nav ul ul .sumbnail').removeClass(`on${sumb1}`);
      }


    })
  })


  $('header nav>ul>li:nth-child(2) a').mouseenter(function () {

    $('header ul .product').css({ 'display': 'flex' });

    // $('header ul .product').stop().animate({ 'opacity': 1 }, 500);
    $('header ul .product').css({ 'z-index': 100 });
    $('header ul .game').css({ 'z-index': -1 });
    $('header').mouseleave(function () {

      $('header ul .product').css({ 'display': 'none' });

      // $('header ul .product').stop().animate({ 'opacity': 0 }, 500);
      $('header ul .product').css({ 'z-index': -1 });
      $('header ul .game').css({ 'z-index': 100 });
      $('header ul .game li a').css({ 'opacity': 1, 'color': '#58585B' });
      $('header ul .product li a').css({ 'opacity': 1, 'color': '#58585B' });
      for (let sumb1 = 0; sumb1 <= 2; sumb1++) {
        $('header nav ul ul .sumbnail').removeClass(`on${sumb1}`);
      }


    })
  })










  // 2뎁스 메뉴에 마우스를 대었을때
  $('header ul .game li').mouseenter(function () {

    let dex = $(this);
    // 마우스를 올려댄건 색깔 변화 그외에것은 검은색+투명도 약화
    $('header ul .game li a').css({ 'opacity': 0.4, 'color': '#58585B' });

    $(dex).find('a').css({ 'opacity': 1, 'color': '#E83E34' });

    // 다른 메뉴에 가져다 대었을 때
    $('header ul .game li').mouseenter(function () {


      // 기존 메뉴는 색깔이 검게 변함
      dex.find('a').css({ 'opacity': 0.4, 'color': '#58585B' });
      // 다른 메뉴가 이제 기존 메뉴로 변경
      dex = $(this);
    })



  })



  $('header ul .product li').mouseenter(function () {

    let dex2 = $(this);

    $('header ul .product li a').css({ 'opacity': 0.4, 'color': '#58585B' });

    $(dex2).find('a').css({ 'opacity': 1, 'color': '#E83E34' });

    $('header ul .product li').mouseenter(function () {


      dex2.find('a').css({ 'opacity': 0.4, 'color': '#58585B' });

      dex2 = $(this);

    })



  })











  // nav 썸네일 변경


  // 게임 썸네일
  for (let head1 = 0; head1 < 3; head1++) {

    // 각 썸네일의 메뉴 호버시
    $('header ul .game li').eq(head1).mouseenter(function () {

      // 호버한 메뉴 기준으로
      let headi1 = $(this).index();

      // 모든 on클래스 제거
      for (let headoff1 = 0; headoff1 < 3; headoff1++) {
        $('header ul ul .gameImg').removeClass(`on${headoff1}`);
      }

      // 호버한 메뉴에 클래스 부여(사진 보여주기)
      $('header ul ul .gameImg').addClass(`on${headi1}`);

    })

  }






  // 상품 썸네일
  for (let head2 = 0; head2 < 3; head2++) {

    $('header ul .product li').eq(head2).mouseenter(function () {

      let headi2 = $(this).index();

      for (let headoff2 = 0; headoff2 < 3; headoff2++) {
        $('header ul ul .productImg').removeClass(`on${headoff2}`);
      }

      $('header ul ul .productImg').addClass(`on${headi2}`);

    })

  }















  // 스크롤에 따른 이벤트(header + hero)



  $(window).scroll(function () {


    // 스크롤 이벤트 클래스가 존재시
    // 이 클래스는 서브페이지로 가게 될시에만 적용이 안됨
    // 서브페이지로 가게 될땐 scrollevent 제거
    if ($('#wrap').hasClass('scrollevent')) {

      let winW2 = $(window).width();



      // 데스크톱 환경일 때 적용
      if (winW2 > desktop) {


        let scroll = $(this).scrollTop();
        // 스크롤을 내렸을 때
        if (scroll > 0) {
          // hero영역과 그 리스트들이 작아지고
          $('.hero').stop().animate({ 'height': '760px', 'width': '1280px', 'top': '100px', 'margin': '0 auto', 'border-radius': '20px' }, 1000);

          $('.hero .listBox li').stop().animate({ 'height': '760px', 'width': '1280px', 'top': '100px', 'margin': '0 auto', 'border-radius': '20px' }, 1000);
          // 마우스 스크롤 표시가 사라지면서
          $('.mouseZone').fadeOut();
          // 헤더 부분의 색깔들이 변화
          $('header').addClass('on');

        }
        // 히어로가 맨위로 올라올때
        if (scroll === 0) {
          // hero영역과 그 리스트들이 다시 화면을 꽉채우고

          $('.hero').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

          $('.hero .listBox li').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

          $('.mouseZone').fadeIn();

          $('header').removeClass('on');
        }

      }


    }
  })

















  // hero 설정














  // 다른 코드로 구현할때까지 잠금(코드 구현 성공시 지워도 됨)

  // 기본 히어로 값들은 left 100%, 첫번째만 left 0% 부여
  // 자바스크립트로 나머지 이벤트를 구현하였기에 기본값도 자바스크립트로 부여
  // $('.hero .listBox li').css({ 'left': `100%` });
  // $('.hero .listBox li').eq(0).css({ 'left': `0%` });


  // // hero 배경화면 변경

  // // 이전버튼 클릭시
  // $('.buttonZone .prev').click(function () {

  //   // 히어로의 이전버튼에 대한 변수 생성(on되어있는 히어로이미지의 순서)

  //   let now1 = $('.hero .listBox li.on').index();
  //   let prev = $('.hero .listBox li.on').index() - 1;

  //   if (prev <= 0) {

  //     $(this).addClass('off');
  //     $('.buttonZone .next').removeClass('off');

  //   }

  //   else if (prev >= 4) {

  //     $(this).removeClass('off');
  //     $('.buttonZone .next').addClass('off');
  //     $('.hero .listBox li').removeClass('on');
  //     $('.hero .listBox li').eq(prev).addClass('on');
  //   }

  //   else {
  //     $(this).removeClass('off');
  //     $('.buttonZone .next').removeClass('off');
  //   }

  //   // 1번째 슬라이드 이후이거나 마지막 슬라이드 까지일때
  //   if (now1 > 0 && now1 <= 4) {
  //     // left값을 늘릴수록 이전값으로 이동(100단위)
  //     $('.hero .listBox li').eq(now1).stop().animate({ 'left': `100%` }, 500);
  //     $('.hero .listBox li').eq(prev).stop().animate({ 'left': `0%` }, 500);
  //     $('.hero .listBox li').removeClass('on');
  //     $('.hero .listBox li').eq(prev).addClass('on');
  //     $(`.hero .slidebar .slide`).animate({ 'left': `${prev * 20}%` });
  //   }


  // })


  // // 다음버튼 클릭시
  // $('.buttonZone .next').click(function () {
  //   let now2 = $('.hero .listBox li.on').index();
  //   // 히어로의 이전버튼에 대한 변수 생성(on되어있는 히어로이미지의 순서)
  //   let next = $('.hero .listBox li.on').index() + 1;


  //   if (next <= 0) {

  //     $('.buttonZone .prev').addClass('off');
  //     $(this).removeClass('off');
  //     $('.hero .listBox li').removeClass('on');
  //     $('.hero .listBox li').eq(next).addClass('on');
  //   }

  //   else if (next >= 4) {

  //     $('.buttonZone .prev').removeClass('off');
  //     $(this).addClass('off')

  //   }

  //   else {

  //     $('.buttonZone .prev').removeClass('off');
  //     $(this).removeClass('off');
  //   }

  //   // 마지막 슬라이드 이전이거나 첫번째 슬라이드 이후일때
  //   if (now2 >= 0 && now2 < 4) {
  //     // left값을 줄일수록 이후값으로 이동(100단위)
  //     $('.hero .listBox li').eq(next).stop().animate({ 'left': `0%` }, 500);
  //     $('.hero .listBox li').eq(now2).stop().animate({ 'left': `-100%` }, 500);
  //     $('.hero .listBox li').removeClass('on');
  //     $('.hero .listBox li').eq(next).addClass('on');
  //     $(`.hero .slidebar .slide`).stop().animate({ 'left': `${next * 20}%` }, 500);
  //   }

  // })


  // // 히어로의 슬라이드바의 리스트들(각 슬라이드 영역) 클릭신
  // $('.hero .slidebar li').click(function () {
  //   // 현재 누른 순서의 슬라이드바 리스트의 인덱스 추출
  //   let sb = $(this).index();


  //   // 메인슬라이드바를 제외한 영역을 눌렀을 때
  //   if (sb != 5) {

  //     // 메인슬라이드바가 움직이면서 이전과 다음 슬라이드 또한 이동함
  //     $('.hero .slidebar .slide').stop().animate({ 'left': `${sb * 20}%` }, 500);
  //     $('.hero .listBox li').eq(sb - 1).stop().animate({ 'left': `-100%` }, 500);
  //     $('.hero .listBox li').eq(sb + 1).stop().animate({ 'left': `100%` }, 500);
  //     $('.hero .listBox li').eq(sb).stop().animate({ 'left': `0%` }, 500);
  //     $('.hero .listBox li').removeClass('on');
  //     $('.hero .listBox li').eq(sb).addClass('on');


  //     // 위의 코드 그대로 사용시 다른 hero 페이지 부분들도 보이는 버그가 있기에 
  //     // 추후 수정해보기



  //     //     if($('.hero .slidebar li').eq().index()>sb){

  //     //     $('.hero .listBox li').stop().animate({ 'left': `100%` }, 500);

  //     //     }



  //     //     if($('.hero .slidebar li').eq().index()<sb){

  //     //       $('.hero .listBox li').stop().animate({ 'left': `-100%` }, 500);

  //     //       }

  //     // 슬라이드로 이동했을 때 좌우 버튼들 이벤트
  //     let prev2 = $('.hero .buttonZone .prev');
  //     let next2 = $('.hero .buttonZone .next');

  //     // 첫번째 히어로 페이지일때
  //     if (sb <= 0) {

  //       $(prev2).addClass('off');
  //       $(next2).removeClass('off');

  //     }

  //     // 마지막 히어로 페이지일때
  //     else if (sb >= 4) {

  //       $(next2).addClass('off');
  //       $(prev2).removeClass('off');

  //     }

  //     else {
  //       $(prev2).removeClass('off');
  //       $(next2).removeClass('off');

  //     }



  //   }




  // })














  // 코드 재구현

  for (let he = 0; he <= 4; he++) {

    $('.hero .listBox li').eq(he).css({ 'left': `${he * 100}%` });

  }


  let heroCount = 0;

  // 다음 버튼 클릭시
  $('.hero .buttonZone .next').click(function () {

    // 최대치 도달전까진 1씩 더함
    // 그리고 next에 있는 off클래스 제거
    if (heroCount < 4) {

      heroCount++;
      $('.hero .buttonZone .next').removeClass('off');
      $('.hero .buttonZone .prev').removeClass('off');
    }


    // 최대치 도달시엔 next 버튼 off 클래스 부여
    if (heroCount >= 4) {
      $('.hero .buttonZone .next').addClass('off');
      $('.hero .buttonZone .prev').removeClass('off');
    }


    $('.hero .listBox').stop().animate({ 'left': `${heroCount * -100}%` }, 300);

    $('.hero .slidebar .slide').stop().animate({ 'left': `${heroCount * 20}%` }, 300);

  })




  // 이전 버튼 클릭시
  $('.hero .buttonZone .prev').click(function () {

    // 최소치 도달전까진 1씩 더함
    // 그리고 next에 있는 off클래스 제거
    if (heroCount > 0) {

      heroCount--;
      $('.hero .buttonZone .prev').removeClass('off');
      $('.hero .buttonZone .next').removeClass('off');
    }


    // 최소치 도달시엔 next 버튼 off 클래스 부여
    if (heroCount <= 0) {
      $('.hero .buttonZone .prev').addClass('off');
      $('.hero .buttonZone .next').removeClass('off');
    }


    $('.hero .listBox').stop().animate({ 'left': `${heroCount * -100}%` }, 300);

    $('.hero .slidebar .slide').stop().animate({ 'left': `${heroCount * 20}%` }, 300);


  })



  // 슬라이드 버튼 클릭시




  $('.hero .slidebar li').click(function () {





    let slide = $(this).index();

    console.log(slide);

    if (slide !== 5) {

      $('.hero .slidebar .slide').stop().animate({ 'left': `${slide * 20}%` }, 300);

      $('.hero .listBox').stop().animate({ 'left': `${slide * -100}%` }, 300);


      heroCount = slide;

    }

    // 첫번째 슬라이드 부분을 클릭시에
    if (slide === 0) {

      // 왼쪽버튼 off
      $('.hero .buttonZone .prev').addClass('off');

      // 오른쪽버튼 활성화
      $('.hero .buttonZone .next').removeClass('off');
    }


    // 마지막 슬라이드 부분을 클릭시에
    else if (slide === 4) {

      // 오른쪽버튼 off
      $('.hero .buttonZone .next').addClass('off');

      // 왼쪽버튼 활성화
      $('.hero .buttonZone .prev').removeClass('off');
    }

    // 그 외의 슬라이드 부분 클릭시
    else {
      // 오른쪽버튼 활성화
      $('.hero .buttonZone .next').removeClass('off');
      // 왼쪽버튼 활성화
      $('.hero .buttonZone .prev').removeClass('off');

    }


  })























  // 제품 설정

















  // 제품 영역 내의 버튼에 마우스를 갖다대면
  $('.goods .gMenu .menu .mButtonzone').mouseenter(function () {

    // 첫번째 리스트(게임)가 on일때

    if ($('.goods .gMenu .menu .mButtonzone:hover .mButton li:nth-child(1)').hasClass('on')) {


      // 버튼 색깔과 글자 및 화살표의 색깔 변경

      $(this).stop().animate({ 'background-color': '#fff' }, 300);

      $('.goods .gMenu .menu .mButtonzone .mButton li:nth-child(1)').stop().animate({ 'color': '#F5D022' }, 300);


      $('.goods .gMenu .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#F5D022' }, 300);



    }


    // 두번째 리스트(게임)가 on일때

    if ($('.goods .gMenu .menu .mButtonzone:hover .mButton li:nth-child(2)').hasClass('on')) {


      // 버튼 색깔과 글자 및 화살표의 색깔 변경

      $(this).stop().animate({ 'background-color': '#fff' }, 300);

      $('.goods .gMenu .menu .mButtonzone .mButton li:nth-child(2)').stop().animate({ 'color': '#C08C5A' }, 300);


      $('.goods .gMenu .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#C08C5A' }, 300);



    }






  })










  // 버튼에 마우스를 떼면 원상복귀

  $('.goods .gMenu .menu .mButtonzone').mouseleave(function () {


    $(this).stop().animate({ 'background-color': 'transparent' }, 300);

    $('.goods .gMenu .menu .mButtonzone .mButton li').stop().animate({ 'color': '#fff' }, 300);


    $('.goods .gMenu .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#fff' }, 300);


  })




















  // 제품 리스트 버튼 클릭시 아래로 제품 종류들이 나오는 목록 나오게 하기
  // 제품 버튼에 있던 화살표도 움직이기

  $('.goods .gMenu .menu .mButtonzone').click(function () {



    $('.goods .gMenu .menu .mList').toggleClass('on');


    $('.goods .gMenu .menu .mButtonzone .mButtonArrow').toggleClass('on');




  })























  // 첫번째 리스트 클릭시에 게임부분 모두 on class 부여
  // 두번째 리스트 클릭시에 상품부분 모두 on class 부여


  $('.goods .gMenu .menu .mList ul li:nth-child(1)').click(function () {


    $('.goods .gMenu .menu .mButton li').removeClass('on');


    $('.goods .intro ul li').removeClass('on');


    $('.goods .gZone .gMenu .char li').removeClass('on');


    $('.goods .gList .listZone>li').removeClass('on');


    $('.goods .gMenu .menu .mButton li:nth-child(1)').addClass('on');


    $('.goods .intro ul li:nth-child(1)').addClass('on');


    $('.goods .gZone .gMenu .char li:nth-child(1)').addClass('on');


    $('.goods .gList .listZone>li:nth-child(1)').addClass('on');


    // 화살표도 원래대로 돌아오고 목록창도 사라짐

    $('.goods .gMenu .menu .mList').removeClass('on');


    $('.goods .gMenu .menu .mButtonzone .mButtonArrow').removeClass('on');

  })




  $('.goods .gMenu .menu .mList ul li:nth-child(2)').click(function () {


    $('.goods .gMenu .menu .mButton li').removeClass('on');

    $('.goods .intro ul li').removeClass('on');


    $('.goods .gZone .gMenu .char li').removeClass('on');


    $('.goods .gList .listZone>li').removeClass('on');


    $('.goods .gMenu .menu .mButton li:nth-child(2)').addClass('on');

    $('.goods .intro ul li:nth-child(2)').addClass('on');


    $('.goods .gZone .gMenu .char li:nth-child(2)').addClass('on');


    $('.goods .gList .listZone>li:nth-child(2)').addClass('on');
    $('.goods .gMenu .menu .mList').removeClass('on');


    $('.goods .gMenu .menu .mButtonzone .mButtonArrow').removeClass('on');

  })










  // 제품들 클릭시에 상세페이지 이동

  $('.goods .gList .listZone>li.on ul li').click(function (e) {

    // 다른 링크로 이동하는 효과 없앰
    // 현재페이지에서 이동할거이기에
    e.preventDefault();

    $('html,body').scrollTop(0);





    // wrap의 off클래스 부여(display none)
    // 서브페이지에 on클래스 부여(display block)
    // 그리고 scrollevent class를 제거하여 스크롤 이벤트가 발생하지 않게 함
    $('#wrap').removeClass('scrollevent');
    $('#wrap').addClass('off');
    $('#sub_main').addClass('on');
    $('header').addClass('on');
    $('.mouseZone').fadeOut();


    // 로고 클릭시엔 원상복구
    $('header h1').click(function (e) {

      e.preventDefault();

      $('html,body').scrollTop(0);


      // h1를 클릭해서 스크롤 탑으로 가게 되면 히어로크기가 윈도우 크기에 맞지 않기에
      // setinterval로 크기를 맞춤
      let inter3 = setInterval(function (e) {

        $('.hero').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

        $('.hero .listBox li').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

      }, 100)


      // 만약에 스크롤을 내리면 다시 풀림
      $(window).scroll(function () {


        if ($(window).scrollTop() > 0) {

          clearInterval(inter3);

        }

      })




      $('#wrap').addClass('scrollevent');
      $('#wrap').removeClass('off');
      $('#sub_main').removeClass('on');

      $('header').removeClass('on');
      $('.mouseZone').fadeIn();

    });



  })
























  // 제품쪽 장바구니 버튼 클릭시 상단의 장바구니 버튼에 숫자가 발생


  let shop = 0;

  setInterval(() => {

    // 장바구니에 담은 수가 0보단 크지만 3보단 작을 때
    // 장바구니 팝업의 장바구니가 조금만 담기는 연출
    if (shop > 0 && shop < 3) {

      $('.popUp .popUp_bg>ul>li').removeClass('on');

      $('.popUp .popUp_bg>ul>li:nth-child(2)').addClass('on');

    }



    // 장바구니에 담은 수가 3이상일때
    // 장바구니 팝업의 장바구니가 많이 담기는 연출

    else if (shop >= 3) {

      $('.popUp .popUp_bg>ul>li').removeClass('on');

      $('.popUp .popUp_bg>ul>li:nth-child(3)').addClass('on');

    }

    // 장바구니가 없을때
    // 장바구니가 텅텅 비어있는 연출
    else {

      $('.popUp .popUp_bg>ul>li').removeClass('on');

      $('.popUp .popUp_bg>ul>li:nth-child(1)').addClass('on');

    }

  }, 1000);


  $('.goods .gList .listZone>li ul li a .shop').click(function (e) {
    // 다른 링크로 가는 것을 막음 html 버블링 방지
    e.preventDefault();
    // 다른 이벤트 발생을 막음 자바스크립트 버블링 방지
    // 원래 이벤트는 쇼핑 아이콘의 부모자인 li를 클릭하면 서브페이지로 갔음
    // 하지만 부모자의 이벤트를 막고자 stopPropagation을 사용하여 버블링 방지
    e.stopPropagation()

    // 상품 장바구니를 클릭했기에 숫자가 1 증가
    shop++;



    // 장바구니 담으면 장바구니를 담았다는 팝업창이 생겼다가 사라짐

    $('.shopping_popUp').css({ 'display': 'flex', 'z-index': 1000 });

    $('.shopping_popUp').stop().animate({ 'opacity': 1, 'top': '50%' }, 400, function () {

      $('.shopping_popUp').stop().animate({ 'opacity': 0, 'top': '52%' }, 300, function () {


        $('.shopping_popUp').css({ 'display': 'none', 'z-index': -1 });

      })

    });




    // 장바구니가 담긴 수가 1이상일때 장바구니 버튼 옆에 표시

    if (shop >= 1) {


      $('header .util li.shop a i .shop_number').css({ 'display': 'flex' })


    }




    // 장바구니쪽에 표시된 숫자도 변수 shop의 숫자를 반영하여 1씩 증가 
    $('header .util li.shop a i .shop_number').text(shop);


  })





  // 서브페이지의 최상단 컨텐츠의 장바구니 버튼

  $('.sub .intro .infor .purchase_zone .purchase_button ul .shopping').click(function (e) {

    e.preventDefault();
    e.stopPropagation();

    shop++;

    $('.shopping_popUp').css({ 'display': 'flex', 'z-index': 1000 });

    $('.shopping_popUp').stop().animate({ 'opacity': 1, 'top': '50%' }, 400, function () {

      $('.shopping_popUp').stop().animate({ 'opacity': 0, 'top': '52%' }, 300, function () {


        $('.shopping_popUp').css({ 'display': 'none', 'z-index': -1 });

      })

    });





    if (shop >= 1) {


      $('header .util li.shop a i .shop_number').css({ 'display': 'flex' })


    }

    else {

      $('header .util li.shop a i .shop_number').css({ 'display': 'none' })


    }


    $('header .util li.shop a i .shop_number').text(shop);


  })









  // 서브페이지의 유사 컨텐츠의 장바구니 버튼



  $('.sub .others .others_list .listZone>li ul li a .shop').click(function (e) {

    e.preventDefault();
    e.stopPropagation();

    shop++;


    $('.shopping_popUp').css({ 'display': 'flex', 'z-index': 1000 });

    $('.shopping_popUp').stop().animate({ 'opacity': 1, 'top': '50%' }, 400, function () {

      $('.shopping_popUp').stop().animate({ 'opacity': 0, 'top': '52%' }, 300, function () {


        $('.shopping_popUp').css({ 'display': 'none', 'z-index': -1 });

      })

    });





    if (shop >= 1) {


      $('header .util li.shop a i .shop_number').css({ 'display': 'flex' })


    }

    else {

      $('header .util li.shop a i .shop_number').css({ 'display': 'none' })


    }


    $('header .util li.shop a i .shop_number').text(shop);


  })




























  // 마우스 갖다대면 애니메이션이 멈추는 효과 구현



  $('.goods .gList .listZone>li').mouseenter(function () {




    //   $('.goods .gList .listZone>li.on').css({ 'animation-play-state': 'paused' });


    //   $('.goods .gList .listZone>li.on ul li').mouseleave(function () {

    //     $('.goods .gList .listZone>li.on').css({ 'animation-play-state': 'running' });


    //   })


    $('.goods .gList .arrows').css({ 'animation-play-state': 'paused' });


    $('.goods .gList .listZone>li').mouseleave(function () {

      $('.goods .gList .arrows').css({ 'animation-play-state': 'running' });

    })

  })























  // 연혁



  // 스크롤 이벤트1(제일 무난해보이지만 렉도 좀 걸림)



  // let isScrolling = false;

  // window.addEventListener('scroll', function () {

  //   // 시작점
  //   let topYear = $('.years .yearsZone .gene').offset().top;

  //   // 끝나는 지점
  //   let bottomYear = $('.box4').offset().top;

  //   // 총길이
  //   let fullYear = bottomYear - topYear;

  //   window.addEventListener('wheel', function (e) {

  //     if (!isScrolling) {
  //       window.requestAnimationFrame(function () {
  //         // 마우스를 내릴때
  //         if (e.deltaY > 0) {
  //           for (let ys = 0; ys < 9; ys++) {

  //             // 현재 기점으로 시작('.years .yearsZone .gene ul'의 최상단을
  //             // 기점으로 0으로 잡고, 스크롤을 내릴수록 값이 내려간 값에 따라 변경)
  //             // 중간 지점을 기준으로 변경되게 window.height()/2 초기 설정
  //             let thisTop = $('.years .yearsZone .gene ul').offset().top - topYear + ($(window).height() / 2);

  //             // 각 구간별 높이
  //             let fadetop = $(window).height() * ys;
  //             // 절반정도 왔을 때, fade in/out
  //             if (thisTop > fadetop) {

  //               // 지금꺼는 보이게
  //               $('.years .yearsZone .gene li').eq(ys).addClass('on');

  //               // 이전꺼는 안보이게
  //               $('.years .yearsZone .gene li').eq(ys - 1).removeClass('on');
  //             }
  //           }
  //         }

  //         // 마우스를 올릴때
  //         if (e.deltaY < 0) {
  //           for (let ys = 0; ys < 9; ys++) {

  //             // 현재 기점으로 시작('.years .yearsZone .gene ul'의 최상단을
  //             // 기점으로 0으로 잡고, 스크롤을 내릴수록 값이 내려간 값에 따라 변경)
  //             // 중간 지점을 기준으로 변경되게 window.height()/2 초기 설정
  //             let thisTop = $('.years .yearsZone .gene ul').offset().top - topYear + ($(window).height() / 2);

  //             // 각 구간별 높이
  //             let fadetop = $(window).height() * ys;
  //             // 절반정도 왔을 때, fade in/out
  //             if (thisTop > fadetop) {

  //               // 지금꺼는 보이게
  //               $('.years .yearsZone .gene li').eq(ys).addClass('on');
  //               // 다음꺼는 안보이게
  //               $('.years .yearsZone .gene li').eq(ys + 1).removeClass('on');
  //             }
  //           }
  //         }

  //         isScrolling = false;
  //       });
  //     }

  //     isScrolling = true;
  //   }, { passive: true });
  // });






  // 스크롤 이벤트2(렉은 거의 없고 동작도 가장 정상적이지만 매우 높은 수를 넣어야 되기에 불안정할 수 있음)



  function throttle(callback, limit) {
    let waiting = false;
    return function () {
      if (!waiting) {
        callback.apply(this, arguments);
        waiting = true;
        setTimeout(function () {
          waiting = false;
        }, limit);
      }
    };
  }

  window.addEventListener('scroll', function () {

    // 시작점
    let topYear = $('.years .yearsZone .gene').offset().top;

    // 끝나는 지점
    let bottomYear = $('.box4').offset().top;

    // 총길이
    let fullYear = bottomYear - topYear;

    // 윈도우 최상단에서 스크롤을 내렸는데 다른 li들이 바뀌게 될 때

    // 무조건 첫번재 포켓몬만 보이게(오른쪽의 연도부분은 이상없지만 포켓몬 부분에서)
    // 서브페이지나 로그인페이지를 갔다가 오면 다른 포켓몬으로 바뀌어 있는 버그 발생
    if ($(window).scrollTop() < topYear) {

      $('.years .yearsZone .gene li').removeClass('on');

      $('.years .yearsZone .gene li').eq(0).addClass('on');


    }



    window.addEventListener('wheel', throttle(function (e) {

      // 마우스를 내릴때
      if (e.deltaY > 0) {
        for (let ys = 0; ys < 9; ys++) {

          // 현재 기점으로 시작('.years .yearsZone .gene ul'의 최상단을
          // 기점으로 0으로 잡고, 스크롤을 내릴수록 값이 내려간 값에 따라 변경)
          // 중간 지점을 기준으로 변경되게 window.height()/2 초기 설정
          let thisTop = $('.years .yearsZone .gene ul').offset().top - topYear + ($(window).height() / 2);

          // 각 구간별 높이
          let fadetop = $(window).height() * ys;
          // 절반정도 왔을 때, fade in/out
          if (thisTop > fadetop) {

            // 지금꺼는 보이게
            $('.years .yearsZone .gene li').eq(ys).addClass('on');


            // 이전꺼는 안보이게
            $('.years .yearsZone .gene li').eq(ys).prev().removeClass('on');
          }
        }
      }

      // 마우스를 올릴때
      if (e.deltaY < 0) {
        for (let ys = 0; ys < 9; ys++) {

          // 현재 기점으로 시작('.years .yearsZone .gene ul'의 최상단을
          // 기점으로 0으로 잡고, 스크롤을 내릴수록 값이 내려간 값에 따라 변경)
          // 중간 지점을 기준으로 변경되게 window.height()/2 초기 설정
          let thisTop = $('.years .yearsZone .gene ul').offset().top - topYear + ($(window).height() / 2);

          // 각 구간별 높이
          let fadetop = $(window).height() * ys;
          // 절반정도 왔을 때, fade in/out
          if (thisTop > fadetop) {

            // 지금꺼는 보이게
            $('.years .yearsZone .gene li').eq(ys).addClass('on');
            // 다음꺼는 안보이게
            $('.years .yearsZone .gene li').eq(ys).next().removeClass('on');
          }
        }
      }



    }, 99999), { passive: true });


  });








  // 스크롤 이벤트 3(e.preventdefault만 되면 이상적이지만 어째선지 동작하지않음)
  // e.preventdefault가 동작되지않아서 렉이 가장 심함




  // 스크롤이 내릴때마다 포켓몬들이 페이드인되며 변경됨
  // 기준은 절반 왔을때?

  // $(window).scroll(function () {

  //   // 일단 $('.years .yearsZone .gene')의 top값부터 구하기

  //   // 시작점
  //   let topYear = $('.years .yearsZone .gene').offset().top;

  //   // 끝나는 지점
  //   let bottomYear = $('.box4').offset().top;

  //   // 총길이
  //   let fullYear = bottomYear - topYear;


  //   $(window).mousewheel(function (e, d) {


  //     e.preventDefault();


  //     // 마우스를 내릴때
  //     if (d < 0) {
  //       for (let ys = 0; ys < 9; ys++) {

  //         // 현재 기점으로 시작('.years .yearsZone .gene ul'의 최상단을
  //         // 기점으로 0으로 잡고, 스크롤을 내릴수록 값이 내려간 값에 따라 변경)
  //         // 중간 지점을 기준으로 변경되게 window.height()/2 초기 설정
  //         let thisTop = $('.years .yearsZone .gene ul').offset().top - topYear + ($(window).height() / 2);

  //         // 각 구간별 높이
  //         let fadetop = $(window).height() * ys;
  //         // 절반정도 왔을 때, fade in/out
  //         if (thisTop > fadetop) {

  //           // 지금꺼는 보이게
  //           $('.years .yearsZone .gene li').eq(ys).addClass('on');

  //           // 이전꺼는 안보이게
  //           $('.years .yearsZone .gene li').eq(ys).prev().removeClass('on');

  //         }

  //       }


  //     }



  //     // 마우스를 올릴때
  //     if (d > 0) {
  //       for (let ys = 0; ys < 9; ys++) {


  //         // 현재 기점으로 시작('.years .yearsZone .gene ul'의 최상단을
  //         // 기점으로 0으로 잡고, 스크롤을 내릴수록 값이 내려간 값에 따라 변경)
  //         // 중간 지점을 기준으로 변경되게 window.height()/2 초기 설정
  //         let thisTop = $('.years .yearsZone .gene ul').offset().top - topYear + ($(window).height() / 2);

  //         // 각 구간별 높이
  //         let fadetop = $(window).height() * ys;
  //         // 절반정도 왔을 때, fade in/out
  //         if (thisTop > fadetop) {

  //           // 지금꺼는 보이게
  //           $('.years .yearsZone .gene li').eq(ys).addClass('on');
  //           // 다음꺼는 안보이게
  //           $('.years .yearsZone .gene li').eq(ys).next().removeClass('on');

  //         }

  //       }


  //     }

  //   },  { passive: true })






  // })




  // 오른쪽 역사 이벤트
  // 일단 동작은 잘되니까 2번째 이벤트로 진행
  // e.preventdefault가 동작 잘되면 갈아타기



  window.addEventListener('scroll', function () {

    // 시작점
    let topYear = $('.years .yearsZone .gene').offset().top;

    // 끝나는 지점
    let bottomYear = $('.box4').offset().top;

    // 총길이
    let fullYear = bottomYear - topYear;

    window.addEventListener('wheel', throttle(function (e) {
      // 마우스를 내릴때
      if (e.deltaY > 0) {
        for (let ys = 0; ys < 9; ys++) {

          // 현재 기점으로 시작('.years .yearsZone .gene ul'의 최상단을
          // 기점으로 0으로 잡고, 스크롤을 내릴수록 값이 내려간 값에 따라 변경)
          // 중간 지점을 기준으로 변경되게 window.height()/2 초기 설정
          let thisTop = $('.years .yearsZone .gene ul').offset().top - topYear + ($(window).height() / 2);

          // 각 구간별 높이
          let fadetop = $(window).height() * ys;
          // 절반정도 왔을 때, fade in/out
          if (thisTop > fadetop) {

            // 지금꺼는 보이게

            // 닫힌 모습의 img1은 안보이게
            $('.years .yearsZone .history li').eq(ys).find('.img1').stop().animate({ 'opacity': 0 }, 300);
            // 열린 모습의 img2는 보이게
            $('.years .yearsZone .history li').eq(ys).find('.img2').stop().animate({ 'opacity': 1 }, 300, function () {

              $('.years .yearsZone .history li').eq(ys).find('.txt').addClass('on');

            });


            // 이전꺼는 안보이게

            // 닫힌 모습의 img1은 보이게
            $('.years .yearsZone .history li').eq(ys).prev().find('.img1').stop().animate({ 'opacity': 1 }, 300);

            // 열린 모습의 img2는 안보이게
            $('.years .yearsZone .history li').eq(ys).prev().find('.img2').stop().animate({ 'opacity': 0 }, 300, function () {

              $('.years .yearsZone .history li').eq(ys).prev().find('.txt').removeClass('on');

            });




          }
        }
      }



      // 마우스를 올릴때
      if (e.deltaY < 0) {
        for (let ys = 0; ys < 9; ys++) {

          // 현재 기점으로 시작('.years .yearsZone .gene ul'의 최상단을
          // 기점으로 0으로 잡고, 스크롤을 내릴수록 값이 내려간 값에 따라 변경)
          // 중간 지점을 기준으로 변경되게 window.height()/2 초기 설정
          let thisTop = $('.years .yearsZone .gene ul').offset().top - topYear + ($(window).height() / 2);

          // 각 구간별 높이
          let fadetop = $(window).height() * ys;
          // 절반정도 왔을 때, fade in/out
          if (thisTop > fadetop) {

            // 지금꺼는 보이게

            // 닫힌 모습의 img1은 안보이게
            $('.years .yearsZone .history li').eq(ys).find('.img1').stop().animate({ 'opacity': 0 }, 200);
            // 열린 모습의 img2는 보이게
            $('.years .yearsZone .history li').eq(ys).find('.img2').stop().animate({ 'opacity': 1 }, 200, function () {

              $('.years .yearsZone .history li').eq(ys).find('.txt').addClass('on');

            });

            // 이전꺼는 안보이게

            // 닫힌 모습의 img1은 보이게
            $('.years .yearsZone .history li').eq(ys).next().find('.img1').stop().animate({ 'opacity': 1 }, 200);

            // 열린 모습의 img2는 안보이게
            $('.years .yearsZone .history li').eq(ys).next().find('.img2').stop().animate({ 'opacity': 0 }, 200, function () {

              $('.years .yearsZone .history li').eq(ys).next().find('.txt').removeClass('on');

            });

          }
        }
      }
    }, 99999), { passive: true });



  });







  // 이벤트/공지사항



  // 이벤트 카운트

  let eventCount = 0;


  // 공지사항 카운트

  let notifiedCount = 0;



  // 이벤트 영역


  // 오른쪽 버튼 클릭시 오른쪽으로 이동
  $('.notices .noticesZone .event .right').click(function () {

    // 1보다 작을때만 더할수있음(최댓값 설정)
    if (eventCount < 1) {
      eventCount++;
    }



    // 오른쪽 끝일때
    if (eventCount >= 1) {

      // 오른쪽으로 더 못감
      $('.notices .noticesZone .event .left').removeClass('off');


      // 왼쪽으로 갈수 있음
      $('.notices .noticesZone .event .right').addClass('off');

    }

    // noticecount가 1 미만일땐 갈수잇음(최대 갈수있는 조건)

    $('.notices .noticesZone .event .listZone ul').stop().animate({ 'left': `${eventCount * -25}%` }, 300);




  })


  // 왼쪽 버튼 클릭시 왼쪽으로 이동
  $('.notices .noticesZone .event .left').click(function () {

    // 0보다 클때만 뺄수 있음
    if (eventCount > 0) {

      eventCount--;

    }



    // 왼쪽 끝일때
    if (eventCount <= 0) {

      $('.notices .noticesZone .event .left').addClass('off');

      $('.notices .noticesZone .event .right').removeClass('off');

    }

    $('.notices .noticesZone .event .listZone ul').stop().animate({ 'left': `${eventCount * -25}%` }, 300);



  })






  // 공지사항 영역






  // 오른쪽 버튼 클릭시 오른쪽으로 이동
  $('.notices .noticesZone .notified .right').click(function () {

    // 1보다 작을때만 더할수있음(최댓값 설정)
    if (notifiedCount < 1) {
      notifiedCount++;
    }



    // 오른쪽 끝일때
    if (notifiedCount >= 1) {

      // 오른쪽으로 더 못감
      $('.notices .noticesZone .notified .left').removeClass('off');


      // 왼쪽으로 갈수 있음
      $('.notices .noticesZone .notified .right').addClass('off');

    }

    // noticecount가 1 미만일땐 갈수잇음(최대 갈수있는 조건)

    $('.notices .noticesZone .notified .listZone ul').stop().animate({ 'left': `${notifiedCount * -25}%` }, 300);




  })


  // 왼쪽 버튼 클릭시 왼쪽으로 이동
  $('.notices .noticesZone .notified .left').click(function () {

    // 0보다 클때만 뺄수 있음
    if (notifiedCount > 0) {

      notifiedCount--;

    }



    // 왼쪽 끝일때
    if (notifiedCount <= 0) {

      $('.notices .noticesZone .notified .left').addClass('off');

      $('.notices .noticesZone .notified .right').removeClass('off');

    }

    $('.notices .noticesZone .notified .listZone ul').stop().animate({ 'left': `${notifiedCount * -25}%` }, 300);



  })































  // 리뷰















  // 제품 영역 내의 버튼에 마우스를 갖다대면
  $('.review .menu .mButtonzone').mouseenter(function () {

    // 첫번째 리스트(게임)가 on일때

    if ($('.review .menu .mButtonzone .mButton li:nth-child(1)').hasClass('on')) {


      // 버튼 색깔과 글자 및 화살표의 색깔 변경

      $(this).stop().animate({ 'background-color': '#fff' }, 300);

      $('.review .menu .mButtonzone .mButton li:nth-child(1)').stop().animate({ 'color': '#F5D022' }, 300);


      $('.review .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#F5D022' }, 300);



    }




    if ($('.review .menu .mButtonzone .mButton li:nth-child(2)').hasClass('on')) {


      // 버튼 색깔과 글자 및 화살표의 색깔 변경

      $(this).stop().animate({ 'background-color': '#fff' }, 300);

      $('.review .menu .mButtonzone .mButton li:nth-child(2)').stop().animate({ 'color': '#C08C5A' }, 300);


      $('.review .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#C08C5A' }, 300);



    }


  })










  // 버튼에 마우스를 떼면 원상복귀

  $('.review .menu .mButtonzone').mouseleave(function () {


    $(this).stop().animate({ 'background-color': 'transparent' }, 300);

    $('.review .menu .mButtonzone .mButton li').stop().animate({ 'color': '#fff' }, 300);


    $('.review .menu .mButtonzone .mButtonArrow i').stop().animate({ 'color': '#fff' }, 300);


  })




  // 제품 리스트 버튼 클릭시 아래로 제품 종류들이 나오는 목록 나오게 하기
  // 제품 버튼에 있던 화살표도 움직이기

  $('.review .menu .mButtonzone').click(function () {


    $('.review .menu .mList').toggleClass('on');


    $('.review .menu .mButtonzone .mButtonArrow').toggleClass('on');




  })










  // 첫번째 리스트 클릭시에 게임부분 모두 on class 부여
  // 두번째 리스트 클릭시에 상품부분 모두 on class 부여

  $('.review .menu .mList ul li:nth-child(1)').click(function (e) {

    $('.review .menu .mButton li').removeClass('on');


    $('.review .goods_zone ul').removeClass('on');



    $('.review .menu .mButton li:nth-child(1)').addClass('on');


    $('.review .goods_zone ul:nth-child(1)').addClass('on');



    // 화살표도 원래대로 돌아오고 목록창도 사라짐

    $('.review .menu .mList').removeClass('on');

    $('.review .menu .mButtonzone .mButtonArrow').removeClass('on');
  })






  $('.review .menu .mList ul li:nth-child(2)').click(function () {


    $('.review .menu .mButton li').removeClass('on');


    $('.review .goods_zone ul').removeClass('on');



    $('.review .menu .mButton li:nth-child(2)').addClass('on');


    $('.review .goods_zone ul:nth-child(2)').addClass('on');




    $('.review .menu .mList').removeClass('on');


    $('.review .menu .mButtonzone .mButtonArrow').removeClass('on');
  })
















  // 리뷰 제품들

  for (let pro = 0; pro <= 4; pro++) {
    // 0번째 사진은 left0,
    // 1번째사진은 left100%
    $('.review .goods_zone .game li').eq(pro).css({ 'left': pro * 100 + '%' });
    $('.review .goods_zone .product li').eq(pro).css({ 'left': pro * 100 + '%' });

  }











  // 리뷰영역의 오른쪽버튼 클릭시



  // 리뷰 카운트
  let reviewCount = 0;



  // 게임 영역




  // 오른쪽버튼 클릭시에
  $('.review .intro_list .right').click(function () {

    // count가 4가될때까지만 1씩 더함(최댓값 부여)
    if (reviewCount < 4) {

      reviewCount++;

    }


    // 오른쪽 끝일때
    if (reviewCount >= 4) {

      // 왼쪽으로는 갈수 있음   
      $('.review .intro_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $('.review .intro_list .right').addClass('off');

    }


    else {
      $('.review .intro_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $('.review .intro_list .right').removeClass('off');


    }

    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .game').hasClass('on')) {


      $('.review .goods_zone .game').stop().animate({ 'left': `${reviewCount * -100}%` }, 300);


    }


    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .product').hasClass('on')) {


      $('.review .goods_zone .product').stop().animate({ 'left': `${reviewCount * -100}%` }, 300);


    }


  }

  )




  // 왼쪽버튼 클릭시에


  $('.review .intro_list .left').click(function () {

    // count가 4가될때까지만 1씩 더함(최댓값 부여)
    if (reviewCount > 0) {

      reviewCount--;

    }



    // 왼쪽 끝일때
    if (reviewCount <= 0) {

      // 왼쪽으로는 갈수 없음   
      $('.review .intro_list .left').addClass('off');


      // 오른쪽으로 갈수있음
      $('.review .intro_list .right').removeClass('off');

    }

    else {
      $('.review .intro_list .left').removeClass('off');


      // 오른쪽으로 더 못감   
      $('.review .intro_list .right').removeClass('off');
    }



    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .game').hasClass('on')) {


      $('.review .goods_zone .game').stop().animate({ 'left': `${reviewCount * -100}%` }, 300);


    }


    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .product').hasClass('on')) {


      $('.review .goods_zone .product').stop().animate({ 'left': `${reviewCount * -100}%` }, 300);


    }







  }

  )
















  // 리스트 목록을 바꾸면
  $('.review .menu .mList ul li').click(function () {

    // 다시 처음 순번(왼쪽 끝)으로 되돌아감
    reviewCount = 0;

    // 왼쪽 끝으로 오기에 변경

    // 왼쪽으로는 갈수 없음   
    $('.review .intro_list .left').addClass('off');



    // 처음으로 되돌아오기에 처음 순번도 첫번째로 오게 left값 변경


    // 오른쪽으로 갈수있음
    $('.review .intro_list .right').removeClass('off');



    if ($('.review .goods_zone .product').hasClass('on')) {


      $('.review .goods_zone .product').stop().css({ 'left': `0%` });


    }


    // 게임 리뷰쪽에 on클래스가 있을때
    if ($('.review .goods_zone .game').hasClass('on')) {


      $('.review .goods_zone .game').stop().css({ 'left': `0%` });


    }

  })














  $('.sub .intro .infor .purchase_zone .choice .choice_goods .select').click(function () {

    $('.sub .intro .infor .purchase_zone .choice .choice_goods ul').toggleClass('on');

  })









  // 서브 영역








  $('.sub .reviews .write .login_btn').click(function (e) {

    // 다른 링크로 이동하는 효과 없앰
    // 현재페이지에서 이동할거이기에
    e.preventDefault();

    $('html,body').scrollTop(0);

    $('#sub_main').removeClass('on');

    // wrap의 off클래스 부여(display none)
    // 서브페이지에 on클래스 부여(display block)
    // 그리고 scrollevent class를 제거하여 스크롤 이벤트가 발생하지 않게 함
    $('#wrap').removeClass('scrollevent');
    $('#wrap').addClass('off');
    $('#login_main').addClass('on');



    $('header').addClass('on');
    $('.mouseZone').fadeOut();

    // 로고 클릭시엔 원상복구
    $('header h1').click(function (e) {

      e.preventDefault();

      $('html,body').scrollTop(0);

      $('#sub_main').removeClass('on');



      $('#wrap').addClass('scrollevent');
      $('#wrap').removeClass('off');



      // h1를 클릭해서 스크롤 탑으로 가게 되면 히어로크기가 윈도우 크기에 맞지 않기에
      // setinterval로 크기를 맞춤
      let inter4 = setInterval(function () {

        $('.hero').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

        $('.hero .listBox li').stop().animate({ 'height': $(window).height(), 'width': $(window).width(), 'top': '0', 'margin': 'none', 'border-radius': '0' }, 1000);

      }, 100)


      // 만약에 스크롤을 내리면 다시 풀림
      $(window).scroll(function () {


        if ($(window).scrollTop() > 0) {

          clearInterval(inter4);

        }

      })



      $('header').removeClass('on');
      $('.mouseZone').fadeIn();

    });



  })








































  // 팝업 영역





  // 장바구니 누르면 팝업 생성


  $('header .util li.shop').click(function (e) {


    e.preventDefault();


    $('.popUp_main').show();


    $('.popUp').show();


    $('.popUp_main').css({ 'background-color': 'rgba(0,0,0,0.6)' });

  })




  $('.popUp .closed').click(function () {


    $('.popUp_main').hide();

    $('.popUp').hide();


    $('.popUp_main').css({ 'background-color': 'transparent' });

  })

















  // 삭제시 금액변경
  // 불안정하기에 일단 보류


  $('.popUp .total_pay .pay').text(129600);
  $('.popUp .popUp_bg .payment_box .goods_all p span.price').text(129600);



  $('.popUp .popUp_bg .payment_box .goods_all p span.cancel').click(function () {

    let pay = $('.popUp .total_pay .pay').text();
    let price = $(this).siblings('.price').text();
    $(this).parents('p').hide();


    pay -= price;

    $('.popUp .total_pay .pay').text(pay);


    shop--;


    $('header .util li.shop a i .shop_number').text(shop);


    if (shop === 0) {


      $('header .util li.shop a i .shop_number').css({ 'display': 'none' })


    }



  }
  )

































})
// 제이쿼리 끝