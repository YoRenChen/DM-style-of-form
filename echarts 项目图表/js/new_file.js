/*
 * 旅游总结
 */
function Develop(){

	var myChart = echarts.init(document.getElementById('main-devole'));
function fetchData(cb) {
    // 通过 setTimeout 模拟异步加载	
 (function () {   	
        cb({ 
        	categories: ['2013年','2014年','2015年'],
            name1:['旅游总收入','中国人均 GDP','第三产业产值比重','接待人数次'],          
            data1:[[29479,33812,41218],[43852,47203, 49992],[46.10,48.20,50.50],[339107,373949,413382]],
        });
    })(); 
}
myChart.setOption({
    title: {
        text: '2013年-2015年旅游业总体情况'
    },
    tooltip: {
          trigger: 'axis',
    },
    legend: {
        data:[],
        x:'17%',
        y:'6%',
    },
    grid: {
    	show:true,
    	right:'10%',
    	left:'3%',
        bottom: '0%', 
        top:'20%',
        containLabel: true,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
    },
    toolbox: {
        show:true,
        right:'3%',
        feature:{
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
        max:60000,
        axisLine:{
        	default: false,
        },
        position:'left',
        axisLine: {
                lineStyle: {
                    color: 'black'
                }
            },
            axisLabel: {
                formatter: '{value} 亿元'
            }
    },{
    	show:false,
    	type: 'value',
    	name:['第三产业占比重'],
        min: 0,
        max: 60,
        position: 'right',
        axisLine:{
        	lineStyle: {
                    color: 'black'
               },
        },
         axisLabel: {
            formatter: '{value} %'
        }
    }, {
            type: 'value',
            name: '     接待人数次',
            min: 0,
            max: 500000,
            position: 'right',
            offset: 0,
            axisLine: {
            },
            axisLabel: {
                formatter: '{value} 万人次'
            }
        },
    ],
    series: []
   });
// 指定图表的配置项和数据
var dataName=[]; 
var dataData =[];
var dataYear =[];
$.get("http://139.199.178.96:8080/Travel/all?m=lyTotal",
  function(result){	 		 		
  		for(i=0;i<result['datas'].length;i++){
  			dataName.push(result['names'][i]);
  		}
  		for(i=0;i<result['datas'].length;i++){
  			dataData.push(result['datas'][i]);
  		}
		for(i=0;i<result['categories'].length;i++){
	    dataYear.push(result['categories'][i]);
	   }
  	    myChart.setOption({
    	legend: {
        data:dataName,
        selected:{'接待人数次':false,'第三产业产值比重':false},
    }, 
        xAxis: {
            data: dataYear,          
        },
        yAxis:{
        },
//      设置三行series
        series: [
            {      
            	yAxisIndex: 0,
            	type:'bar',
            	label: {
                emphasis: {
                    show: true,
                    position: 'top',
                    formatter: '{c}亿元',
                }
            },
            	name: dataName[0],
                data: dataData[0],
	      },
	       {
	       
	       	yAxisIndex: 0,
	       	    type:'bar',
	       	    label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     formatter: '{c}亿元',
                }
            },
            	name: dataName[1],
                data: dataData[1],
	      }, 
	      {	   
	      	    yAxisIndex: 1,
	       	    type:'bar',
	       	    label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     formatter: '{c}%',
                },
            },
            	name: dataName[2],
                data: dataData[2],
	      },{
	      	    yAxisIndex: 2,
	       	    type:'line',	       	    
            	name: dataName[3],
                data: dataData[3],
                
	      }
        ]
    });

  });
    


}

/*
 * 国际旅游-出入境情况
 */
