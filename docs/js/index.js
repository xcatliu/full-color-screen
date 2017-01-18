(function() {
  var KEY_CODES = {
    SPACE: 32,
    ENTER: 13,
    H: 72,
    F: 70,
  };
  var COLORS = [
    {
      name: 'white',
      backgroundColor: 'white',
      foregroundColor: 'black',
    },
    {
      name: 'red',
      backgroundColor: 'red',
      foregroundColor: 'white',
    },
    {
      name: 'green',
      backgroundColor: 'green',
      foregroundColor: 'white',
    },
    {
      name: 'blue',
      backgroundColor: 'blue',
      foregroundColor: 'white',
    },
    {
      name: 'cyan',
      backgroundColor: 'cyan',
      foregroundColor: 'black',
    },
    {
      name: 'yellow',
      backgroundColor: 'yellow',
      foregroundColor: 'black',
    },
    {
      name: 'magenta',
      backgroundColor: 'magenta',
      foregroundColor: 'black',
    },
    {
      name: 'black',
      backgroundColor: 'black',
      foregroundColor: 'white',
    }
  ];
  var HIDE_HELP_CLASS = 'hide-help';
  var TOP_LEFT_CORNER_ID = 'top-left-corner';
  var TOP_RIGHT_CORNER_ID = 'top-right-corner';

  var colorIndex = 0;

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === KEY_CODES.SPACE || e.keyCode === KEY_CODES.ENTER) {
      renderNextColor();
    } else if (e.keyCode === KEY_CODES.H) {
      toggleHelp();
    } else if (e.keyCode === KEY_CODES.F) {
      toggleFullScreen();
    }
    console.log(e.keyCode);
  });

  document.addEventListener('click', function (e) {
    renderNextColor();
  });

  document.getElementById(TOP_LEFT_CORNER_ID).addEventListener('click', function (e) {
    toggleHelp();
    e.stopPropagation();
  });

  document.getElementById(TOP_RIGHT_CORNER_ID).addEventListener('click', function (e) {
    toggleFullScreen();
    e.stopPropagation();
  });

  function renderNextColor() {
    colorIndex = (colorIndex + 1) % COLORS.length;
    document.body.style.backgroundColor = COLORS[colorIndex].backgroundColor;
    document.body.style.color = COLORS[colorIndex].foregroundColor;
  }

  function toggleHelp() {
    if (document.body.classList.contains(HIDE_HELP_CLASS)) {
      document.body.classList.remove(HIDE_HELP_CLASS);
    } else {
      document.body.classList.add(HIDE_HELP_CLASS);
    }
  }

  // http://stackoverflow.com/a/10627148
  function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  }
})();
