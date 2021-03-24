//----------------------------------------------------------------------------------------------------
// GetElement - combined shorthand for querySelector() and querySelectorAll()
// Version: 0.1
// Created by: keejelo
// Year: 2021
//----------------------------------------------------------------------------------------------------
// Syntax: getEl(selectors, parentElem);  // <-- if parentElem not used then defaults to: document
//
// Return value:
// Returns either a NodeList containing all matching element nodes, one single element if using '#id'
// or  null  if no matching elements are found.
//----------------------------------------------------------------------------------------------------
var getEl = function(s, p)
{
    s = s.replace(/^\s+|\s+$/g, '');

    var a = (p || document).querySelector(s);
    var b = (p || document).querySelectorAll(s);

    if( s.indexOf('#') != -1 && (s.indexOf(' ') == -1 && s.indexOf(',') == -1) )
    {
        return a;
    }
    else
    {
        if(b.length > 0)
        {
            return b;
        }
    };
    
    return null;
};
//----------------------------------------------------------------------------------------------------
// END: GetElement
//----------------------------------------------------------------------------------------------------
