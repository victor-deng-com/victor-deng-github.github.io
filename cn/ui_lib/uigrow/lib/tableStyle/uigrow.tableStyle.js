/**
 * 2018-06-29
 * 1.0.1
 */

//程序入口（加载完html后才运行本js的方法）
//window.onload=function (){uigrow_lineEffect_main();}

/**
 * 获取全部的带有“uigrow_line_effect”类名字段的表格，并给tbody标签下的全部tr赋予点击事件
 * @returns
 */
function uigrow_lineEffect_main(){
	var all_tables=document.getElementsByTagName("table");
	for(var i=0;i<all_tables.length;i++)
	{
		var table_obj=all_tables[i];
		var class_name=table_obj.className;
		if(class_name.indexOf("uigrow_line_effect")!=-1)
		{
			//设置默认条纹
			var first_tbody=table_obj.getElementsByTagName("tbody")[0];
			var all_trs=first_tbody.getElementsByTagName("tr");
			for(var j=0;j<all_trs.length;j++)
			{
				//根据奇偶决定背景色
				if(j%2 ==0){
					//偶数，背景色
					var classNameStringArray = all_trs[j].className.split("");
					var lastString=classNameStringArray[classNameStringArray.length-1];
					
					all_trs[j].className=all_trs[j].className.replace(/uigrow_line_effect_stripe/g, "");
					if(lastString!=" "){
						all_trs[j].className+=" uigrow_line_effect_base_stripe";
					}else{
						all_trs[j].className+="uigrow_line_effect_base_stripe";
					}
				}else{
					//奇数，条纹色
					var classNameStringArray = all_trs[j].className.split("");
					var lastString=classNameStringArray[classNameStringArray.length-1];
					
					all_trs[j].className=all_trs[j].className.replace(/uigrow_line_effect_base_stripe/g, "");
					if(lastString!=" "){
						all_trs[j].className+=" uigrow_line_effect_stripe";
					}else{
						all_trs[j].className+="uigrow_line_effect_stripe";
					}
				}
				//为每个tr赋予点击事件
				all_trs[j].onclick=function(){uigrow_lineEffect_changeTrBackgroundColor(this);};
			}
		}
	}
}

/**
 * 改变与传入tr对象同级的tr的背景颜色
 * @param this_obj tr对象
 * @returns
 */
function uigrow_lineEffect_changeTrBackgroundColor(this_obj){
	var class_name=this_obj.className;
	//没按下ctrl键，则重置其他tr的样式。按下则不重置
	if (!window.event.ctrlKey) {
		var this_parent=this_obj.parentNode;
		var all_tr=this_parent.getElementsByTagName("tr");
		for(var i=0;i<all_tr.length;i++){
			all_tr[i].className=all_tr[i].className.replace("uigrow_line_effect_onclick","");
		}
    }
	
	if(class_name.indexOf("uigrow_line_effect_onclick")!=-1){
		this_obj.className=this_obj.className.replace("uigrow_line_effect_onclick","");
	}else{
		var classNameStringArray = this_obj.className.split("");
		var lastString=classNameStringArray[classNameStringArray.length-1];
		if(lastString!=" "){
			this_obj.className+=" uigrow_line_effect_onclick";
		}else{
			this_obj.className+="uigrow_line_effect_onclick";
		}
	}
}


