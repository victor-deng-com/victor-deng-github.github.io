/**2018-06-29
 * 1.0.1
 */

//程序入口（加载完html后才运行本js的方法）
window.onload=function (){uigrow_sortTable_main();uigrow_lineEffect_main();}

/**
 * 获取全部的带有“uigrow_sort_table”字段的表格，并给第一行的全部td或th赋予点击事件
 * @returns
 */
function uigrow_sortTable_main(){
	var all_tables=document.getElementsByTagName("table");
	for(var i=0;i<all_tables.length;i++)
	{
		var table_obj=all_tables[i];
		var class_name=table_obj.className;
		if(class_name.indexOf("uigrow_sort_table")!=-1)
		{
			//给第一行的td或th赋予点击事件
			//获取该table下的所有tr标签
			var all_tr=table_obj.getElementsByTagName("tr");
			//获取第一行
			var first_tr=all_tr[0];
			first_tr.style.cursor="pointer";
			//获取该tr的全部td或th
			var all_childs=uigrow_sortTable_getTrChilds(first_tr);
			//赋予点击事件
			for(var j=0;j<all_childs.length;j++)
			{
				all_childs[j].onclick=function(){uigrow_sortTable(this);};
			}
		}
	}
}

/**
 * 排序
 * @param this_obj
 * @returns
 */
