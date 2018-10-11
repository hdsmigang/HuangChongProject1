var bannerAutoChange;
var bannerMax = 6;

//速订城市弹窗
var cityBoxLayer;

$(document).ready(function() {
	var canchange = true; //图片是否能切换
	var currentIndex = 0; //当前图片次序

	//鼠标放到大图上后，图片轮播静止
	var bigbannerTab = $('.big-banner li');
	bigbannerTab.each(function(e) {
		bigbannerTab.eq(e).mouseover(function() { //鼠标覆盖，停止轮播
			canchange = false;
			currentIndex = $(this).index();
		});
		bigbannerTab.eq(e).mouseleave(function() { //鼠标离开，开始轮播
			canchange = true;
			currentIndex = $(this).index();
		});
	});

	//切换方法
	function bannerChange(showIndex) {
		currentIndex = showIndex;
		var bigbannerch = $('.big-banner li');
		bigbannerch.each(function(e) {
			var bigli = bigbannerch.eq(e);
			if(bigli.index() == currentIndex) {
				bigli.css("display", "list-item");
				bigli.css("opacity", "0.3");
				bigli.stop().animate({
					opacity: '1'
				}, 1000);
			} else {
				if(bigli.index() == currentIndex - 1) {
					bigli.stop().animate({
						opacity: '0.25'
					}, 200, function() {
						bigli.css("display", "none");
					});
				} else {
					bigli.css("display", "none");
				}
			}
		});
		var smallbannerch = $('.small-banner li');
		smallbannerch.each(function(e) {
			var smallli = smallbannerch.eq(e);
			if((bannerMax - smallli.index()) == currentIndex) {
				smallli.children('a').addClass("current");
			} else {
				smallli.children('a').removeClass("current");
			}
		});
	}

	//小图事件切换
	var smallbannerTab = $('.small-banner li');
	smallbannerTab.each(function(e) {
		smallbannerTab.eq(e).mousemove(function() { //滑过切换一次	
			if(currentIndex != (bannerMax - $(this).index())) {
				currentIndex = (bannerMax - $(this).index());
				bannerChange(currentIndex);
			}
		});
		smallbannerTab.eq(e).mouseover(function() { //鼠标覆盖 切换，且停止轮播
			canchange = false;
			if(currentIndex != (bannerMax - $(this).index())) {
				currentIndex = (bannerMax - $(this).index());
				bannerChange(currentIndex);
			}
		});
		smallbannerTab.eq(e).mouseleave(function() { //鼠标离开，开始轮播
			canchange = true;
			currentIndex = (bannerMax - $(this).index());
		});
	});

	//自动轮播
	bannerAutoChange = function bannerAutoChange() {
		if(canchange) {
			var liShowIndex = currentIndex + 1;
			if(liShowIndex > bannerMax) {
				liShowIndex = 0;
			}
			bannerChange(liShowIndex);
		}
		setTimeout(function() {
			bannerAutoChange();
		}, 4000); //递归
	}

	//自启动图片轮播
	setTimeout(function() {
		bannerAutoChange();
	}, 2000); //递归
	//城市选择------------------------------------------------------------------
	serchInfo_backPC();
	//点击城市输入框
	$('#searchcityin').click(function(e) {
		$('.search-modal').fadeOut();
		getCityInfo_PC(e);
	});

	function getCityInfo_PC(e) {
		if(this.value == this.defaultValue) {
			this.value = "";
		}
		var s = $('#searchcityin').val();
		//在输入框获取焦点时始终展示各个城市列表与是否已选中城市无关，若想采取城市关联释放if条件即可
		/*if(null!=s&&s.length>0){
			getSuggests(e,0);
		}else{*/
		var searchkey = getCookie('searchkey');
		if(null != searchkey && searchkey.length > 0) {
			var keys = searchkey.replace(/\"/ig, '').split(',');
			var data = '';
			var keys_new = keys.sort(keysort);
			for(var i = keys_new.length - 1; i > -1; i--) {
				var localHistoy = keys[i].split('&');
				if(localHistoy[2] == 1) {
					$("#searchcityin").attr("typeid", "0");
					var surl = "";
					if(localHistoy[1].indexOf("?s=") == -1) {
						surl = localHistoy[1] + "?s=" + localHistoy[0];
					} else {
						surl = localHistoy[1];
					}
					data += '<li class="citylili"><a class="cityselecta" href="javascript:void(0)" cityname="' + localHistoy[0] + '" isDiBiao="' + localHistoy[2] + '" surl="' + surl + '" citypinyin="' + localHistoy[0] + '">' + localHistoy[0] + '</a></li>';
				} else {
					$("#searchcityin").attr("typeid", "3");
					data += '<li class="citylili"><a class="cityselecta"  href="javascript:void(0)" cityname="' + localHistoy[0] + '" isDiBiao="' + localHistoy[2] + '" surl="' + localHistoy[1] + '" citypinyin="' + localHistoy[0] + '">' + localHistoy[0] + '</a></li>';
				}
			}
			$("#searh-recent").html(data);
			$('.cityselecta').click(function(e) {
				var isDiBiao = $(this).attr("isDiBiao");
				if(isDiBiao == 1) {
					$("#searchcityin").attr("typeid", "0");
				} else {
					$("#searchcityin").attr("typeid", "3");
				}
				if($('#checkinday').val == '') {
					$("#checkinday,#checkoutday").click();
				}
				$("#cityselecttitleul").find('li').removeClass();
				$("#cityselecttitleul").find('li:eq(0)').attr('class', 'active');
			});
			$(".searh-recent").css('display', 'block');
		} else {
			$(".searh-recent").css('display', 'none');
			$(".select-hotcity").css('display', 'block');
		}
		//字母选择城市绿色标记切换
		$("#cityselecttitleul").find('li').removeClass();
		$("#cityselecttitleul").find('li:eq(0)').attr('class', 'active');
		$("#hotcity").addClass('selected').parent().siblings().children().removeClass('selected');
		loadhotCity();
		loadheadCity('a_b_c_d', $("#cityselectulcity"));
		$("#searchcitydiv").css("display", "block");
		$(".error_tip").css('display', 'none');
		//			}   在输入框获取焦点时始终展示各个城市列表与是否已选中城市无关，若想采取城市关联释放if条件即可
	}

	//点击时间输入框
	$("#checkinday,#checkoutday").click(function() {
		//去除指定日期的网格线
		$('.calendar-month .calendar-day .old').each(function() {
			if($(this).find('span').length == 0) {
				$(this).addClass('bor-none');
			}
		});
		if(this.value == this.defaultValue) {
			this.value = "";
		}
	});

	//输入框失去焦点
	/*$('#searchcityin,#checkinday,#checkoutday').blur(function(){   	
	    if(this.value==""){
	          this.value=this.defaultValue;
	    }
	});*/

	//点击城市右侧下拉三角
	$('#searchcityb').click(function() {
		loadhotCity();
		$("#searchcitydiv").css("display", "block");
	});

	//加载热门城市
	function loadhotCity() {
		
		var redHotCity = ["sanya", "xiamen", "beihai", "haerbin", "haikou", "xianggang"];
		var imageCity = ["sanya", "xiamen", "xianggang"];

		for(var city in hotcitys) {
			var cityinfo = hotcitys[city];
			// 	 20180601
			var a = '<li class="citylili"><a class="cityselecta" href="javascript:void(0)" cityname="' + cityinfo[1] + '" surl="/' + cityinfo[2] + '" citypinyin="' + cityinfo[2] + '">' + cityinfo[1] + '</a></li>';
			$('#cityselectul').append(a);
			$('.cityselecta').click(function(e) {
				var isDiBiao = $(this).attr("isDiBiao");
				if(isDiBiao == 1) {
					$("#searchcityin").attr("typeid", "0");
				} else {
					$("#searchcityin").attr("typeid", "3");
				}
				if($('#checkinday').val == '') {
					$("#checkinday,#checkoutday").click();
				}
				$("#cityselecttitleul").find('li').removeClass();
				$("#cityselecttitleul").find('li:eq(0)').attr('class', 'active');
				//				$("#clearCityInfo").show();//展示清除按钮
			});
		}
	}
	//加载某类首字母的城市
	function loadheadCity(value, node) {
		node.html('');
		var values = new Array();
		values = value.split("_");
		var imageCity = ["hangzhou", "yangzhou", "qingdao", "weihai"];
		var ctx1 = $('#ctx1').val();
		for(i = 0; i < values.length; i++) {
			var head = values[i];
			var str = '<div class="cityselectul_div">';
			str += '<span class="letter">' + head.toUpperCase() + '</span><ul class="clearfloat">';
			for(var city in citys) {
				var cityinfo = citys[city];
				var citypinyin = cityinfo[2];
				var citypinyinH = cityinfo[3];
				var internation = cityinfo[9];
				if(citypinyinH != undefined && citypinyinH.substring(0, 1) == head && internation == 0) {
					var a = '<li class="citylili"><a class="cityselecta" href="javascript:void(0)" cityname="' + cityinfo[1] + '" surl="/' + cityinfo[2] + '" citypinyin="' + cityinfo[2] + '">' + cityinfo[1] + '</a></li>';
					//					for(var hcity in hotcitys){
					//						var hotcity = hotcitys[hcity];
					//						if(citypinyin == hotcity[2]){
					//							 a = '<li class="citylili"  ><a class="cityselecta" style=" color: #22bb62;" href="javascript:void(0)" cityname="'+cityinfo[1]+'" surl="/'+cityinfo[2]+'" citypinyin="'+cityinfo[2]+'">'+cityinfo[1]+'</a></li>';
					//							 break;
					//						}
					//					}
					str += a;
				}
			}
			str += '</ul></div>';
			node.append(str);
			$('.cityselecta').click(function(e) {
				var isDiBiao = $(this).attr("isDiBiao");
				if(isDiBiao == 1) {
					$("#searchcityin").attr("typeid", "0");
				} else {
					$("#searchcityin").attr("typeid", "3");
				}
				if($('#checkinday').val == '') {
					$("#checkinday,#checkoutday").click();
				}
				$("#cityselecttitleul").find('li').removeClass();
				$("#cityselecttitleul").find('li:eq(0)').attr('class', 'active');
			});
		}
	}

	//加载海外城市
	function loadOverseasCity(node) {
		node.html('');
		for(var city in citys) {
			var cityinfo = citys[city];
			var citypinyinH = cityinfo[3];
			var internation = cityinfo[9];
			if(citypinyinH != undefined && internation > 0) {
				var a = '<li class="citylili"><a class="cityselecta" href="javascript:void(0)" cityname="' + cityinfo[1] + '" surl="/' + cityinfo[2] + '" citypinyin="' + cityinfo[2] + '">' + cityinfo[1] + '</a></li>';
				node.append(a);
				$('.cityselecta').click(function(e) {
					var isDiBiao = $(this).attr("isDiBiao");
					if(isDiBiao == 1) {
						$("#searchcityin").attr("typeid", "0");
					} else {
						$("#searchcityin").attr("typeid", "3");
					}
					if($('#checkinday').val == '') {
						$("#checkinday,#checkoutday").click();
					}
					$("#cityselecttitleul").find('li').removeClass();
					$("#cityselecttitleul").find('li:eq(0)').attr('class', 'active');
				});
			}
		}
	}

	//城市tab选择
	var cityTab = $('#cityselecttitleul li a');
	cityTab.each(function(e) {
		cityTab.eq(e).click(function() {
			$(this).addClass('selected').parent().siblings().children().removeClass('selected');
			var value = $(this).attr("value");
			if(value == "hotcity") {
				loadhotCity($('#hotcity'));
			} else if(value == "overseas") {
				loadOverseasCity($("#cityselectul"));
			} else {
				loadheadCity(value, $("#cityselectul"));
			}
		});
	});

	//城市选择
	$('#cityselectul,#searh-recent,#cityselectulcity').click(function(e) {
		if($(e.target).hasClass("cityselecta")) {
			var citya = $(e.target);
			$('#searchcityin').val(citya.attr("cityname"));
			$('#searchcityin').attr("cityname", citya.attr("cityname"));
			$('#searchcityin').attr("citypinyin", citya.attr("citypinyin"));
			$('#searchcityin').attr("surl", citya.attr("surl"));
			$('#searchcityin').attr("surl", citya.attr("typeid"));
			$("#searchcitydiv").css("display", "none");
			//自启动图片轮播
			setTimeout(function() {
				var checkinday = $('#checkinday').val();
				var checkoutday = $('#checkoutday').val();
				if(checkinday == undefined || checkinday == '' || checkinday == '入住时间' ||
					checkoutday == undefined || checkoutday == '' || checkoutday == '退房时间') {
					$('#checkinday').click();
				}
			}, 100); //递归
		}
	});

	//通过城市名找
	function getCityPinyinbyName(cityname) {
		for(var city in citys) {
			var cityinfo = citys[city];
			if(cityinfo[1] == cityname) {
				return cityinfo[2];
				break;
			}
		}
		return null;
	}

	//立即搜搜
	$('#tosearchlist').click(function(e) {
		var value = $('#searchcityin').val().trim();
		if(value == '') {
			getCityInfo_PC(e);
		} else {
			searchBtnClick(value, 0, 'index');
		}
		/**
		var value = $('#searchcityin').val();
		var citypinyin = getCityPinyinbyName(value);
		if(citypinyin==null){
		       citypinyin = "beijing";
		}
		if(citypinyin!=null&&citypinyin!=""){
			var ctx = $('#ctx').val();
			var url =ctx+"/"+citypinyin;
			var checkinday = $('#checkinday').val();
			if(checkinday!=null&&checkinday!=""&&checkinday!="入住时间"){
				url = url + "?d1="+checkinday;
				var checkoutday = $('#checkoutday').val();
				if(checkoutday!=null&&checkoutday!=""&&checkoutday!="退房时间"){
						url = url + "&d2="+checkoutday;
				}
			}
			window.location.href = url;
		}*/
	});

	//特色短租 start 
	function buildCitysByType(sBanner, leaseType) {
		var str = "";
		//默认hot城市列表
		var validCitys = hotcitys;
		//获得有效城市列表
		if(sBanner != "hotcity") {
			validCitys = [];
			var values = sBanner.split("_");
			var j = 0;
			for(i = 0; i < values.length; i++) {
				//TODO 周租、月租房添加过滤
				var head = values[i];
				for(var city in citys) {
					var cityinfo = citys[city];
					var citypinyin = cityinfo[2];
					if(citypinyin.substring(0, 1) == head) {
						validCitys[j] = cityinfo;
						j++;
					}
				}
			}
		}

		for(var city in validCitys) {
			var cityinfo = validCitys[city];
			if(leaseType == "fast") {
				str += '<li><a href="javascript:void(0)" rel="nofollow" class="fastcityselboxa stclick" clicktag="6_1_2" citypinyin="' + cityinfo[2] + '" onclick="clickCity1(this)">' + cityinfo[1] + '</a></li>';
			}
			if(leaseType == "family") {
				str += '<li><a href="javascript:void(0)" rel="nofollow" class="fastcityselboxa stclick" clicktag="6_1_2" citypinyin="' + cityinfo[2] + '" onclick="clickCity1(this)">' + cityinfo[1] + '</a></li>';
			}
			if(leaseType == "rent") {
				str += '<li><a href="javascript:void(0)" rel="nofollow" class="weekmonthboxa stclick" clicktag="6_3_2" citypinyin="' + cityinfo[2] + '" onclick="clickCity1(this,\'rent\')">' + cityinfo[1] + '</a></li>';
			}
		}
		//FIXME 弹框 不能自动调整高度，需要对热门城市添加空白列 保证样式不错乱
		//		if(sBanner=='hotcity')
		//		{
		//			str+='<li><a citypinyin="sanya" clicktag="6_1_2" class="fastcityselboxa stclick" rel="nofollow" href="javascript:void(0)">&nbsp;</a></li>'
		//			str+='<li><a citypinyin="sanya" clicktag="6_1_2" class="fastcityselboxa stclick" rel="nofollow" href="javascript:void(0)">&nbsp;</a></li>'
		//		}
		//		
		return str;
	}

	function showCityBoxDiv(value, type) {
		cityBoxLayer = $.layer({
			closeBtn: [0, false],
			type: 1,
			title: false,
			offset: ['150px', ''],
			border: [0, 0, '', false],
			area: ['auto', 'auto'],
			// move : ['.d-h3',true],
			page: {
				dom: '#cityBoxDiv'
			}
		});
		$("#hot").addClass('selected').parent().siblings().children().removeClass('selected');
		$('#citysDiv').html("");
		var cityStr = buildCitysByType(value, type);
		$('#citysDiv').html(cityStr);

		$('#cityBoxDivClose').on('click', function() {
			layer.close(cityBoxLayer);
		});
	}

	var spType;
	//特色短租城市tab选择
	var spCityTab = $('#cityBanner li a');
	spCityTab.each(function(e) {
		spCityTab.eq(e).click(function() {
			$(this).addClass('selected').parent().siblings().children().removeClass('selected');
			var value = $(this).attr("value");
			$('#citysDiv').html("");
			var cityStr = buildCitysByType(value, spType);
			$('#citysDiv').append(cityStr);
		});
	});

	//点击速订出游
	$('#fastpaygo').click(function() {
		spType = "fast";
		showCityBoxDiv('hotcity', spType);
	});

	//点击全家出游
	$('#familygo').click(function() {
		spType = "family";
		showCityBoxDiv('hotcity', spType);
	});

	//点击周租月租
	$('.weekmonthgo').click(function() {
		spType = "rent";
		showCityBoxDiv('hotcity', spType);
	});

	//周租月租城市弹窗
	var weekmonthcityalertboxlayer;

	function showweekmonthalertboxdiv() {
		weekmonthcityalertboxlayer = $.layer({
			closeBtn: [0, false],
			type: 1,
			title: false,
			offset: ['150px', ''],
			border: [0, 0, '', false],
			area: ['auto', 'auto'],
			// move : ['.d-h3',true],
			page: {
				dom: '#weekmonthalertboxdiv'
			}
		});
		var ctx = $('#ctx').val();
		$.ajax({
			url: ctx + "/web/search/rent-2/citylist",
			type: 'POST',
			async: true,
			dataType: 'json',
			error: function(data) {
				layer.alert("批量操作失败，请稍候再试！", 8);
			},
			success: function(data) {
				var fastStr = "";
				if(data.citys.length != 0) {
					for(var i = 0; i < data.citys.length; i++) {
						var city = data.citys[i];
						fastStr += '<li><a href="javascript:void(0)"rel="nofollow" class="weekmonthboxa stclick" clicktag="6_3_2" citypinyin="' + city.pinyin + '">' + city.short_name + '</a></li>';
					}
				}
				$('#weekmonthselectulbox').html(fastStr);
			}
		});

		$('#weekmonthalertboxclose').on('click', function() {
			layer.close(weekmonthcityalertboxlayer);
		});
	}

	//底部热门城市
	var str = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'w', 'x', 'y', 'z'];
	for(var i = 0; i < str.length; i++) {
		if(i != 0) {
			//底部热门城市改成html
			//	$('#messages').append("<font color='orange' style='width:4px'><strong>"+str[i].toUpperCase()+"</strong></font>");
		}
		for(var j = 0; j < citys.length; j++) {
			if(citys[j][0].substr(0, 1) == str[i]) {
				//	$('#messages').append("<a href='"+citys[j][2]+"/' target='_blank' title='"+citys[j][1]+"' class='stclick' clicktag='10'>" + citys[j][1] + "</a>");
			}
		}
	}

	//目的地输入框清除操作
	$('#clearCityInfo').click(function(e) {
		if($("#searchcityin").val() != '城市、景点、商圈') {
			$("#searchcityin").val('');
			$("#searchcityin").removeAttr('cityname');
			$("#searchcityin").removeAttr('citypinyin');
			$("#searchcityin").removeAttr('typeid');
			$("#searchcityin").removeAttr('surl');
			$("#tip_searchcity").css("display", "none");
			$("#clearCityInfo").hide();
		}
		getCityInfo_PC(e);
	});
});

