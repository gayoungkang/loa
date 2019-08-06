    // let lineMotion = document.querySelector('.main-section .graph_wrap .drop-line');
    // let mainSection = document.querySelector('#main');
    // let mainSectionTop = mainSection.offsetTop;

    $(window).ready(function(){
        $( '.drop-line' ).width( '97%' );
    });


// copy
    jQuery( '#copy-url' ).click(
        function() {
            var urlbox = document.getElementById('textbox-url');
            urlbox.select();
            document.execCommand( 'Copy' );
            alert( 'URL 이 복사 되었습니다.' );
        }
    );


// time
window.onload = function() {
    document.all.timewrapnone.style.display='none'
    document.all.currentTime.style.display='block'
}
    var bin = "0";
    var bin2 = "0";
    var timeID;
    var gday = 29; 
    setInterval(function(){
        var timer = new Date();
         var d = timer.getDate();
         var h = timer.getHours();
         var m = timer.getMinutes();
         var s = timer.getSeconds();
         d = gday-d-1;
         h = 24-h+17;
         if(h > 24) h = h-24;
         m = 59-m;             
         s = 59-s;
         if(d < 10) d = "0" + d;
     if(h < 10) h = "0" + h;
     if(m < 10) m = "0" + m;
         if(s < 10) s = "0" + s;
        document.getElementById('oday').innerHTML = d;
        document.getElementById('ohour').innerHTML = h;
        document.getElementById('omin').innerHTML = m;
        document.getElementById('osec').innerHTML = s;
    },1000);

        // header event
        let pcHeader = document.querySelector('.pc-header');

        window.addEventListener('scroll', function () {
            if ($(window).scrollTop() >= 90) {
                if (!pcHeader.classList.contains('active')) {
                    pcHeader.classList.add('active');
                }
            }
            else pcHeader.classList.remove('active');
        });

    // m-header event
    let mHeader = document.querySelector('.m-header');

    window.addEventListener('scroll', function () {
            if ($(window).scrollTop() >= 90) {
                if (!mHeader.classList.contains('active')) {
                    mHeader.classList.add('active');
                }
            }
            else mHeader.classList.remove('active');
        });
    // header common

        if($(window).width() >967) {
            $(document).scroll(function(){
                var sec1 = $('.about-section').offset().top-300;
                var sec2 = $('.roadmap-pg').offset().top-300;
                var sec3 = $('.whitepaper-pg').offset().top-300;
                var sec4 = $('.partner-pg').offset().top-300;
                var sec5 = $('.team').offset().top-300;
                var sec6 = $('footer').offset().top;
                if($(this).scrollTop() < sec1){
                    $('nav .nav-list li').removeClass('active');
                    $('nav .nav-list li:nth-child(1)').addClass('active');
                } else if ($(this).scrollTop() < sec2){
                    $('nav .nav-list li').removeClass('active');
                    $('nav .nav-list li:nth-child(2)').addClass('active');
                } else if ($(this).scrollTop() < sec3){
                    $('nav .nav-list li').removeClass('active');
                    $('nav .nav-list li:nth-child(3)').addClass('active');
                } else if ($(this).scrollTop() < sec4){
                    $('nav .nav-list li').removeClass('active');
                    $('nav .nav-list li:nth-child(4)').addClass('active');
                } else if ($(this).scrollTop() < sec5){
                    $('nav .nav-list li').removeClass('active');
                    $('nav .nav-list li:nth-child(5)').addClass('active');
                } else if ($(this).scrollTop() < sec6){
                    $('nav .nav-list li').removeClass('active');
                    $('nav .nav-list li:nth-child(6)').addClass('active');
                } 
        
            }).scroll();
        }; 
    // menu event
    let menu = document.querySelector('.menu');
    let mNav = document.querySelector('.m-nav');
    let mClose = document.querySelector('.m-close');
    let back = document.querySelector('.m-back');
    let menuList = document.querySelectorAll('.m-header nav .nav-list li a');

    for (let q=0; q<menuList.length; q++) {
            let menuArray = menuList[q]
        menuArray.addEventListener('click', function () {
            menuArray.classList.remove("active");
            mClose.classList.remove("active");
            back.classList.remove("active");
            mNav.classList.remove("active");
        });
    }
    function remove() {
        mNav.classList.remove("active");
        menu.classList.remove("active");
        mClose.classList.remove("active");
        back.classList.remove("active");
    }
    menu.addEventListener("click", function () {
        menu.classList.add("active");
        mNav.classList.add("active");
        back.classList.add("active");
    });
    mClose.addEventListener("click", remove);
    back.addEventListener("click", remove);
    
    // motion event
    var windowH = $(window).height();
    var marginT = windowH/2;

    let videoMotion = document.querySelectorAll('.video-wrap');
    let videoTextMotion = document.querySelector('.video-pg .text-wrap');
    let videoSection = document.querySelector('#about');
    let videoSectionTop = videoSection.offsetTop;
    $(window).scroll(function(){
        if($(this).scrollTop() >= videoSectionTop-marginT){
            if(!videoTextMotion.classList.contains('active')) {
                videoTextMotion.classList.add('active');
            }
        }
        else {
             videoTextMotion.classList.remove('active');
             
        }
        for (let y=0; y<videoMotion.length; y++) {
            let videoMotionArray =  videoMotion[y];
                if($(this).scrollTop() >= videoSectionTop-marginT){
                    if(!videoMotionArray.classList.contains('active')) {
                        videoMotionArray.classList.add('active');
                    }
                }
                else videoMotionArray.classList.remove('active');
        }  
    });

    let technologyImg = document.querySelectorAll('.technology-pg ul li img');
    let technoloTitle = document.querySelector('.technology-pg h1');
    let technoloSubtitle = document.querySelector('.technology-pg .main-text');
    let technoloSection = document.querySelector('#technology');
    let technoloSectionTop = technoloSection.offsetTop;

    $(window).scroll(function(){
        if($(this).scrollTop() >= technoloSectionTop-marginT){
            if(!technoloTitle.classList.contains('active')) {
                technoloTitle.classList.add('active');
            }
            if(!technoloSubtitle.classList.contains('active')) {
                technoloSubtitle.classList.add('active');
            }
        }
        else {
            technoloTitle.classList.remove('active');
             technoloSubtitle.classList.remove('active');
        }
        for (let i=0; i<technologyImg.length; i++) {
            let technologyArray =  technologyImg[i];
                if($(this).scrollTop() >= technoloSectionTop-marginT){
                    if(!technologyArray.classList.contains('active')) {
                        technologyArray.classList.add('active');
                    }
                }
                else technologyArray.classList.remove('active');
        }        
    });


    let aboutTitle = document.querySelector('.about-section h1');
    let aboutSubtitle =document.querySelector('.about-section .main-text');
    let aboutLi = document.querySelectorAll('.about-section li');
    let aboutSection = document.querySelector('#matrix');
    let aboutSectionTop = aboutSection.offsetTop; 
    $(window).scroll(function(){
        if($(this).scrollTop() >= aboutSectionTop-marginT){
            if(!aboutTitle.classList.contains('active')) {
                aboutTitle.classList.add('active');
            }
            if(!aboutSubtitle.classList.contains('active')) {
                aboutSubtitle.classList.add('active');
            }
        }
        else {
            aboutTitle.classList.remove('active');
             aboutSubtitle.classList.remove('active');
        }
        for (let d=0; d<aboutLi.length; d++) {
                let aboutLiArray =  aboutLi[d];
                    if($(this).scrollTop() >= aboutSectionTop-marginT){
                        if(!aboutLiArray.classList.contains('active')) {
                            aboutLiArray.classList.add('active');
                        }
                    }
                    else aboutLiArray.classList.remove('active');
                }
    });


    let roadmapTitle = document.querySelector('.roadmap-pg h1');
    let roadmapMain = document.querySelector('.roadmap-pg .gallery-top');
    let roadmapSlider = document.querySelector('.roadmap-pg .gallery-thumbs');
    let roadmapSection = document.querySelector('#roadmap');
    let roadmapSectionTop = roadmapSection.offsetTop;
    $(window).scroll(function(){
        if($(this).scrollTop() >= roadmapSectionTop-marginT){
            if(!roadmapTitle.classList.contains('active')) {
                roadmapTitle.classList.add('active');
            }
            if(!roadmapMain.classList.contains('active')) {
                roadmapMain.classList.add('active');
            }
            if(!roadmapSlider.classList.contains('active')) {
                roadmapSlider.classList.add('active');
            }
        }
        else {
            roadmapTitle.classList.remove('active');
             roadmapMain.classList.remove('active');
             roadmapSlider.classList.remove('active');
        }
    });

    let whiteText = document.querySelector('.whitepaper-pg .contents');
    let whiteImg = document.querySelector('.whitepaper-pg .back');
    let whiteSection = document.querySelector('#whitepaper');
    let whiteSectionTop = whiteSection.offsetTop;
    $(window).scroll(function(){
        if($(this).scrollTop() >= whiteSectionTop-marginT){
            if(!whiteText.classList.contains('active')) {
                whiteText.classList.add('active');
            }
            if(!whiteImg.classList.contains('active')) {
                whiteImg.classList.add('active');
            }
        }
        else {
            whiteText.classList.remove('active');
            whiteImg.classList.remove('active');
        }
    });

    let partnerTitle = document.querySelector('.partner-pg h1');
    let partnerMain = document.querySelector('.partner-pg .main-text');
    let partnerUl = document.querySelector('.partner-pg ul');
    let partnerSection = document.querySelector('#partner');
    let partnerSectionTop = partnerSection.offsetTop;
    $(window).scroll(function(){
        if($(this).scrollTop() >= partnerSectionTop-marginT){
            if(!partnerTitle.classList.contains('active')) {
                partnerTitle.classList.add('active');
            }
            if(!partnerMain.classList.contains('active')) {
                partnerMain.classList.add('active');
            }
            if(!partnerUl.classList.contains('active')) {
                partnerUl.classList.add('active');
            }
        }
        else {
            partnerTitle.classList.remove('active');
             partnerMain.classList.remove('active');
             partnerUl.classList.remove('active');
        }
    });

    let teamTitle = document.querySelector('.team h1');
    let teamMain = document.querySelector('.team .main-text');
    let teamUl = document.querySelectorAll('.team ul li'); 
    let teamSection = document.querySelector('#team')
    let teamSectionTop = teamSection.offsetTop; 

    $(window).scroll(function(){
        if($(this).scrollTop() >= teamSectionTop-marginT){
            if(!teamTitle.classList.contains('active')) {
                teamTitle.classList.add('active');
            }
            if(!teamMain.classList.contains('active')) {
                teamMain.classList.add('active');
            }
        }
        else {
            teamTitle.classList.remove('active');
             teamMain.classList.remove('active');
        }
        for (let c=0; c<teamUl.length; c++) {
            let teamUlArray =  teamUl[c];
                if($(this).scrollTop() >= teamSectionTop-marginT){
                    if(!teamUlArray.classList.contains('active')) {
                        teamUlArray.classList.add('active');
                    }
                }
                else teamUlArray.classList.remove('active');
                }
    });

    // scrolling event
    let speed = 700;

     function scrolling(obj){
         if (!obj){
             $('html, body').animate({scrollTop:0},speed);
         }else{
             var posTop = $(obj).offset().top-60;   
             $('html, body').animate({scrollTop:posTop}, speed ) 
         }
     };
      
     $("ul li a").click(function(){ 
         var direction = $(this).attr("href"); 
         scrolling( direction ); 
         return false; 
     });

    // aside event
    let snsBtn = document.querySelector('aside');
    snsBtn.addEventListener('click', function () {
        if (!snsBtn.classList.contains('active')) {
        snsBtn.classList.add('active');
        }
        else snsBtn.classList.remove('active');
    });
        
    //lang event
    let lang = document.querySelector('.lang');
    let onLang = document.querySelector('.wrap.on-click');
    let langBtn = document.querySelector('.pc-header .select-wrap .wrap img')
    let close = document.querySelector('.close')

    lang.addEventListener('click', function () {
        if (!lang.classList.contains('active')) {
        lang.classList.add('active');
        onLang.classList.add('active');
        langBtn.classList.add('active');
        }
        else lang.classList.remove('active');
    });

    close.addEventListener('click', function () {
        close.classList.remove('active');
        onLang.classList.remove('active');
        langBtn.classList.remove('active');
    });

    langBtn.addEventListener('click', function () {
        close.classList.remove('active');
        onLang.classList.remove('active');
        langBtn.classList.remove('active');
    });
 
    // top-btn
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.top-btn').fadeIn();
            } else {
                $('.top-btn').fadeOut();
            }
        });
        
        $(".top-btn").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });
    });

    // roadmap  
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: false,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop:false,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });

    // team event
    var hover = $(".hover");
    var teamList = $(".tam-list");

    teamList.on("click", function() {
        var content  = $(this).attr("data-target");
        if (!$(this).hasClass("on")) {
            teamList.removeClass("on");
            hover.removeClass("on");
            $(this).addClass("on");
            $(content).addClass("on");
        } else {
            $(this).removeClass("on");
            $(content).removeClass("on");
        }
    });

    var swiper = new Swiper('.tam-slider', {
        slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // adventurer slider
    var swiper = new Swiper('.swiper-container1', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      });

    // modal popup
    // 닫기 누르면 input reset, on/bdr class remove
    $('.btn1').click(function(){
        $('.modal_apply_bg').fadeIn();
        $('.modal_apply').fadeIn();
    });
    $('.btn2').click(function(){
        $('.modal_apply_bg').fadeIn();
        $('.modal_lookup').fadeIn();
    });
    $('.close').click(function(){
        $('.modal_apply_bg').fadeOut();
        $('.modal').fadeOut();
        $('.modal input').val('');
        $('.wallet_email_check').removeClass('on');
        $('.password_check').removeClass('on');
        $('#email').removeClass('on');
        $('input').removeClass('bdr');
        $('input:checkbox').prop("checked", false);
    });

    // 정보 입력됐을때 border 활성화
    $('input').on('propertychange change keyup paste input', function(){
        $(this).addClass('bdr');
    })
    
    // 값 비었으면 border 활성화 취소
    $('.modal input').keyup(function(){
        if ($('input').val().length == 0){
            $(this).removeClass('bdr');
        };
    });
        

    // BIT, ETH check 되었을 때, 변경사항
    $('#BIT').click(function(){
        $('.text_eth').removeClass('on');
        $('.text_bit').addClass('on');
        $('.text_wrap .eth').removeClass('on');
        $('.text_wrap .bit').addClass('on');
        $('.eth').val('');
    });
    $('#ETH').click(function(){
        $('.text_bit').removeClass('on');
        $('.text_eth').addClass('on');
        $('.text_wrap .bit').removeClass('on');
        $('.text_wrap .eth').addClass('on');
        $('.bit').val('');
    });
    
    // 신청하기 눌렀을 때 신청완료 창 popup,
    // 입력 값 비었으면 경고창.
    $('.modal_apply .popup_btn').click(function() {

        if($('.modal_apply .email').val()== false){ 
        alert("이메일을 입력하세요.");
        return false;
        }
        if($('.modal_apply .wallet_email').val()==false){ 
        alert("Wallet address를 입력하세요.");
        return false;
        }
        if($('.modal_apply .wallet_email_check').val()==false){ 
        alert("Wallet address를 확인하세요.");
        return false;
        }
        if($('.modal_apply .password').val()==false){ 
        alert("Password를 입력하세요.");
        return false;
        }
        if($('.modal_apply .password_check').val()==false){ 
        alert("Password를 확인하세요.");
        return false;
        }
        if($('.modal_apply #invest_agree_check').prop("checked")==false){ 
        alert("투자 유의사항 및 상기 내용 동의에 체크해주세요.");
        return false;
        }
        if($('.modal_apply #apply_agree_check').prop("checked")==false){ 
        alert("신청 주의사항에 체크해주세요.");
        return false;
        }
        $('.modal_apply').css('display', 'none');
        $('.modal_apply_success').fadeIn();
    });

    // 신청하기 email @입력 확인
    $(".modal .email").keyup(function(){
        var eml = $('.modal .email').val();
        if( eml.indexOf("@") == -1 ){
            $('.modal .email').addClass('on');
        } else {
            $('.modal .email').removeClass('on');
        };
        if (eml == false) {
            $('.modal .email').removeClass('on');
        };
    });

    // 신청하기 유의사항 확인 여부 체크

    var investRead = 0;
    var applyRead = 0;

    $('.accent_investment').click(function(){
        investRead = 1;
    });
    $('#invest_agree_check').click(function(){
        if(investRead == 0){
            alert("투자 유의사항 내용을 확인해주세요.");
            return false;
        } else {
            $('.agree_invest label').is(':checked');
        }
    });

    $('.accent_application').click(function(){
        applyRead = 1;
    });
    $('#apply_agree_check').click(function(){
        if(applyRead == 0){
            alert("신청 주의사항 내용을 확인해주세요.");
            return false;
        } else {
            $('.agree_apply label').is(':checked');
        }
    });
    

    // 신청하기 Input Wallet Address 확인
    $(".modal_apply .wallet_email_check").keyup(function(){
        var eml1 = $('.modal_apply .wallet_email').val();
        var eml2 = $('.modal_apply .wallet_email_check').val();
        if (eml1 != "" || eml2 != ""){
        if(eml1 == eml2) {
            $('.wallet_email_check').removeClass('on');
        } else {
            $('.wallet_email_check').addClass('on');
        }
        };
        if (eml2 == false) {
        $('.wallet_email_check').removeClass('on');
        };
    });

    // 신청하기 Input password 확인
    $(".modal_apply .password_check").keyup(function(){
        var pwd1 = $('.modal_apply .password').val();
        var pwd2 = $('.modal_apply .password_check').val();
        if (pwd1 != "" || pwd2 != ""){
        if(pwd1 == pwd2) {
            $('.password_check').removeClass('on');
        } else {
            $('.password_check').addClass('on');
        }
        }
        if (pwd2 == false) {
        $('.password_check').removeClass('on');
        }
    });
    

    // 신청완료에서 조회하기 눌렀을 때 조회하기 창 popup
    $('.modal_apply_success .popup_btn').click(function(){
        $('.modal_apply_success').css('display', 'none');
        $('.modal_lookup').fadeIn();
    });

    // 투자 유의사항 popup
    $('.accent_investment').click(function(){
        $('.investment').fadeIn();
    });
    $('.accent_application').click(function(){
        $('.application').fadeIn();
    });
    $('.precaution_close').click(function(){
        $('.apply_precaution').fadeOut();
    });

    // 조회하기 확인 눌렀을 때 조회완료 창 popup
    // 입력 값 비었으면 경고창.
    $('.modal_lookup .popup_btn').click(function(){
        if($('.modal_lookup .email').val()== false){ 
        alert("이메일을 입력하세요.");
        return false;
        }
        if($('.modal_lookup .password').val()== false){ 
        alert("Password를 입력하세요.");
        return false;
        }
        $('.modal_lookup').css('display', 'none');
        $('.modal_lookup_success').fadeIn();
    });

    // 조회하기 support popup
    $('.modal_lookup .forget').click(function(){
        $('.modal_lookup').fadeOut();
        $('.apply_passwordforget').fadeIn();
    });

    // 조회하기 support popup 꺼짐 및 popup_bg 꺼짐
    $('.apply_passwordforget_close').click(function(){
        $('.apply_passwordforget').fadeOut();
        $('.modal_apply_bg').fadeOut();
    });

    // 조회완료 눌렀을 때 popup 꺼짐 및 popup_bg 꺼짐
    $('.modal_lookup_success .popup_btn').click(function(){
        $('.modal_lookup_success').fadeOut();
        $('.modal_apply_bg').fadeOut();
    });
    
    // 인플루언서 조회완료 tooltip 
    $('.lookup_success_bx .tooltip').click(function(){
        $(this).children('.tooltip_bx').toggleClass('on');
    });
    if($(window).width() >967) {
        $('.lookup_success_bx .tooltip').hover(function(){
            $(this).children('.tooltip_bx').toggleClass('on');
        })
    }
    
    // 물량배분 popup
    $('.pre-sale-button').click(function(){
        $('.pre-sale').fadeIn();
        $('.modal_apply_bg').fadeIn();
    });

