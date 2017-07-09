/*
 * 大洲区分
 */
function country() {
	var myChart_year = echarts.init(document.getElementById('two-year'));
	var datayear = [];
	myChart_year.showLoading();

	$.get('http://139.199.178.96:8080/Travel/all?m=getContientSumAge',
		function(result) {
			for(i = 0; i < result.length; i++) {
				datayear.push(result[i]);
			}
			console.log(datayear[0]);
			console.log(datayear[0][0]);
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
				data: ['14岁以下', '14岁-24岁', '25岁-44岁', '45岁-65岁', '65岁以上'],
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
							coun_Asia();
						}
					},
					myTool_Europe: {
						show: true,
						title: '欧洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							coun_Europe();
						}
					},
					myTool_other: {
						show: true,
						title: '美洲及非洲情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							coun_America();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': ['亚洲', '美洲', '欧洲', '非洲', '大洋洲', '其他国家'],
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
					text: '2013年 国际旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: datayear[0][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: datayear[0][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: datayear[0][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: datayear[0][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: datayear[0][4]
					}
				]
			},

			{
				tooltip: {},
				title: {
					text: '2014年 国际旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: datayear[1][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: datayear[1][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: datayear[1][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: datayear[1][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: datayear[1][4]
					}
				]
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国际旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: datayear[2][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: datayear[2][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: datayear[2][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: datayear[2][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: datayear[2][4]
					}
				]
			},
		]

	};
	        myChart_year.setOption(option);
		});	
}

function coun_Asia() {
	//亚洲
//	var asia_name = ['日本', '韩国', '朝鲜', '蒙古', '菲律宾', '泰国', '新加坡', '印尼', '马来西亚', '巴基斯坦', '印度', '尼泊尔', '斯里兰卡', '哈萨克', '吉尔吉斯', '其他'];
//	var asia_thirt_one = [10.37, 16.48, 0.15, 3.83, 1.72, 1.68, 4.91, 2.32, 5.15, 0.24, 2.22, 0.10, 0.60, 1.00, 0.08, 3.76];
//	var asis_thirt_two = [9.52, 27.32, 2.38, 10.81, 8.17, 5.16, 5.59, 6.63, 8.09, 1.13, 5.54, 0.96, 0.52, 4.37, 0.60, 31.89];
	var myChart_year = echarts .init(document.getElementById('two-year'));
	var data=[];
	var dataData=[]
	var dataName=[];
	myChart_year.showLoading();
	$.get("http://139.199.178.96:8080/Travel/all?m=getCountrySumAge&z=%E4%BA%9A%E6%B4%B2",
	function(result){
		for(i = 0; i < result['datalist'].length; i++) {
				dataData.push(result['datalist'][i]);
		}
		console.log(dataData);
		for(i = 0; i < result['namelist'].length; i++) {
				dataName.push(result['namelist'][i]);
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
				data: ['14岁以下', '14岁-24岁', '25岁-44岁', '45岁-65岁', '65岁以上'],
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
				iconStyle: {
					normal: {
						textPosition: 'top',
					},
				},
				feature: {
					magicType: {
						show: true,
						type: ['bar', 'line']
					},
					myTool2: {
						show: true,
						title: '返回世界情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							country();
						}

					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': dataName,
				splitLine: { show: false },
				boundaryGap: true,
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
					text: '2013年 亚洲旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: dataData[0][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: dataData[0][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: dataData[0][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: dataData[0][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: dataData[0][4]
					}
				]
			},

			{
				tooltip: {},
				title: {
					text: '2014年 亚洲旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: dataData[1][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: dataData[1][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: dataData[1][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: dataData[1][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: dataData[1][4]
					}
				]
			},
			{
				tooltip: {},
				title: {
					text: '2015年 亚洲旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: dataData[2][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: dataData[2][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: dataData[2][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: dataData[2][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: dataData[2][4]
					}
				]
			},
		]

	};
	myChart_year.setOption(option);
	}
	);

	
}

