//-------------------------------------------------
// ** Fade in/out
//-------------------------------------------------
// Parameters:
// @el  : element
// @dir : true = fade out | false = fade in
// @spd : animation speed (default = 40)
//-------------------------------------------------
var fade = function(el, dir, spd)
{
    var n;
    (dir) ? n = 10 : n = 0;
    var t = setInterval(function()
    {
        (dir) ? n-- : n++;
        el.style.opacity = n / 10;
        (!dir && n >= 10) || (dir && n <= 0) ? clearInterval(t) : null;
    }, spd || 40);
};
//-------------------------------------------------
// ** END: Fade in/out
//-------------------------------------------------
