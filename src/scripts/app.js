import './components/slider';
import stickyClassChange from './components/sticky';
import ConfettiGenerator from "confetti-js";
import VanillaTilt from "vanilla-tilt";
import LazyLoad from "vanilla-lazyload";

var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});

const themeSwitcher = document.getElementsByClassName('theme');

for (var i = 0; i < themeSwitcher.length; i++) {

  themeSwitcher[i].addEventListener('click', function (event) {
    document.body.setAttribute('data-theme', this.value)
  })
}

if (document.getElementById('confetti')) {

  var confettiSettings = {
    "target": "confetti",
    "max": "300",
    "size": "1.5",
    "animate": true,
    "props":
      ["circle", "square"],
    "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
    "clock": "10",
    "rotate": false,
    "width": "1000",
    "height": "1000",
    "start_from_edge": false,
    "respawn": true
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

}

const switchElement = document.querySelector('.switch');

if (switchElement){
  stickyClassChange(switchElement, document.querySelector('.intro-bg'), document.querySelector('.observer'))
}
