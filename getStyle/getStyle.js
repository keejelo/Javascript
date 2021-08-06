// ** Get computed style (xbrowser-legacy)
// @prop = need to be in quotes and 'camelCase'
var _getStyle = function(el, prop)
{
    return (typeof getComputedStyle !== 'undefined' ? getComputedStyle(el, null) : el.currentStyle)[prop];
};
