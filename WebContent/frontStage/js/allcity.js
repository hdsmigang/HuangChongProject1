var hotcitys=new Array();
/**
hotcitys[0]=new Array('bj','北京','beijing','bj','16930','beijing','北京','','');

hotcitys[1]=new Array('sh','上海','shanghai','sh','8288','shanghai','上海','','');

hotcitys[2]=new Array('gz','广州','guangzhou','gz','2713','guangdong','广东','','');

hotcitys[3]=new Array('sz','深圳','shenzhen','sz','5850','guangdong','广东','','');

hotcitys[4]=new Array('sy','三亚','sanya','sanya','3528','hainan','海南','','');

hotcitys[5]=new Array('cd','成都','chengdu','cd','3935','sichuan','四川','','');

hotcitys[6]=new Array('wh','武汉','wuhan','wh','2753','hubei','湖北','','');

hotcitys[7]=new Array('nj','南京','nanjing','nj','2108','jiangsu','江苏','','');

hotcitys[8]=new Array('cq','重庆','chongqing','cq','2733','zhongqing','重庆','','');

hotcitys[9]=new Array('hz','杭州','hangzhou','hz','4785','zhejiang','浙江','','');

hotcitys[10]=new Array('xg','香港','xianggang','xianggang','297','xianggang','香港','','');

hotcitys[11]=new Array('xm','厦门','xiamen','xm','2425','fujian','福建','','');

hotcitys[12]=new Array('xa','西安','xian','xa','2755','shanxi','陕西','','');

hotcitys[13]=new Array('cs','长沙','changsha','cs','1593','hunan','湖南','','');

hotcitys[14]=new Array('sz','苏州','suzhou','su','1918','jiangsu','江苏','','');

hotcitys[15]=new Array('gl','桂林.阳朔','guilin','gl','145','guangxi','广西','','');

hotcitys[16]=new Array('km','昆明','kunming','km','344','yunnan','云南','','');

hotcitys[17]=new Array('sy','沈阳','shenyang','sy','1718','liaoning','辽宁','','');

hotcitys[18]=new Array('tj','天津','tianjin','tj','1475','tianjin','天津','','');

hotcitys[19]=new Array('heb','哈尔滨','haerbin','hrb','376','heilongjiang','黑龙江','','');
*/
var citys=new Array();
/**
citys[0]=new Array('bj','北京','beijing','bj','16930','beijing','北京','','');

citys[1]=new Array('sh','上海','shanghai','sh','8288','shanghai','上海','','');

citys[2]=new Array('sy','三亚','sanya','sanya','3528','hainan','海南','','');

citys[3]=new Array('cd','成都','chengdu','cd','3935','sichuan','四川','','');

citys[4]=new Array('qd','青岛','qingdao','qd','2243','shandong','山东','','');

citys[5]=new Array('gz','广州','guangzhou','gz','2713','guangdong','广东','','');

citys[6]=new Array('hz','杭州','hangzhou','hz','4785','zhejiang','浙江','','');

citys[7]=new Array('dl','大连','dalian','dl','499','liaoning','辽宁','','');

citys[8]=new Array('sz','苏州','suzhou','su','1918','jiangsu','江苏','','');

citys[9]=new Array('xg','香港','xianggang','xianggang','297','xianggang','香港','','');

citys[10]=new Array('qhd','秦皇岛','qinhuangdao','qinhuangdao','257','hebei','河北','',''); 

citys[11]=new Array('xa','西安','xian','xa','2755','shanxi','陕西','','');

citys[12]=new Array('wh','威海','weihai','wei','82','shandong','山东','','');

citys[13]=new Array('sz','深圳','shenzhen','sz','5850','guangdong','广东','','');

citys[14]=new Array('heb','哈尔滨','haerbin','hrb','376','heilongjiang','黑龙江','','');

citys[15]=new Array('km','昆明','kunming','km','344','yunnan','云南','','');

citys[16]=new Array('cq','重庆','chongqing','cq','2733','zhongqing','重庆','','');

citys[17]=new Array('nj','南京','nanjing','nj','2108','jiangsu','江苏','','');

citys[18]=new Array('wh','武汉','wuhan','wh','2753','hubei','湖北','','');

citys[19]=new Array('jn','济南','jinan','jn','261','shandong','山东','','');

citys[20]=new Array('tj','天津','tianjin','tj','1475','tianjin','天津','','');

citys[21]=new Array('sy','沈阳','shenyang','sy','1718','liaoning','辽宁','','');

citys[22]=new Array('xm','厦门','xiamen','xm','2425','fujian','福建','','');

citys[23]=new Array('cs','长沙','changsha','cs','1593','hunan','湖南','','');

citys[24]=new Array('rz','日照','rizhao','rizhao','28','shandong','山东','','');

citys[25]=new Array('gl','桂林.阳朔','guilin','gl','145','guangxi','广西','','');

citys[26]=new Array('zz','郑州','zhengzhou','zz','3088','henan','河南','','');

citys[27]=new Array('hf','合肥','hefei','hf','191','anhui','安徽','','');

citys[28]=new Array('sjz','石家庄','shijiazhuang','sjz','479','hebei','河北','','');

citys[29]=new Array('wx','无锡','wuxi','wx','291','jiangsu','江苏','','');

citys[30]=new Array('fz','福州','fuzhou','fz','328','fujian','福建','','');

citys[31]=new Array('dl','大理','dali','dali','23','yunnan','云南','','');

citys[32]=new Array('hk','海口','haikou','hn','3015','hainan','海南','','');

citys[33]=new Array('bh','北海','beihai','beihai','127','guangxi','广西','','');

citys[34]=new Array('lj','丽江','lijiang','lijiang','180','yunnan','云南','','');

citys[35]=new Array('zh','珠海','zhuhai','zhuhai','84','guangdong','广东','','');

citys[36]=new Array('nb','宁波','ningbo','nb','46','zhejiang','浙江','','');

citys[37]=new Array('ty','太原','taiyuan','ty','42','shanxi','山西','','');

citys[38]=new Array('cc','长春','changchun','cc','141','jilin','吉林','','');

citys[39]=new Array('yt','烟台','yantai','yantai','244','shandong','山东','','');

citys[40]=new Array('dt','大同','datong','datong','161','shanxi','山西','','');

citys[41]=new Array('hs','黄山','huangshan','huangshan','72','anhui','安徽','','');

citys[42]=new Array('kf','开封','kaifeng','kaifeng','10','henan','河南','','');

citys[43]=new Array('lz','兰州','lanzhou','lz','57','gansu','甘肃','','');

citys[44]=new Array('ly','洛阳','luoyang','luoyang','120','henan','河南','','');

citys[45]=new Array('nn','南宁','nanning','nn','409','guangxi','广西','','');

citys[46]=new Array('zjj','张家界','zhangjiajie','zhangjiajie','32','hunan','湖南','','');

citys[47]=new Array('zs','舟山','zhoushan','zhoushan','3','zhejiang','浙江','','');

citys[48]=new Array('ta','泰山/泰安','taian','taian','','shandong','山东','','');

citys[49]=new Array('ls','乐山','leshan','leshan','7','sichuan','四川','','');

citys[50]=new Array('ts','唐山','tangshan','tangshan','24','hebei','河北','','');

citys[51]=new Array('wf','潍坊','weifang','weifang','49','shandong','山东','','');

citys[52]=new Array('xsbn','西双版纳','xishuangbanna','xishuangbanna','13','yunnan','云南','','');

citys[53]=new Array('yb','延边','yanbian','yanbian','62','jilin','吉林','','');

citys[54]=new Array('yz','扬州','yangzhou','yangzhou','129','jiangsu','江苏','','');

citys[55]=new Array('wz','温州','wenzhou','wenzhou','15','zhejiang','浙江','','');

citys[56]=new Array('bd','保定','baoding','baoding','77','hebei','河北','','');

citys[57]=new Array('cz','常州','changzhou','changzhou','222','jiangsu','江苏','','');

citys[58]=new Array('cd','承德','chengde','chengde','102','hebei','河北','','');

citys[59]=new Array('dd','丹东','dandong','dandong','33','liaoning','辽宁','','');

citys[60]=new Array('fs','佛山','foshan','foshan','1403','guangdong','广东','','');

citys[61]=new Array('gy','贵阳','guiyang','gy','90','guizhou','贵州','','');

citys[62]=new Array('hhht','呼和浩特','huhehaote','nmg','177','neimenggu','内蒙古','','');

citys[63]=new Array('yc','银川','yinchuan','yc','18','ningxia','宁夏','','');

citys[64]=new Array('zz','漳州','zhangzhou','zhangzhou','96','fujian','福建','','');

citys[65]=new Array('zs','中山','zhongshan','zhongshan','81','guangdong','广东','','');

citys[66]=new Array('jl','吉林','jilinshi','jilin','43','jilin','吉林','','');

citys[67]=new Array('xn','西宁','xining','xn','140','qinghai','青海','','');

citys[68]=new Array('yk','营口','yingkou','yingkou','7','liaoning','辽宁','','');

citys[69]=new Array('djy','都江堰','dujiangyan','cd','3','chengdu','成都','362282','S');

citys[70]=new Array('gly','鼓浪屿','gulangyu','xm','37','xiamen','厦门','203755727','D');

citys[71]=new Array('nc','南昌','nanchang','nc','141','jiangxi','江西','','');

citys[72]=new Array('as','鞍山','anshan','anshan','29','liaoning','辽宁','','');

citys[73]=new Array('xx','新乡','xinxiang','xinxiang','22','henan','河南','','');

citys[74]=new Array('hlbe','呼伦贝尔','hulunbeier','hulunbeier','15','neimenggu','内蒙古','','');

citys[75]=new Array('xz','徐州','xuzhou','xuzhou','105','jiangsu','江苏','','');

citys[76]=new Array('wlmq','乌鲁木齐','wulumuqi','xj','34','xinjiang','新疆','','');

citys[77]=new Array('twhl','台湾.花莲','taiwanhualian','twhl','','taiwanhualian','台湾.花莲','','');

citys[78]=new Array('ly','临沂','linyi','linyi','60','shandong','山东','','');

citys[79]=new Array('jz','锦州','jinzhou','jinzhou','6','liaoning','辽宁','','');

citys[80]=new Array('hld','葫芦岛','huludao','huludao','','liaoning','辽宁','');

citys[81]=new Array('dg','东莞','dongguan','dg','31','guangdong','广东','','');

citys[82]=new Array('pl','蓬莱','penglai','penglai','932','xiamen','山东','','P');

citys[83]=new Array('bao','博鳌','boao','boao','103721','xiamen','海南','','B');

citys[84]=new Array('hld','东戴河','dongdaihe','dongdaihe','','liaoning','辽宁','');

citys[85]=new Array('hld','鄂尔多斯','eerduosi','eerduosi','','neimenggu','辽宁','');

citys[86]=new Array('qhd','北戴河','qinhuangdao','bei','257','hebei','河北','','');

citys[87]=new Array('es','恩施','enshi','en','331','hubei','湖北','','');

citys[88]=new Array('jj','九江','jiujiang','jiu','217','jiangxi','江西','','');

citys[89]=new Array('ls','凉山','liangshan','liang','54','sichuan','四川','','');

citys[90]=new Array('hz','惠州','huizhou','hui','23','guangdong','广东','','');

citys[91]=new Array('hz','汉中','hanzhong','han','182','shanxi','陕西','','');

citys[92]=new Array('shz','石河子','shihezi','shi','255','xinjiang','新疆','','');

citys[93]=new Array('my','绵阳','mianyang','mian','49','sichuan','四川','','');

citys[94]=new Array('cz','长治','changzhi','chang','158','shanxi','山西','','');

citys[95]=new Array('zjk','张家口','zhangjiakou','zhang','7','hebei','河北','','');

citys[96]=new Array('gz','甘孜','ganzi','gan','284','sichuan','四川','','');

citys[97]=new Array('als','阿拉善','alashan','als','322','neimenggu','内蒙古','','');

citys[98]=new Array('dz','儋州','danzhou','dz','392','hainan','海南','','');

citys[99]=new Array('lf','廊坊','langfang','lf','10','hebei','河北','','');

citys[100]=new Array('zj','湛江','zhanjiang','zj','264','guangdong','广东','','');

citys[101]=new Array('mm','茂名','maoming','mm','22','guangdong','广东','','');

citys[102]=new Array('jx','嘉兴.西塘','jiaxingxitang','jx','29','zhejiang','浙江','','');
*/
function initCityList()
{
	$.get("/getListOfOpenAndHot/", function(data) 
	{
	    if(data.opencitys != null && data.opencitys.length > 0)
	    {
	    	var t=0;
			for(var i = 0;i < data.opencitys.length;i++)
			{
				var city = data.opencitys[i];
				citys[i] = new Array(city.simplespellcn,city.namechinese,city.spellchinese,city.simplespellcn,'',city.spellprovince,city.province,'','',city.internation);
				if(city.ishotcity==1)
				{
					hotcitys[t]=new Array(city.simplespellcn,city.namechinese,city.spellchinese,city.simplespellcn,'',city.spellprovince,city.province,'','',city.internation);
					t++;
				}
			}
	    }
	},'JSON');
}
initCityList();
