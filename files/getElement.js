//----------------------------------------------------------------------------------------------------
// GetElement - combined shorthand for document.querySelector() and document.querySelectorAll()
// Version: 1.09
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

    // If string starts with # (hash) id
    if(s.indexOf('#') != -1)
    {
        // If selector string contains a space then we know there are more elements
        if(s.indexOf(' ') != -1)
        {                                     // The below assumes that string starts with hash '#'
            var id = s.split(' ')[0];         // Get first part of string before first space ' '
            s = s.replace(id, '');            // Get second half of string by removing '#id'
            s = s.replace(/^\s+|\s+$/g, '');  // Trim string of leading and trailing spaces (again)

            // Check if element exist in DOM
            if((o||document).querySelector(id).querySelectorAll(s).length > 0)
            {
                return (o||document).querySelector(id).querySelectorAll(s);
            }
        }
        else
        {
            // Since an id should be unique, there should be only one element with that id
            return (o||document).querySelector(s);
        }
    }
    else
    {
        // Since string did NOT start with # (hash) id, we search for native DOM elements
        if((o||document).querySelectorAll(s).length > 0)
        {
            return (o||document).querySelectorAll(s);
        }
    };

    // No matching element selection found
    return null;
};
//----------------------------------------------------------------------------------------------------
// END: GetElement
//----------------------------------------------------------------------------------------------------
