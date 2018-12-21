function imitateUserComment(currentPage){
	var userComments=new Array();
	//{username:"John",comment:""}
	userComments[0]={username:"John",comment:"It's very easy to use.I wish I could have met it earlier."};
	userComments[1]={username:"Tom",comment:"It's very convenient to use.I don't even need to load jQuery first before using uigrow."};
	userComments[2]={username:"Jack",comment:"I have been looking for plug-ins like this for a long time.Now,I think I have found it."};
	userComments[3]={username:"Kaye",comment:"It's good idea for this.I hope uigrow can grow better and better."};
	userComments[4]={username:"Roxanne",comment:"The code is very concise."};
	userComments[5]={username:"David",comment:"It runs very fast,and the plug-ins is very very small."};
	userComments[6]={username:"Braose",comment:"It has realized what I have always wanted to achieve."};
	userComments[7]={username:"Gaby",comment:"Trust me,this is definitely worth your practical plug-in."};
	userComments[8]={username:"Nicholas",comment:"I want to join you,because this is a great cause.Can you tell us the way to join?"};
	userComments[9]={username:"Linda",comment:"Uigrow is definitely a weapon for front-end development.It can help you a lot."};
	userComments[10]={username:"Samuel",comment:"Uigrow improved the efficiency of my development."};
	userComments[11]={username:"Tony",comment:"Come on! I hope uigrow can add more plug-ins."};
	userComments[12]={username:"Steven",comment:"My friend recommended this plugin to me. I am very grateful to him for letting me know such a wonderful thing."};
	userComments[13]={username:"Alice",comment:"I very like this plugin,I hope you also like it"};
	userComments[14]={username:"Simon",comment:"It's very very very good!!!"};
	userComments[15]={username:"Laurentium",comment:"If you have used this plugin, I believe you will like it as much as I do."};
	userComments[16]={username:"Vernon",comment:"My boss asked me to use this plugin, obviously he is smarter than me."};
	userComments[17]={username:"Catherine",comment:"I think the person who wrote this plug-in is very smart,because its code structure is very clear."};
	userComments[18]={username:"Lance",comment:"I like this plugin. If you have anything new, please let me know."};
	userComments[19]={username:"kenny",comment:"I like this plug-in because it improves the efficiency of coding."};
	userComments[20]={username:"Heinare",comment:"Very nice,I am very much looking forward to the subsequent plug-ins."};
	userComments[21]={username:"Ivan",comment:"It would be better if the community could improve."};
	userComments[22]={username:"Haes",comment:"A plug-in that is worth looking forward to."};
	userComments[23]={username:"Luigino",comment:"The code is very concise."};
	userComments[24]={username:"Hesy",comment:"I love this plugin.I will keep an eye on this."};
	userComments[25]={username:"Dats",comment:"This plug-in is especially friendly to novice. You only need to focus on the functions you want."};
	userComments[26]={username:"Jennifer",comment:"I have been looking for plug-ins like this for a long time.I love it."};
	userComments[27]={username:"Elwin",comment:"It even needn't load jQuery!I cann't believe that!"};
	userComments[28]={username:"Baot",comment:"It's very easy to use.I wish I could have met it earlier."};
	userComments[29]={username:"Judy",comment:"This plug-in is worth noting."};
	userComments[30]={username:"Gabriel",comment:"It has realized what I have always wanted to achieve."};
	userComments[31]={username:"Heiline",comment:"It's very easy to use.I wish I could have met it earlier."};
	userComments[32]={username:"Jerome",comment:"It runs very fast,and the plug-ins is very very small."};
	userComments[33]={username:"kenny",comment:"Come on! I hope uigrow can add more plug-ins."};
	userComments[34]={username:"Andy",comment:"My friend recommended this plugin to me.Now,I love her"};
	userComments[35]={username:"Arthur",comment:"I like this plugin. If you have anything new, please let me know."};
	userComments[36]={username:"Peggy",comment:"It would be better if the community could improve."};
	userComments[37]={username:"Gerald",comment:"Very nice,I am very much looking forward to the subsequent plug-ins."};
	userComments[38]={username:"Kelly",comment:"My friend recommended this plugin to me.Now,I had love it."};
	userComments[39]={username:"Jason",comment:"A plug-in that is worth looking forward to."};
	userComments[40]={username:"Linda",comment:"The code is very concise."};
	userComments[41]={username:"Leander",comment:"If you have used this plugin, I believe you will like it as much as I do."};
	userComments[42]={username:"Miranda",comment:"I love this plugin.I will keep an eye on this."};
	userComments[43]={username:"Haes",comment:"I love this plugin.I will keep an eye on this."};
	userComments[44]={username:"Danrtsey",comment:"I very like this plugin,I hope you also like it"};
	userComments[45]={username:"Oprah",comment:"I have been looking for plug-ins like this for a long time.I love it."};
	userComments[46]={username:"Laurentium",comment:"A very friendly framework, I hope it can get better and better."};
	userComments[47]={username:"James",comment:"I hope it can update more plug-ins, which is very easy to use."};
	userComments[48]={username:"Heiline",comment:"Anyway, it's worth paying attention to."};
	userComments[49]={username:"Sandra",comment:"It's very clear."};
	userComments[50]={username:"Vincent",comment:"I hope the community can be improved."};
	userComments[51]={username:"Eadgar",comment:"A framework worth looking forward to"};
	userComments[52]={username:"Daphne",comment:"It has great potential."};
	userComments[53]={username:"Jason",comment:"Come on, I hope you can do better and update more plug-ins."};
	userComments[54]={username:"Phoebe",comment:"Uigrow is definitely a weapon for front-end development.It can help you a lot."};
	userComments[55]={username:"Sharon",comment:"I like this plugin. If you have anything new, please let me know."};
	userComments[56]={username:"Gabriel",comment:"It's very easy to use.I wish I could have met it earlier."};
	userComments[57]={username:"Vivian",comment:"It even needn't load jQuery!I cann't believe that!"};
	userComments[58]={username:"Braose",comment:"It's very easy to use.I wish I could have met it earlier."};
	
	
	var obj_div=document.getElementById("div_user_comments");
	
	obj_div.innerHTML='<div style="background-color: #d0e7ff;padding-left: 8px;padding-top: 8px;"><div style="background-color: #fff;width: 120px;height: 30px;padding-left: 20px;padding-top: 6px;">用过的人都说</div></div>'
		+'<div style="height:20px;"></div>';
	currentPage=currentPage-1;
	for(var i=0;i<3 & currentPage*3+i<userComments.length ;i++){
		obj_div.innerHTML+=
			'<div style="padding:8px;">'
				+'<p>'+userComments[currentPage*3+i].username+':</p>'
				+'<p style="padding-left:40px;">'+userComments[currentPage*3+i].comment+'</p>'
				+'<hr class="hr_dotted_line" />'
			+'</div>';
	}
	obj_div.innerHTML+='<div id="div_pagingDemo"></div>'+'<div style="height:10px;"></div>';
	
}


