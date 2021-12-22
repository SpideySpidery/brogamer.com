// To the top 
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

// Nav Bar shrink
window.addEventListener("scroll", function() {
    var header = document.querySelector("nav")
    header.classList.toggle("sticky", window.scrollY > 0)
});

// Song and Tooltip
var Song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if (Song.paused) {
        Song.play();
        icon.src = "./Assets/Images/pause.png"
        document.getElementById("tooltip-text").innerHTML = "Pause";
    } else {
        Song.pause();
        icon.src = "./Assets/Images/play.png"
        document.getElementById("tooltip-text").innerHTML = "Play";
    }
};

// Easter Eggs Start -->

// Easter Egg A - a
var div_a = document.querySelector('#text-a');
var text_a = div_a.innerHTML;
var originalText_a = div_a.innerHTML;
var toggle_a = 'O';
div_a.addEventListener('click', function() {
    switch (toggle_a) {
        case 'O':
            div_a.innerHTML = text_a.toLowerCase();
            toggle_a = 'U';
            break;
        case 'U':
            div_a.innerHTML = text_a.toUpperCase();
            toggle_a = 'O';
            break;
    }

}, false)
// Easter Egg W - w
var div_w = document.querySelector('#text-w');
var text_w = div_w.innerHTML;
var originalText_w = div_w.innerHTML;
var toggle_w = 'O';
div_w.addEventListener('click', function() {
    switch (toggle_w) {
        case 'O':
            div_w.innerHTML = text_w.toLowerCase();
            toggle_w = 'U';
            break;
        case 'U':
            div_w.innerHTML = text_w.toUpperCase();
            toggle_w = 'O';
            break;
    }

}, false)
// Easter Egg I - i
var div_i = document.querySelector('#text-i');
var text_i = div_i.innerHTML;
var originalText_i = div_i.innerHTML;
var toggle_i = 'O';
div_i.addEventListener('click', function() {
    switch (toggle_i) {
        case 'O':
            div_i.innerHTML = text_i.toLowerCase();
            toggle_i = 'U';
            break;
        case 'U':
            div_i.innerHTML = text_i.toUpperCase();
            toggle_i = 'O';
            break;
    }

}, false)
// Easter Egg S - s
var div_s = document.querySelector('#text-s');
var text_s = div_s.innerHTML;
var originalText_s = div_s.innerHTML;
var toggle_s = 'O';
div_s.addEventListener('click', function() {
    switch (toggle_s) {
        case 'O':
            div_s.innerHTML = text_s.toLowerCase();
            toggle_s = 'U';
            break;
        case 'U':
            div_s.innerHTML = text_s.toUpperCase();
            toggle_s = 'O';
            break;
    }

}, false)
// Easter Egg H - h
var div_h = document.querySelector('#text-h');
var text_h = div_h.innerHTML;
var originalText_h = div_h.innerHTML;
var toggle_h = 'O';
div_h.addEventListener('click', function() {
    switch (toggle_h) {
        case 'O':
            div_h.innerHTML = text_h.toLowerCase();
            toggle_h = 'U';
            break;
        case 'U':
            div_h.innerHTML = text_h.toUpperCase();
            toggle_h = 'O';
            break;
    }

}, false)

// <-- Easter Eggs End

// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
});

// Parallax on home page
document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll('.layer').forEach(Layer => {
        const speed = Layer.getAttribute('data-speed')

        const x = (window.innerHeight - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
};

// NO
const fetchedLetter = document.getElementById('text-i');
var c = 0;
fetchedLetter.addEventListener('click', function() {
    c++;
    if (c === 5) {
        var PageCss = document.createElement("style");
        PageCss.type = "text/css";
        PageCss.innerHTML = "html{ animation: forwards flash 1s; } #text-i{ opacity: 0; user-select: none; pointer-events: none; }"
        document.body.appendChild(PageCss);
    }
})

const ButtonDown = document.getElementById('down');
var counter = 0;
ButtonDown.addEventListener('click', function() {
    counter++;
    var ButtonCss = document.createElement("style");
    ButtonCss.type = "text/css";
    ButtonCss.innerHTML = "h1, h3, a, .carousel .card, .the-about-book, .img-carousel .image, .feedback-input, .sub, .sq-ava, #tooltip-text{ transform: rotate(-180deg); } div.logo{ transform: rotateX(-180deg); } .about-text{ transform: rotateY(-180deg) }"
    document.body.appendChild(ButtonCss);
    if (counter === 2) {
        document.location.reload()
    }
})

// Cards swipe
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});

