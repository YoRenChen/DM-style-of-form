function enter_reception(){
	var myChart_year = echarts.init(document.getElementById('way'));	
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
				data: [],//载入目的
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
						title: '入境旅游情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							enter_reception();
						}
					},
					myTool_Europe: {
						show: true,
						title: '过夜旅游情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							over_reception();
						}
					},
					myTool_America: {
						show: true,
						title: '入境消费情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							consumption_reception();
						}
					},
					myTool_Europe: {
						show: true,
						title: '境外人员情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							people_reception();
						}
					},					
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': [],
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
					text: '2013年 国际旅游出行目的',

				},
				series: [
				{
					type:'bar',
					name:data,//载入各个出行方式
					data:data,//载入数值
				}
				]
			},

			{
				tooltip: {},
				title: {
					text: '2014年 国际旅游出行目的',

				},
				series: [
				{
					type:'bar',
					name:data,//载入各个出行方式
					data:data,//载入数值
				}
				]
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国际旅游出行目的',

				},
				series: [{
					type:'bar',
					name:data,//载入各个出行方式
					data:data,//载入数值
				}
				]
			},
		]

	};
	   myChart_year.setOption(option);
};
function over_reception(){
	var myChart_year = echarts.init(document.getElementById('way'));	
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
				data: [],//载入目的
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
						title: '入境旅游情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							enter_reception();
						}
					},
					myTool_Europe: {
						show: true,
						title: '过夜旅游情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							over_reception();
						}
					},
					myTool_America: {
						show: true,
						title: '入境消费情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							consumption_reception();
						}
					},
					myTool_Europe: {
						show: true,
						title: '境外人员情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							people_reception();
						}
					},					
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': [],
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
					text: '2013年 国际旅游出行目的',

				},
				series: [
				{
					type:'bar',
					name:data,//载入各个出行方式
					data:data,//载入数值
				}
				]
			},

			{
				tooltip: {},
				title: {
					text: '2014年 国际旅游出行目的',

				},
				series: [
				{
					type:'bar',
					name:data,//载入各个出行方式
					data:data,//载入数值
				}
				]
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国际旅游出行目的',

				},
				series: [{
					type:'bar',
					name:data,//载入各个出行方式
					data:data,//载入数值
				}
				]
			},
		]

	};
	   myChart_year.setOption(option);
};
function consumption_reception(){
	var myChart_year = echarts.init(document.getElementById('way'));	
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
				data: [],//载入目的
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
						title: '入境旅游情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							enter_reception();
						}
					},
					myTool_Europe: {
						show: true,
						title: '过夜旅游情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							over_reception();
						}
					},
					myTool_America: {
						show: true,
						title: '入境消费情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							consumption_reception();
						}
					},
					myTool_Europe: {
						show: true,
						title: '境外人员情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							people_reception();
						}
					},					
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': [],
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
					text: '2013年 国际旅游出行目的',

				},
				series: [
				{
					type:'bar',
					name:data,//载入各个出行方式
					data:data,//载入数值
				}
				]
			},

			{
				tooltip: {},
				title: {
					text: '2014年 国际旅游出行目的',

				},
				series: [
				{
					type:'bar',
					name:data,//载入各个出行方式
					data:data,//载入数值
				}
				]
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国际旅游出行目的',

				},
				series: [{
					type:'bar',
					name:data,//载入各个出行方式
					data:data,//载入数值
				}
				]
			},
		]

	};
	   myChart_year.setOption(option);
};
