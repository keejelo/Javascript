Funtion that fades in or out a HTML element.

Run example:

https://keejelo.github.io/Javascript/fade/fade_example.html

<pre>
<code>
//-----------------------------------------------------------------------
// ** Fade in/out - keejelo 2021
//-----------------------------------------------------------------------
// Parameters:
// @el  : element
// @dir : direction (true = fade out | false = fade in)
// @fn  : function to run after fading has finished (optional)
// @spd : animation speed (default = 40)
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
</code>
</pre>
