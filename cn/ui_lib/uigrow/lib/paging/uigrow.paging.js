/**
 * 2018-06-29
 * 1.0.1
 */

function uigrow_paging(pagingObject,id){
	uigrow_paging_main(pagingObject,id);
}

function uigrow_paging_main(pagingObject,id){
	var obj=document.getElementById(id);
	obj.innerHTML="";
	obj.className="uigrow_paging_pageContainer";
	
	if(pagingObject.language=="中文"){
		if(pagingObject.currentPage==1){
			obj.innerHTML+=(pagingObject.style=="simple"?'':'<a class="uigrow_paging_pageDisable">首页</a>')
			+'<a class="uigrow_paging_pageDisable">上一页</a>';
		}else{
			obj.innerHTML+=(pagingObject.style=="simple"?'':('<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\'1\')">首页</a>'))
			+'<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+(pagingObject.currentPage-1)+'\')">上一页</a>';
		}
	}else{
		if(pagingObject.currentPage==1){
			obj.innerHTML+=pagingObject.style=="simple"?'':'<a class="uigrow_paging_pageDisable">First</a>'
			+'<a class="uigrow_paging_pageDisable">Previous</a>';
		}else{
			obj.innerHTML+=(pagingObject.style=="simple"?'':('<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\'1\')">First</a>'))
			+'<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+(pagingObject.currentPage-1)+'\')">Previous</a>';
		}
	}
	
	if(pagingObject.totalPage<=9){
		for(var i=1;i<=pagingObject.totalPage;i++){
			if(i==pagingObject.currentPage){
				obj.innerHTML+='<a class="uigrow_paging_pageChose">'+i+'</a>';
			}else{
				obj.innerHTML+='<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+i+'\')">'+i+'</a>';
			}
		}
	}else{
		if(pagingObject.currentPage<=5){
			for(var i=1;i<=pagingObject.currentPage+2;i++){
				if(i==pagingObject.currentPage){
					obj.innerHTML+='<a class="uigrow_paging_pageChose">'+i+'</a>';
				}else{
					obj.innerHTML+='<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+i+'\')">'+i+'</a>';
				}
			}
			obj.innerHTML+='<span class="uigrow_paging_pageOmit">...</span>'
				+'<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+(pagingObject.totalPage-1)+'\')">'+(pagingObject.totalPage-1)+'</a>'
				+'<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+pagingObject.totalPage+'\')">'+(pagingObject.totalPage)+'</a>';
		}else{
			obj.innerHTML+='<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\'1\')">1</a>'
				+'<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\'2\')">2</a>'
				+'<span class="uigrow_paging_pageOmit">...</span>';
			
			for(var i=pagingObject.currentPage-2;i<=pagingObject.currentPage+2&&i<=pagingObject.totalPage;i++){
				if(i==pagingObject.currentPage){
					obj.innerHTML+='<a class="uigrow_paging_pageChose">'+i+'</a>';
				}else{
					obj.innerHTML+='<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+i+'\')">'+i+'</a>';
				}
			}
			
			if(pagingObject.totalPage-pagingObject.currentPage>4){
				obj.innerHTML+='<span class="uigrow_paging_pageOmit">...</span>'
					+'<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+(pagingObject.totalPage-1)+'\')">'+(pagingObject.totalPage-1)+'</a>'
					+'<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+pagingObject.totalPage+'\')">'+(pagingObject.totalPage)+'</a>';
			}else{
				for(var i=pagingObject.currentPage+3;i<=pagingObject.totalPage;i++){
					obj.innerHTML+='<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+i+'\')">'+i+'</a>';
				}
			}
		}
	}
	
	if(pagingObject.language=="中文"){
		if(pagingObject.currentPage==pagingObject.totalPage){
			obj.innerHTML+='<a class="uigrow_paging_pageDisable">下一页</a>'
			+(pagingObject.style=="simple"?'':'<a class="uigrow_paging_pageDisable">尾页</a>');
		}else{
			obj.innerHTML+='<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+(pagingObject.currentPage+1)+'\')">下一页</a>'
			+(pagingObject.style=="simple"?'':('<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+pagingObject.totalPage+'\')">尾页</a>'));
		}
	}else{
		if(pagingObject.currentPage==pagingObject.totalPage){
			obj.innerHTML+='<a class="uigrow_paging_pageDisable">Next</a>'
			+(pagingObject.style=="simple"?'':'<a class="uigrow_paging_pageDisable">Last</a>');
		}else{
			obj.innerHTML+='<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+(pagingObject.currentPage+1)+'\')">Next</a>'
			+(pagingObject.style=="simple"?'':'<a class="uigrow_paging_pageNormal" onclick="uigrow_paging_jumpToThePage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\''+pagingObject.totalPage+'\')">Last</a>');
		}
	}
	
	if(pagingObject.language=="中文"){
		if(pagingObject.style!="simple"){
			obj.innerHTML+='&nbsp;&nbsp;<span class="uigrow_paging_pageIllustration">当前第&nbsp;'+pagingObject.currentPage+'&nbsp;页/共&nbsp;'+pagingObject.totalPage+'&nbsp;页'
				+(pagingObject.totalRecords<0?'':'&nbsp;('+(pagingObject.dataCountTextFormer==null?"总计":pagingObject.dataCountTextFormer)
					+'&nbsp;'+pagingObject.totalRecords+'&nbsp;'
					+(pagingObject.dataCountTextLatter==null?"数据":pagingObject.dataCountTextLatter)
					+')&nbsp;')
				+'</span>';
		}
		obj.innerHTML+='<span class="uigrow_paging_pageIllustration">&nbsp;</span>'
			+'<span class="uigrow_paging_pageIllustration">跳至</span>'
			+'<input class="uigrow_paging_pageJump" type="number" id="uigrow_paging_pageJump_'+id+'" onFocus="uigrow_paging_showBottom(\'uigrow_paging_pageJumpConfirmBottom_'+id+'\')" onBlur="uigrow_paging_hideBottom(\'uigrow_paging_pageJumpConfirmBottom_'+id+'\')" />'
			+'<span class="uigrow_paging_pageIllustration">页</span>'
			+'<bottom class="uigrow_paging_bottom" id="uigrow_paging_pageJumpConfirmBottom_'+id+'" onclick="uigrow_paging_jumpToInputPage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\'uigrow_paging_pageJump_'+id+'\')">确定</bottom>';
	}else{
		if(pagingObject.style!="simple"){
			obj.innerHTML+='&nbsp;&nbsp;<span class="uigrow_paging_pageIllustration">Current&nbsp;'+pagingObject.currentPage+'&nbsp;Page/Total&nbsp;'+pagingObject.totalPage+'&nbsp;Page'
				+(pagingObject.totalRecords<0?'':'&nbsp;('+(pagingObject.dataCountTextFormer==null?"Total":pagingObject.dataCountTextFormer)
					+'&nbsp;'+pagingObject.totalRecords+'&nbsp;'
					+(pagingObject.dataCountTextLatter==null?"Data":pagingObject.dataCountTextLatter)
					+')&nbsp;')
				+'</span>'
		}
		obj.innerHTML+='<span class="uigrow_paging_pageIllustration">&nbsp;</span>'
			+'<span class="uigrow_paging_pageIllustration">JumpTo</span>'
			+'<input class="uigrow_paging_pageJump" type="number" id="uigrow_paging_pageJump_'+id+'" onFocus="uigrow_paging_showBottom(\'uigrow_paging_pageJumpConfirmBottom_'+id+'\')" onBlur="uigrow_paging_hideBottom(\'uigrow_paging_pageJumpConfirmBottom_'+id+'\')" />'
			+'<span class="uigrow_paging_pageIllustration">Page</span>'
			+'<bottom class="uigrow_paging_bottom" id="uigrow_paging_pageJumpConfirmBottom_'+id+'" onclick="uigrow_paging_jumpToInputPage('+JSON.stringify(pagingObject).replace(/\"/g,"'")+',\'uigrow_paging_pageJump_'+id+'\')">Confirm</bottom>';
	}
}

function uigrow_paging_jumpToThePage(pagingObject,jumpPage){
	//判断函数是否存在
	if(typeof uigrow_paging_customJumpToThePage === "function") { 
		//是函数
		uigrow_paging_customJumpToThePage(pagingObject,jumpPage);
	} else { 
		var jumpToUrl=pagingObject.hrefFormer+jumpPage+pagingObject.hrefLatter;
		//不是函数
		window.location.href=jumpToUrl;
	}
}

function uigrow_paging_jumpToInputPage(pagingObject,inputId){
	var inputObject=document.getElementById(inputId);
	var jumpPage=inputObject.value;
	if(typeof uigrow_paging_customJumpToThePage === "function") { 
		//是函数
		uigrow_paging_customJumpToThePage(pagingObject,jumpPage);
	}else{
		/*var href=window.location.href;
		var lastIndex=href.lastIndexOf("\/");
		var hrefFormer=href.substring(0,lastIndex);*/
		var jumpToUrl=pagingObject.hrefFormer+jumpPage+pagingObject.hrefLatter;
		window.location.href=jumpToUrl;
	}
}

function uigrow_paging_showBottom(bottomId){
	var bottomObj=document.getElementById(bottomId);
	bottomObj.style.opacity="1";
}

function uigrow_paging_hideBottom(bottomId){
	setTimeout('document.getElementById("'+bottomId+'").style.opacity="0";',200);
}
