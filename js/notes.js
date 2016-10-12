
  $( document ).ready(function() {
    var faces = $('#faces')
    var box1 = $('.box_1')
    var box2 = $('.box_2')
    // tl chains events one after another-consecutivel
    var tl = new TimelineLite();

    // {x:100 y:100} Slides on the x and y axis
    // TweenLite.from([box1, box2], 5, {opacity:0.5, rotation:45, ease:Power2.easeOut});
    // TweenLite.to([box1, box2], 5, {opacity:0.5, rotation:45});

    // seesaw (once.)
    tl
    // labels video #6 https://www.youtube.com/watch?v=0PnHw0kVvRs
    .add('box2')
    .fromTo([box1, box2], 5, {opacity:0.5, rotation:-25, ease:Power0.easeNone}, {opacity:0.5, rotation:25, ease:Power0.easeNone})
    // TweenLite.fromTo(box1, 5, {opacity:0.5, rotation:-25}, {opacity:0.5, rotation:25});
    // TweenLite.fromTo(box2, 5, {opacity:0.5, rotation:15}, {opacity:0.5, rotation:-15});
    // fade in
    .from(box2, .5, {autoAlpha:0, delay: 1}, 'box2');
    // TweenLite.from(box2, 3, {autoAlpha:0});
  });
