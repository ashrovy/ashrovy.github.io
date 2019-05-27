/**
 * Bindings that depend on the particular collection of webviews in browser.html
 *
 * @see https://developer.chrome.com/apps/tags/webview#method-setUserAgentOverride
 */
var bindings = {
  'iPhone': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'  
};

window.addEventListener('load', function(e) {
  for (var key in bindings) {
    document.querySelector('iframe[data-name="' + key + '"]').
        setUserAgentOverride(bindings[key]);
  }
});
