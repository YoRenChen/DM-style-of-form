function year() {
	var myChart_year = echarts.init(document.getElementById('two-year'));
	option ={
		baseOption:{
			timeline:{
				 axisType: 'category',
				show:true,
				autoPlay:true,
				playInterval: 10000,
				data:['2013-01-01','2014-01-01'],
				label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
			},
			
			title:{
				 subtext: 'echarts3使用timeline动态修改x轴'
			},
			legend: {
				 x: 'right',
				 data: ['14岁','15'],
			},
			series:[{
			 	
			 	type:'pie',
			 	radius:'20%',
			 }]
		},	


		options :[
	/*
	 *    13年
	 * 
	 * */
    
	    {
		title:{
			text:"2013年"
		},
		tooltip:{},
		series:[
		{
			
			name:"中国",
			type:'pie',
			radius : ['20%','30%'],
			selectedMode: 'single',
			label: {
            normal: {
                position: 'outside',
                formatter: '{a} :{b}',
                 textStyle: {
                    color: '',
                    fontSize: 14
                }
            }},                  
	        center: ['10%', '50%'],
	        data:[  {name:'14岁',value:300},
	                {value:310, name:'15'},
	                ]
		},{
			name:'中',
			type:'pie',
			radius : ['20%','30%'],
	        center: ['50%', '50%'],
	        data:[  {name:'14岁',value:300},
	                {value:310, name:'15'},
	                ]
		}
		]
		
		},
		
	/*
	 *    14年
	 * 
	 * */
		{
			title:{
			text:"2014年"
		},
		series:[{
			name:"中国",
			type:'pie',
			radius : ['20%','30%'],
	        center: ['10%', '50%'],
	        data:[  { name:'14岁',value:35},
	                { name:'15',value:10, },
	                ]
		},{
			name:'中',
			type:'pie',
			radius : ['20%','30%'],
	        center: ['50%', '50%'],
	        data:[  {name:'14岁',value:30},
	                {value:31, name:'15'},
	                ]
		}]
		}
		]
	};
	myChart_year.setOption(option);
}
