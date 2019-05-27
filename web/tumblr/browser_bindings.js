/**
 * Bindings that depend on the particular collection of webviews in browser.html
 *
 * @see https://developer.chrome.com/apps/tags/webview#method-setUserAgentOverride
 */
var bindings = {
  'android': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/73.0.3683.103 Mobile/13B143 Safari/601.1.46'  
};

window.addEventListener('load', function(e) {
  for (var key in bindings) {
    document.querySelector('webview[data-name="' + key + '"]').
        setUserAgentOverride(bindings[key]);
  }
});
