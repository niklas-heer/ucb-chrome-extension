// Generated by CoffeeScript 1.6.3
(function(){var e;$.rloader([{src:chrome.extension.getURL("vendors/bootstrap/css/bootstrap.min.css")}]);$.rloader([{src:chrome.extension.getURL("vendors/bootstrap/css/bootstrap-theme.min.css")}]);$.rloader([{src:chrome.extension.getURL("vendors/bootstrap/js/bootstrap.min.js")}]);$.rloader([{src:chrome.extension.getURL("vendors/jquery.xml2json.js")}]);$.rloader([{src:chrome.extension.getURL("css/main.css")}]);$.rloader([{src:chrome.extension.getURL("css/icons.css")}]);e=localStorage.fav_theme;switch(e){case"simple":$.rloader([{src:chrome.extension.getURL("css/simple.css")}]);break;case"flat":$.rloader([{src:chrome.extension.getURL("css/flat.css")}]);break;default:$.rloader([{src:chrome.extension.getURL("css/classic.css")}])}}).call(this);