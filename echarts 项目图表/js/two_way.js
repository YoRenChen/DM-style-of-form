/*
 *数据集获取：（1）way函数获取：name:[大洲],way:[出行方式]，year:[三年的数据]
 *           （2）Asia_way函数获取：name[城市]，way:[出行方式]，year:[三年的数据]
 * 
 * */

function way(){
	var myChart_year = echarts.init(document.getElementById('way'));
	myChart_year.showLoading();
	var dataYear = [];
    var serise1 = [];
    var serise2 = [];
    var serise3 = [];
	var dataName = ['亚洲', '美洲', '欧洲', '大洋洲', '其他国家'];
	var dataWay =["徒步","汽车","火车","船舶","飞机"];
	$.get('http://139.199.178.96:8080/Travel/all?m=getContientSumWay',
	function(result){
		for(i = 0; i < result.length; i++) {
				dataYear.push(result[i]);
		}
		for(i=0;i<dataName.length;i++){
			serise1.push({
				type:'bar',
				name:dataWay[i],
				data:dataYear[0][i],
			})
		}
		for(i=0;i<dataName.length;i++){
			serise2.push({
				type:'bar',
				name:dataWay[i],
				data:dataYear[1][i],
			})
		}
		for(i=0;i<dataName.length;i++){
			serise3.push({
				type:'bar',
				name:dataWay[i],
				data:dataYear[2][i],
			})
		}
		myChart_year.hideLoading();
		option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01', '2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				x: '30%',
				y: '7%',
				data: dataWay,//载入出行方式
			},
			calculable: true,
			grid: {
				show: true,
				right: '10%',
				left: '3%',
				bottom: '15%',
				top: '15%',
				containLabel: true,
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			},
			toolbox: {
				show: true,
				right: '3%',
				//   feature：{}     配置各项工作 
				feature: {
					//    magicType:图标:图表的转换 	
					magicType: {
						show: true,
						type: ['bar', 'line']
					},
					//     自定义图标
					myTool_way: {
						show: true,
						title: '世界出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way();
						}
					},
					myTool_Aisa: {
						show: true,
						title: '亚洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Other();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': dataName,
				splitLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				name: '万人'
			}],
			series: [],
		},
		options: [{
				tooltip: {},
				title: {
					text: '2013年 国际旅游出行方式',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 国际旅游出行方式',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国际旅游出行方式',

				},
				series: serise3
			},
		]

	};
	    myChart_year.setOption(option);

	});
	};
function way_Asia(){
	var myChart_year = echarts.init(document.getElementById('way'));
	var data=[];
	var dataData=[];
	var dataName=[];
	var serise1 = [];
    var serise2 = [];
    var serise3 = [];
    var dataWay =["徒步","汽车","火车","船舶","飞机"];
	myChart_year.showLoading();
	$.get('http://139.199.178.96:8080/Travel/all',{'m':'getCountrySumWay','z':'亚洲'},
	function(result){
		for(i = 0; i < result['datalist'].length; i++) {
				dataData.push(result['datalist'][i]);
		}
		console.log(dataData);
		for(i = 0; i < result['namelist'].length; i++) {
				dataName.push(result['namelist'][i]);
		}
		console.log(dataWay.length);
		for(i=0;i<dataWay.length;i++){
			serise1.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[0][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise2.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[1][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise3.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[2][i],
			})
		}
		myChart_year.hideLoading();
		option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01', '2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				x: '30%',
				y: '7%',
				data: dataWay,//载入出行方式
			},
			calculable: true,
			grid: {
				show: true,
				right: '10%',
				left: '3%',
				bottom: '15%',
				top: '15%',
				containLabel: true,
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			},
			toolbox: {
				show: true,
				right: '3%',
				//   feature：{}     配置各项工作 
				feature: {
					//    magicType:图标:图表的转换 	
					magicType: {
						show: true,
						type: ['bar', 'line']
					},
					//     自定义图标
				    myTool_way: {
						show: true,
						title: '世界出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way();
						}},
					myTool_Aisa: {
						show: true,
						title: '亚洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Other();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data':dataName,
	//载入亚洲不同国家名字数据
				splitLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				name: '万人'
			}],
			series: [],
		},
		options: [{
				tooltip: {},
				title: {
					text: '2013年 亚洲旅游出行方式',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 亚洲旅游出行方式',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 亚洲旅游出行方式',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);

	});
	};
