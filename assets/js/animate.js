$(document).ready(function() {
  function exec() {
    $('#scene-1').css('opacity', 1);
    playScenes();
  }
  
  function playScenes() {
    setTimeout(scene1, 2000);
    setTimeout(scene2, 4000);
    setTimeout(scene3, 6000);
    setTimeout(scene4, 8000);
    setTimeout(scene6, 11000);
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
    $('#scene-4 img').velocity({ translateX: innerWidth }, { duration: 0 });
    $('#scene-4').velocity('transition.slideUpBigIn');
    $('#scene-4 img').velocity({ 
      translateX: [0,innerWidth], 
      translateZ: [0,0] 
    }, { 
      delay: 500, 
      duration: 1000, 
      easing: [200,18] 
    });
  }
  
  function scene5() {
    function hideScroll() {
      $('.scroll').velocity('fadeOut', 2000);
      window.removeEventListener('scroll', hideScroll);
    }
    scrollTo(0,0);
    $('#scene-6').css('display', 'none');
    $('#scene-5').css({ display: 'block' });
    $('#scene-5').velocity({ opacity: [1,0] }, { duration: 2000 });
    setInterval(function() {
      $('#scene-5 .glyphicon').velocity('callout.bounce');
    }, 2000);

    setTimeout(function() {
      window.addEventListener('scroll', hideScroll);
    }, 1000);
  }
  
  function scene6() {
    $('#scene-4').css('display', 'none');
    scrollTo(0,0);
    $('#scene-6').css({ 
      opacity: 0, 
      display: 'flex', 
      flex: 1, 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%' 
    });
    $('#scene-6').velocity({ opacity: [1,0] }, { duration: 1000 });
    $('#bar-1 > div').velocity('transition.slideLeftIn', { stagger: 100 });
    $('#bar-2 > div').velocity('transition.slideRightIn', { stagger: 100 });
  }
  
  function scene7() {
    $('#scene-5 .glyphicon').velocity('stop');
    $('#scene-5').css('display', 'none');
    $('#scene-7').css({ 
      opacity: 0, 
      display: 'flex', 
      flex: 1, 
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%' 
    });
    $('#scene-7').velocity({ opacity: [1,0] }, { duration: 1000 });
  }

  function clickTracker(ev) {
    ev.preventDefault();
    var ifr = document.createElement('iframe');
    ifr.style.display = 'none';
    ifr.src = ev.currentTarget.href;
    document.body.appendChild(ifr);
  }
  
  window.onload = function() {
    $('#explore a').click(scene5);
    $('#smm a').click(scene7);
    $('#explore a, #smm a').click(clickTracker);
    $('.buttons > div').click(function() {
      $(this).children('a')[0].click();
    });
    exec();
  };
});