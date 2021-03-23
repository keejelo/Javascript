//----------------------------------------------------------------------------------------------------
// GetElement - combined shorthand for document.querySelector() and document.querySelectorAll()
// Version: 1.10
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
var getEl = function(s,o)
{
    // Trim leading and trailing spaces from selector string before we use it
    s = s.replace(/^\s+|\s+$/g, '');

    // If selector string contains a space or comma, then we know there are more elements in string
    if(s.indexOf(' ') != -1 || s.indexOf(',') != -1)
    {
        if((o||document).querySelectorAll(s).length > 0)
        {
            return (o||document).querySelectorAll(s);
        }
    }
    else
    {
        // Only one element in string
        return (o||document).querySelector(s);
    }

    // No matching element selection found
    return null;
};
//----------------------------------------------------------------------------------------------------
// END: GetElement
//----------------------------------------------------------------------------------------------------