function way_America(){
	var myChart_year = echarts.init(document.getElementById('way'));
	var data=[];
	var dataData=[];
	var dataName=[];
	var serise1 = [];
    var serise2 = [];
    var serise3 = [];
    var dataWay =["徒步","汽车","火车","船舶","飞机"];
	myChart_year.showLoading();
	$.get('http://139.199.178.96:8080/Travel/all',{'m':'getCountrySumWay','z':'美洲'},
	function(result){
		for(i = 0; i < result['datalist'].length; i++) {
				dataData.push(result['datalist'][i]);
		}
		console.log(dataData);
		for(i = 0; i < result['namelist'].length; i++) {
				dataName.push(result['namelist'][i]);
		}
		console.log(dataWay.length);
		for(i=0;i<dataWay.length;i++){
			serise1.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[0][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise2.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[1][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise3.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[2][i],
			})
		}
		myChart_year.hideLoading();
		option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01', '2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				x: '30%',
				y: '7%',
				data:dataWay,//载入出行方式
			},
			calculable: true,
			grid: {
				show: true,
				right: '10%',
				left: '3%',
				bottom: '15%',
				top: '15%',
				containLabel: true,
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			},
			toolbox: {
				show: true,
				right: '3%',
				//   feature：{}     配置各项工作 
				feature: {
					//    magicType:图标:图表的转换 	
					magicType: {
						show: true,
						type: ['bar', 'line']
					},
					//     自定义图标
					myTool_way: {
						show: true,
						title: '世界出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way();
						}
					},
					myTool_Aisa: {
						show: true,
						title: '亚洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Other();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				
				'data': dataName,	//载入美洲不同国家名字数据

				splitLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				name: '万人'
			}],
			series: [],
		},
		options: [{
				tooltip: {},
				title: {
					text: '2013年 美洲旅游出行方式',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 美洲旅游出行方式',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 美洲旅游出行方式',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);

	});
	};