// Images swipe
$(".img-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});

//Typewriter effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class"wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; color: #fff; }"
    document.body.appendChild(css);
};

// Preloader
$('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
}) // Don't let the user scroll until the page is loaded!

$(window).on('load', function() {
    setTimeout(() => {
        $('#preloader-container').fadeOut('slow');
        document.getElementById('preloader').style.animationPlayState = 'paused';
        setTimeout(() => {
            var loadCss = document.createElement("style");
            loadCss.type = "text/css";
            loadCss.innerHTML = ".layer { animation: forwards revealOut 2s; } nav { height: 120px; top: 0; } .separator { transform: translateY(0); } #text-a, #text-w, #text-i, #text-s, #text-h { font-size: 200px; } .right-col { left: 0; }"
            document.body.appendChild(loadCss);
        }, 300);
        $('html, body').removeAttr('style') //After the page is loaded remove the style, and let the user scroll!
    }, 4000);
});
(function FewFacts() {
    document.getElementById('loadLetter').innerHTML = 'Loading';
    var facts = [
        'I\'m kinda a Discord Youtuber.',
        'There are a total of 4 easter eggs!',
        'Do you see that rotate button on the homepage?',
        'I Am Out Of Fun Facts Now!',
        'Beep Boop',
        'No U, wait YASSS U',
        'Error 404',
        'Beep Boop',
        'You Can Meet Me At My Dsc Server',
        'Hello again!',
        'Am an Pog',
        '👀',
        'Am out of Fun Facts now :(',
        'Please just turn off your autocorrect',
        '<i>Runs</i>',
        'Once upon a time...',
        'Hello darkness my old friend. I\'ve come to see you again.',
        'Pain',
        'You wish?',
        '<i>Laughs</i>',
        '<i>Dies</i>',
        'You didn\'t read the previous fact, right?',
        'Am out of Fun Facts now :(',
        'Am out of Fun Facts now :(',
        'Am out of Fun Facts now :(',
        'Am out of Fun Facts now :(',
        'Am out of Fun Facts now :(',
        'Am out of Fun Facts now :(',
        'Am out of Fun Facts now :(',
        'Never gonna give you up, Never gonna let you down',
        'Never gonna give you up, Never gonna let you down',
        'Ya\'ll hella sus',
        'Never gonna give you up, Never gonna let you down',
        'B U R N <i style="pointer-events: none;">evil laugh</i>',
        'Never gonna give you up, Never gonna let you down',
        'what is life?',
        'Say hi to Wumpus!',
        'Hey you! yes <i style="pointer-events: none;">YOU</i>. Wear a mask while going out!',
        'I just want to be happy.',
        'Never gonna give you up, Never gonna let you down',
        'Never gonna give you up, Never gonna let you down',
        'Never gonna give you up, Never gonna let you down',
        'Never gonna give you up, Never gonna let you down',
        'My Developer Is SpideySpidery',
        'My Developer Is SpideySpidery',
        'My Developer Is SpideySpidery',
        'My Developer Is SpideySpidery',
        'My Developer Is SpideySpidery',
    ]
    var randomFact = Math.floor(Math.random() * facts.length);
    if (facts[randomFact] === facts[0]) {
        document.getElementById('DidYouKnow').style.color = 'cyan';
    };
    document.getElementById('facts').innerHTML = facts[randomFact];
})();