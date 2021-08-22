//-----------------------------------------------------------------------
// ** Fade in/out - keejelo 2021
//-----------------------------------------------------------------------
// Parameters:
// @el  : element
// @dir : direction (true = fade out | false = fade in)
// @spd : animation speed (default = 40)
// @fn  : function to run after fading has finished (optional)
//-----------------------------------------------------------------------
var fade = function(el, dir, fn, spd)
{
    var n;
    (dir) ? n = 10 : n = 0;
    var t = setInterval(function()
    {
        (dir) ? n-- : n++;
        el.style.opacity = n / 10;
        if( (!dir && n >= 10) || (dir && n <= 0) )
        {
            clearInterval(t);
            if(typeof fn === 'function') { fn(); }
        }
    }, spd || 40);
};
//-----------------------------------------------------------------------
// ** END: Fade in/out
//-----------------------------------------------------------------------