function way_Europe(){
	var myChart_year = echarts.init(document.getElementById('way'));
	var data=[];
	var dataData=[];
	var dataName=[];
	var serise1 = [];
    var serise2 = [];
    var serise3 = [];
    var dataWay =["徒步","汽车","火车","船舶","飞机"];
	myChart_year.showLoading();
	$.get('http://139.199.178.96:8080/Travel/all',{'m':'getCountrySumWay','z':'欧洲'},
   function(result){
   	for(i = 0; i < result['datalist'].length; i++) {
				dataData.push(result['datalist'][i]);
		}
		console.log(dataData);
		for(i = 0; i < result['namelist'].length; i++) {
				dataName.push(result['namelist'][i]);
		}
		console.log(dataWay.length);
		for(i=0;i<dataWay.length;i++){
			serise1.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[0][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise2.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[1][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise3.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[2][i],
			})
		}
		myChart_year.hideLoading();
		option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01', '2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				x: '30%',
				y: '7%',
				data:dataWay,//载入出行方式
			},
			calculable: true,
			grid: {
				show: true,
				right: '10%',
				left: '3%',
				bottom: '15%',
				top: '15%',
				containLabel: true,
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			},
			toolbox: {
				show: true,
				right: '3%',
				//   feature：{}     配置各项工作 
				feature: {
					//    magicType:图标:图表的转换 	
					magicType: {
						show: true,
						type: ['bar', 'line']
					},
					//     自定义图标
					myTool_way: {
						show: true,
						title: '世界出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way();
						}
					},
					myTool_Aisa: {
						show: true,
						title: '亚洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Other();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				
				'data': dataName,	//载入欧洲不同国家名字数据

				splitLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				name: '万人'
			}],
			series: [],
		},
		options: [{
				tooltip: {},
				title: {
					text: '2013年 欧洲旅游出行方式',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 欧洲旅游出行方式',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 欧洲旅游出行方式',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);
   });
	
};
function way_Oceania(){
	var myChart_year = echarts.init(document.getElementById('way'));
	var data=[];
	var dataData=[];
	var dataName=[];
	var serise1 = [];
    var serise2 = [];
    var serise3 = [];
    var dataWay =["徒步","汽车","火车","船舶","飞机"];
	myChart_year.showLoading();
	$.get('http://139.199.178.96:8080/Travel/all',{'m':'getCountrySumWay','z':'大洋洲'},
	function(result){
		for(i = 0; i < result['datalist'].length; i++) {
				dataData.push(result['datalist'][i]);
		}
		console.log(dataData);
		for(i = 0; i < result['namelist'].length; i++) {
				dataName.push(result['namelist'][i]);
		}
		console.log(dataWay.length);
		for(i=0;i<dataWay.length;i++){
			serise1.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[0][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise2.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[1][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise3.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[2][i],
			})
		}
		myChart_year.hideLoading();
		option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01', '2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				x: '30%',
				y: '7%',
				data: dataWay,//载入出行方式
			},
			calculable: true,
			grid: {
				show: true,
				right: '10%',
				left: '3%',
				bottom: '15%',
				top: '15%',
				containLabel: true,
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			},
			toolbox: {
				show: true,
				right: '3%',
				//   feature：{}     配置各项工作 
				feature: {
					//    magicType:图标:图表的转换 	
					magicType: {
						show: true,
						type: ['bar', 'line']
					},
					//     自定义图标
					myTool_way: {
						show: true,
						title: '世界出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way();
						}
					},
					myTool_Aisa: {
						show: true,
						title: '亚洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Other();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				
				'data': dataName,	//载入欧洲不同国家名字数据

				splitLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				name: '万人'
			}],
			series: [],
		},
		options: [{
				tooltip: {},
				title: {
					text: '2013年 大洋洲旅游出行方式',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 大洋洲旅游出行方式',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 大洋洲旅游出行方式',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);
	})
	
};
function way_Other(){
	var myChart_year = echarts.init(document.getElementById('way'));
	var data=[];
	var dataData=[];
	var dataName=[];
	var serise1 = [];
    var serise2 = [];
    var serise3 = [];
    var dataWay =["徒步","汽车","火车","船舶","飞机"];
	myChart_year.showLoading();
	$.get('http://139.199.178.96:8080/Travel/all',{'m':'getCountrySumWay','z':'其他洲'},
    function(result){
    		for(i = 0; i < result['datalist'].length; i++) {
				dataData.push(result['datalist'][i]);
		}
		console.log(dataData);
		for(i = 0; i < result['namelist'].length; i++) {
				dataName.push(result['namelist'][i]);
		}
		console.log(dataWay.length);
		for(i=0;i<dataWay.length;i++){
			serise1.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[0][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise2.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[1][i],
			})
		}
		for(i=0;i<dataWay.length;i++){
			serise3.push({
				type:'bar',
				name:dataWay[i],
				data:dataData[2][i],
			})
		}
		myChart_year.hideLoading();
		option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01', '2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				x: '30%',
				y: '7%',
				data: dataWay,//载入出行方式
			},
			calculable: true,
			grid: {
				show: true,
				right: '10%',
				left: '3%',
				bottom: '15%',
				top: '15%',
				containLabel: true,
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			},
			toolbox: {
				show: true,
				right: '3%',
				//   feature：{}     配置各项工作 
				feature: {
					//    magicType:图标:图表的转换 	
					magicType: {
						show: true,
						type: ['bar', 'line']
					},
					//     自定义图标
					myTool_way: {
						show: true,
						title: '世界出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way();
						}
					},
					myTool_Aisa: {
						show: true,
						title: '亚洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家出行情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							way_Other();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				
				'data': dataName,	//载入不同国家名字数据

				splitLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				name: '万人'
			}],
			series: [],
		},
		options: [{
				tooltip: {},
				title: {
					text: '2013年 其他国家旅游出行方式',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 其他国家旅游出行方式',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 其他国家旅游出行方式',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);
    })
	
};
