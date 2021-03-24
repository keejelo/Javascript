//----------------------------------------------------------------------------------------------------
// GetElement - combined shorthand for .querySelector() and .querySelectorAll()
// Version: 0.5
// Created by: keejelo
// Year: 2010
//----------------------------------------------------------------------------------------------------
// Syntax: getEl(selectors, parentElem);  // <-- if parentElem not used then defaults to: document
//
// Return value:
// Returns either a NodeList containing all matching element nodes, one single element if using '#id'
// or  null  if no matching element is found.
//----------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------
// ** GetElement
//----------------------------------------------------------------------------------------------------
var getEl = function(selectors, parentElem)
{
    // ** Clean string before working with it, trim leading and trailing spaces
    selectors = selectors.replace(/^\s+|\s+$/g, '');

    // ** If string starts with # (hash) element id
    if(selectors.indexOf('#') != -1)
    {
        // ** If string contains a space or comma
        if(selectors.indexOf(' ') != -1 || selectors.indexOf(',') != -1)
        {
            // ** Check if element exist before returning it
            if((parentElem||document).querySelectorAll(selectors).length > 0)
            {
                return (parentElem||document).querySelectorAll(selectors);
            }
        }
        else
        {
            // ** Get element with specified id, only
            return (parentElem||document).querySelector(selectors);
        }
    }
    else
    {
        // ** Check if element exist before returning it
        if((parentElem||document).querySelectorAll(selectors).length > 0)
        {
            return (parentElem||document).querySelectorAll(selectors);
        }
    };
    
    return null;
};
//----------------------------------------------------------------------------------------------------
// ** END: GetElement
//----------------------------------------------------------------------------------------------------
