
// $(document).ready(function () {
//   var e = "badyqb",
//   t = "http://teamtreehouse.com/" + e + ".json",
//   n = $("#badges"),
//   r = [],
//   i = 0;

//   $.getJSON(t, function (e) {
//     var t = e.badges;
//     $.each(t, function (e, t) {
//      r += '<li><a href="' + t.url + '" target="_blank"><img src="' + t.icon_url + '" alt="' + t.name + '" title="' + t.name + '"/></a></li>';
//       i++
//     });
//     n.append(r);
//   });
// });


(function(){
  function init(){
    var speed = 330;
    easing = mina.backout;

    [].slice.call (document.querySelectorAll('#grid > a')) .forEach(function(el){
      var s = Snap(el.querySelector('svg')),
      path = s.select('path'),

      pathConfig = {
        from : path.attr('d'),
        to   : el.getAttribute('data-path-hover')
      };

      el.addEventListener('mouseenter',function(){
        path.animate({'path':pathConfig.to}, speed, easing);
      });

      el.addEventListener('mouseleave',function(){
        path.animate({'path':pathConfig.from},speed,easing);
      });

    });
  }

  init();
}) ();






