$(document).ready(function () {
  $(document).on("click", ".continue-btn", function () {
    if ($(".main").hasClass('hidden')){
      var hd = new TimelineMax();
      hd.fromTo($(".revieworder"), 0.3, { y:20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut},.1);
      hd.fromTo($(".section1"), 0.3, { y:20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut},.2);  
      hd.fromTo($(".order-summary"), 0.3, { y:20, opacity: 0 }, { y: 0, opacity: 1, ease: Power2.easeOut},.3);
      TweenMax.set($(".main"),{className: "-=hidden" });
    }
  });
  $(document).on("click", ".backbutton", function(){
    if (!$(".main").hasClass('hidden')){
    var hl = new TimelineMax();
      hl.set($(".main"), { className: "+=hidden" });
      hl.fromTo($(".revieworder,.section1,.order-summary"), 0.1, {opacity: 1 }, {opacity: 0 });
    }
  });
});
  
