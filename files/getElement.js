//----------------------------------------------------------------------------------------------------
// GetElement - combined shorthand for .querySelector() and .querySelectorAll()
// Version: 1.1
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
// just be sure that if using $() then you cannot use jQuery $()      
// :)
//----------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------
// GetElement
//----------------------------------------------------------------------------------------------------
var getEl = function(s)
{
    // If string starts with # (hash) id
    if(s.indexOf('#') != -1)
    {        
        // Trim leading and trailing spaces from string before we use it
        s = s.replace(/^\s+|\s+$/g, '');

        // If string contains a space then we know there are more elements
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
            // Get the only element containing the specified id (id's should be unique)
            return document.querySelector(s);
        }
    }
    else
    {
        // Since string do NOT start with # (hash) id, then we search for DOM elements        
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