//首页有搜索行为后重回页面显示上次搜索信息
function serchInfo_backPC() {
	var v_1 = getCookie('searchkey');
	if(null != v_1 && v_1.length > 0) {
		var keys = v_1.replace(/\"/ig, '').split(',');
		var keys_new = keys.sort(keysort);
		var localHistoy = keys[keys.length - 1].split('&');
		$("#searchcityin").val(localHistoy[0]);
		$("#searchcityin").attr("citypinyin", localHistoy[1].replace(/\//g, ""));
		$("#searchcityin").attr("surl", '/' + localHistoy[1].replace(/\//g, ""));
		$("#searchcityin").attr("typeid", localHistoy[2]);
		//			 $('#clearCityInfo').show();
	}
	var v_listPC = getIndexBackInfo_PC('serInfo_back_PC');
	var listPC = v_listPC.split("_");
	var index_day;
	for(var i = 0, len = listPC.length; i < len; i++) {
		if(i == 0 && unescape(listPC[i]) != "&" && unescape(listPC[i]) != '') {
			$("#checkinday").val(unescape(listPC[i])).addClass("active");
			$('#clearSelect').show();
		} else if(i == 1 && unescape(listPC[i]) != "&" && unescape(listPC[i]) != '') {
			$("#checkoutday").val(unescape(listPC[i])).addClass("active");
		} else if(i == 2 && unescape(listPC[i]) != "&" && unescape(listPC[i]) != '') {
			$("#checkinday_value").val(unescape(listPC[i]));
			index_day = unescape(listPC[i]);
		} else if(i == 3 && unescape(listPC[i]) != "&" && unescape(listPC[i]) != '') {
			$("#checkoutday_value").val(unescape(listPC[i]));
		} else if(i == 4 && unescape(listPC[i]) != "&" && unescape(listPC[i]) != '') {
			$('#zrdays').text(unescape(listPC[i]));
		} else if(i == 5) {
			if(unescape(listPC[i]) == '&' || unescape(listPC[i]) == '') {
				$("#countVal").text('不限');
			} else {
				$('#countVal').attr("popnum", listPC[i]);
				$("#countVal").text(listPC[i] + "人");
			}
		}
	}
	//当前日期超过回显入住日期时，不带入日期。
	var nowday = new Date();
	var Month_value = (nowday.getMonth() < 9) ? '0' + (nowday.getMonth() + 1) : (nowday.getMonth() + 1);
	var Date_value = (nowday.getDate() < 10) ? '0' + (nowday.getDate()) : nowday.getDate();
	var nowday_value = nowday.getFullYear() + '-' + Month_value + '-' + Date_value;
	if(index_day < nowday_value) {
		$("#checkinday").val('');
		$("#checkinday_value").val('');
		$("#checkoutday").val('');
		$("#checkoutday_value").val('');
		$('#zrdays').text('0晚');
		$('#clearSelect').hide();
	}
}

function keysort(a, b) {
	return parseInt(a.split("&")[3]) - parseInt(b.split("&")[3]);
}

function getIndexBackInfo_PC(name) {
	var arr = document.cookie.split("; ");
	for(var i = 0, len = arr.length; i < len; i++) {
		var item = arr[i].split("=");
		if(item[0] == name) {
			return item[1];
		}
	}
	return "";
}

function clickCity1(node, type) {
	var citypinyin = $(node).attr("citypinyin");
	var ctx = $('#ctx').val();
	var url = ctx + '/' + citypinyin;
	if(type == 'rent') {
		url = ctx + '/' + citypinyin + '/%7Clongrent-1';
	}
	layer.close(cityBoxLayer);
	window.open(url);
}