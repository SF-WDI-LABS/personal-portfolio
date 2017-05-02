$(document).ready(function(){
  $("#main_menu").click(function(){
    $(".menu").toggleClass("hidden");
  });

  $("#who_btn").click(function(){
    $(".whatpage").addClass("hidden");
    $(".wherepage").addClass("hidden");
    $(".whypage").addClass("hidden");
    $(".homepage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".whopage").removeClass("hidden");
    $(".whitebg").removeClass("hidden");
  });


  $("#what_btn").click(function(){
    $(".whopage").addClass("hidden");
    $(".wherepage").addClass("hidden");
    $(".whypage").addClass("hidden");
    $(".homepage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".whatpage").removeClass("hidden");
    $(".whitebg").removeClass("hidden");
  });


  $("#where_btn").click(function(){
    $(".whopage").addClass("hidden");
    $(".whatpage").addClass("hidden");
    $(".whypage").addClass("hidden");
    $(".homepage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".wherepage").removeClass("hidden");
    $(".whitebg").removeClass("hidden");
  });


  $("#why_btn").click(function(){
    $(".whopage").addClass("hidden");
    $(".whatpage").addClass("hidden");
    $(".wherepage").addClass("hidden");
    $(".homepage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".whypage").removeClass("hidden");
    $(".whitebg").removeClass("hidden");
  });

  $(".backtomain").click(function(){
    $(".whopage").addClass("hidden");
    $(".whatpage").addClass("hidden");
    $(".wherepage").addClass("hidden");
    $(".whypage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".whitebg").addClass("hidden");
    $(".navbar").addClass("hidden");
    $(".homepage").removeClass("hidden");
  });


var projects = [{
    'picture': "assets/imgs/WhoPlayedOnThat.png",
    'name': "Who Played On That?",
    'description': "An app for all those times that you think, 'Man, that's a funky beat, who played drums on that track?'",
    'link': "https://whoplayedonthat.herokuapp.com",
    'devs': "Weston"
  },
  { 'picture': "assets/imgs/GAHub.png",
    'name': "GA-Hub",
    'description': "Quick and easy search application for General Assembly's SF Web Development Immersive labs and lectures",
    'link': "https://assembled.herokuapp.com",
    'devs': "Anton, Brett, Ivan & Weston"
  },
  { 'picture': "assets/imgs/CarpeGov.png",
    'name': "CarpeGov",
    'description': "Find, store, sort and take action on current and pending legislation",
    'link': "https://carpegov.herokuapp.com",
    'devs': "Yan Yin and Weston"
  },
  { 'picture': "assets/imgs/Vagabond.png",
    'name': "Vagabond",
    'description': "A social travel application. Sign up, login, find and post comments on your favorite travel destinations",
    'link': "https://vagabondapp1.herokuapp.com",
    'devs': "Chris, Thelma, Yvonne and Weston"
  }];

for(var i = 0; i < projects.length; i++) {
  var project = projects[i];
  var addProjects = (``);

  $(".projects").append(addProjects);
}

});
