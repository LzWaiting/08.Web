window.onload = function(){
	
	// 下拉菜单
	// 1. 获取元素节点
	var currentAddr = document.getElementsByClassName('currentAddress')[0];
	var select = document.getElementsByClassName("select")[0];
	// 2. 获取内层列表中地址项
	var address = select.children;
	// 3. 为每一项添加点击事件
	for(var i = 0; i < address.length; i++){
		address[i].onclick = function(){
			// 传值
			currentAddr.innerHTML = this.innerHTML;
		};
	}

	// 图片轮播
	// 1. 获取图片数组
	var banner = document.getElementsByClassName('wrapper')[0];
	var imgs = banner.children;
	// 获取索引数组
	var imgNav = document.getElementsByClassName('imgNav')[0];
	var indInfo = imgNav.children;

	function autoPlay(){
		// 设置元素隐藏与显示
		imgs[imgIndex].style.display = 'none';
		imgIndex = ++imgIndex == imgs.length ? 0 : imgIndex;
		// if(++imgIndex == imgs.length){
		// 	imgIndex = 0;
		// }
		imgs[imgIndex].style.display = "block";

		// 切换索引 切换背景色
		for(var i = 0; i < indInfo.length; i++){
			indInfo[i].style.background = 'pink';
		}
		indInfo[imgIndex].style.background = 'rgba(255,255,0,.6)';
	}
	// 初始下标
	var imgIndex = 0;
	// 2. 定时器实现图片切换
	// 3. 图片切换主要切换数组下标，防止数组越界
	// 定时器
	var timer = setInterval(autoPlay,2000);
	banner.onmouseover = function(){
		clearInterval(timer);
	};
	banner.onmouseout = function(){
		timer = setInterval(autoPlay,2000);
	};
};