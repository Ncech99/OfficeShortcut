chrome.action.onClicked.addListener(function(){
    chrome.windows.create({
      incognito: true,
      url:("https://login.microsoftonline.com/")
    });

});