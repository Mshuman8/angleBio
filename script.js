console.log("Is this connected")

const hungryButton = document.querySelector("#hungryButton")
const playButton = document.querySelector("#playButton")
const bathroomButton = document.querySelector("#bathroomButton")
const statusBar = document.querySelector("#status")
const statusPic = document.querySelector('#statusPic')
const buyLink = document.querySelector('#wantToBuy')
let eat = 0
let play = 0

hungryButton.addEventListener('click', (e) => {
    // checking to see if the button is working
    console.log("Button pressed")
    // Adding one and storing it to the counter "eat" so that I can keep track of how many times they are feeding Angle
    eat += 1
    // print(eat)
    // If they haven't pressed feed more than 2 times then change status bar, show link, show picture
    if (eat < 3) {
        console.log("still feed.")
        statusBar.innerHTML = "Yay! Time for food!"
        // Don't know where to put the dimensions of the picture that goes with the button.  Tried in CSS and also in the line below that goes with the pictures and its source. 
        buyLink.innerHTML = '<a href="https://www.amazon.com/gp/product/B000XKCCV2/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"> Buy me some food?</a>'
        statusPic.innerHTML = '<img src="angleHungry2.JPG" style="transform:rotate(90deg)">'
    } else {
        statusBar.innerHTML = "Thanks for so much food! I'm getting bored.  Can we do something else?"
        buyLink.innerHTML = '<a href="https://www.amazon.com/gp/product/B000XKCCV2/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"> BUY ME SOME FOOD ALREADY!</a>'
    }
})

playButton.addEventListener('click', (e) => {
    console.log("Pressed play button")
    play += 1
    // print(play)
    if (play < 5) {
        statusBar.innerHTML = "I love playing!"
        buyLink.innerHTML = '<a href="https://www.amazon.com/Colorful-Flexible-Disposabl-Drinking-Straws/dp/B00SSZENFW/ref=sr_1_12?keywords=plastic+straw&qid=1556411644&s=gateway&sr=8-12">These are my favorite toys</a>'
        statusPic.innerHTML = '<img src="anglePlay.JPG" style="transform:rotate(180deg)">'
    } else {
        statusBar.innerHTML = "Thanks for playing with me! Can we do something else?"
        buyLink.innerHTML = '<a href="https://www.amazon.com/Colorful-Flexible-Disposabl-Drinking-Straws/dp/B00SSZENFW/ref=sr_1_12?keywords=plastic+straw&qid=1556411644&s=gateway&sr=8-12">These are my favorite toys</a>'
    }
})

bathroomButton.addEventListener('click', (e) => {
    console.log("Pressed Bathroom button")
    statusBar.innerHTML = "I HAVE TO GO TO THE BATHROOM!"
    buyLink.innerHTML = '<a href="https://www.amazon.com/gp/product/B00H3R3JYW/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">Can you buy me some more litter?</a>'
    statusPic.innerHTML = '<img src="angleBathroom.JPG" style="transform:rotate(90deg)">'
})