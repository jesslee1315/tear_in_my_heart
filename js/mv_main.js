
  $(document).ready(function() {
    var one = $('.one');
    var two = $('.two');
    var three = $('.three');
    var four = $('.four');
    var five = $('.five');
      var flashingColors1 = $('.flashingColors1');
      var flashingColors2 = $('.flashingColors2');
      var flashingColors3 = $('.flashingColors3');
    var heart1 = $('#heart1');
    var heart2 = $('#heart2');
      var speakers = $('.speakers');
      var boom = $('.boom')
    var faces = $('.face');
    var just_face = $('#just_face')
    var hat_face = $('#hat_face')
      var sunglasses = $('.sunglasses');
      var sunglasses1 = $('#sunglasses1');
      var sunglasses2 = $('#sunglasses2');
      var sunglasses1_yellow = $('#sunglasses1_yellow');
      var sunglasses2_yellow = $('#sunglasses2_yellow');
      var sunglasses1_blue = $('#sunglasses1_blue');
      var sunglasses2_blue = $('#sunglasses2_blue');
      var sunglasses1_pink = $('#sunglasses1_pink');
      var sunglasses2_pink = $('#sunglasses2_pink');
      var sunglasses1_green = $('#sunglasses1_green');
      var sunglasses2_green = $('#sunglasses2_green');
      var sunglasses1_red = $('#sunglasses1_red');
      var sunglasses2_red = $('#sunglasses2_red');
      var sunglasses1_darkBlue = $('#sunglasses1_darkBlue');
      var sunglasses2_darkBlue = $('#sunglasses2_darkBlue');
      var sunglasses1_orange = $('#sunglasses1_orange');
      var sunglasses2_orange = $('#sunglasses2_orange');
    // var sunglasses1_darkGreen = $('#sunglasses1_darkGreen');
    // var sunglasses2_darkGreen = $('#sunglasses2_darkGreen');

    var fallingBox = $('.fallingBox');
    var tl = new TimelineLite({paused: true});
    var aud = document.getElementById("audio");

    // function words fade in
    function countIn(){
      tl
      .staggerFromTo(sunglasses, .00001, {opacity:1}, {opacity:0})

      .staggerFromTo(one, .06, {opacity:0}, {opacity:1})
      .staggerFromTo(two, .06, {opacity:0}, {opacity:1})
      .staggerFromTo(three, .02, {opacity:0}, {opacity:1})
      .staggerFromTo(four, .035, {opacity:0}, {opacity:1})
      .staggerFromTo(five, .035, {opacity:0}, {opacity:1})
      .to([one, two, three, four, five], .045, {opacity:0})
    };
    countIn();


    var randomColor= function() {
    var letters = '0123458789ABCDEF';
    var color = '#';
    for (var i = 0; i < 8; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

    function colorChange1(){
      tl
        .to(flashingColors1, .01, {css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors1, .04, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors1, .04, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors1, .02, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors1, .02, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors1, .04, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors1, .002, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors1, .001, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        // .to(flashingColors1, .002, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        // .to(flashingColors1, .001, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})


    }
    colorChange1();

    function colorChange2(){
      tl
        // .to(flashingColors2, .22, {delay: 1.35, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors2, .05, {delay: .28, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        // .to(flashingColors2, .22, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors2, .05, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors2, .04, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors2, .02, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors2, .02, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors2, .02, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors2, .002, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})  .to(flashingColors1, .002, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        .to(flashingColors1, .002, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})
        // .to(flashingColors1, .002, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})

        // .to(flashingColors2, .12, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut})

    }
    colorChange2();


    function facesAppear(){
      tl
        .add('flashingColors3')
        .staggerFromTo(faces, .3, {opacity:0}, {opacity:1})
        .to(flashingColors3, .27, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut}, 'flashingColors3')

    }
    facesAppear();

    function sunglassesAppear(){
          tl
          .add('flashingColors3')

        .staggerFromTo(sunglasses1, .01, {opacity:0}, {opacity:1, repeat:20})
              .to(sunglasses1, .3, {rotation:360, transformOrigin:"left top"})
              .to(sunglasses1, .3, {rotation:360, scale:0.5, transformOrigin:"-750px -900px"})
        // .staggerFromTo(sunglasses2, .01, {opacity:0}, {opacity:1, repeat:30})
        //       .to(sunglasses2, .4, {rotation:360, scale:0.5, transformOrigin:"-550px 950px"})
        // .staggerFromTo(sunglasses1_yellow, .01, {opacity:0}, {opacity:1, repeat:30})
        //       .to(sunglasses1_yellow, .4, {rotation:360, scale:0.5, transformOrigin:"-800px -800px"})
        .staggerFromTo(sunglasses2_yellow, .01, {opacity:0}, {opacity:1, repeat:20})
              .to(sunglasses2_yellow, .3, {rotation:360, transformOrigin:"bottom top"})
              .to(sunglasses2_yellow, .3, {rotation:360, scale:0.5, transformOrigin:"-600px 950px"})
              .staggerFromTo(heart1, .2, {opacity:0}, {opacity:1}, 'heart1')
        .staggerFromTo(sunglasses2_blue, .01, {opacity:0}, {opacity:1, repeat:30})
              .to(sunglasses2_blue, .3, {rotation:270, scale:0.5, transformOrigin:"-550px -400px"})
              .staggerFromTo(heart2, .2, {opacity:0}, {opacity:1}, 'heart2')
        .staggerFromTo(sunglasses1_blue, .01, {opacity:0}, {opacity:1, repeat:30})
              .to([heart1, heart2], .5, { y: -650})
        .staggerFromTo(sunglasses1_pink, .01, {opacity:0}, {opacity:1, repeat:30})
              .to(sunglasses1_pink, .3, {rotation:360, transformOrigin:"right bottom"})
        .staggerFromTo(sunglasses2_pink, .01, {opacity:0}, {opacity:1, repeat:20})
        // .staggerFromTo(sunglasses1_green, .01, {opacity:0}, {opacity:1, repeat:30})
        // .staggerFromTo(sunglasses2_green, .01, {opacity:0}, {opacity:1, repeat:20})
        // .staggerFromTo(sunglasses1_red, .01, {opacity:0}, {opacity:1, repeat:30})
        // .staggerFromTo(sunglasses2_red, .01, {opacity:0}, {opacity:1, repeat:20})
        // .staggerFromTo(sunglasses1_darkBlue, .01, {opacity:0}, {opacity:1, repeat:30})
        //       .to(sunglasses1_darkBlue, .2, {rotation:360, transformOrigin:"right top"})
        //       .to(sunglasses1_darkBlue, .2, {rotation:360, scale:0.5, transformOrigin:"-750px -900px"})
        // .staggerFromTo(sunglasses2_darkBlue, .01, {opacity:0}, {opacity:1, repeat:30})
        // .staggerFromTo(sunglasses1_orange, .01, {opacity:0}, {opacity:1, repeat:30})
        .staggerFromTo(sunglasses2_orange, .01, {opacity:0}, {opacity:1, repeat:30})
              .to(sunglasses2_orange, .2, {rotation:360, transformOrigin:"bottom top"})
              .to(sunglasses2_orange, .2, {rotation:360, scale:0.5, transformOrigin:"-600px 950px"})
        // .staggerFromTo(sunglasses1_darkGreen, .01, {opacity:0}, {opacity:1, repeat:30})
        // .staggerFromTo(sunglasses2_darkGreen, .01, {opacity:0}, {opacity:1, repeat:30})
        .to(sunglasses, .03, {opacity:0})

      .to(flashingColors3, .27, {delay:.01, css:{backgroundColor: randomColor()}, ease:Back.easeOut}, 'flashingColors3')

    }
    sunglassesAppear();


    function boomBoomSpeakers(){
      tl
      // .add('boom')
      .add('flashingColors3')
      .add('just_face')
      .add('just_hat')

      .staggerFromTo(speakers, .2, {opacity:0}, {opacity:1})
        .fromTo(speakers, .2, {scale:.5}, {scale:.65})
        .fromTo(speakers, .2, {scale:.65}, {scale:.5, repeat: 10})
        // .fromTo(just_face, .8, {rotation: '45'}, {rotation: '-45'}, 'just_face')
        // .fromTo(hat_face, .8, {rotation: '-45'}, {rotation: '45'}, 'hat_face')
        .to(flashingColors3, .01, {delay:.03, css:{backgroundColor: randomColor()}, ease:Back.easeOut, repeat: 200}, 'flashingColors3')
        .to(speakers, .03, {opacity:0})
    }

    boomBoomSpeakers()


  function addSquare(){
    tl
    .to(faces, .05, {opacity:0})
    for (var i = 1; i < 71; i++) {
      $('#display').append(`<img id=${i} class="fallingBox" src="images/puzzle_pieces/pieces_${i}.jpg"/>`);
    }

    function noDups(){
      var arr = [];
      while (arr.length < 70) {
        var numbs= Math.ceil((Math.random() * 71))
          if(arr.indexOf(numbs) === -1 && numbs != 71){
            arr.push(numbs);
          }
      }
      return arr;
    }

    var randomNum = noDups();
    for (var i = 0; i < $('.fallingBox').length; i++) {
        tl
          .fromTo($(`#${randomNum[i]}`), .008, { opacity:0, ease:Power1.easeOut}, {opacity:1})
    }
  }
  addSquare();

  function Update(){
  tl.progress( aud.currentTime/aud.duration );
  }

  aud.onplay = function() {
    TweenLite.ticker.addEventListener('tick',Update);
  };

  aud.onpause = function() {
    TweenLite.ticker.removeEventListener('tick',Update);
  };



  });
