# getEl()
Javascript wrapper function, shorthand for <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">querySelectorAll()</a></code>

<br />

## Syntax
<pre>
var x = getEl(selector, parentElem);
</pre>

@parameter <code>selector</code> : CSS selector for getting elements.
<br /><br />
@parameter <code>parentElem</code> : optional, can be used to start element search from a DOM element. If not used then it defaults to <code>document</code>

<br />

## Return value
Returns either a <code>NodeList</code> containing all matching element nodes, or one single element if using <code>'#id'</code>,<br />
or <code>null</code> if no matching elements are found.<br /><br />

<b>Note</b><br />
In the code, <code>querySelector()</code> is only used when getting element by id,<br />
all other element searching is done via <code>querySelectorAll()</code> and returned as a <code>NodeList</code><br /><br />
So for example to get the first matching element of some type in DOM, you have to do it the <code>querySelectorAll()</code> way:<br />
<pre>
// Get the first &lt;p&gt; element in DOM

var x = getEl('p')[0];

// Get element by id
var x = getEl('#myId');

</pre>


