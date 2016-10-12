
  $(document).ready(function() {
    var pre_loader_logo = $('#preLoaderLogo');
    var title = $('.title')
    var red = $('#red')
    var blue = $('#blue')
    var all = $('.all_splash');
    var tl = new TimelineLite();
    var test = $('#test')

    //function logo rotator on click
    function loader(){
      tl
      .to(pre_loader_logo, 3, {rotation:360, ease:Power0.easeNone})
      .to([title, pre_loader_logo], 1, {opacity:0 , ease:Power1.easeInOut})
      .add('red')
      .add('blue')

      .to(blue, 1.2, {x: 500, ease:Power1.easeInOut, opacity:0}, 'blue')
      .to(red, 1.2, {x: -500, ease:Power1.easeInOut, opacity:0}, 'red')

      tl.pause();
      $('.title, #preLoaderLogo').click(function(){
        tl.play()
        setTimeout(function(){
          redirect()
        }, 5500)
      })
    };
    loader()

    function redirect() {
      window.location.assign("mv.html")
    }

  });
