


/*
 国内旅游消费情况
 * */
function in_consume(){

function fetchData(cb) {
	 (function () {   	
        cb({ 
        	x_name:[''],
        	y_name:'旅游收入(亿元)',
        	y_name1:'旅游人数（亿人）',
        	name1:['农村消费','城市消费','农村均消','城市均消','农村人数','城市人数'],
            categories: ['2013年','2014年','2015年'],          
            data1:[[5583.53, 6092.11, 6584.20, ],[20692.59, 24219.76, 27610.9],[518.9,540.2,554.2],[946.6,975.4,985.5],[10.76,11.28,11.9],[21.86,24.83,28.1]],

        });
    })(); 	
   }
	var myChart = echarts.init(document.getElementById('inland_consume'));	
	myChart.setOption({
    title: {
        text: '2013~2015年国内旅游消费情况'    
    },
    tooltip: {
          trigger: 'axis',
    },
    legend: {
        data:[],
        left:0,
        top:'15%',
        orient:'vertical',
    },
//  grid  图标的网格  
    grid: {
    	show:true,
        left: '15%',
        bottom: '3%',
        containLabel: true,
        backgroundColor:'rgba(128, 128, 128, 0.1)',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
    },
    toolbox: {
        show:true,
        right:'3%',
        feature:{
        	 saveAsImage: {}
        	
        }
    },
    xAxis: {
        type: 'category',       
        boundaryGap: true,
        data: [],
        name:[],
    },
    yAxis: [{
        type: 'value',
        name:[],
       
    },{
    	    type: 'value',
            name: [],
            min: 0,
            max: 30,
            position: 'right',
            offset: 0,
            axisLine: {
            },
            axisLabel: {
                formatter: '{value} 亿人'
            }
    }],
    series: [   
        {   
        	type:'bar',
            name:[],            
            data:[],
        },  
    ]
   });	
   fetchData(function (data) {
    myChart.setOption({
    	legend: {
        data:data.name1,
    }, 
        xAxis: {
            data: data.categories,
            name:data.x_name,
        },
        yAxis:{
        	name:data.y_name,
        },
  series: [
            {      
            	type:'bar',
            	label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     formatter: '{c}亿元',
                },
            },
            	name: data.name1[0],
                data: data.data1[0],
	      },
	       {	   
	       	    type:'bar',
	       	    label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     formatter: '{c}亿元',
                },
            },
            	name: data.name1[1],
                data: data.data1[1],
	      },{
	      	yAxisIndex: 0,
	       	type:'bar',
	       	label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     formatter: '{c}亿人',
                },
            },
            	name: data.name1[2],
                data: data.data1[2],
	      },{
	      	yAxisIndex: 0,
	       	type:'bar',
	       	label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     formatter: '{c}亿人',
                },
            },
            	name: data.name1[3],
                data: data.data1[3],
	      },{
	      	yAxisIndex: 1,
	       	type:'bar',
	       	label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     formatter: '{c}亿人',
                },
            },
            	name: data.name1[4],
                data: data.data1[4],
	      },{
	      	yAxisIndex: 1,
	       	type:'bar',
	       	label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     formatter: '{c}亿人',
                },
            },
            	name: data.name1[5],
                data: data.data1[5],
	      }
        ]
    });
});

   
}

/*
 *国内旅游-人数与收入
 * */

