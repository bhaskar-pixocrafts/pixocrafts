document.addEventListener("mousemove", function(e){
  magnetize('.magnetic', e);
});


function magnetize(el, e){
  var mX = e.pageX,
      mY = e.pageY;
  const items = document.querySelectorAll(el);
  
  [].forEach.call(items, function(item) {
    const customDist = item.getAttribute('dist') * 20 || 120;
    const centerX = item.offsetLeft + (item.clientWidth/2);
    const centerY = item.offsetTop + (item.clientHeight/2);

    var deltaX = Math.floor((centerX - mX)) * -0.45;
    var deltaY = Math.floor((centerY - mY)) * -0.45;

    var distance = calculateDistance(item, mX, mY);

    if(distance < customDist){
      TweenMax.to(item, 0.3, {y: deltaY, x: deltaX, scale:1.1});
      item.classList.add('magnet');
    }
    else {
      TweenMax.to(item, 0.45, {y: 0, x: 0, scale:1});
      item.classList.remove('magnet');
    }     
   });
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offsetLeft+(elem.clientWidth/2)), 2) + Math.pow(mouseY - (elem.offsetTop+(elem.clientHeight/2)), 2)));
}