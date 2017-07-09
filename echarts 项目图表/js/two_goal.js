/*
 *数据集获取：（1）goal函数获取：name:[大洲],way:[目的]，year:[三年各个大洲总和的数据]
 *           （2）Asia_goal函数获取：name[城市]，way:[目的]，year:[三年的数据]
 * 
 * */

function goal(){
	var myChart_year = echarts.init(document.getElementById('goal'));
	myChart_year.showLoading();
	var dataYear = [];
    var serise1 = [];
    var serise2 = [];
    var serise3 = [];
	var dataName = ['亚洲', '美洲', '欧洲', '大洋洲', '其他国家'];
	var dataWay =["商务","其他","探亲访友","服务员工","观光休闲"];
	$.get('http://139.199.178.96:8080/Travel/all?m=getContientSumPurpose',
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
				show:true,
				 trigger: 'axis',
			},
			legend: {
				x: '30%',
				y: '7%',
				data: dataWay,//载入目的
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
					myTool_Aisa: {
						show: true,
						title: '亚洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Other();
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
					text: '2013年 世界旅游出行目的',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 世界旅游出行目的',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 世界旅游出行目的',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);

	});
	
	
};
function goal_Asia(){
	var myChart_year = echarts.init(document.getElementById('goal'));
	myChart_year.showLoading();
	var dataYear = [];
    var serise1 = [];
    var serise2 = [];
    var serise3 = [];
	var dataName = [];
	var dataWay =["商务","其他","探亲访友","服务员工","观光休闲"];
	$.get('http://139.199.178.96:8080/Travel/all?m=getCountrySumPurpose&z=亚洲',
	function(result){
		for(i = 0; i < result.namelist.length; i++) {
				dataName.push(result.namelist[i]);
		}
		for(i = 0; i < result.datalist.length; i++) {
				dataYear.push(result.datalist[i]);
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
				data: dataWay,//载入目的
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
					myTool_Aisa: {
						show: true,
						title: '亚洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Other();
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
					text: '2013年 亚洲旅游出行目的',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 亚洲旅游出行目的',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 亚洲旅游出行目的',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);

	});
	
	
	
};

function goal_America(){
	
	
	var myChart_year = echarts.init(document.getElementById('goal'));
	myChart_year.showLoading();
	var dataYear = [];
    var serise1 = [];
    var serise2 = [];
    var serise3 = [];
	var dataName = [];
	var dataWay =["商务","其他","探亲访友","服务员工","观光休闲"];
	$.get('http://139.199.178.96:8080/Travel/all?m=getCountrySumPurpose&z=美洲',
	function(result){
		for(i = 0; i < result.namelist.length; i++) {
				dataName.push(result.namelist[i]);
		}
		for(i = 0; i < result.datalist.length; i++) {
				dataYear.push(result.datalist[i]);
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
				data: dataWay,//载入目的
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
					myTool_Aisa: {
						show: true,
						title: '亚洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Other();
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
					text: '2013年 美洲旅游出行目的',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 美洲旅游出行目的',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 美洲旅游出行目的',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);

	});
	
	
};
function goal_Europe(){
	var myChart_year = echarts.init(document.getElementById('goal'));
	myChart_year.showLoading();
	var dataYear = [];
    var serise1 = [];
    var serise2 = [];
    var serise3 = [];
	var dataName = [];
	var dataWay =["商务","其他","探亲访友","服务员工","观光休闲"];
	$.get('http://139.199.178.96:8080/Travel/all?m=getCountrySumPurpose&z=欧洲',
	function(result){
		for(i = 0; i < result.namelist.length; i++) {
				dataName.push(result.namelist[i]);
		}
		for(i = 0; i < result.datalist.length; i++) {
				dataYear.push(result.datalist[i]);
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
				data: dataWay,//载入目的
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
					myTool_Aisa: {
						show: true,
						title: '亚洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Other();
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
					text: '2013年 欧洲旅游出行目的',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 欧洲旅游出行目的',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 欧洲旅游出行目的',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);

	});
	
};
function goal_Oceania(){
	var myChart_year = echarts.init(document.getElementById('goal'));
	myChart_year.showLoading();
	var dataYear = [];
    var serise1 = [];
    var serise2 = [];
    var serise3 = [];
	var dataName = [];
	var dataWay =["商务","其他","探亲访友","服务员工","观光休闲"];
	$.get('http://139.199.178.96:8080/Travel/all?m=getCountrySumPurpose&z=大洋洲',
	function(result){
		for(i = 0; i < result.namelist.length; i++) {
				dataName.push(result.namelist[i]);
		}
		for(i = 0; i < result.datalist.length; i++) {
				dataYear.push(result.datalist[i]);
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
				data: dataWay,//载入目的
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
					myTool_Aisa: {
						show: true,
						title: '亚洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Other();
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
					text: '2013年 大洋洲旅游出行目的',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 大洋洲旅游出行目的',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 大洋洲旅游出行目的',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);

	});
	
};
function goal_Other(){
	var myChart_year = echarts.init(document.getElementById('goal'));
	myChart_year.showLoading();
	var dataYear = [];
    var serise1 = [];
    var serise2 = [];
    var serise3 = [];
	var dataName = [];
	var dataWay =["商务","其他","探亲访友","服务员工","观光休闲"];
	$.get('http://139.199.178.96:8080/Travel/all?m=getCountrySumPurpose&z=其他',
	function(result){
		for(i = 0; i < result.namelist.length; i++) {
				dataName.push(result.namelist[i]);
		}
		for(i = 0; i < result.datalist.length; i++) {
				dataYear.push(result.datalist[i]);
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
			tooltip: {},
			legend: {
				x: '30%',
				y: '7%',
				data: dataWay,//载入目的
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
					myTool_Aisa: {
						show: true,
						title: '亚洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_America: {
						show: true,
						title: '美洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_America();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Europe();
						}
					},
					myTool_Oceania: {
						show: true,
						title: '大洋洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Oceania();
						}
					},
					myTool_Other: {
						show: true,
						title: '其他国家情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							goal_Other();
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
					text: '2013年 其他旅游出行目的',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 其他旅游出行目的',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 其他旅游出行目的',

				},
				series: serise3
			},
		]

	};
	   myChart_year.setOption(option);

	});
	
};
