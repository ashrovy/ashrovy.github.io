var CONTEXT_MENU_CONTENTS = {
  forSelection: [
    'Selection context menu'
  ],
  forLauncher : [
    'Launch Window "A"',
    'Launch Window "B"'
  ]
}
/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

chrome.runtime.onInstalled.addListener(function() {
  // When the app gets installed, set up the context menus
  setUpContextMenus();
});

chrome.contextMenus.onClicked.addListener(function() {
});
/**
 * Listens for the app restarting then re-creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 */
chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});

function setUpContextMenus() {
  CONTEXT_MENU_CONTENTS.forSelection.forEach(function(commandId) {
    chrome.contextMenus.create({
      type: "separator",
      id: 'sep1',
      contexts: ['selection']
    });
    chrome.contextMenus.create( {
      title: commandId + ' "%s"',
      id: commandId,
      contexts: ['selection']
    });
  });

  CONTEXT_MENU_CONTENTS.forLauncher.forEach(function(commandId, index) {
    chrome.contextMenus.create({
      title: commandId,
      id: 'launcher' + index,
      contexts: ['launcher']
    });
  });
}
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
      'minWidth': 350,
      'minHeight': 600,
      'maxWidth': 350,
      'maxHeight': 600

    },
  	frame: {
  		'color': '#ffffff'
      }
  });
}
