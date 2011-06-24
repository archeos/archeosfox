archeosfox.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ archeosfox.showFirefoxContextMenu(e); }, false);
};

archeosfox.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-archeosfox").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { archeosfox.onFirefoxLoad(); }, false);
