# Javascript getElement
Javascript getElement wrapper function, combined shorthand for
<code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">querySelector()</a></code> and 
<code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">querySelectorAll()</a></code>

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
