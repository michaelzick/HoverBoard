# What does this do?: 
This plugin cycles through text, separates out each word from the spaces, and wraps them with html tags.

## How do I use it?
For each paragraph you want to run the plugin on, give it a class of "hoverBoard":

`<p class="hoverBoard">Hover over this text to see something cool.</p>`  
  
Then create the function call at the very bottom of the code:
  
`$('.hoverBoard').hoverBoard();`  

## CSS 3 creates the hover state and transitions:

`  
    body, html {margin:0;}

    body {font-size: 20px; color:black;}

    .hshift {   
    -webkit-transition:color .15s ease-in;
    -moz-transition:color .15s ease-in;  
    -o-transition:color .15s ease-in;  
    transition:color .15s ease-in;  
    }

    .hshift:hover {color:#58ACFA;}
`

Check out the [demo](http://jsfiddle.net/ZICKONEZERO/7JPy3/1/). 

### Requirements:
jQuery 1.7.2

### Supported Browsers:
Chrome  
Safari  
Firefox  
Opera  
IE 7 - 9