function people_income(){
	function fetchData(cb) {
	 (function () {   	
        cb({ 
        	x_name:[''],
        	y_name:'旅游收入(亿元)',
        	y_name1:'旅游人次（亿人）',
        	name1:['营业收入','业务利润','组织人次','接待人数'],
            categories: ['2013年','2014年','2015年'],          
            data1:[[1762.11, 1783.68, 1790.24, ],[88.02, 90.28, 91.06],[40842.95,41545.83,43596.30],[33829.29,34978.44,37872.39]],

        });
    })(); 	
   }
	var myChart = echarts.init(document.getElementById('peopel_income'));	
	myChart.setOption({
    title: {
        text: '2013~2015年国内旅游-人数与收入'    
    },
    tooltip: {
          trigger: 'axis',
    },
    legend: {
        data:[],
        left:0,
        top:'15%',
        orient:'vertical',
    },
//  grid  图标的网格  
    grid: {
    	show:true,
        left: '15%',
        bottom: '3%',
        containLabel: true,
        backgroundColor:'rgba(128, 128, 128, 0.1)',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
    },
    toolbox: {
        show:true,
        right:'3%',
        feature:{
        	 saveAsImage: {}
        	
        }
    },
    xAxis: {
        type: 'category',       
        boundaryGap: true,
        data: [],
        name:[],
    },
    yAxis: [{
        type: 'value',
        name:[],
        max:2500,
    },{
    	    type: 'value',
            name: [],
            min: 0,
            max: 50000,
            position: 'right',
            offset: 0,
            axisLine: {
            },
            axisLabel: {
                formatter: '{value} 万人'
            }
    }],
    series: [   
        {   
        	type:'bar',
            name:[],            
            data:[],
        },  
    ]
   });	
   fetchData(function (data) {
    myChart.setOption({
    	legend: {
        data:data.name1,
    }, 
        xAxis: {
            data: data.categories,
            name:data.x_name,
        },
        yAxis:{
        	name:data.y_name,
        },
  series: [
            {      
            		stack: '收入',
            	type:'bar',
            	label: {
                emphasis: {
                    show: true,
                    position: 'top',
                    offset:[-10,-15],
                    formatter: '{c}亿元',
                },
            },
            	name: data.name1[0],
                data: data.data1[0],
	      },
	       {	 
	       		stack: '收入',
	       	    type:'bar',
	       	    label: {
                emphasis: {
                    show: true,
                    offset:[0,-20],
                    position: 'top',
                     formatter: '{c}亿元',
                },
            },
            	name: data.name1[1],
                data: data.data1[1],
	      },{
	      	yAxisIndex: 1,
	       	type:'bar',
	       	label: {
                emphasis: {
                    show: true,
                    offset:[35,0],
                    position: 'top',
                     formatter: '{c}万人',
                },
            },
            	name: data.name1[2],
                data: data.data1[2],
	      },{
	      	yAxisIndex: 1,
	       	type:'bar',
	       	label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     formatter: '{c}万人',
                },
            },
            	name: data.name1[3],
                data: data.data1[3],
	      }
        ]
    });
});

}

/*
 *⑪	国内旅游星级酒店统计
 * */

