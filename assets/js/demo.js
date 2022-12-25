document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        dotColor: '#00ffff',
        lineColor: '#00ffff'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
