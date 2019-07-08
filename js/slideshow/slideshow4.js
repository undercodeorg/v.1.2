var showed_box = 0;

function fNext() {
  showed_box += -390;

  if (showed_box < -1170) showed_box = 0;

  document.getElementById("sld").style.transform =
    "translateY(" + showed_box + "px)";
}

function fPrevious() {
  showed_box += 390;

  if (showed_box > 0) showed_box = -1170;

  document.getElementById("sld").style.transform =
    "translateY(" + showed_box + "px)";
}
