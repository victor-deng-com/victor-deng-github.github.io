function JumpToUrl(jumpToUrl){
	window.location.href=jumpToUrl;
}

function OpenWindowToUrl(url){
	window.open(url);
}

//url传参：通过参数名获取参数值
function getParameterValueByName(parameterName) { 
    var reg = new RegExp("(^|&)" + parameterName + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
}
