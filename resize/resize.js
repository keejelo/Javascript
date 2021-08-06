// ** Resize object module
var _resize =
{
    init : function(id)
    {
        _resize.el = document.getElementById(id);
        _resize.el.className = _resize.el.className + ' resizable';
        var resizeHandle = document.createElement('div');
        resizeHandle.className = 'resizeHandle';
        _resize.el.appendChild(resizeHandle);
        resizeHandle.addEventListener('mousedown', _resize.start, false);
    },
    start : function(e)
    {
        e = e || window.event;
        _resize.startX = e.clientX;
        _resize.startY = e.clientY;
        _resize.startWidth = parseInt(getComputedStyle(_resize.el).width, 10);
        _resize.startHeight = parseInt(getComputedStyle(_resize.el).height, 10);
        document.addEventListener('mousemove', _resize.move, false);
        document.addEventListener('mouseup', _resize.stop, false);
    },
    stop : function()
    {
        document.removeEventListener('mousemove', _resize.move, false);
        document.removeEventListener('mouseup', _resize.stop, false);
    },
    move : function(e)
    {
        e = e || window.event;
        _resize.el.style.width = (_resize.startWidth + e.clientX - _resize.startX) + 'px';
        _resize.el.style.height = (_resize.startHeight + e.clientY - _resize.startY) + 'px';
        console.log(_resize.startWidth, e, _resize.startX, _resize.el.style.width);
        e.preventDefault();
    }
};
// ** END: Resize object module
