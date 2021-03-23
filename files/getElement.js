/*****************************************************************************************************
* GetElements - combined shorthand for .querySelector() and .querySelectorAll()
* Version: 1.0
* Created by: keejelo
* Year: 2020-2021
*****************************************************************************************************/


//----------------------------------------------------------------------------------------------------
// ** GetElements
//----------------------------------------------------------------------------------------------------
var getEl = function(str)
{
    // ** If string starts with # (hash) id
    if(str.indexOf('#') != -1)
    {        
        // ** Trim leading and trailing spaces from string before we use it
        str = str.replace(/^\s+|\s+$/g, '');

        // ** If string contains a space then we know there are more elements
        if(str.indexOf(' ') != -1)
        {                                         // The below assumes that string starts with hash '#'
            var idPart = str.split(' ')[0];       // Get first part of string before first space ' '
            str = str.replace(idPart, '');        // Get second half of string by removing '#idPart'
            str = str.replace(/^\s+|\s+$/g, '');  // Trim string of leading and trailing spaces (again)
            
            // ** Check if element exist in DOM, else return: null
            if(document.querySelector(idPart).querySelectorAll(str).length > 0)
            {
                return document.querySelector(idPart).querySelectorAll(str);
            }
        }
        else
        {
            // ** Get the only element containing the specified id (id's should be unique)
            return document.querySelector(str);
        }
    }
    else
    {
        // TODO: if parent is not document, then use element as parent:
        // return element.querySelectorAll(str);
        
        // ** Since string do NOT start with # (hash) id, then we search for DOM elements
        if(document.querySelectorAll(str).length > 0)
        {
            return document.querySelectorAll(str);
        }
    };
    
    // ** No matching element selection found
    return null;
};
//----------------------------------------------------------------------------------------------------
// ** END: GetElements
//----------------------------------------------------------------------------------------------------
