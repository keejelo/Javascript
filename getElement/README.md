# Javascript getElement
Javascript getElement wrapper function, combined shorthand for
<code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">querySelector()</a></code> and 
<code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">querySelectorAll()</a></code>

<br />

## Syntax
<pre>
var x = getEl(selectors, parentElem);
</pre>

Parameter 1: <code>selectors</code> are CSS selectors for getting element
<br />
<br />
Parameter 2: <code>parentElem</code> is optional.<br />
If not used then it defaults to: <code>document</code>

<br />

## Return value
Returns either a <code>NodeList</code> containing all matching element nodes, or one single element if using <code>'#id'</code>,<br />
or <code>null</code> if no matching elements are found.