function hotel(){  
	function hotel_nomal(){
			var x_name;
	var dataWay;
	var dataWay1;
	var dataWay2;
	var dataName;
    	   
	var yearData1;
	var yearData2;
	var yearData3;
	var serise1 = [];
    var serise2 = [];
    var serise3 = [];
    x_name=['一星','二星','三星','四星','五星'];
    dataWay=['酒店数量','客房数','床位','平均房价','平均出租率'];
    yearData1=[[125,2831,5631,2361,739],[0.58,18.86,62.68,46.28,26.11],[1.07,34.94,110.89,84.08,39.49],[239.3,191.86,220.2,348.65,683.72],[46.94,51.62,51.1,51.42,50.14]]; 
    yearData2=[[99,2557,5406,2373,745],[0.49,17.00,59.23,46.97,26.09],[0.94,31.51,78.23,38.74],[106.75,160.89,213.60,354.86,678.73],[49,53,53,54,55]];
    yearData3=[[91,2197,5098,2375,789],[0.44,14.69,57.15,47.06,26.97],[0.77,64.01,105.70,79.00,39.88],[132.76,168.47,212.73,339.98,655.66],[49.26,52.58,52.65,55.28,54.14]];   
    
	  for(i=0;i<x_name.length;i++){
			serise1.push({
			type:'bar',
			data:yearData1[i],
			name:dataWay[i],
		});
		}
	  for(i=0;i<x_name.length;i++){
			serise2.push({
			type:'bar',
			data:yearData2[i],
			name:dataWay[i],
		});
		}
	  for(i=0;i<x_name.length;i++){
			serise3.push({
			type:'bar',
			data:yearData3[i],
			name:dataWay[i],
		});
		}
	var myChart = echarts.init(document.getElementById('inland_hotel'));	
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
				x: '20%',
				y: '10%',
				data: dataWay,//载入出行方式
			},
			calculable: true,
			grid: {
				show: true,
				right: '10%',
				left: '3%',
				bottom: '15%',
				top: '20%',
				containLabel: true,
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			},
			toolbox: {
				show: true,
				right: '3%',
				//   feature：{}     配置各项工作 
				feature: {					
					//     自定义图标
					
					myTool_Other: {
						show: true,
						title: '收入情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							hotel_finance();
						}
					},
					myTool: {
						show: true,
						title: '利润',
						icon: 'image://img/favicon.png',
						onclick: function() {
							hotel_A();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': x_name,
				splitLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				name: '万'
			}],
			series: [],
		},
		options: [{
				tooltip: {},
				title: {
					text: '2013年 国内旅游-星级饭店情况',

				},
				series: serise1
			},

			{
				tooltip: {},
				title: {
					text: '2014年 国内旅游-星级饭店情况',

				},
				series: serise2
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国内旅游-星级饭店情况',

				},
				series: serise3
			},
		]

	};
	    myChart.setOption(option);
	}
	hotel_nomal()
    function hotel_finance(){
    		var x_name;
	var dataWay;
	var dataWay1;
	var dataWay2;
	var dataName;
    	   
    	var yearData4;
		var yearData5;
	    var serise4 = [];
   	    var serise5 = [];
   	     x_name=['一星','二星','三星','四星','五星'];
   	    dataWay1=['营业日总额','客房占比重','餐饮占比重','固定资产原值'];
    	yearData4=[[1.86,105.64,545.54,733.25,765.15],[45.47,47.96,42.83,42.68,44.24],[41.12,39,43.51,40.75,40.05],[4.8,187.91,1122.26,1799.27,1895.23]];
    yearData5=[[2.36,96.11,521.27,720.26,766.75],[40.68,48.25,42.23,43.33,46.36],[34.55,37.09,43.02,40.75,41.18],[2.68,203.42,1414.37,1842.16,1998.66]];
   
    	for(i=0;i<dataWay1.length;i++){
			serise4.push({
			type:'bar',
			data:yearData4[i],
			name:dataWay1[i],
		});
		}
	  for(i=0;i<dataWay1.length;i++){
			serise5.push({
			type:'bar',
			data:yearData5[i],
			name:dataWay1[i],
		});
		}
    var myChart = echarts.init(document.getElementById('inland_hotel'));	
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2014-01-01', '2015-01-01'],
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
				x: '20%',
				y: '10%',
				data: dataWay1 ,//载入出行方式
			},
			calculable: true,
			grid: {
				show: true,
				right: '10%',
				left: '3%',
				bottom: '15%',
				top: '20%',
				containLabel: true,
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			},
			toolbox: {
				show: true,
				right: '3%',
				//   feature：{}     配置各项工作 
				feature: {					
					//     自定义图标
					
					myTool_Other: {
						show: true,
						title: '基本情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							hotel_nomal();
						}
					},myTool: {
						show: true,
						title: '利润',
						icon: 'image://img/favicon.png',
						onclick: function() {
							hotel_A();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': x_name,
				splitLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				name: ''
			}],
			series: [],
		},
		options: [
			{
				tooltip: {},
				title: {
					text: '2014年 国内旅游-星级饭店情况',

				},
				series: serise4
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国内旅游-星级饭店情况',

				},
				series: serise5
			},
		]

	};
	    myChart.setOption(option);
	   }

    function hotel_A(){
    		var x_name;
	var dataWay;
	var dataWay1;
	var dataWay2;
	var dataName;
    	   
    		var yearData6;
	var yearData7;	
	    var serise6 = [];
    var serise7 = [];
    dataWay2=['利润总额','实缴税金'];
    x_name=['一星','二星','三星','四星','五星'];
    yearData6=[[0.1,2.19,-25.16,-42.03,5.68],[0.18,9.42,41.35,61.31,62.29]];
    yearData7=[[0.54,-3.47,-4.55,-32.74,19.02],[0.6,9.76,64.01,67.95,62.59]];
    		for(i=0;i<dataWay2.length;i++){
			serise6.push({
			type:'bar',
			data:yearData6[i],
			name:dataWay2[i],
		});
		}
	  for(i=0;i<dataWay2.length;i++){
			serise7.push({
			type:'bar',
			data:yearData7[i],
			name:dataWay2[i],
		});d
		}
    var myChart = echarts.init(document.getElementById('inland_hotel'));	
	option = {
		baseOption: {
			timeline: {
				axisType: 'category',
				show: true,
				autoPlay: true,
				playInterval: 7000,
				data: ['2014-01-01', '2015-01-01'],
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
				x: '20%',
				y: '10%',
				data: dataWay2,//载入出行方式
			},
			calculable: true,
			grid: {
				show: true,
				right: '10%',
				left: '3%',
				bottom: '15%',
				top: '20%',
				containLabel: true,
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			},
			toolbox: {
				show: true,
				right: '3%',
				//   feature：{}     配置各项工作 
				feature: {					
					//     自定义图标
					
					myTool_Other: {
						show: true,
						title: '基本情况',
						icon: 'image://img/favicon.png',
						onclick: function() {
							hotel_finance();
						}
					},
					saveAsImage: {},
				}
			},
			xAxis: [{
				'type': 'category',
				'axisLabel': { 'interval': 0 },
				'data': x_name,
				splitLine: { show: false }
			}],
			yAxis: [{
				type: 'value',
				name: ''
			}],
			series: [],
		},
		options: [
			{
				tooltip: {},
				title: {
					text: '2014年 国内旅游-星级饭店情况',

				},
				series: serise6
			},
			{
				tooltip: {},
				title: {
					text: '2015年 国内旅游-星级饭店情况',

				},
				series: serise7
			},
		]

	};
	    myChart.setOption(option);
    }
}
