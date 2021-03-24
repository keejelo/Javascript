# Javascript getElement wrapper function
Javascript getElement wrapper function, combined shorthand for .querySelector() and .querySelectorAll()

Syntax:
<pre>
getEl(selectors, parentElem);

// if parentElem is not used then it defaults to: document
</pre>

Return value:<br />
Returns either a NodeList containing all matching element nodes, one single element if using '#id'<br />
or  null  if no matching elements are found.
