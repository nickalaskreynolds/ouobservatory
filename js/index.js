$(document).ready(function() {
  var container = $('.words'),
      words = $('.words li'),
      cursor = 0;

  var xDelay = 350,
      yDelay = 850,
      totalDelay = xDelay + yDelay;  

  function cycle() {
    var currentWidth = current().find('span').width(), 
        newWidth = next().find('span').width(),
        prevAll = next().prevAll(),
        top = 0;

    for (var i = 0; i < prevAll.length; i++) {
      top -= $(prevAll[i]).height();
    }

    var firstAnimation = {width: newWidth},
        secondAnimation = {'margin-top': top};

    var firstDelay = xDelay, secondDelay = yDelay;

    if (newWidth < currentWidth) {
      var t = firstAnimation;
      firstAnimation = secondAnimation;
      secondAnimation = t;

      firstDelay = yDelay;
      secondDelay = xDelay;
    }

    container.animate(firstAnimation, firstDelay, function() {
      container.animate(secondAnimation, secondDelay, function() {
        advanceCursor();

        setTimeout(cycle, getDelay());
      });
    });
  }

  function advanceCursor() { cursor = (cursor + 1) % words.length; }
  function current() { return $(words[cursor]); }
  function next() { return $(words[(cursor+1) % words.length]); }
  function getDelay() { return totalDelay + (current().find('span').text().length * 25); }

  container.width(current().find('span').width());
  setTimeout(cycle, getDelay());
});

$(document).ready(function() {
  var container = $('.liner'),
      words = $('.liner li'),
      cursor = 0;

  var xDelay = 350,
      yDelay = 1000,
      totalDelay = xDelay + yDelay;  

  function cycle() {
    var currentWidth = current().find('span').width(), 
        newWidth = next().find('span').width(),
        prevAll = next().prevAll(),
        top = 0;

    for (var i = 0; i < prevAll.length; i++) {
      top -= $(prevAll[i]).height();
    }

    var firstAnimation = {width: newWidth},
        secondAnimation = {'margin-top': top};

    var firstDelay = xDelay, secondDelay = yDelay;

    if (newWidth < currentWidth) {
      var t = firstAnimation;
      firstAnimation = secondAnimation;
      secondAnimation = t;

      firstDelay = yDelay;
      secondDelay = xDelay;
    }

    container.animate(firstAnimation, firstDelay, function() {
      container.animate(secondAnimation, secondDelay, function() {
        advanceCursor();

        setTimeout(cycle, getDelay());
      });
    });
  }

  function advanceCursor() { cursor = (cursor + 1) % words.length; }
  function current() { return $(words[cursor]); }
  function next() { return $(words[(cursor+1) % words.length]); }
  function getDelay() { return totalDelay + (current().find('span').text().length * 25); }

  container.width(current().find('span').width());
  setTimeout(cycle, getDelay());
});

$(document).ready(function() {
  var container = $('.linel'),
      words = $('.linel li'),
      cursor = 0;

  var xDelay = 350,
      yDelay = 1000,
      totalDelay = xDelay + yDelay;  

  function cycle() {
    var currentWidth = current().find('span').width(), 
        newWidth = next().find('span').width(),
        prevAll = next().prevAll(),
        top = 0;

    for (var i = 0; i < prevAll.length; i++) {
      top -= $(prevAll[i]).height();
    }

    var firstAnimation = {width: newWidth},
        secondAnimation = {'margin-top': top};

    var firstDelay = xDelay, secondDelay = yDelay;

    if (newWidth < currentWidth) {
      var t = firstAnimation;
      firstAnimation = secondAnimation;
      secondAnimation = t;

      firstDelay = yDelay;
      secondDelay = xDelay;
    }

    container.animate(firstAnimation, firstDelay, function() {
      container.animate(secondAnimation, secondDelay, function() {
        advanceCursor();

        setTimeout(cycle, getDelay());
      });
    });
  }

  function advanceCursor() { cursor = (cursor + 1) % words.length; }
  function current() { return $(words[cursor]); }
  function next() { return $(words[(cursor+1) % words.length]); }
  function getDelay() { return totalDelay + (current().find('span').text().length * 25); }

  container.width(current().find('span').width());
  setTimeout(cycle, getDelay());
});

$(document).ready(function() {
  var container = $('.linel2'),
      words = $('.linel2 li'),
      cursor = 0;

  var xDelay = 350,
      yDelay = 1000,
      totalDelay = xDelay + yDelay;  

  function cycle() {
    var currentWidth = current().find('span').width(), 
        newWidth = next().find('span').width(),
        prevAll = next().prevAll(),
        top = 0;

    for (var i = 0; i < prevAll.length; i++) {
      top -= $(prevAll[i]).height();
    }

    var firstAnimation = {width: newWidth},
        secondAnimation = {'margin-top': top};

    var firstDelay = xDelay, secondDelay = yDelay;

    if (newWidth < currentWidth) {
      var t = firstAnimation;
      firstAnimation = secondAnimation;
      secondAnimation = t;

      firstDelay = yDelay;
      secondDelay = xDelay;
    }

    container.animate(firstAnimation, firstDelay, function() {
      container.animate(secondAnimation, secondDelay, function() {
        advanceCursor();

        setTimeout(cycle, getDelay());
      });
    });
  }

  function advanceCursor() { cursor = (cursor + 1) % words.length; }
  function current() { return $(words[cursor]); }
  function next() { return $(words[(cursor+1) % words.length]); }
  function getDelay() { return totalDelay + (current().find('span').text().length * 25); }

  container.width(current().find('span').width());
  setTimeout(cycle, getDelay());
});

$(document).ready(function() {
  var container = $('.liner2'),
      words = $('.liner2 li'),
      cursor = 0;

  var xDelay = 350,
      yDelay = 1000,
      totalDelay = xDelay + yDelay;  

  function cycle() {
    var currentWidth = current().find('span').width(), 
        newWidth = next().find('span').width(),
        prevAll = next().prevAll(),
        top = 0;

    for (var i = 0; i < prevAll.length; i++) {
      top -= $(prevAll[i]).height();
    }

    var firstAnimation = {width: newWidth},
        secondAnimation = {'margin-top': top};

    var firstDelay = xDelay, secondDelay = yDelay;

    if (newWidth < currentWidth) {
      var t = firstAnimation;
      firstAnimation = secondAnimation;
      secondAnimation = t;

      firstDelay = yDelay;
      secondDelay = xDelay;
    }

    container.animate(firstAnimation, firstDelay, function() {
      container.animate(secondAnimation, secondDelay, function() {
        advanceCursor();

        setTimeout(cycle, getDelay());
      });
    });
  }

  function advanceCursor() { cursor = (cursor + 1) % words.length; }
  function current() { return $(words[cursor]); }
  function next() { return $(words[(cursor+1) % words.length]); }
  function getDelay() { return totalDelay + (current().find('span').text().length * 25); }

  container.width(current().find('span').width());
  setTimeout(cycle, getDelay());
});