//----------------------------------------------------------------------------------------------------
// GetElement - combined shorthand for .querySelector() and .querySelectorAll()
// Version: 1.01
// Created by: keejelo
// Year: 2010
//----------------------------------------------------------------------------------------------------
// Syntax: getEl(selectors, parentElem);  // <-- if parentElem not used then defaults to: document
//
// Return value:
// Returns either a NodeList containing all matching element nodes, one single element if using '#id'
// or  null  if no matching element is found.
//----------------------------------------------------------------------------------------------------
var getEl = function(s, p)
{
    s = s.replace(/^\s+|\s+$/g, '');
    
    var a = (p || document).querySelectorAll(s);
    var b = (p || document).querySelector(s);
    
    if(s.indexOf('#') != -1)
    {
        if(s.indexOf(' ') != -1 || s.indexOf(',') != -1)
        {
            if(a.length > 0)
            {
                return a;
            }  
        }
        else
        {
            return b;
        }
    }
    else
    {
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
