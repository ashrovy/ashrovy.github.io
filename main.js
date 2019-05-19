/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 500;
  var height = 300;

  // chrome.app.window.create('index.html', {
  //   id: "helloWorldID",
  //   innerBounds: {
  //     width: width,
  //     height: height,
  //     left: Math.round((screenWidth-width)/2),
  //     top: Math.round((screenHeight-height)/2)
  //   }
  // });
  chrome.app.window.create('index.html', {
    innerBounds: {
      width: 950,
      height: 950,
      minWidth: 350,
      minHeight: 600,
      maxWidth: 350,
      maxHeight: 600
    }, frame : {
      'color': '#1769ff'
    }
  })
});
