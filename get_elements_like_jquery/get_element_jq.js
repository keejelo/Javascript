//-------------------------------------------------------------------------------------
// Get elements similar to jQuery with dollarsigns ($ and $$), with chaining ability
// Version: 1.0
// Created by: keejelo
// Year: 2021
//-------------------------------------------------------------------------------------
// Syntax:
// One dollar ($) returns one element, or the first node in a nodelist
// var x = $('div');
//
// Two dollars ($$) returns a nodelist, all the elements that match selector
// var x = $$('div');
//
//-------------------------------------------------------------------------------------
// ** Extend HTMLElement prototype
HTMLElement.prototype.$ = function(selector)
{
    return this.querySelector(selector);
};
HTMLElement.prototype.$$ = function(selector)
{
    return this.querySelectorAll(selector);
};

// ** Create function for when parent is: document
var $ = function(selector)
{
    return document.querySelector(selector);
};
var $$ = function(selector)
{
    return document.querySelectorAll(selector);
};

//-------------------------------------------------------------------------------------

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
