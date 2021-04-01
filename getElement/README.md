# getEl() , getElement()
Function, shorthand for getting elements in DOM, based on <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">querySelector()</a></code> and <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">querySelectorAll()</a></code>

<br />

## Syntax
<pre>
var x = getEl(selector, parentElement);

// ..or..

var x = getElement(selector, parentElement);

// ..which does exactly the same, but is more descriptive..
</pre>

@parameter <code>selector</code> = <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">CSS selector</a> for getting elements.
<br /><br />
@parameter <code>parentElement</code> = optional, can be used to start element search from a DOM element. If not used then it defaults to <code>document</code>

<br />

## Return value
Returns either a <code>NodeList</code> containing all matching element nodes, or one single element if using: <code>'#id'</code> , <code>'html'</code> , <code>'head'</code> , <code>'title'</code> , <code>'body'</code><br />
<br />
In all cases it returns <code>null</code> if no matching elements are found.<br /><br />

<br />

## Examples
Getting element with a specified id:<br />
<pre>
// Get element by id

var x = getEl('#myId');

</pre>
<code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">querySelector()</a></code> is used internally for this, returns a <code>HTMLElement</code> on success, else it returns <code>null</code>

<br />

All other element searching is done via <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">querySelectorAll()</a></code> and returned as a <code>NodeList</code> as normal:<br />
<pre>
// Get all &lt;p&gt; elements in DOM

var x = getEl('p');


// Get the first &lt;p&gt; element in DOM

var x = getEl('p')[0];

</pre>

<br />

Using the optional second parameter to start element search from a deeper place within in DOM:<br />
<pre>
// Get some element with an id

var myParent = getEl('#myId');


// Get all &lt;p&gt; elements with classname '.myClass' that are descendants of the parent element whose id is 'myId'

var x = getEl('p.myClass', myParent);


// Although the below code would produce the same result

var x = getEl('#myId p.myClass');

// .. there might be times when it's more practical to do it the former way

</pre>