function uigrow_sortTable(this_obj){
	//获取该td的位置（从0开始）
	var obj_index=this_obj.cellIndex;
	var this_class_name=this_obj.className;
	var compel_type="";
	if(this_class_name.indexOf("uigrow_order_by_number")!=-1){
		compel_type="number";
	}else if(this_class_name.indexOf("uigrow_order_by_string")!=-1){
		compel_type="string";
	}
	
	// ▴ ▾
	//str=str.replace("l","");
	var is_positive_sequence;
	if(this_obj.innerHTML.indexOf("<span style=\"margin-left:2px;line-height:100%;\">▴</span>")!=-1){
		//倒序
		is_positive_sequence=false;
		this_obj.innerHTML=this_obj.innerHTML.replace("<span style=\"margin-left:2px;line-height:100%;\">▴</span>","");
		this_obj.innerHTML+="<span style=\"margin-left:2px;line-height:100%;\">▾</span>";
	}else{
		is_positive_sequence=true;
		this_obj.innerHTML=this_obj.innerHTML.replace("<span style=\"margin-left:2px;line-height:100%;\">▾</span>","");
		this_obj.innerHTML+="<span style=\"margin-left:2px;line-height:100%;\">▴</span>";
	}
	
	var table_obj=this_obj.parentNode.parentNode.parentNode;
	var all_tbodys=table_obj.getElementsByTagName("tbody");
	var first_tbody=all_tbodys[0];
	var tr_array=new Array();
	//获取该table下的tbody的所有tr标签
	var all_tr=first_tbody.getElementsByTagName("tr");
	//检查是否为存数字
	var all_is_num=true;
	for(var i=0;i<all_tr.length;i++){
		var all_td=all_tr[i].getElementsByTagName("td");
		var td_obj=all_td[obj_index];
		if(!uigrow_checkNumber(td_obj.innerHTML)){
			all_is_num=false;
		}
	}
	//将要排序的tr赋予数组对象中
	if(compel_type=="number"){
		//按数字来处理
		for(var i=0;i<all_tr.length;i++)
		{
			var all_td=all_tr[i].getElementsByTagName("td");
			var td_obj=all_td[obj_index];
			var tr_obj=new Object();
			tr_obj.value=parseFloat(td_obj.innerHTML.replace(/[^0-9]/ig,""));
			tr_obj.tr=all_tr[i];
			tr_array[i]=tr_obj;
		}
	}else if(compel_type=="string"){
		//字符串的排序
		for(var i=0;i<all_tr.length;i++)
		{
			var all_td=all_tr[i].getElementsByTagName("td");
			var td_obj=all_td[obj_index];
			var tr_obj=new Object();
			tr_obj.value=td_obj.innerHTML;
			tr_obj.tr=all_tr[i];
			tr_array[i]=tr_obj;
		}
	}else{
		if(all_is_num){
			//数字的排序
			for(var i=0;i<all_tr.length;i++)
			{
				var all_td=all_tr[i].getElementsByTagName("td");
				var td_obj=all_td[obj_index];
				var tr_obj=new Object();
				tr_obj.value=parseFloat(td_obj.innerHTML);
				tr_obj.tr=all_tr[i];
				tr_array[i]=tr_obj;
			}
		}else{
			//字符串的排序
			for(var i=0;i<all_tr.length;i++)
			{
				var all_td=all_tr[i].getElementsByTagName("td");
				var td_obj=all_td[obj_index];
				var tr_obj=new Object();
				tr_obj.value=td_obj.innerHTML;
				tr_obj.tr=all_tr[i];
				tr_array[i]=tr_obj;
			}
		}
	}
	
	if(is_positive_sequence){
		//正序排列
		for(var i=0;i<tr_array.length-1;i++)
		{
			for(var j=0;j<tr_array.length-1-i;j++){
				//两两比较，若前一个大于后一个则交换位置
	            if(tr_array[j].value>tr_array[j+1].value){
	                var temp = tr_array[j];
	                tr_array[j] = tr_array[j+1];
	                tr_array[j+1] = temp;
	            }
	        } 
		}
	}else{
		//倒序排列
		for(var i=0;i<tr_array.length-1;i++)
		{
			for(var j=0;j<tr_array.length-1-i;j++){
				//两两比较，若前一个大于后一个则交换位置
	            if(tr_array[j].value<tr_array[j+1].value){
	                var temp = tr_array[j];
	                tr_array[j] = tr_array[j+1];
	                tr_array[j+1] = temp;
	            }
	        } 
		}
	}
	
	var all_theads=table_obj.getElementsByTagName("thead");
	var first_tr=all_theads[0].getElementsByTagName("tr")[0];
	//第一行的其他列头回复原状
	var all_childs=uigrow_sortTable_getTrChilds(first_tr);
	for(var i=0;i<all_childs.length;i++){
		if(obj_index!=i){
			all_childs[i].innerHTML=all_childs[i].innerHTML.replace("<span style=\"margin-left:2px;line-height:100%;\">▾</span>","");
			all_childs[i].innerHTML=all_childs[i].innerHTML.replace("<span style=\"margin-left:2px;line-height:100%;\">▴</span>","");
		}
	}
	//清空原来的行并填充已排好序的行
	first_tbody.innerHTML="";
	for(var i=0;i<tr_array.length;i++)
	{
		first_tbody.appendChild(tr_array[i].tr);
	}
	
	uigrow_lineEffect_main();
}

/**
 * 获取tr对象的子元素
 * @param tr_obj
 * @returns
 */
function uigrow_sortTable_getTrChilds(tr_obj){
	var all_td=tr_obj.getElementsByTagName("td");
	var all_th=tr_obj.getElementsByTagName("th");
	if(all_td.length>0)
	{
		return all_td;
	}else if(all_th.length>0){
		return all_th;
	}else{
		return null;
	}
}

/**
 * 检查对象是否为数字
 * @param theObj 字符串或其他对象
 * @returns true:数字 false:非数字
 */
function uigrow_checkNumber(theObj) {
	//正整数
	var reg1 = /^[0-9]+$/;
	//负整数
	var reg2=/^[-]?[0-9]+$/;
	//正小数
	var reg3 = /^[0-9]+.?[0-9]*$/;
	//负小数
	var reg4 = /^[-]?[0-9]+\.?[0-9]+?$/ ;
	
	if(reg1.test(theObj)){
		//正整数
		return true;
	}else{
		if(reg2.test(theObj)){
			//负整数
			return true;
		}else{
			if (reg3.test(theObj)){
				//正小数
				return true;
			}else{
				if(reg4.test(theObj)){
					//负小数
					return true;
				}else{
					return false;
				}
			}
		}
	}
}



