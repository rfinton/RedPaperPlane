$(document).ready(function() {
  function exec() {
    $('#scene-1').css('opacity', 1);
    playScenes();
  }
  
  function playScenes() {
    setTimeout(scene1, 1000);
    setTimeout(scene2, 2000);
    setTimeout(scene3, 3000);
    setTimeout(scene4, 4000);
    setTimeout(scene5, 5000);
    setTimeout(scene7, 7000);
  }
  
  function scene1() {
    $('#plane').velocity({
      translateX: [innerWidth * 0.7, 0]
    }, { duration: 1000, easing: 'easeInSine' });
  }
  
  function scene2() {
    $('#scene-1').css('display', 'none');
    $('#scene-2').velocity('transition.slideUpBigIn');
  }
  
  function scene3() {
    $('#scene-2').css('display', 'none');
    $('#scene-3').velocity('transition.slideUpBigIn');
  }

  function scene4() {
    $('#scene-3').css('display', 'none');
    $('#scene-4').velocity('transition.slideUpBigIn');
  }
  
  function scene5() {
    $('#scene-4').css('display', 'none');
    $('#scene-5 img').velocity({ translateX: innerWidth }, { duration: 0 });
    $('#scene-5').velocity('transition.slideUpBigIn');
    $('#scene-5 img').velocity({ 
      translateX: [0,innerWidth], 
      translateZ: [0,0] 
    }, { 
      delay: 500, 
      duration: 1000, 
      easing: [200,18] 
    });
  }
  
  function scene6(ev) {
    function hideScroll() {
      $('.scroll').velocity('fadeOut', 1000);
      window.removeEventListener('scroll', hideScroll);
    }
    scrollTo(0,0);
    $('#scene-7').css('display', 'none');
    $('#scene-6').css({ display: 'block' });
    $('#scene-6').velocity({ opacity: [1,0] }, { duration: 2000 });

    postGoal(ev);

    setInterval(function() {
      $('#scene-6 .glyphicon').velocity('callout.bounce');
    }, 2000);

    setTimeout(function() {
      window.addEventListener('scroll', hideScroll);
    }, 1000);
  }
  
  function scene7() {
    $('#scene-5').css('display', 'none');
    scrollTo(0,0);
    $('#scene-7').css({ 
      opacity: 0, 
      display: 'flex', 
      flex: 1, 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%' 
    });
    $('#scene-7').velocity({ opacity: [1,0] }, { duration: 1000 });
    $('#bar-1 > div').velocity('transition.slideLeftIn', { stagger: 100 });
    $('#bar-2 > div').velocity('transition.slideRightIn', { stagger: 100 });
  }
  
  function scene8(ev) {
    $('#scene-6 .glyphicon').velocity('stop');
    $('#scene-6').css('display', 'none');
    scrollTo(0,0);
    
    if(innerWidth < 420)
      $('.view').css('justify-content', 'flex-start');
    
      $('#scene-8').css({ 
      opacity: 0, 
      display: 'block',
      width: '100%',
      height: 'inherit',
    });
    $('#scene-8').velocity({ opacity: [1,0] }, { duration: 1000 });

    postGoal(ev);
  }

  function sendForm() {
    var proxyForm = document.getElementById('proxy-form');

    if(!proxyForm['firstname'].value || !proxyForm['lastname'].value || !proxyForm['company'].value || !proxyForm['email'].value || !proxyForm['address1'].value || !proxyForm['city'].value || !proxyForm['state'].value || !proxyForm['zip'].value) {
      return;
    }

    $('input[type="submit"]').css('display', 'none');
    $('div.btn.refresh').toggleClass('hidden');
    $('.glyphicon-refresh').velocity({ rotateZ: 360 },{ duration: 700, loop: true });

    var ifr;
    (purl != '') ? ifr = document.getElementById('hp') : ifr = document.getElementById('np');
    ifr = ifr.contentWindow || ifr.contentDocument;
    
    if(ifr.document) {
      ifr.document.forms[0]['firstname'].value = proxyForm['firstname'].value;
      ifr.document.forms[0]['lastname'].value = proxyForm['lastname'].value;
      ifr.document.forms[0]['company'].value = proxyForm['company'].value;
      ifr.document.forms[0]['title'].value = proxyForm['title'].value;
      ifr.document.forms[0]['email'].value = proxyForm['email'].value;
      ifr.document.forms[0]['phone'].value = proxyForm['phone'].value;
      ifr.document.forms[0]['address1'].value = proxyForm['address1'].value;
      ifr.document.forms[0]['city'].value = proxyForm['city'].value;
      ifr.document.forms[0]['state'].value = proxyForm['state'].value;
      ifr.document.forms[0]['zip'].value = proxyForm['zip'].value;
      ifr.document.forms[0].submit();
    }
  }

  function back() {
    scrollTo(0,0);
    $('#scene-8').css('display', 'none');
    $('#scene-6').css({ display: 'block' });
    $('#scene-6').velocity({ opacity: [1,0] }, { duration: 2000 });
  }

  window.end = function(fn) {
    $('.view').velocity('transition.slideLeftOut', function() {
      $('.view').html('<div class="flex-box"><p>' + fn + ", thank you for your interest in Red Paper Plane's Customer Success Kit. We look forward to getting this over to you.<br><br>If you would like to speak with someone sooner, please don't hesitate to <a href='https://www.redpaperplane.com/store/contact-us' target='_blank'>contact us</a> and we'll be happy to assist you.<br><br>In the meantime, click <a href='https://www.redpaperplane.com' target='_blank'>here</a> to visit our main website.</p></div>");
      $('.view').velocity('transition.slideLeftIn');
    });
  }

  window.onload = function() {
    $('#scene-7 a').click(function(ev) {
      ev.preventDefault();
      scene6(ev);
    });

    $('#scene-6 .learn-more').click(function(ev) {
      ev.preventDefault();
      scene8(ev);
    });
    $('#back-btn').click(back);
    $('input[type=submit]').click(sendForm);
    exec();
  };
});