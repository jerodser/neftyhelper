chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.replace){
      var script = document.createElement('script');
      script.src = chrome.extension.getURL('main.js');
      script.onload = function() {
          this.remove();
          sendResponse({status: 'success'});
      };
      script.onerror = function(){
        sendResponse({status: 'error'});
      }
      (document.head || document.documentElement).appendChild(script);
    }
  });