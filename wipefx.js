// Wipe animation if you are coming from the launcher //
if (window.location.href.includes('launcher=true')) { 
  let wiper = document.createElement('div');
  wiper.style.cssText="z-index:50;background:black;width:100vw;height:100vh;position:fixed;bottom:0px;left:0px;right:0px;transition:height .3s cubic-bezier(0,.29,.23,.94);";
  wiper.id="wipe";
  document.body.appendChild(wiper);
  setTimeout(function(){wiper.style.height='0px'},2)
}
