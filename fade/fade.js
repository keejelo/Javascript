//-------------------------------------------------
// ** Fade in/out
//-------------------------------------------------
// Parameters:
// @el : element
// @dir : false = fade in | true = fade out
// @speed : animation speed
//-------------------------------------------------
var fade = function(el, dir, speed)
{
    var n;
    (dir) ? n=10 : n=0;
    var t = setInterval(function()
    {
        (dir) ? n-- : n++;
        el.style.opacity = n / 10;
        (n >= 10) ? clearInterval(t) : null;
    }, speed || 40);
};
//-------------------------------------------------
// ** END: Fade in/out
//-------------------------------------------------
