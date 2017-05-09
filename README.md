# Personal Portfolio Project
By the end of this course, you'll have built several projects that you'll want to show off during your job search. This project will set you up with a portfolio website that you can use to link to your other projects, and to highlight the skills that you bring to the job search.

## Timeline
We'll work on this project 3 times this week: Monday, Tuesday, and Friday.

### Monday
Monday is about making sure you have the basics: that you've forked the project to your own GitHub account, that you can clone that code and edit it, and that you've started editing the HTML file to add structure to your site. Make sure you get through the first part of the Git Training that's in this README, and add the project and contact info sections to your site. You can also start to add images and style your site. Add the link to your repo and your website in the [project submission Google doc](https://docs.google.com/spreadsheets/d/1eu4_B9iu1TBRsAgYUdpvb3Y949E8stqSo62SMnBPws8/edit#gid=0). (If you don't understand what these GitHub commands are doing, don't worry; we'll talk much more about GitHub tomorrow.)

### Tuesday
On Tuesday, you should deploy your site on GitHub. Finish the Git Training sections that are for Tuesday. You should also finish the structure of your site. The sections for your projects and your contact info should be finished, and you should have CSS to style them the way you want. You should have the pictures you want. At this point, you should be willing to show the site to someone else; even if it doesn't have many projects linked yet, it should "look" the way you want it to. (To start, include a link to the repo where you have this project!)

### Friday
On Friday, add Javascript to your page. For example, you might have buttons to hide and show the different sections of your page, a place on your page that changes based on the date/time, the ability to search through your projects, or anything else that's interesting and relevant to you.

We're also asking you to specifically practice looping through an array of objects, and adding what's in them to your page using jQuery. We'd like you to:
* Create a uniformly structured array of objects representing projects that you've worked on. You can include this portfolio, projects that you completed during Fundamentals, and non-coding-related projects. Make sure you have at least 3 objects representing different projects, and that each one has at least a picture, a name, a description, and a link (to your code or to more info on the project).
* Loop over your array, and render the data to the page using jQuery, template strings, and the bootstrap grid. Make sure that this rendering will continue to work when you have more projects to add to you page.
* You have the choice to do this on your main page, under the "My work" section you've already created, or to create a new page, like “projects.html” or “projects/index.html”, where this code will run.

## Deliverables
On Monday, we will review your progress on the personal portfolio project. By then we expect to see:

