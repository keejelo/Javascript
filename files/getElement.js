//----------------------------------------------------------------------------------------------------
// GetElement - combined shorthand for document.querySelector() and document.querySelectorAll()
// Version: 1.02
// Created by: keejelo
// Year: 2020-2021
//----------------------------------------------------------------------------------------------------
//
// Examples on how to use:
//
// var el = getEl('#myDiv');
// var el = getEl('div p.myClass');
// var el = getEl('div p span');
//
// etc.
//
// ..or you could replace getEl() to $() (like jQuery) or any other charachter for even easier access.
// Just be sure that if using $() then you cannot use jQuery $() , or any other library that uses that
// charachter as a function or element selection. :)
//----------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------
// GetElement
//----------------------------------------------------------------------------------------------------
var getEl = function(s)
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
            
            // Check if element exist in DOM, else return: null
            if(document.querySelector(id).querySelectorAll(s).length > 0)
            {
                return document.querySelector(id).querySelectorAll(s);
            }
        }
        else
        {
            // Since an id should be unique, there should be only one element with that id.
            // So get the only element containing the specified id.
            return document.querySelector(s);
        }
    }
    else
    {
        // Since string do NOT start with # (hash) id, then we search for native DOM elements
        if(document.querySelectorAll(s).length > 0)
        {
            return document.querySelectorAll(s);
        }
    };
    
    // No matching element selection found
    return null;
};
//----------------------------------------------------------------------------------------------------
// END: GetElement
//----------------------------------------------------------------------------------------------------
