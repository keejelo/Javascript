//----------------------------------------------------------------------------------------------------
// GetElement - shorthand to get elements, like querySelector() and querySelectorAll()
// Version: 1.003
// Created by: keejelo
// Year: 2021
//----------------------------------------------------------------------------------------------------
// Syntax:
// var x = getEl(selector, parentElem);
// ..or the longer more descriptive one below, both do exactly the same thing..
// var x = getElement(selector, parentElem);
//
// If the second parameter "parentElem" is not used then it defaults to: document
//
// Return value:
// Returns either a NodeList containing all matching element nodes, or one single element if using:
// '#id' , 'html' , 'head' , 'title' , 'body' , and none of the mulitple-selector chars
//
// Returns null if no matching elements are found.
//----------------------------------------------------------------------------------------------------
var getEl = getElement = function(s,p)
{
    // ** Trim string whitespace
    s = s.replace(/^\s+|\s+$/g,'');

    // ** If single element only
    if( ( s.indexOf('#')     !== -1
       || s.indexOf('html')  !== -1
       || s.indexOf('head')  !== -1
       || s.indexOf('title') !== -1
       || s.indexOf('body')  !== -1
       ) 
       && ( s.indexOf(' ') === -1 
         && s.indexOf(',') === -1 
         && s.indexOf(':') === -1
         && s.indexOf('>') === -1
         && s.indexOf('~') === -1
       )
    )
    {
        return (p || document).querySelector(s);
    }
    // ** Else if list of elements
    else
    {
        var a = (p || document).querySelectorAll(s);
        if(a.length > 0)
        {
            return a;
        }
    };
    
    // ** If no element is found
    return null;
};
//----------------------------------------------------------------------------------------------------
// END: GetElement
//----------------------------------------------------------------------------------------------------
