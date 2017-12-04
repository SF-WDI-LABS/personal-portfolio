console.log("JS at the Ready!");

$(document).ready(function() {

// Projects array
let projects = [
  {
    id: "1",
    name: "Meet Adam",
    startDate: "03Dec2017"
    description: "A little more about the people behind Adam"
    url: "https://www.linkedin.com/in/findadammenard888/",
  },
  {
    id: "2",
    name: "Adam's Inspirations",
    startDate: "03Dec2017"
    description: "Where Adam goes to find New ideas"
    url: "https://www.moma.org/calendar/exhibitions/1219",
  },
  {
    id: "3",
    name: "Adam's Adventures",
    startDate: "03Dec2017"
    description: "Where Adam goes to make time stand still"
    url: "http://www.fromageslaurentdubois.fr/fr/",
  },
];

// Loop for adding Projects
for (i = 0; i < projects.length; i++) {
  $(".projects-container").append(`<div class="project"><a class="project-name">${project[i].name}</a><p>${project[i].description}</p>`)
}

)};
