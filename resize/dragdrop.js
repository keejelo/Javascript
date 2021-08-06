//----------------------------------------------------------------------------------
// ** Drag'n'drop object module - keejelo 2021
//----------------------------------------------------------------------------------
// Depends on the file: "event_handling.js"
// Usage: _drag.init('someElementId');
//----------------------------------------------------------------------------------
var _drag =
{
    init : function(id)
    {
        if(_drag.bActive !== true)
        {
            _drag.el = document.getElementById(id);
            if(_drag.el === null){return false;}
            _drag.el.handle = document.getElementById(id + '_heading');
            if(_drag.el.handle === null){_drag.el.handle = _drag.el;}
            _drag.el.style.position = 'absolute';
            _attachEventListener(_drag.el.handle, 'mousedown', _drag.start, false);
        }
    },
    start : function(e)
    {
        e = e || window.event;
        // ** Left mouse button triggers moving (different mousebuttonID's so try detect if modern browser or IE8)
        if( (e.button === 0) || (window.attachEvent && !window.addEventListener && e.button === 1) )
        {
            _drag.el.handle.style.cursor = 'move';
            _drag.el.posX2 = e.clientX;
            _drag.el.posY2 = e.clientY;
            _attachEventListener(document, 'mouseup', _drag.stop, false);
            _attachEventListener(document, 'mousemove', _drag.move, false);
            _drag.bActive = true;
        }
    },
    stop : function()
    {
        _drag.el.handle.style.cursor = '';
        _detachEventListener(document, 'mouseup', _drag.stop, false);
        _detachEventListener(document, 'mousemove', _drag.move, false);
        _drag.bActive = false;
    },
    move : function(e)
    {
        e = e || window.event;
        _drag.el.posX = _drag.el.posX2 - e.clientX;
        _drag.el.posY = _drag.el.posY2 - e.clientY;
        _drag.el.posX2 = e.clientX;
        _drag.el.posY2 = e.clientY;
        _drag.el.style.top = parseInt( (_drag.el.offsetTop) - (_drag.el.posY), 10) + 'px';
        _drag.el.style.left = parseInt( (_drag.el.offsetLeft) - (_drag.el.posX), 10) + 'px';
    }
};
//----------------------------------------------------------------------------------
// ** END: Drag'n'drop object module
//----------------------------------------------------------------------------------
