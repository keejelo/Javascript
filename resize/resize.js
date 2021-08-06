//----------------------------------------------------------------------------------
// ** Resize object module - keejelo 2021
//----------------------------------------------------------------------------------
// Depends on the file: "event_handling.js"
// Usage: _resize.init('someElementId');
//----------------------------------------------------------------------------------
var _resize =
{
    init : function(id)
    {
        _resize.el = document.getElementById(id);
        _resize.el.style.position = 'absolute';
        var handle = document.createElement('div');
        _resize.el.appendChild(handle);
        handle.style.position = 'absolute';
        handle.style.right = '0';
        handle.style.bottom = '0';
        handle.style.padding = '0';
        handle.style.width = '10px';
        handle.style.height = '10px';
        handle.style.backgroundColor = '#0000ff';
        handle.style.color = '#0000ff';
        handle.style.fontFamily = 'Arial,Helvetica,sans-serif';
        handle.style.fontSize = '10px';
        handle.style.lineHeight = '10px';
        handle.style.fontWeight = 'bold';
        handle.style.textAlign = 'right';
        handle.style.cursor = 'nw-resize';
        handle.innerHTML = ':::';
        _attachEventListener(handle, 'mousedown', _resize.start, false);
    },
    start : function(e)
    {
        e = e || window.event;
        _resize.startX = e.clientX;
        _resize.startY = e.clientY;
        _resize.startWidth = parseInt(_resize.getStyle(_resize.el,'width'), 10);
        _resize.startHeight = parseInt(_resize.getStyle(_resize.el,'height'), 10);
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
    },
    getStyle : function(el, prop)
    {
        return (typeof getComputedStyle !== 'undefined' ? getComputedStyle(el, null) : el.currentStyle)[prop];
    }
};
//----------------------------------------------------------------------------------
// ** END: Resize object module
//----------------------------------------------------------------------------------
