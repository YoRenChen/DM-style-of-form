function China() {
	var myChart_China = echarts.init(document.getElementById('main-China'));
var num=[];
	var Option = {
		title: {
			text: '各旅游省份数据基础情况'
		},
		legend: {
			x: '17%',
			y: '6%',
			data: ['省份旅游人数']
		},
		tooltip: {
			trigger: 'item',

			formatter: function(params) {
				//定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
				var res = params.name + '<br />';
				//定义一个变量来保存series数据系列
				var myseries = Option.series;
				//循环遍历series数据系列
				for(var i = 0; i < myseries.length; i++) {
					//在内部继续循环series[i],从data中判断：当地区名称等于params.name的时候就将当前数据和名称添加到res中供显示
					for(var k = 0; k < myseries[i].data.length; k++) {
						//console.log(myseries[i].data[k].name);
						//如果data数据中的name和地区名称一样
						if(myseries[i].data[k].name == params.name) {
							//将series数据系列每一项中的name和数据系列中当前地区的数据添加到res中
							res += myseries[i].name + ':' + myseries[i].data[k].value + '<br />';
						}
					}
				}
				//返回res
				//console.log(res);
				return res;
			},

		},
		roam: 'scale',
		series: [{
			name: "省份旅游人数",
			type: 'map',
			map: 'china',
			label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
			data:(function(){
				var num=[];
				myChart_China.showLoading();
				$.ajax({
					type: "get",
					url: "http://leewanchi.tunnel.qydev.com/Travel/all?m=getpro_Travel_Num",
					async: false,
					dataType: 'json',
					success: function(result) {
					if(result) {
						for(var i = 0; i < result.length; i++) {
							var a = { "value": (parseInt(result[i]['pro_travel_num'])), "name": result[i]['province']}
							console.log({name:a['name'],value:a['value']});
		                    num.push({name:a['name'],value:a['value']});
						}
			   	}
					    	myChart_China.hideLoading();    //隐藏加载动画
		     	  },
				})
				return num;
			})(),
		}
		
		]
	};

	myChart_China.setOption(Option)
}