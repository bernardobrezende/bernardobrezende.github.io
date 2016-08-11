'use strict';

(function($d) {
  $d.getElementById('copyYear').innerText = new Date().getFullYear();
  var links = $d.querySelectorAll('#menu li a');
  links.forEach(function(l) {
    l.onclick = function(c) {
      makeTabActive(l.getAttribute('href'));
    }
  });
  var makeTabActive = function(tab) {
    links.forEach(function(f) {
      var href = f.getAttribute('href');
      if (href !== tab) {
        $d.querySelector(href).style.display = 'none';
        f.style.fontWeight = '';
      } else {
        f.style.fontWeight = 'bold';
        $d.querySelector(href).style.display = '';
      }
    });
  }
  makeTabActive('#about');
})(document);