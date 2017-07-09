
(function(){
	var myChart = echarts.init(document.getElementById('one'));
var data1=new Array();
function fetchData(cb) {
    // 通过 setTimeout 模拟异步加载	
    (function () {   	
        cb({ 
        	x_name:['国内旅游社情况'],
        	y_name:'亿元',
        	name1: ["旅行社数量","资产","负债","营业收入","旅游业务营业收入","营业成本","营业利润","旅游业务营业利润","营业税","所得税"],    
            categories: ['2013年','2014年','2015年'],                                   
            data1:[ [26054,26650,27621],
            [1039.77,1292.97,1342.95],
            [697.16,848.12,898.02],
            [3599.14,4029.59,4189.01],
            [3189.45,3398.05,3747.77],
            [3434.29,3823.04,3901.77],
            [25.43,26.35,18.6],
            [162.28,170.32,198.79],
            [16.12,16.6,14.92],
            [8.58,7.56,7.45]],

        });
    })(); 
}

myChart.setOption({
//  	大标题
    title: {
        text: '2013~2015年度国内旅游业情况'
      
    },
//  提示框组件   tooltip
    tooltip: {
//  	类目轴-坐标轴触发axis,无类目轴-数据项图形触发item(默认)
          trigger: 'axis',
    },
//  图例组件
    legend: {
        data:[],
        x:'40%',
        y:'10%',
    },
//  grid  图标的网格  
    grid: {
    	show:true,   	
    	righe:'2%',
        left: '3%',
        bottom: '3%',
//   containLabel   是否包含坐标轴的刻度标签,容器又比较小无法预留较多空间的时候, true 防止标签溢出容器  
        containLabel: true,
        backgroundColor:'rgba(128, 128, 128, 0.1)',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
    },
    toolbox: {
        show:true,
        right:'3%',
//   feature：{}     配置各项工作 
        feature:{
//    magicType:图标:图表的转换 	
        	magicType:{
        		show:true,
        		type:['bar','line']
        	},
        	saveAsImage: {},
        }
       
    },
//  是否显示拖拽用的手柄
//  calculable:true,·	
//  X,Y轴设计
    xAxis: {
		'type': 'category',
		'axisLabel': { 'interval': 0 },
        data: [],
        name:[],
    },
    yAxis: {
        type: 'value',
        name:[],
    },
    series: [   
        {   
        	type:'line',
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
            	name: data.name1[0],
                data: data.data1[0],
	      },
	       {	   
	       	    type:'bar',
            	name: data.name1[1],
                data: data.data1[1],
	      },
	      {	   
	       	    type:'bar',
            	name: data.name1[2],
                data: data.data1[2],
	      },
	       {	   
	       	    type:'bar',
            	name: data.name1[3],
                data: data.data1[3],
	      }    ,
	       {	   
	       	    type:'bar',
            	name: data.name1[4],
                data: data.data1[4],
	      }     ,
	       {	   
	       	    type:'bar',
            	name: data.name1[5],
                data: data.data1[5],
	      }     ,
	       {	   
	       	    type:'bar',
            	name: data.name1[6],
                data: data.data1[6],
	      }     ,
	       {	   
	       	    type:'bar',
            	name: data.name1[7],
                data: data.data1[7],
	      }     ,
	       {	   
	       	    type:'bar',
            	name: data.name1[8],
                data: data.data1[8],
	      }     ,
	       {	   
	       	    type:'bar',
            	name: data.name1[9],
                data: data.data1[9],
	      }     
        ]
    });
});

})();


(function(){
	var vm = new Vue({
		el:"#main",
		data:{
			selected: '',
			payList : [],
		},
		filters:{},
		mounted: function() {
			this.payView();
		
		},
		methods:{
			payView : function(){
				var _this = this;
				this.$http.get("data/provinceData.json").then(function(res){				
					_this.payList = res.body.result.province;	
				});		
			},
			one :function(e){
				console.log(e)
			}
		},
		watch:{
			selected : 'one'
		}
	});
})();
