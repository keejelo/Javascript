# Javascript getElement wrapper function
Javascript getElement wrapper function, combined shorthand for .querySelector() and .querySelectorAll()

## Syntax
<pre>
getEl(selectors, parentElem);
</pre>
If parentElem is not used then it defaults to: document

<br />
<br />

## Return value
Returns either a NodeList containing all matching element nodes, one single element if using '#id'<br />
or  null  if no matching elements are found.
