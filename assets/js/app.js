// sanity check
console.log("app.js linked.");

/* 
Create a list that contains three projects.  Each project includes: Title, Link, & Description. 
Loop through the list,  individually adding projects to the project page. */ 

$(document).ready(function() {
    console.log( "ready!" );


let projects = 
[{
	title: "Berkeley Political Review",
	url: "https://bpr.berkeley.edu/",
	description: "I was the Opinion Editor for the <i>Berkeley Political Review.</i>"
},
{
	title: "Being Charlie Kaufman",
	url: "https://decal.berkeley.edu/about/decal-program",
	description: "I taught a class on Charlie Kaufman's films in UC Berkeley's film & rhetoric departments." 
},
{
	title: "RocketSpace",
	url: "http://www.rocketspace.com/",
	description: "I developed RocketSpace's core research practices and watched the company go from 14 to 80 people." 
}]; 


for (let i = 0; i < projects.length; i++){
$("#project-container").append(`<div class="project"><a class ="project-title" target="_blank">${projects[i].title}</a><p>${projects[i].description}</p></div>`);
$(".project-title").attr("href", projects[i].url);
}; 

});