* An updated README.md file. A readme is like the cover to the book of code you've written for this site. Don't publish a book without a cover! Describe this project in a few sentences - what are you trying to achieve with this page, what technologies are you using, etc. [This is a decent template](https://gist.github.com/zenorocha/4526327) for the way that a readme often looks. Make sure to link to the live site and include some sort of image (logo or screenshot). If you need help writing markdown language (the reason the file ends in `.md`), check out [this guide](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
* A "My work" section of the page that includes (or will include) links to all repos that contain homework deliverables. This should include the JS to loop over your array of objects and add them to your page.
* A "Contact me" section of the page that includes (at least) a way to email you, a link to your GitHub profile, and a link to your LinkedIn profile.
* Some custom HTML, CSS, JS, and images. Put your own personal flare on the page and add some customizations. These could be really simple changes that add a bit of your aesthetic or they could be larger features like a navbar, a footer, a photo carousel, bootstrap integration, event listeners, or CSS animations. [Google for personal websites](https://www.google.com/search?q=personal+website&espv=2&biw=1280&bih=612&site=webhp&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjx-Krl6bfOAhUUI2MKHaoPDUEQsAQIQA&dpr=2#imgrc=OOkEvdqZczSU-M%3A), find one that you like, and imitate it!

We're really looking forward to seeing what you've built by Friday! Please reach out to your peers or instructors if you need help making progress on this project.


## Learn Git Training

You should finish the first part of this training on Monday, and the second part on Tuesday.

### Monday Training

1. Create a fork of [this](https://github.com/sf-wdi-LABS/personal-portfolio) by clicking "Fork" on the top right.

  ![fork button](https://cloud.githubusercontent.com/assets/6520345/17564556/97ecdd00-5ee8-11e6-9ad0-a7b8104579ff.png)

2. You'll see a screen like the one below while GitHub is forking the repo. Forking creates a copy of the original repo on your own GitHub account. The forked repo is still online only and not on your computer.

  ![forking](https://cloud.githubusercontent.com/assets/6520345/17570801/c0d27e36-5f02-11e6-8d44-f485301831ed.png)

3. Now you have your own copy of the repo! In order to make this a live personal website, we're going to take advantage of GitHub's [*GitHub pages*](https://pages.github.com/) feature. All we need to do is change the repository name to `<fill in your GitHub username>.github.io`. Here's how:
  * Click on the settings tab toward the top of the page: ![settings tab](https://cloud.githubusercontent.com/assets/6520345/17564907/fc20986a-5ee9-11e6-8e7f-abc19c482a7b.png)
  * Find the repository name section and change it to `<username>.github.io` ![change repo name](https://cloud.githubusercontent.com/assets/6520345/17564950/2a69081a-5eea-11e6-8d17-8017954d8ad7.png)
  * Click the rename button.

4. Go to the website `<username>.github.io`!  You have a web presence now!! It's not perfect, but it will be a work in progress over the whole course and it's an excellent start! If you want to change the content, you're going to need a copy on your own computer to edit and improve.

5. Click the clone or download button and copy the "clone URL."

  ![clone button](https://cloud.githubusercontent.com/assets/6520345/17565250/87ec41b8-5eeb-11e6-8fc8-280aa6e14611.png)

  ![clone url](https://cloud.githubusercontent.com/assets/6520345/17565297/bc8e85ca-5eeb-11e6-870d-3029f9f7ed5b.png)

6. On your own computer, make a `wdi` directory in your home folder (`~`). This is where you will put all your work from this class. You can complete this in one command:
  ```
  ➜ mkdir ~/wdi
  ```

7. Use the "clone URL" to clone the repo onto your local machine. Make sure you're in your `~/wdi` directory before you clone!

  ```zsh
  ➜  cd ~/wdi
  ➜  git clone <clone-url>
  ```

8. Change directories into the repo you just cloned (in this example, `<username>.github.io`).

  ```zsh
  ➜  cd <username>.github.io
  ```

6. Open this project in Atom.

  ```zsh
  atom .
  ```

1. Back in Atom, open `index.html`. Take a moment to read through index.html and answer these questions for yourself:
  *
  <details>
    <summary>How many stylesheets does this webpage currently have? Where in the project can they be found and edited?</summary>
    <p>There are two stylesheets, `normalize.css` and `main.css`. `normalize.css` is in the `vendor/css` folder because it's a file developed by somebody else (a vendor) and you won't be editing it. `main.css` is in the `assets/css` folder and is the custom styling that you'll spend time adjusting.</p>
  </details>
  *  
  <details>
    <summary>In the `<head>` element, change the `<title>` of the page. Where can you observe the impact of this change?</summary>
    <p>On the tab in the browser, your site will display a new name. It used to be "First Training."</p>
  </details>
  *
  <details>
    <summary>If you were to write some Javascript to handle events on this page, what file would be the correct place to write that code?</summary>
    <p>You'd want to write your custom JS in the `assets/js/app.js` file. Once this file grows big enough you might want to create new JS files in the `assets/js` folder.</p>
  </details>

1. In the `<body>` of the document, replace the `<h1>` tag text with your name and add an image (or gif) of your liking using the `<img>` tag.

1. Open the `index.html` file in Chrome to see what it looks like, and continue editing your site locally. Work on the structure of your site for the rest of today. We'll finish integrating with Github tomorrow.

### Tuesday training

1. Now that you've changed the repo, it's time to commit your changes. Back in your terminal, type

  ```zsh
  ➜  git status
  ```
  This shows you a list of the files that you modified, created, or deleted. Notice that they are listed as _"untracked"_.

1. Now you're ready to `add` your changes. We generally do this file by file to be careful:
  ```
  ➜  git add index.html
  ```

  But if we're lazy and confident that we want to keep all our changes, we can use the "sledgehammer" approach (of adding everything all at once):
  ```
  ➜  git add .
  ```

  Now enter `git status`. Notice that your new file has gone from _"untracked"_ to _"Changes to be committed"_.

1. Next step is committing. Type the following:

  ```
  ➜  git commit -m "first edits to index.html"
  ```
  Now enter `git status` again. Notice that the new status is _"Your branch is ahead of 'origin/master' by 1 commit"_. This indicates that your the version of the repo on your computer (aka the __local__ version) includes your changes but the version hosted by GitHub (aka the __remote__ version) does not.

1. To get your changes on to the remote version of the repo, type

  ```
  ➜  git push origin master
  ```
>***Note:*** *`origin` is the given name of the remote repository hosted on GitHub. `master` is the name of the main branch within the repository. (Typically `master` is the branch you update when you're ready to publish changes to the world.)*

  Now `git status` will tell you that _"Your branch is up-to-date with 'origin/master"__ __!!!__

1. Visit `<username>.github.io` to see the latest version of your website!

1. Continue editing your site, `commit`ing changes locally, and `push`ing to Github at least three times, adding different features every time, to improve your site and practice this Git workflow. You should finish making those edits and using `commit` and `push` at least 3 times before lunch. After lunch, we'll continue working on our sites, adding more styling, finishing the "Contact me" and "My work" sections, and updating the README.md file by the end of the day.
