function China() {
	var myChart = echarts.init(document.getElementById('main-China1'));
	myChart.setOption({
		tooltip: {
			trigger: 'item',
			formatter: '{b}'
		},
		roam: 'scale',

		series: [{
			type: 'map',
			mapType: 'china',
			itemStyle: {
				normal: {
					areaColor: '#006edd',
					label: {
						show: true,
						textStyle: {
						color: '#ccc'
					},
					}
				},
				emphasis: {
					label: {
						show: true
					}
				}
			}
		}]
	});
	var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
	var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
	for(var i = 0; i < provinces.length; i++) {
		loadBdScript('$' + provinces[i] + 'JS', 'js/map/' + provinces[i] + '.js', function() {});
	}

	myChart.on('click', function(params) {
		city = params.name;
		//遍历取到provincesText 中的下标  去拿到对应的省js
		for(var i = 0; i < provincesText.length; i++) {

			if(city == provincesText[i]) {
				loadBdScript('$' + provinces[i] + 'JS', 'js/map/' + provinces[i] + '.js', function() {});
				//显示对应省份的方法
				showCity(provincesText[i]);
				break;
			}

		}
	});
}

function showCity(city) {

	var pie = echarts.init(document.getElementById('province-map'));
	pie.setOption({
		backgroundColor: '#404a59',
		series: [{
			type: 'map',
			map: city,
			label: {
				emphasis: {

					textStyle: {
						color: '#fff'
					}
				}
			},
			itemStyle: {
				normal: {
					borderColor: '#389BB7',
					areaColor: '#fff',
				},
				emphasis: {
					areaColor: '#389BB7',
					borderWidth: 0
				}
			},
		}]
	});
}

//加载对应的JS
function loadBdScript(scriptId, url, callback) {
	console.log(url);
	var script = document.createElement("script")
	script.type = "text/javascript";
	if(script.readyState) { //IE  
		script.onreadystatechange = function() {
			if(script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else { //Others  
		script.onload = function() {
			callback();
		};
	}
	script.src = url;
	script.id = scriptId;
	document.getElementsByTagName("head")[0].appendChild(script);
};