function Plight(){
	/*
	 * 数据
	 */
	var a={
		categories: ['2013年','2014年','2015年'],
		name1:["入境旅游营业总收入","入境旅游业务利润","入境旅游组织人数","入境旅游总接待人数","出境旅游营业收入","出境旅游营业利润"],          
        data1:[[270,283,273],[14.8,16.01,19.58],[6063.22,6165.94,6023.29],[6667.75,6855.15,6534.37],[1157.19,1331.33,1683.69],[59.46,64.03,88.16]],
	};
	var myChart = echarts.init(document.getElementById('main-plight'));
myChart.setOption({
    title: {
        text: '近年国际旅游-出入境情况'
    },
    tooltip: {
          trigger: 'none',
    },
    legend: {
        data:[],
        x:'12%',
        y:'7%',
        width:'60%',
    },
    grid: {
    	show:true,
    	right:'10%',
    	left:'3%',
        bottom: '3%', 
        top:'20%',
        containLabel: true,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
    },
    toolbox: {
        show:true,
        right:'3%',
        feature:{
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
        max:400,
        axisLine:{
        	default: false,
        },
        position:'left',
        axisLine: {
                lineStyle: {
                    color: 'black'
                }
            },
            axisLabel: {
                formatter: '{value} 亿元'
            }
    }
,{
    	type: 'value',
    	name:['人数'],
        min: 0,
        max: 8000,
        position: 'right',
        axisLine:{
        	lineStyle: {
                    color: 'black'
               },
        },
         axisLabel: {
            formatter: '{value} 万人次'
        }
    }, {
            type: 'value',
            name: '     出境营业收入',
            min: 0,
            max: 2000,
            position: 'right',
            offset: 90,
            axisLine: {
            },
            axisLabel: {
                formatter: '{value} 亿'
            }
        },
    ],
     series: [
            {      
            	yAxisIndex: 0,
            	type:'bar',
            	stack:'A',
            	label: {
                emphasis: {
                    show: true,
                    position: 'top',
                     position: 'insideTop',
                     formatter: '{c}亿',
                }
            },
            	name: a.name1[0],
                data: a.data1[0],
	      },
	       {	   
	       	yAxisIndex: 0,
	       	    type:'bar',
	       	    stack:'A',
	       	    label: {
                emphasis: {
                    show: true,
                    position: 'top',
                    formatter: '{c}亿',
                }
            },
            	name: a.name1[1],
                data: a.data1[1],
	      }, 
	      {	   
	      	    yAxisIndex: 1,
	       	    type:'bar',
	       	    label: {
                emphasis: {
                    show: true,
                    position: 'top',
                    formatter: '{c}万',
                           },
                       },
            	name: a.name1[2],
                data: a.data1[2],
	      },{
	      	    yAxisIndex: 1,
	       	    type:'bar',
	       	    label: {
                emphasis: {
                    show: true,
                    position: 'top',
                    formatter: '{c}万',
                }
            },
            	name: a.name1[3],
                data: a.data1[3],             
	      },
	      {
	      	    yAxisIndex: 2,
	       	    type:'bar',
	       	    stack:'B',
	       	    label: {
                emphasis: {
                    show: true,
                    position: 'insideTop',
                    formatter: '{c}亿',
                }
            },
            	name: a.name1[4],
                data: a.data1[4],             
	      },{
	      	    yAxisIndex: 2,
	       	    type:'bar',
	       	    stack:'B',
	       	    label: {
                emphasis: {
                    show: true,
                    position: 'top',
                    formatter: '{c}亿',
                }
            },
            	name: a.name1[5],
                data: a.data1[5],            
	      }
        ]

   });
    	var dataName =[]; 
		var dataData =[];
		var dataYear =[];
		  
   
// $.get('http://139.199.178.96:8080/Travel/all?m=gjly_immigration',
// function(result){
// 	  for(i=0;i<result['names'].length;i++){
// 	  	 dataName.push(result['names'][i]);
// 	  }
// 	  for(i=0;i<result['datas'].length;i++){
// 	  	 dataData.push(result['datas'][i]);
// 	  }
// 	  for(i=0;i<result['categories'].length;i++){
// 	  	 dataYear.push(result['categories'][i]);
// 	  }
// 	  
// 	  myChart.setOption({
//  	legend: {
//      data:dataName,
//       selected:{'出境旅游营业收入':false,'出境旅游营业利润':false},
//  }, 
//      xAxis: {
//          data: dataYear, 
//      },
//      yAxis:{
//      	
//      },
////      设置三行series
//         });
//
// }
// );
 }