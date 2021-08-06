
// Depends on the file: "event_handling.js"

// Usage:
// _resize.init('someElementId');


// ** Resize object module
var _resize =
{
    init : function(id)
    {
        _resize.el = document.getElementById(id);
        _resize.el.style.position = 'absolute';
        var handle = document.createElement('div');
        _resize.el.appendChild(handle);
        handle.style.width = '10px';
        handle.style.height = '10px';
        handle.style.backgroundColor = '#0000ff';
        handle.style.position = 'absolute';
        handle.style.right = '0';
        handle.style.bottom = '0';
        handle.style.cursor = 'nw-resize';
        _attachEventListener(handle, 'mousedown', _resize.start, false);
    },
    start : function(e)
    {
        e = e || window.event;
        _resize.startX = e.clientX;
        _resize.startY = e.clientY;
        _resize.startWidth = parseInt(_resize.el.offsetWidth, 10);
        _resize.startHeight = parseInt(_resize.el.offsetHeight, 10);
        _attachEventListener(document, 'mousemove', _resize.move, false);
        _attachEventListener(document, 'mouseup', _resize.stop, false);
        _stopEvent(e);
        return false;        
    },
    stop : function()
    {
        _detachEventListener(document, 'mousemove', _resize.move, false);
        _detachEventListener(document, 'mouseup', _resize.stop, false);
    },
    move : function(e)
    {
        e = e || window.event;
        _resize.el.style.width = (_resize.startWidth + e.clientX - _resize.startX) + 'px';
        _resize.el.style.height = (_resize.startHeight + e.clientY - _resize.startY) + 'px';
        _stopDefault(e);
    }
};
// ** END: Resize object module

