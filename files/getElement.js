//----------------------------------------------------------------------------------------------------
// GetElement - combined shorthand for document.querySelector() and document.querySelectorAll()
// Version: 0.1
// Created by: keejelo
// Year: 2010
//----------------------------------------------------------------------------------------------------
//
// Syntax: getEl(selectors, parentNode);  // <-- if parentNode not used then default is: document
//
//
// Simple examples on how to use:
//
// var el = getEl('#myDiv');
// var el = getEl('.myClass');
// var el = getEl('div p.myClass');
// var el = getEl('div p span');
//
// var el = getEl('h3, div, span');  // <-- multiple selectors, separate each selector with a comma
//
// etc.
//
// ..or you could rename getEl() to $() (like jQuery) or any other character for even easier access.
// Just be sure that if using $() then you cannot use jQuery $() , or any other library that uses that
// character as a function or element selection. :)
//----------------------------------------------------------------------------------------------------
var getEl = function(s, pNode)
{
    return (pNode||document).querySelectorAll(s);
};
//----------------------------------------------------------------------------------------------------
// END: GetElement
//----------------------------------------------------------------------------------------------------
