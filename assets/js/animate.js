$(document).ready(function() {
  function planeflyout() {
    var distance = (innerWidth / 2) + 110;
    var plane2InitialOffset = (innerWidth / 2) + 110;
    var rate = ((innerWidth / 2) / 400) * 1000;
  
    $('#plane-2, #shadow-2').css({
      transform: 'translateX(' + plane2InitialOffset + 'px)',
      display: 'inline-block'
    });
  
    $('#plane-1').velocity({
      translateX: [distance, 0]
    }, {
      duration: rate,
      easing: 'easeInSine'
    });
  
    $('#plane-2, #shadow-2').velocity({
      translateX: [0, plane2InitialOffset]
    }, {
      delay: rate,
      duration: rate,
      easing: 'easeOutSine'
    });
  }
  
  function initMobileVersion() {
    $('#mobile-scene-1').css('opacity', 1);
    playMobileScenes();
  }
  
  function playMobileScenes() {
    setTimeout(mobileScene1, 2000);
    setTimeout(mobileScene2, 4000);
    setTimeout(mobileScene3, 6000);
    setTimeout(mobileScene4, 8000);
    setTimeout(mobileScene5, 11000);
  }
  
  function mobileScene1() {
    $('#mobile-plane').velocity({
      translateX: [innerWidth * 0.7, 0]
    }, {
      duration: 1500,
      easing: 'easeInSine'
    });
  }
  
  function mobileScene2() {
    $('#mobile-scene-1').css('display', 'none');
    $('#mobile-scene-2').css({
      opacity: 0,
      display: 'flex',
      flex: '100%',
      justifyContent: 'center'
    });
    $('#mobile-scene-2').velocity('transition.slideUpBigIn');
  }
  
  function mobileScene3() {
    $('#mobile-scene-2').css('display', 'none');
    $('#mobile-scene-3').css({
      opacity: 0,
      display: 'flex',
      flex: '100%',
      justifyContent: 'center'
    });
    $('#mobile-scene-3').velocity('transition.slideUpBigIn');
  }
  
  function mobileScene4() {
    $('#mobile-scene-3').css('display', 'none');
    $('#mobile-scene-4').css({
      opacity: 0,
      display: 'flex',
      flex: '100%',
      justifyContent: 'center'
    });
    $('#mobile-scene-4 img').velocity({ translateX: innerWidth }, { duration: 0 });
    $('#mobile-scene-4').velocity('transition.slideUpBigIn');
    $('#mobile-scene-4 img').velocity({ translateX: 0 }, { delay: 500, duration: 3000, easing: 'spring' });
  }
  
  function mobileScene5() {
    $('#mobile-scene-4').css('display', 'none');
    $('#mobile-scene-5').css({
      opacity: 0,
      display: 'flex',
      flex: '100%',
      flexDirection: 'column', 
      justifyContent: 'center'
    });
    $('#mobile-scene-5').velocity({ opacity: [1,0] }, { duration: 2000 });
  }
  
  function mobileScene6() {
    console.log('running scene 6');
    $('#mobile-scene-5').css('display', 'none');
    $('#mobile-scene-6').css({
      opacity: 0,
      display: 'flex',
      flex: '100%',
      flexDirection: 'column',
      justifyContent: 'center'
    });
    $('#mobile-scene-6').velocity({ opacity: [1,0] }, { duration: 1000 });
  }
  
  function mobileScene7() {
    $('#mobile-scene-6').css('display', 'none');
    $('#mobile-scene-7').css({
      opacity: 0,
      display: 'flex',
      flex: '100%',
      flexDirection: 'column',
      justifyContent: 'center'
    });
    $('#mobile-scene-7').velocity({ opacity: [1,0] }, { duration: 1000 });
  }
  
  window.onload = function() {
    $('#smm').click(mobileScene6);
    $('#explore').click(mobileScene7);
  
    if(innerWidth > 732) {
      setTimeout(planeflyout, 2000);
    } else {
      initMobileVersion();
    }
  };
  
  window.onresize = function() {
    $('body').css('min-height', innerHeight + 'px');
  }
});