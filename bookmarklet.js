javascript:(function(){
  var iframe = document.createElement('iframe');
  iframe.src = 'https://cdn.discordapp.com/attachments/1350511873405223014/1353350649567248394/togif.gif?ex=680b8582&is=680a3402&hm=a74dc8c9aabd6bb526c71f9ea4ab285aa6f4a4007f8e5384170a88df967e9a04&';
  iframe.style.position = 'fixed';
  iframe.style.top = 0;
  iframe.style.left = 0;
  iframe.style.width = '100vw';
  iframe.style.height = '100vh';
  iframe.style.zIndex = 999999;
  iframe.style.border = 'none';
  iframe.allow = 'fullscreen';
  iframe.onload = function() {
    iframe.contentWindow.document.body.style.backgroundColor = 'black';
  };
  document.body.appendChild(iframe);
})();
