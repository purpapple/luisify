(function () {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://purpapple.github.io/luisify/';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.zIndex = '999999';
  iframe.style.border = 'none';
  iframe.allow = 'fullscreen';
  document.body.appendChild(iframe);
})();
