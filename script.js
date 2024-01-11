var button = document.getElementById('button');
var tweet = document.getElementById('tweet');
var closeBtn = document.getElementById('close');
var input = document.getElementById('input');

var isOpen = false;

button.addEventListener('click', function(e) {
    console.log(e.target.children);
    if (e.target.children.length > 0 && !isOpen) {
        button.className = "button open-animation";
        closeBtn.className = "close close-show";
        input.className = "input close-show";
        tweet.className = "tweet tweet-open";

        button.style.transitionDelay = "0.3s";
        closeBtn.style.transitionDelay = "0.3s";
        input.style.transitionDelay = "0.3s";
        tweet.style.transitionDelay = "0.3s";

        input.focus();
        isOpen = true;
    }
});

closeBtn.addEventListener('click', function(e) {
    console.log(!e.target.children);
    if (e.target.children.length === 0 && isOpen) {
        button.className = "button close-animation";
        closeBtn.className = "close close-hide";
        input.className = "input close-hide";
        tweet.className = "tweet tweet-hide";

        button.style.transitionDelay = "0.3s";
        closeBtn.style.transitionDelay = "0.3s";
        input.style.transitionDelay = "0.3s";
        tweet.style.transitionDelay = "0.3s";

        isOpen = false;
    }
})

tweet.addEventListener('click', function(e) {
    closeBtn.className = "close close-hide";
    input.className = "input close-hide";
    tweet.className = "tweet tweet-hide";
    button.className = "button close-animation tweet-animation";
    
    button.style.transitionDelay = "0s";
    closeBtn.style.transitionDelay = "0s";
    input.style.transitionDelay = "0s";
    tweet.style.transitionDelay = "0s";
    
    input.value = "";
    isOpen = false;
})