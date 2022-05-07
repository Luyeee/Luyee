var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");
var p4=document.getElementById("p4");
var p5=document.getElementById("p5");
var p6=document.getElementById("p6");
var p7=document.getElementById("p7");
var p8=document.getElementById("p8");

p1.onclick=function(e){
	p1.style.color="red";
	alert("p1");
}

p2.onclick=function(e){
	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	document.getElementById("date").textContent=year+"-"+month+"-"+day;
	alert("p2");
}

p3.onclick=function(e){
	document.getElementById("parent").classList.add("fn-active");
	alert("p3");
}

p4.onclick=function(e){
	document.getElementById("parent").removeChild(p8);
	alert("p4");
}

p5.onclick=function(e){
	window.open('https://www.taobao.com/?spm=a2e0b.20350158.1581860521.1.2c6d468adyRSnZ&pid=mm_26632360_8858797_29866178&union_lens=recoveryid%3A201_33.8.5.232_20086735_1646794063060%3Bprepvid%3A201_33.8.5.232_20086735_1646794063060&clk1=1f74dd600ec1158ff477e5f21c4f2d3c?spm=a2e0b.20350158.1581860521.1.2c6d468adyRSnZ&pid=mm_26632360_8858797_29866178&union_lens=recoveryid%3A201_33.8.5.232_20086735_1646794063060%3Bprepvid%3A201_33.8.5.232_20086735_1646794063060&clk1=1f74dd600ec1158ff477e5f21c4f2d3c',
		'淘宝主页面','height=400, width=800, top=200, left=200, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
	alert("p5");
}

p6.onclick=function(e){
    var p9=document.createElement("li");
    var text=document.createTextNode("p9");
    p9.appendChild(text);
	document.getElementById("parent").appendChild(p9);
	alert("p6");
}

p7.onclick=function(e){
    document.getElementById("m-box").style.width=window.screen.width;
    alert("p7");
}