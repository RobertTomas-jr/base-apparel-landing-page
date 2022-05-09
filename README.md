# Frontend Mentor - Base Apparel Coming Soon Master

This is a solution to the [Base Apparel landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
Hi. My name is Silvestre Tomas jr., aspiring to be a front end web developer.
This is another of frontend mentor challenge that I created "base-apparel landing page". I used some knowledges that i learned in front end web development. 

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly


### Screenshot

![](/images/base-apparel.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS/CSS 
- Grid
- Mobile-first workflow


### What I learned

```html
 I learned how to use the right element to structure this project.
```
```css/scss
$breakpoints: ("small": 23.5em,"medium": 40em);
@mixin breakpoints($size) {
 @media(min-width: map-get($breakpoints,$size)){
  @content;
  }
}
@include breakpoints(small){
  ...
}
sass partials
some javascript form validation
```

### Continued development

HTML/CSS/JS/SASS - 
These areas that I want to continue focusing on my future projects and still not completely comfortable with.


### Useful resources

- [css/js](https://www.developer.mozilla.org) - This helped me for CSS/HTML/JS. I really liked their pattern and will use it going forward.
- [css/js](https://www.w3schools.com) - This is an amazing website which helped me finally understand HTML/CSS/JS. I'd recommend it to anyone still learning this concept.
- [css/js](https://www.youtube.com) - This is an amazing website which helped me finally understand HTML/CSS/JS. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Silvestre S Tomas jr](https://silvestretomas-site.netlify.app)
- Frontend Mentor - [@RobertTomas-jr](https://www.frontendmentor.io/profile/@RobertTomas-jr)

## Acknowledgments

I'd like to thank Frontend Mentor for this kind of challenges for me/us to enhance my skills in front end web development. I'd like also to thank  developer.mozilla.org, w3schools.com for their online support in learning web development tools. And also those youtubers who gave time to teach/upload web development tutorials.

