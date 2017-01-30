// sanity check
console.log("app.js linked.");




//json for projects
var data = [
  {
    name:"Portfolio site",
    description:"This personal portfolio site",
    picture:"assets/imgs/portfolio.png",
    link:"https://github.com/wilkdasilk/wilkdasilk.github.io"
  },
  {
    name:"Good San Juan",
    description:"Web design for my band, Good San Juan",
    picture:"http://goodsanjuan.com/images/IMG_5938%20-%20Version%203.jpg",
    link:"http://goodsanjuan.com/"
  },
  {
    name:"Seeing In Stereo",
    description:"Music Blog design",
    picture:"https://github.com/wilkdasilk/SeeingInStereo/blob/master/images/bayvision.JPG?raw=true",
    link:"https://github.com/wilkdasilk/SeeingInStereo.git"
  },
  {
    name:"Memory Game",
    description:"Play a simple card Memory game",
    picture:"assets/imgs/memorygame.png",
    link:"https://github.com/wilkdasilk/wdi-fundamentals-memorygame"
  }
];

//body hides
$('body').hide();


//append project data
for (var i=0;i<data.length;i++) {
  var currentProject=data[i];
  console.log(currentProject);
  $('.projects').append(`
    <div class='col-lg-6 col-md-6 col-sm-12 col-md-xs-12 '>
      <a href='${currentProject.link}' target='_blank'>
        <div class="project">
          <img src='${currentProject.picture}' class='preview' title='${currentProject.description}'>
          <p class='caption'>${currentProject.name}</p>
        </div>
        </a>
    </div>`
  );
};

//scrolling anchors from https://startbootstrap.com/template-overviews/scrolling-nav/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//content fades in on page ready
$(document).ready(function(){
  $('body').fadeIn(800)
});
