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
var getEl = function(s,p)
{
    s = s.replace(/^\s+|\s+$/g, '');
    if( s.indexOf('#') != -1 && (s.indexOf(' ') == -1 && s.indexOf(',') == -1) )
    {
        return (p || document).querySelector(s);
    }
    else
    {
        var a = (p || document).querySelectorAll(s);
        if(a.length > 0)
        {
            return a;
        }
    };
    return null;
};
//----------------------------------------------------------------------------------------------------
// END: GetElement
//----------------------------------------------------------------------------------------------------
