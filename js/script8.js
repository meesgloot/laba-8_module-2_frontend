function synch() {
	for(let i = 1; i <= 8; i++) {
			console.log(i);
	}
}
function asynch() {
	console.log(1);
	
	setTimeout(function timeout() {
		console.log(2);
	})
	Promise.resolve().then(()=>console.log(3));
	Promise.resolve().then(()=>console.log(4));
	Promise.resolve().then(()=>console.log(5));
	
	setTimeout(function timeout() {
		console.log(6);
	})
	
	let some = new Promise(function(resolve, reject){
		console.log(7);
		resolve();
	})
	let prom = new Promise(function(resolve, reject){
		console.log(8);
		resolve();
	})
}
function pattern() {
	const http = "http://";
	const https = "https://";
	
	let url=document.getElementById("input").value;
	
	if(/^http?:\/\//.test(url) == true || /^https?:\/\//.test(url) == true) {
		alert("Это url!");
	}else {
		alert("Это не url!");
	}
	
	
	document.getElementById("input").value = url.replace(http, https);
	
	
}
