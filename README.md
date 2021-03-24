# Javascript getElement wrapper function
Javascript getElement wrapper function, combined shorthand for .querySelector() and .querySelectorAll()

Syntax: getEl(selectors, parentElem);  // <-- if parentElem not used then defaults to: document

Return value:
Returns either a NodeList containing all matching element nodes, one single element if using '#id'
or  null  if no matching elements are found.
