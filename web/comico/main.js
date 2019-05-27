/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

/**
 * Listens for the app restarting then re-creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 */
chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});

/**
 * Creates the window for the application.
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
function runApp() {
  chrome.app.window.create('scan.html', {
  	id: "scan-web-window",
    innerBounds: {
      'width': 400,
      'height': 665,
      'minWidth': 370,
      'minHeight': 600,
      'maxWidth': 370,
      'maxHeight': 600
    },
	frame: {
		'color': '#e1306c'
    }
  });
}
