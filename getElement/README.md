# getEl()
Javascript wrapper function, shorthand for getting elements like <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">querySelectorAll()</a></code>

<br />

## Syntax
<pre>
var x = getEl(selector, parentElem);
</pre>

@parameter <code>selector</code> = <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">CSS selector</a> for getting elements.
<br /><br />
@parameter <code>parentElem</code> = optional, can be used to start element search from a DOM element. If not used then it defaults to <code>document</code>

<br />

## Return value
Returns either a <code>NodeList</code> containing all matching element nodes, or one single element if using <code>'#id'</code>,<br />
or <code>null</code> if no matching elements are found.<br /><br />

#### Examples
Getting element by id<br />
<pre>
// Get element by id

var x = getEl('#myId');

</pre>
<code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">querySelector()</a></code> is used internally for this, and returning a <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">HTMLElement</a></code> , or <code>null</code> if not found.

<br />

All other element searching is done via <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">querySelectorAll()</a></code> and returned as a <code>NodeList</code> as normal:<br /><br />

<pre>
// Get all &lt;p&gt; elements in DOM

var x = getEl('p');


// Get the first &lt;p&gt; element in DOM

var x = getEl('p')[0];

</pre>