function coun_Europe() {
	//欧洲
//	var asia_name = ['日本', '韩国', '朝鲜', '蒙古', '菲律宾', '泰国', '新加坡', '印尼', '马来西亚', '巴基斯坦', '印度', '尼泊尔', '斯里兰卡', '哈萨克', '吉尔吉斯', '其他'];
//	var asia_thirt_one = [10.37, 16.48, 0.15, 3.83, 1.72, 1.68, 4.91, 2.32, 5.15, 0.24, 2.22, 0.10, 0.60, 1.00, 0.08, 3.76];
//	var asis_thirt_two = [9.52, 27.32, 2.38, 10.81, 8.17, 5.16, 5.59, 6.63, 8.09, 1.13, 5.54, 0.96, 0.52, 4.37, 0.60, 31.89];
	var myChart_year = echarts.init(document.getElementById('two-year'));
	myChart_year.showLoading();
	var dataData=[]
	var dataName=[];
	$.get('http://139.199.178.96:8080/Travel/all',{'m':'getCountrySumAge','z':'欧洲'},
	function(result){
		for(i = 0; i < result['datalist'].length; i++) {
				dataData.push(result['datalist'][i]);
		}
		console.log(dataData);
		for(i = 0; i < result['namelist'].length; i++) {
				dataName.push(result['namelist'][i]);
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
				data: ['14岁以下', '14岁-24岁', '25岁-44岁', '45岁-65岁', '65岁以上'],
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
				iconStyle: {
					normal: {
						textPosition: 'top',
					},
				},
				feature: {
					magicType: {
						show: true,
						type: ['bar', 'line']
					},
					myTool2: {
						show: true,
						title: '返回世界情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							country();
						}

					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': dataName,
				splitLine: { show: false },
				boundaryGap: true,
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
					text: '2013年 欧洲旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: dataData[0][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: dataData[0][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: dataData[0][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: dataData[0][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: dataData[0][4]
					}
				]
			},

			{
				tooltip: {},
				title: {
					text: '2014年 欧洲旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: dataData[1][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: dataData[1][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: dataData[1][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: dataData[1][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: dataData[1][4]
					}
				]
			},
			{
				tooltip: {},
				title: {
					text: '2015年 欧洲旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: dataData[2][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: dataData[2][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: dataData[2][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: dataData[2][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: dataData[2][4]
					}
				]
			},
		]

	};
	myChart_year.setOption(option);

	})
	}

function coun_America() {
	//非洲，美洲，以及其他
//	var asia_name = ['日本', '韩国', '朝鲜', '蒙古', '菲律宾', '泰国', '新加坡', '印尼', '马来西亚', '巴基斯坦', '印度', '尼泊尔', '斯里兰卡', '哈萨克', '吉尔吉斯', '其他'];
//	var asia_thirt_one = [10.37, 16.48, 0.15, 3.83, 1.72, 1.68, 4.91, 2.32, 5.15, 0.24, 2.22, 0.10, 0.60, 1.00, 0.08, 3.76];
//	var asis_thirt_two = [9.52, 27.32, 2.38, 10.81, 8.17, 5.16, 5.59, 6.63, 8.09, 1.13, 5.54, 0.96, 0.52, 4.37, 0.60, 31.89];
	var myChart_year = echarts.init(document.getElementById('two-year'));
	myChart_year.showLoading();
	var dataData=[]
	var dataName=[];
	$.get('http://139.199.178.96:8080/Travel/all',{'m':'getCountrySumAge','z':'美洲'},
	function(result){
		for(i = 0; i < result['datalist'].length; i++) {
				dataData.push(result['datalist'][i]);
		}
		console.log(dataData);
		for(i = 0; i < result['namelist'].length; i++) {
				dataName.push(result['namelist'][i]);
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
				data: ['14岁以下', '14岁-24岁', '25岁-44岁', '45岁-65岁', '65岁以上'],
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
				iconStyle: {
					normal: {
						textPosition: 'top',
					},
				},
				feature: {
					magicType: {
						show: true,
						type: ['bar', 'line']
					},
					myTool2: {
						show: true,
						title: '返回世界情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							country();
						}

					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': dataName,
				splitLine: { show: false },
				boundaryGap: true,
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
					text: '2013年 美洲及其他旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: dataData[0][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: dataData[0][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: dataData[0][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: dataData[0][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: dataData[0][4]
					}
				]
			},

			{
				tooltip: {},
				title: {
					text: '2014年 美洲及其他旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: dataData[1][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: dataData[1][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: dataData[1][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: dataData[1][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: dataData[1][4]
					}
				]
			},
			{
				tooltip: {},
				title: {
					text: '2015年 美洲及其他旅游年龄段',

				},
				series: [{
						name: '14岁以下',
						type: 'bar',
						data: dataData[2][0]
					},
					{
						name: '14岁-24岁',
						type: 'bar',
						data: dataData[2][1]
					},
					{
						name: '25岁-44岁',
						type: 'bar',
						data: dataData[2][2]
					},
					{
						name: '45岁-65岁',
						type: 'bar',
						data: dataData[2][3]
					},
					{
						name: '65岁以上',
						type: 'bar',
						data: dataData[2][4]
					}
				]
			},
		]

	};
	myChart_year.setOption(option);
	}
	)
	
	
}