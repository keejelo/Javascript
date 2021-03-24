//----------------------------------------------------------------------------------------------------
// GetElement - shorthand for .querySelectorAll()
// Version: 0.1
// Created by: keejelo
// Year: 2010
//----------------------------------------------------------------------------------------------------
// Syntax: getEl(selectors, parent);  // <-- if parent not used then default is: document
//----------------------------------------------------------------------------------------------------
var getEl = function(selectors, elem)
{
    if((elem||document).querySelectorAll(selectors).length > 0)
    {
        return (elem||document).querySelectorAll(selectors);
    }
    return null;
};
//----------------------------------------------------------------------------------------------------
// END: GetElement
//----------------------------------------------------------------------------------------------------
