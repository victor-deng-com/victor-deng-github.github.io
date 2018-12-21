function showLanguageLogo(id){
	var doc_obj=document.getElementById(id);
	doc_obj.style.display="";
	document.getElementById("maskingLayer").style.display="";
	document.documentElement.style.overflowY = 'hidden'; 
}

function hideLanguageLogo(id){
	var doc_obj=document.getElementById(id);
	doc_obj.style.display="none";
	document.getElementById("maskingLayer").style.display="none";
	document.documentElement.style.overflowY = 'scroll';
}

function changeLanguage(languageType){
	var url=window.location.href;
	var urlArray=url.split("/");
	var htmlName=urlArray[urlArray.length-1];
	if(languageType=="English"){
		JumpToUrl("../"+htmlName);
	}else if(languageType=="中文"){
		JumpToUrl("./cn/"+htmlName);
	}
}