# 03 - Password Generator | JavaScript
<!-- ### From Scratch &mdash; _create a web application!_
<br> -->

## Description

In this week's Challenge! I modified starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.The password can include special characters.

<!-- To create a responsive design this portfolio, I used some advanced CSS techniques, such as: 
* flexbox, 
* media queries,  
* CSS variables,
* Resets and Typography,
* Pseudo elements,
* Custom Forms,
* CSS selectors, and
* Variables.

To begin with, I used my sketch book to wireframe the flow of my application for the given **_User Story_** below. Here is a mockup of what it looked like:<br><br>
![Wireframe](./Assets/Images/WireFrame.PNG) 


**Note:** In liue of web applications to showcase at this point, I use placeholder images and names.  -->


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria [DONE]
WHEN prompted for password criteria
THEN I select which criteria to include in the password [DONE]
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters [DONE]
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters [DONE]
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected [DONE]
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria [DONE]
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page [DONE]
``` 

## Mock-Up

> The following image shows the proposed web application's appearance and functionality:

![password generator demo](./assets/images/03-javascript-homework-demo.png)


## My Work
<!-- I started with a blank page and reviewed the modules as I built my first prototype. I was near completion and had only the media queries to implement, where I learned the hard truth about the "mobile-first approach". At this point I had learned a lot from each example, especially the mini-project. So instead of working my existing code, I decided to start fresh - thanks to reset. I simply renamed my css to _OLD*, then >touch styles.css in terminal and started fresh. That is why you see some _OLD files. I decided to keep them here to show the painstaking progress that I have made. :) -->

### My Initial PseudoCode
```
    click
    const   pwIndexArray ["a"-"z", "A"-"Z", "0"-"9", specialChar]
                   index [0-25 | 26-51 | 52-61 | 62 to 69]
    var pWord
    prompt : choose length from list of [8 to 128]
        validate: no less than 8, no more than 128
        validate: Number(myNumber)
        set variable pwLength
    prompt : choose types from list of [lowerCase, upperCase, nums, spChars]
        validate: choose at lease 1
        validate: can choose more than 1
        set variable pwIndexRange
    defind function pGen(){
        var RAND call Math(pwIndexRange)
        pWord += pwIndexArray[RAND]
    }
    do {
        call pGen()
    } while (pWord.length < pwLength)

    output onto html : pWord

```

### Deployed Links

1. You can find the URL of my deployed application **here:** <br>[03-Password-Generator-JavaScript - link](https://dinozio-design.github.io/03-Password-Generator-JavaScript/)

2. You can find the URL of my GitHub repository that contains this code **here:** <br>[GitHub Repo - link](https://github.com/dinozio-design/03-Password-Generator-JavaScript)

### Image of my App
> The following image shows the proposed web application's appearance and functionality:

![password generator actual](./assets/images/03-javascript-homework-actual.png)

## References
I used files and resources provided by BCS : GitLab repo UTOR-VIRT-FSF-PT-04-2023-U-LOLC


- - -
### Authors Notes:<br>
_This README and accompanying repo have been brought to you by:_<br>
© Sam Azimi - 2023 CodeCamp Studen.<br> 
Confidential and Proprietary. All Rights Reserved.
