// TODO Idea: make command line mystery hunt etc.
console.log("You found the console? Wow, somebody is becoming a nerd like me <3");
const gifs = [
    "https://media.giphy.com/media/xTiTnmTVjIRxoiPs9q/giphy.gif",
    "https://media.giphy.com/media/QX81mZCxbGlqFtxqYn/giphy.gif",
    "https://media.giphy.com/media/lY9W6uLDcs09i/giphy.gif",
    "https://media.giphy.com/media/U7EK2vwXv20oGmt4Ek/giphy.gif",
    "https://media.giphy.com/media/IgdD5hu1ZglQCp1TwP/giphy.gif",
    "https://media.giphy.com/media/H4E3bSFNDeiooIFy1o/giphy.gif",
    "https://media.giphy.com/media/YOYrc49H7XWmpXptTw/giphy.gif",
    "https://media.giphy.com/media/znmviLNWhS4DvOU6bH/giphy.gif",
    "https://media.giphy.com/media/MEosAJHHzF8DjpIFwo/giphy.gif",
    "https://media.giphy.com/media/lkdFhk3UInK31XzR25/giphy.gif",
    "https://c.tenor.com/amYyQ1FWfKIAAAAC/cat-dog.gif",
    "https://c.tenor.com/4n_3QWM5uNUAAAAC/capoo-dogdog-capoo-and-dogdog.gif",
    "https://c.tenor.com/VgS9ldmKbmUAAAAC/cartoon-cute.gif",
    "https://c.tenor.com/nuGwB5w0-sgAAAAi/cute-animals.gif"
]
const compliments = [
    "Looking great today Cutie!",
    "Hey Cutie <3",
    "Another fantastic day init Cutie?",
    "Hey CUTIE! Love ya",
    "Ya can't say I don't try ;)",
    "Pretty nice day to game with your bf... Just sayin",
    "Looking fantastic as always <3",
    "... Cute ;)",
    "Have fun out there Cutie",
    "Remember, sometimes you'll have that",
    "The most Cutie centric Home page, right here",
    "What are we feelin today Beautiful?",
    "HOW MUCH WOOD CAN A WOODCHUCK CHUCK IF A WOODCHUCK COULD CHUCK WOOD?!",
    "What are we thinking today Cutie?",
    "When in doubt, talk it out... or struggle like me",
    "Surprise Cutie!",
    "Surrrpriiise Shoooortyyy!!",
    "Never a dull day with ya around",
    "This is your invitation to call me sometime if I am not around <3",
    "Corgi Samurai is watching over you today <3",
    "Hey Cutie! Drink some water!",
    "Hyyyyydddraaaaattteee!!!",
    "Feeling adventurous today aren't we?",
    "Hey nerd <3",
    "I'm just sayin that it would be pretty epic to hydrate rn",
    "Special Cuties for the Cutie, served up hot!",
    "Cute break!",
    "Just what the doctor ordered!",
    "There is a super rare elephant picture in there somewhere <3",
    "You notice the giphy in the top right changes on refresh?",
];
setCompliment();
searchImage();
setCartoon();

function setCompliment() {
    const display = document.querySelector("#compliment");
    const compliment = getRandomElement(compliments);
    display.innerText = compliment;
}

function getRandomElement(array) {
    const rand = Math.round(Math.random() * (array.length - 1));
    return array[rand];
}

function searchImage() {
    const image = document.querySelector("#animal");
    const sources = [
        () => {
            // cats
            const url = "https://api.thecatapi.com/v1/images/search";
            fetch(url).then(response => response.json()).then(data => setImage(image, data[0].url))
            .catch(error => searchImage());
        },
        () => {
            // dogs
            const url = "https://dog.ceo/api/breeds/image/random";
            fetch(url).then(response => response.json()).then(data => setImage(image, data.message))
            .catch(error => searchImage());
        }
    ];
    const fetchAndSetImageURL = getRandomElement(sources);
    fetchAndSetImageURL(); 
}

function setImage(image, url) {
    image.setAttribute("src", url);
    resizeImage(image);
}

function resizeImage(image) {
    image.addEventListener("load", () => {
        w = image.naturalWidth;
        h = image.naturalHeight;
        const ar = w / h;
        h = 400;
        w = ar * h;
        image.width = w;
        image.height = h;
        image.classList.remove("loadingImage");
    });

}

function setCartoon() {
    const img = document.querySelector("#cartoon");
    img.setAttribute("src", getRandomElement(gifs));
}