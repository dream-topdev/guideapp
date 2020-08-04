window.onresize = doLayout;
var isLoading = false;
const pWidth = 737;
const pHeight = 539;

onload = function() {
  var webview = document.querySelector('iframe');
  doLayout();

  
  webview.addEventListener('close', handleExit);

  // Test for the presence of the experimental <webview> zoom and find APIs.
};


function doLayout() {
  var webview = document.querySelector('iframe');
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  var webviewWidth = windowWidth;
  var webviewHeight = windowHeight;

  var ratio0 = windowWidth / pWidth;
  var ratio1 = windowHeight / pHeight;
  var ratio = Math.min(ratio0, ratio1);
  webview.style = 'transform: scale(' + ratio + ')';
  webview.style.width = '737px';
  webview.style.height = '539px';
  webview.style.position = "absolute";
  webview.style.left = ((windowWidth - pWidth) / 2) + "px";
  webview.style.top = ((windowHeight - pHeight) / 2) + "px";
}

function handleExit(event) {
  console.log(event.type);
  document.body.classList.add('exited');
  if (event.type == 'abnormal') {
    document.body.classList.add('crashed');
  } else if (event.type == 'killed') {
    document.body.classList.add('killed');
  }
}
