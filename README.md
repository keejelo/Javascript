# Javascript getElement wrapper function
Javascript getElement wrapper function, combined shorthand for <code>querySelector()</code> and <code>querySelectorAll()</code>

<br />

## Syntax
<pre>
var x = getEl(selectors, parentElem);
</pre>
Parameter <code>parentElem</code> is optional
If not used then it defaults to: document

<br />

## Return value
Returns either a <code>NodeList</code> containing all matching element nodes, one single element if using <code>'#id'</code>, or <code>null</code> if no matching elements are found.
