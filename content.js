// Find the main script tag
var mainScript = document.querySelector('script[src^="/static/js/main."]');

// Check if the main script tag is found
if (mainScript) {
  // Get the source URL of the main script tag
  var src = mainScript.getAttribute('src');

  // Check if the source URL matches the expected format
  if (/\/main\.[a-zA-Z0-9]+\.bundle\.(js)$/.test(src)) {
    // Remove the integrity and crossorigin attributes
    mainScript.removeAttribute('integrity');
    mainScript.removeAttribute('crossorigin');
  }
}