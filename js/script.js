/******************************************
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array :
 * quotes array contains 5 of my favorite quotes, 2 of which with 4 properties, 2 with 3 and 1 index with only 2 properties of quote and source. 
 * 
***/

let quotes = [
{
  quote:'Attend carefully to your posture. Quit drooping and hunching around. Speak your mind. Put your desires forward, as if you had a right to them—at least the same right as others. Walk tall and gaze forthrightly ahead. Dare to be dangerous. Encourage the serotonin to flow plentifully through the neural pathways desperate for its calming influence.',
  source:'Jordan B. Peterson',
  citation:'12 Rules for Life: An Antidote to Chaos',
  year:'2019',
  tag:'life advise'
},
{
  quote:'Don’t walk in front of me, I may not follow. Don’t walk behind me, I may not lead. Walk beside me and be my friend.',
  source:'Albert Camus',
  citation:'The Rebel',
  year:'1951'
},
{
  quote:'You miss 100% of the shots you don’t take.',
  source:'Wayne Gretzky',
  citation:'',
  year:''

},
{
  quote:"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
  source:'Michael Jordan',
  citation:'',
  year:'2015',
  tag:'sport'
},
{
  quote:'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.',
  source:'Amelia Earhart',
  citation:'',
  year:'1922'
}

];

/***
 * `getRandomQuote` function
 * using Math function, getRandomQuote function is returning a random quote/index from the quotes array and assigns it to randomQuote variable. 
***/
function getRandomQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //console.log(randomQuote);
  return randomQuote;
  
}


let r = () => Math.random() * 256 >> 0;
 /*** Function colorChange is generating a random RGB number, assigns it to randomColor,
 then returns it. the function will be called in printquote function so it will be run everytime the button is clicked. 
  ***/ 
function colorChange(para) {
  
    randomColor = document.body.style.backgroundColor = para;
    return randomColor;
}
/***
 * `printQuote` function
 * calling gerRandomQuote function and assigning it to a new varaiable, so we have easy access to it. html variable is then defined to insert P tags into our index.html. two if statements following, will determine if the quote index holds a citation or year property and if so, will concatenate the values to the end of html variable. at the end, we print the output using DOM. 
***/

function printQuote() {
  let color = `rgb(${r()}, ${r()}, ${r()})`;
    let selectedQuote = getRandomQuote (quotes);
    let html = `
    <p class="quote"> A random quote : ${selectedQuote.quote} </p>
    <p class="source"> quote source : ${selectedQuote.source} 
  `;

    if (selectedQuote.citation){
      html += `<span class="citation"> quote citation: ${selectedQuote.citation}  </span>`
    
    }  if (selectedQuote.year){
    html += `<span class="year"> quote year: ${selectedQuote.year} </span>`
    }  if (selectedQuote.tag){
    html += `<span class="tags"> # ${selectedQuote.tag} </span>`
    }
  html += `</p>`
    document.getElementById('quote-box').innerHTML = html; 
  
  colorChange(color);
  
}
//setInterval changes quote and background color by calling printQuote function every 10 seconds. 

setInterval(() => {
  printQuote();
}, 10000);


/***
 * click event listener for the print quote button
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
