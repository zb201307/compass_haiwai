/**
 * Created by zhangbin on 2015/8/18.
 */
function getStyle(obj,attr)
{
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}
function getClass(obj,attr)
{
    if(document.getElementsByClassName)
    {
        return obj.getElementsByClassName(attr);
    }else{
        var aEle=obj.getElementsByTagName('*');
        var re=new RegExp('\\b'+attr+'\\b');
        var result=[];
        for(var i=0,m=aEle.length; i<m;i++)
        {
            if(re.test(aEle[i].className)){
                result.push(aEle[i]);
            }
        }
        return result;
    }
}
function addClass(obj,attr)
{
    var re=new RegExp('\\b'+attr+'\\b');
    if(!obj.className||!re.test(obj.className))
    {
        obj.className+=obj.className?' '+attr:attr;
    }
}

function removeClass(obj,attr)
{
    var re=new RegExp('\\b'+attr+'\\b','g');
    if(obj.className){
        if(re.test(obj.className))
        {
            obj.className=((obj.className.replace(re,'')).replace(/\s+/g,' ')).replace(/^\s+|\s+$/g,'');
        }
        if(!obj.className)
        {
            obj.removeAttribute('class');
        }
    }
}


function getStyle(obj,attr)
{
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}


