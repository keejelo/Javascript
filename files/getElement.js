//----------------------------------------------------------------------------------------------------
// GetElement - combined shorthand for .querySelector() and .querySelectorAll()
// Version: 0.5
// Created by: keejelo
// Year: 2010
//----------------------------------------------------------------------------------------------------
// Syntax: getEl(selector, parentElem);  // <-- if parentElem not used then default to: document
//----------------------------------------------------------------------------------------------------
var getEl = function(selector, parentElem)
{
    // ** Clean string before working with it, trim leading and trailing spaces
    selector = selector.replace(/^\s+|\s+$/g, '');
    
    // ** If string starts with # (hash) element id
    if(selector.indexOf('#') != -1)
    {
        // ** If string contains a space or comma
        if(selector.indexOf(' ') != -1 || selector.indexOf(',') != -1)
        {
            // ** Check if element exist before returning it
            if((parentElem||document).querySelectorAll(selector).length > 0)
            {
                return (parentElem||document).querySelectorAll(selector);
            }
        }
        else
        {
            // ** Get element with specified id, only
            return (parentElem||document).querySelector(selector);
        }
    }
    else
    {
        // ** Check if element exist before returning it
        if((parentElem||document).querySelectorAll(selector).length > 0)
        {
            return (parentElem||document).querySelectorAll(selector);
        }
    };
    
    return null;
};
//----------------------------------------------------------------------------------------------------
// ** END: GetElement
//----------------------------------------------------------------------------------------------------
