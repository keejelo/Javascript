//----------------------------------------------------------------------------------
// Crossbrowser and legacy supported event handling for:
// addEventListener, removeEventListener, stopPropagation, preventDefault, target
//----------------------------------------------------------------------------------

// ** Add event listener (xbrowser-legacy)
var _attachEventListener = function(target, eventType, functionRef, capture)
{
    if(typeof target.addEventListener !== 'undefined')
    {
        target.addEventListener(eventType, functionRef, capture);
    }
    else if(typeof target.attachEvent !== 'undefined')
    {
        var functionString = eventType + functionRef;
        target['e' + functionString] = functionRef;
        target[functionString] = function(event)
        {
            event = event || window.event;
            try
            {
                target['e' + functionString](event);
            }
            catch(err)
            {
                //console.log('DEBUG: Error: Object does not support this property or method (can happen in IE8)');
            }
        };
        target.attachEvent('on' + eventType, target[functionString]);
    }
    else
    {
        eventType = 'on' + eventType;
        if(typeof target[eventType] === 'function')
        {
            var oldListener = target[eventType];
            target[eventType] = function()
            {
                oldListener();
                return functionRef();
            };
        }
        else
        {
            target[eventType] = functionRef;
        }
    }
};
// ** END: Add event listener (xbrowser-legacy)

// ** Remove event listener (xbrowser-legacy)
var _detachEventListener = function(target, eventType, functionRef, capture)
{
    if(typeof target.removeEventListener !== 'undefined')
    {
        target.removeEventListener(eventType, functionRef, capture);
    }
    else if(typeof target.detachEvent !== 'undefined')
    {
        var functionString = eventType + functionRef;
        target.detachEvent('on' + eventType, target[functionString]);
        target['e' + functionString] = null;
        target[functionString] = null;
    }
    else
    {
        target['on' + eventType] = null;
    }
};
// ** END: Remove event listener (xbrowser-legacy)

// ** Stop event from bubbling (xbrowser-legacy)
var _stopEvent = function(e)
{
    if(typeof e.stopPropagation !== 'undefined')
    {
        e.stopPropagation();
    }
    else
    {
        e.cancelBubble = true;
    }
};

// ** Stop default event action (xbrowser-legacy)
var _stopDefault = function(e)
{
    if(typeof e.returnValue !== 'undefined')
    {
        e.returnValue = false;
    }
    if(typeof e.preventDefault !== 'undefined')
    {
        e.preventDefault();
    }
};

// ** Get event target (xbrowser-legacy)
var _eTarget = function(e)
{
    var t;
    if(e.target)
    {
        t = e.target;
    }
    else if(e.srcElement)
    {
        t = e.srcElement;
    }
    if(t.nodeType === 3)
    {
        t = t.parentNode;
    }
    return t;
};

//----------------------------------------------------------------------------------
// END
//----------------------------------------------------------------------------------
