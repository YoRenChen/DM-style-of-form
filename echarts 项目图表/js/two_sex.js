/*
 * 大洲区分
 */
function sex() {
	var myChart_year = echarts.init(document.getElementById('year-sex'));
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01','2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			 grid: {
			        bottom: 100,
			        right: '10%',
			        left:'10%',
			    },
			   
	
			 xAxis: [{
		        type: 'category',
		        axisLine: {
		            show: false
		        },
		       nameTextStyle:{
		        	fontSize:20,
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            interval: 0
		        },
		        data: ['亚洲', '美洲', '欧洲', '非洲','大洋洲','其他']
		    }],
		    yAxis: [{
		        show: false
		    }],
			tooltip: {
        trigger: 'item',
        formatter: '{b} {c} 万人'
    },
			legend: {
				x:'10%',
                y:'10%',
				data: ['男性','女性'],
			},
			calculable: true,			
    toolbox: {
        show:true,
        right:'3%',
        feature:{   
//      	dataView:{
//      		show:true
//      	},
        	myTool_sex: {
                show: true,
                title: '世界情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex();
                }
            },
        	 myTool_Aisa: {
                show: true,
                title: '亚洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Asia();
                }
            },
            myTool_Europe: {
                show: true,
                title: '欧洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Europe();
                }
            },
             myTool_other: {
                show: true,
                title: '美洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_America();
                }               
            },
             myTool_Africa: {
                show: true,
                title: '非洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Africa();
                }
            },
            saveAsImage:{},
        }
    },						
			series: [],
		},
		options: [			
			{				
				title: {
					text: '2013年 国际旅游性别比例',
					
				},				
				series: [{
						name: '亚洲',
						type: 'pie',
						center: ['17%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:1071.79},
	                	{name:'女性',value:537.02},
						]
					},
					{
						name: '美洲',
						type: 'pie',
						center: ['30%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:196.67},
	                	{name:'女性',value:115.72},
						]
					},
					{
						name: '欧洲',
						type: 'pie',
						center: ['43%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:341.48},
	                	{name:'女性',value:224.56},
						]
					},
					{
						name: '非洲',
						type: 'pie',
						center: ['56%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:39.73},
	                	{name:'女性',value:15.54},
						]
					},
					{
						name: '大洋洲',
						type: 'pie',
						center: ['70%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:52.27},
	                	{name:'女性',value:34.07},
						]
					},
					{
						name: '其他',
						type: 'pie',
						center: ['83%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:39.73},
	                	{name:'女性',value:15.54},
						]
					}
				]
			},
			
			
			
		{
				tooltip: {},
				title: {
					text: '2014年 国际旅游性别比例',
					
				},				
				series: [{
						name: '亚洲',
						type: 'pie',
						center: ['17%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:1086.2},
	                	{name:'女性',value:549.97},
						]
					},
					{
						name: '美洲',
						type: 'pie',
						center: ['30%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:187.95},
	                	{name:'女性',value:115.69},
						]
					},
					{
						name: '欧洲',
						type: 'pie',
						center: ['43%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:336.08},
	                	{name:'女性',value:212.34},
						]
					},
					{
						name: '非洲',
						type: 'pie',
						center: ['56%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:42.8},
	                	{name:'女性',value:16.89},
						]
					},
					{
						name: '大洋洲',
						type: 'pie',
						center: ['70%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:48.65},
	                	{name:'女性',value:31.64},
						]
					},
					{
						name: '其他',
						type: 'pie',
						center: ['83%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:0.12},
	                	{name:'女性',value:0.06},
						]
					}
				]
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国际旅游性别比例',
				
				},				
				series: [{
						name: '亚洲',
						type: 'pie',
						center: ['17%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:1089.47},
	                	{name:'女性',value:572.55},
						]
					},
					{
						name: '美洲',
						type: 'pie',
						center: ['30%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:61.17},
	                	{name:'女性',value:41.79},
						]
					},
					{
						name: '欧洲',
						type: 'pie',
						center: ['43%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:309.98},
	                	{name:'女性',value:179.16},
						]
					},
					{
						name: '非洲',
						type: 'pie',
						center: ['56%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:41.45},
	                	{name:'女性',value:16.57},
						]
					},
					{
						name: '大洋洲',
						type: 'pie',
						center: ['70%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:47.12},
	                	{name:'女性',value:30.53},
						]
					},
					{
						name: '其他',
						type: 'pie',
						center: ['83%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:0.14},
	                	{name:'女性',value:0.07},
						]
					}
				]
			},
		]

	};
	myChart_year.setOption(option);
}
function sex_Asia() {
	var myChart_year = echarts.init(document.getElementById('year-sex'));
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01','2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			 grid: {
			        bottom: 100,
			        right: '10%',
			        left:'10%',
			    },
			 xAxis: [{
		        type: 'category',
		        axisLine: {
		            show: false
		        },
		       nameTextStyle:{
		        	fontSize:20,
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            interval: 0
		        },
		        data: ['日本', '韩国', '菲律宾', '马来西亚','印度','其他']
		    }],
		    yAxis: [{
		        show: false
		    }],
			tooltip: {
        trigger: 'item',
        formatter: '{b} {c} 万人'
    },
			legend: {
				x:'10%',
                y:'10%',
				data: ['男性','女性'],
			},
			calculable: true,			
   toolbox: {
        show:true,
        right:'3%',
//   feature：{}     配置各项工作 
        feature:{   
        	myTool_sex: {
                show: true,
                title: '世界情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex();
                }
            },
        	 myTool_Aisa: {
                show: true,
                title: '亚洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Asia();
                }
            },
            myTool_Europe: {
                show: true,
                title: '欧洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Europe();
                }
            },
             myTool_other: {
                show: true,
                title: '美洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_America();
                }
            },
             myTool_Africa: {
                show: true,
                title: '非洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Africa();
                }
            },
            saveAsImage:{},
        }
    },						
			series: [],
		},
			options: [			
			{				
				title: {
					text: '2013年 亚洲旅游性别比例',
					
				},				
				series: [{
						name: '日本',
						type: 'pie',
						center: ['17%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:232.15},
	                	{name:'女性',value:55.61},
						]
					},
					{
						name: '韩国',
						type: 'pie',
						center: ['30%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:251.42},
	                	{name:'女性',value:145.48},
						]
					},
					{
						name: '菲律宾',
						type: 'pie',
						center: ['43%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:75.54},
	                	{name:'女性',value:24.12},
						]
					},
					{
						name: '马来西亚',
						type: 'pie',
						center: ['56%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:73.78},
	                	{name:'女性',value:46.87},
						]
					},
					{
						name: '印度',
						type: 'pie',
						center: ['70%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:56.13},
	                	{name:'女性',value:11.54},
						]
					},
					{
						name: '其他',
						type: 'pie',
						center: ['83%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:136.17},
	                	{name:'女性',value:86.16},
						]
					}
				]
			},
			
			
			
		{
				tooltip: {},
				title: {
					text: '2014年 亚洲旅游性别比例',
					
				},				
				series: [{
						name: '日本',
						type: 'pie',
						center: ['17%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:219.62},
	                	{name:'女性',value:52.14},
						]
					},
					{
						name: '韩国',
						type: 'pie',
						center: ['30%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:261.73},
	                	{name:'女性',value:156.44},
						]
					},
					{
						name: '菲律宾',
						type: 'pie',
						center: ['43%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:74.59},
	                	{name:'女性',value:22.2},
						]
					},
					{
						name: '马来西亚',
						type: 'pie',
						center: ['56%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:69.41},
	                	{name:'女性',value:43.54},
						]
					},
					{
						name: '印度',
						type: 'pie',
						center: ['70%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:60},
	                	{name:'女性',value:10.99},
						]
					},
					{
						name: '其他',
						type: 'pie',
						center: ['83%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:156.08},
	                	{name:'女性',value:106.91},
						]
					}
				]
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国际旅游性别比例',
				
				},				
				series: [{
						name: '日本',
						type: 'pie',
						center: ['17%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:199.53},
	                	{name:'女性',value:50.23},
						]
					},
					{
						name: '韩国',
						type: 'pie',
						center: ['30%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:272.99},
	                	{name:'女性',value:171.45},
						]
					},
					{
						name: '菲律宾',
						type: 'pie',
						center: ['43%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:79.49},
	                	{name:'女性',value:20.91},
						]
					},
					{
						name: '马来西亚',
						type: 'pie',
						center: ['56%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:66.3},
	                	{name:'女性',value:41.25},
						]
					},
					{
						name: '印度',
						type: 'pie',
						center: ['70%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:62.82},
	                	{name:'女性',value:10.23},
						]
					},
					{
						name: '其他',
						type: 'pie',
						center: ['83%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:174.43},
	                	{name:'女性',value:132.35},
						]
					}
				]
			},
		]

	};
	myChart_year.setOption(option);
}
function sex_Europe() {
	var myChart_year = echarts.init(document.getElementById('year-sex'));
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01','2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			 grid: {
			        bottom: 100,
			        right: '10%',
			        left:'10%',
			    },
			 xAxis: [{
		        type: 'category',
		        axisLine: {
		            show: false
		        },
		       nameTextStyle:{
		        	fontSize:20,
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            interval: 0
		        },
		        data: ['英国', '德国', '法国', '意大利','俄罗斯','瑞士']
		    }],
		    yAxis: [{
		        show: false
		    }],
			tooltip: {
        trigger: 'item',
        formatter: '{b} {c} 万人'
    },
			legend: {
				x:'10%',
                y:'10%',
				data: ['男性','女性'],
			},
			calculable: true,			
   toolbox: {
        show:true,
        right:'3%',
//   feature：{}     配置各项工作 
        feature:{   
        	myTool_sex: {
                show: true,
                title: '世界情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex();
                }
            },
        	 myTool_Aisa: {
                show: true,
                title: '亚洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Asia();
                }
            },
            myTool_Europe: {
                show: true,
                title: '欧洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Europe();
                }
            },
             myTool_other: {
                show: true,
                title: '美洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_America();
                }
            },
             myTool_Africa: {
                show: true,
                title: '非洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Africa();
                }
            },
            saveAsImage:{},
        }
    },						
			series: [],
		},
		options: [			
			{				
				title: {
					text: '2013年 欧洲旅游性别比例',
					
				},				
				series: [{
						name: '英国',
						type: 'pie',
						center: ['17%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:43.52},
	                	{name:'女性',value:18.98},
						]
					},
					{
						name: '德国',
						type: 'pie',
						center: ['30%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:47.87},
	                	{name:'女性',value:17.06},
						]
					},
					{
						name: '法国',
						type: 'pie',
						center: ['43%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:34.91},
	                	{name:'女性',value:18.45},
						]
					},
					{
						name: '意大利',
						type: 'pie',
						center: ['56%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:19.19},
	                	{name:'女性',value:5.93},
						]
					},
					{
						name: '俄罗斯',
						type: 'pie',
						center: ['70%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:98.13},
	                	{name:'女性',value:120.5},
						]
					},
					{
						name: '瑞士',
						type: 'pie',
						center: ['83%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:5.63},
	                	{name:'女性',value:2.43},
						]
					}
				]
			},
			
			
			
		{
				tooltip: {},
				title: {
					text: '2014年 欧洲旅游性别比例',
					
				},				
				series: [{
						name: '英国',
						type: 'pie',
						center: ['17%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:42.19},
	                	{name:'女性',value:18.29},
						]
					},
					{
						name: '德国',
						type: 'pie',
						center: ['30%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:48.96},
	                	{name:'女性',value:17.3},
						]
					},
					{
						name: '法国',
						type: 'pie',
						center: ['43%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:34.15},
	                	{name:'女性',value:17.55},
						]
					},
					{
						name: '意大利',
						type: 'pie',
						center: ['56%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:19.39},
	                	{name:'女性',value:5.92},
						]
					},
					{
						name: '俄罗斯',
						type: 'pie',
						center: ['70%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:93.95},
	                	{name:'女性',value:110.63},
						]
					},
					{
						name: '瑞士',
						type: 'pie',
						center: ['83%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:5.55},
	                	{name:'女性',value:2.4},
						]
					}
				]
			},
		{
				tooltip: {},
				title: {
					text: '2015年 欧洲旅游性别比例',
					
				},				
				series: [{
						name: '英国',
						type: 'pie',
						center: ['17%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:40.34},
	                	{name:'女性',value:17.29},
						]
					},
					{
						name: '德国',
						type: 'pie',
						center: ['30%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:46.25},
	                	{name:'女性',value:16.09},
						]
					},
					{
						name: '法国',
						type: 'pie',
						center: ['43%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:32.22},
	                	{name:'女性',value:16.47},
						]
					},
					{
						name: '意大利',
						type: 'pie',
						center: ['56%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:18.94},
	                	{name:'女性',value:5.67},
						]
					},
					{
						name: '俄罗斯',
						type: 'pie',
						center: ['70%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:76.71},
	                	{name:'女性',value:81.51},
						]
					},
					{
						name: '瑞士',
						type: 'pie',
						center: ['83%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:5.09},
	                	{name:'女性',value:2.18},
						]
					}
				]
			},
			]

	};
	myChart_year.setOption(option);
}
function sex_America(){
	var myChart_year = echarts.init(document.getElementById('year-sex'));
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01','2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			 grid: {
			        bottom: 100,
			        right: '10%',
			        left:'10%',
			    },
			 xAxis: [{
		        type: 'category',
		        axisLine: {
		            show: false
		        },
		       nameTextStyle:{
		        	fontSize:20,
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            interval: 0
		        },
		        data: ['美国', '加拿大', '墨西哥','其他']
		    }],
		    yAxis: [{
		        show: false
		    }],
			tooltip: {
        trigger: 'item',
        formatter: '{b} {c} 万人'
    },
			legend: {
				x:'10%',
                y:'10%',
				data: ['男性','女性'],
			},
			calculable: true,			
   toolbox: {
        show:true,
        right:'3%',
//   feature：{}     配置各项工作 
        feature:{   
        	myTool_sex: {
                show: true,
                title: '世界情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex();
                }
            },
        	 myTool_Aisa: {
                show: true,
                title: '亚洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Asia();
                }
            },
            myTool_Europe: {
                show: true,
                title: '欧洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Europe();
                }
            },
             myTool_other: {
                show: true,
                title: '美洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_America();
                }
            },
            myTool_Africa: {
                show: true,
                title: '非洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Africa();
                }
            },
            saveAsImage:{},
        }
    },						
			series: [],
		},
			options: [			
			{				
				title: {
					text: '2013年 美洲旅游性别比例',					
				},				
				series: [{
						name: '美国',
						type: 'pie',
						center: ['20%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:134.17},
	                	{name:'女性',value:74.36},
						]
					},
					{
						name: '加拿大',
						type: 'pie',
						center: ['40%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:39.27},
	                	{name:'女性',value:29.15},
						]
					},
					{
						name: '墨西哥',
						type: 'pie',
						center: ['60%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:3.98},
	                	{name:'女性',value:2.04},
						]
					},									
					{
						name: '其他',
						type: 'pie',
						center: ['80%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:19.25},
	                	{name:'女性',value:10.17},
						]
					}
				]
			},
		
		{				
				title: {
					text: '2014年 美洲旅游性别比例',					
				},				
				series: [{
						name: '美国',
						type: 'pie',
						center: ['20%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:134.19},
	                	{name:'女性',value:75.12},
						]
					},
					{
						name: '加拿大',
						type: 'pie',
						center: ['40%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:31.11},
	                	{name:'女性',value:28.6},
						]
					},
					{
						name: '墨西哥',
						type: 'pie',
						center: ['60%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:4.34},
	                	{name:'女性',value:2.24},
						]
					},									
					{
						name: '其他',
						type: 'pie',
						center: ['80%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:18.31},
	                	{name:'女性',value:9.73},
						]
					}
				]
			},
		{				
				title: {
					text: '2015年 美洲旅游性别比例',					
				},				
				series: [{
						name: '美国',
						type: 'pie',
						center: ['20%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:131.86},
	                	{name:'女性',value:76.72},
						]
					},
					{
						name: '加拿大',
						type: 'pie',
						center: ['40%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:38.3},
	                	{name:'女性',value:29.68},
						]
					},
					{
						name: '墨西哥',
						type: 'pie',
						center: ['60%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:4.49},
	                	{name:'女性',value:2.34},
						]
					},									
					{
						name: '其他',
						type: 'pie',
						center: ['80%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:18.38},
	                	{name:'女性',value:9.77},
						]
					}
				]
			},
			]

	};
	myChart_year.setOption(option);
}
function sex_Africa() {
	var myChart_year = echarts.init(document.getElementById('year-sex'));
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2013-01-01', '2014-01-01','2015-01-01'],
				label: {
					formatter: function(s) {
						return(new Date(s)).getFullYear();
					},
				},
			},
			 grid: {
			        bottom: 100,
			        right: '10%',
			        left:'10%',
			    },
			 xAxis: [{
		        type: 'category',
		        axisLine: {
		            show: false
		        },
		       nameTextStyle:{
		        	fontSize:20,
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            interval: 0
		        },
		        data: ['非洲']
		    }],
		    yAxis: [{
		        show: false
		    }],
			tooltip: {
        trigger: 'item',
        formatter: '{b} {c} 万人'
    },
			legend: {
				x:'10%',
                y:'10%',
				data: ['男性','女性'],
			},
			calculable: true,			
   toolbox: {
        show:true,
        right:'3%',
//   feature：{}     配置各项工作 
        feature:{   
        	myTool_sex: {
                show: true,
                title: '世界情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex();
                }
            },
        	 myTool_Aisa: {
                show: true,
                title: '亚洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Asia();
                }
            },
            myTool_Europe: {
                show: true,
                title: '欧洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Europe();
                }
            },
             myTool_other: {
                show: true,
                title: '美洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_America();
                }
            },
             myTool_Africa: {
                show: true,
                title: '非洲情况',
                icon: 'image://img/favicon.png',
                onclick: function (){
                    sex_Africa();
                }
            },
            saveAsImage:{},
        }
    },						
			series: [],
		},
			options: [			
			{				
				title: {
					text: '2013年 非洲旅游性别比例',					
				},				
				series: [{
						name: '非洲',
						type: 'pie',
						center: ['50%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:39.73},
	                	{name:'女性',value:15.54},
						]
				},					
				]
			},
		
		{				
				title: {
					text: '2014年 非洲旅游性别比例',					
				},				
				series: [{
						name: '非洲',
						type: 'pie',
						center: ['50%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:42.8},
	                	{name:'女性',value:16.89},
						]
				},				
				]
			},
		{				
				title: {
					text: '2015年 非洲旅游性别比例',					
				},				
				series: [{
						name: '非洲',
						type: 'pie',
						center: ['50%', '45%'],
						radius : ['25%','35%'],
						label:{
							normal:{
								show:false
							},							 
						},
						data: [
						{name:'男性',value:41.45},
	                	{name:'女性',value:16.57},
						]
					},
					
				]
			},
			]

	};
	myChart_year.setOption(option);
}
