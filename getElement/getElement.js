//----------------------------------------------------------------------------------------------------
// GetElement - shorthand for querySelectorAll()
// Version: 1.001
// Created by: keejelo
// Year: 2021
//----------------------------------------------------------------------------------------------------
// Syntax: getEl(selector, parentElem);  // <-- if parentElem not used then it defaults to: document
//
// Return value:
// Returns either a NodeList containing all matching element nodes, one single element if using:
// '#id' , 'html' , 'head' , 'title' , 'body'
//
// Returns null if no matching elements are found.
//----------------------------------------------------------------------------------------------------
var  getEl = getElement = function(s,p)
{
    s = s.replace(/^\s+|\s+$/g,'');

    if((s.indexOf('#') !== -1 
      ||s.indexOf('html') !== -1
      ||s.indexOf('head') !== -1
      ||s.indexOf('title') !== -1
      ||s.indexOf('body') !== -1 )
      && (s.indexOf(' ') === -1 && s.indexOf(',') === -1)
    )
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
