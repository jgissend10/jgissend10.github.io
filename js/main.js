function RGB2Color(r,g,b)
{
  return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
}

function makeColorGradient(frequency1, frequency2, frequency3,
                     phase1, phase2, phase3,
                     center, width, i)
{
  if (center == undefined)   center = 128;
  if (width == undefined)    width = 127;

  var red = Math.sin(frequency1*i + phase1) * width + center;
  var grn = Math.sin(frequency2*i + phase2) * width + center;
  var blu = Math.sin(frequency3*i + phase3) * width + center;
  document.body.style.backgroundColor = RGB2Color(red,grn,blu)
}
