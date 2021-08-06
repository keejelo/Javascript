//---------------------------------------------------------------------------------------------------
// Get elements similar to jQuery with dollarsigns ($ and $$), with chaining ability
//---------------------------------------------------------------------------------------------------
// Syntax:
// One dollar ($) returns one element, or the first node in a nodelist
// var x = $('div');
//
// Two dollars ($$) returns a nodelist, all the elements that match selector
// var x = $$('div');
//
//---------------------------------------------------------------------------------------------------
// ** Extend HTMLElement prototype
HTMLElement.prototype.$ = function(s)
{
    return this.querySelector(s);
};
HTMLElement.prototype.$$ = function(s)
{
    return this.querySelectorAll(s);
};

// ** Create function for when parent is: document
var $ = function(s)
{
    return document.querySelector(s);
};
var $$ = function(s)
{
    return document.querySelectorAll(s);
};
//---------------------------------------------------------------------------------------------------

/*
// Example:

// ** Do some stuff after pageload
addEventListener('load', function()
{
    var div = $('div');
    
    var p = div.$('p');  // <-- chaining
    
    console.log(div);
    console.log(p);
});

*/
