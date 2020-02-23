
## Installation

Run the command `npm i` to install important modules (p5, typescript, etc). Then write and run `npm start` to start the project to see it live in the browser.

***

## Pompeius

A Puzzle game we made, as a schoolproject, using typescript and the p5 library. Pictures are randomly picked and sliced that the player must stop within a frame. You are greeted with a main menu were you have to type a username and pick an avatar. Your name is later displayed besides the game and in a highscore-table when the game is over. The "slices" moves diagonally across the screen. On each level the number of slices increases, and so does the speed. You have 3 lives, if you lose all lives the game ends.

-This version Pompeius-2.0 has some small changes. I was trying to make different color themes. It runs but it´s not optimal. See known issues below. 

Known issues: 

    - Method for color theme is called from within gameManager but should actually be called from theme. 

    - Method is called every frame update.
    
    - Issues calling gameManager from other class. Stack limit reached.

//Annie

***

## Link to the repository on Github

[Repository](https://github.com/MS-load/Pompeius)

***
## Game Information
### The Objective: 
To pause the moving image withing a frame<br>
To get a high-score and complete all the levels<br>

### Game Commands:
* SpaceBar: pauses the image

### Game Challenges:
* The speed at which the image moves keeps increasing
* The number of segments the image is divide into keeps increasing 
* The timer keeps running

***

### Credit:
<ul>
    <li>All moving images from Unsplash </li>
    <li>Music
        <ul>
            <li>Pontus Tahir</li>
        </ul>
    </li>
    <li>Fonts
        <ul>
            <li>Google fonts: 'Quintessential'</li>
        </ul>
    </li>
</ul>

***
