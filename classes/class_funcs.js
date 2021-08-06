    // ** Check if element contains specific class
    var _hasClass = function(el, classValue)
    {
        var pattern = new RegExp('(^|\\s)' + classValue + '(\\s|$)');
        return pattern.test(el.className);  // boolean
    };

    // ** Add class to element
    var _addClass = function(el, classValue)
    {
        if(!(_hasClass(el, classValue)))
        {
            if(el.className === '')
            {
                el.className = classValue;
            }
            else
            {
                el.className += ' ' + classValue;
            }
        }
    };

    // ** Remove class from element
    var _removeClass = function(el, classValue)
    {
        if(_hasClass(el, classValue))
        {
            var reg = new RegExp('(^|\\s)' + classValue + '(\\s|$)');
            var newClass = el.className.replace(reg, ' ');
            el.className = newClass.replace(/^\s+|\s+$/g,''); // remove leading and trailing whitespace
        }
    };
