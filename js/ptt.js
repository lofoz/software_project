$(document).ready(function() {
	$('#d1').css("display", "none");
	$('#d2').css("display", "none");
	$('#caro').css("display", "none");
	$('#prev').css("visibility", "hidden");
	$('#next').css("visibility", "hidden");
	$('#indi').css("visibility", "hidden");
	new_news();

	$('.carousel').carousel({
		interval: 4000
	});
});


// $('#btn').onclick = "search()";

async function search() {
	board = await document.getElementById('board').value;
	kw = document.getElementById('kw').value;

	if (board != "") {
		var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~!@#￥……&*()——|{}【】‘;:”“'。,、?%]");
		var m1 = board.match(pattern);
		var m2 = kw.match(pattern);
		if (m1 != null || m2 != null) {
			alert("請勿輸入特殊符號!");
			return;
		}
	}
	console.log("start search");
	$('#d1').css("display", "none");
	$('#d2').css("display", "none");
	$('#wc').css("display", "none");

	document.getElementById('result').innerHTML = "";
	document.getElementById('hot').innerHTML = "";
	document.getElementById('wc').src = "";
	$('#d1').css("display", "block");
	$('#sp1').css("display", "block");
	$('#sp2').css("display", "block");
	$('#d2').css("display", "block");
	$('#sp3').css("display", "block");
	
	if (board == "") board = "default";
	if (kw == "") kw = "default";
	console.log("board: %s, kw: %s", board, kw);

	// 處理 data
	var xhr1 = new XMLHttpRequest;
	var url1 = "https://crawler4ptt.herokuapp.com/search/" + board + "/" + kw;
	xhr1.open('GET', url1);
	xhr1.responseType = 'json';
	xhr1.send();
	xhr1.onload = await
	function() {
		$('#sp1').css("display", "none");
		$('#sp2').css("display", "none");
		let analyze_data = xhr1.response;
		searchdis(analyze_data);
	}

	var xhr2 = new XMLHttpRequest;
	var url2 = "https://crawler4ptt.herokuapp.com/wc/" + board;
	xhr2.open('GET', url2);
	xhr2.responseType = 'json';
	xhr2.send();
	xhr2.onload = await
	function() {
		let analyze_data = xhr2.response;
		searchwc(analyze_data);
	}
}

function searchdis(analyze_data) {
	console.log(analyze_data);

	result = analyze_data.posts;
	hot = analyze_data.hot_issue;

	console.log("hot:%s\n result:%s", hot, result);

	text1 = ""
	text2 = ""
	for (let i = 0; i < result.length; i++) {
		text1 += result[i];
	}
	for (let i = 0; i < hot.length; i++) {
		text2 += hot[i];
	}
	document.getElementById('result').innerHTML = text1;
	document.getElementById('hot').innerHTML = text2;
}

function searchwc(analyze_data) {
	console.log(analyze_data);

	$('#sp3').css("display", "none");
	$('#wc').css("display", "block");
	wc_url = analyze_data.wc_url;
	console.log("url: %s\n", wc_url);
	document.getElementById('wc').src = wc_url;
}

async function new_news() {
	// 處理 data
	console.log('page loading');
	var xhr1 = new XMLHttpRequest;
	var url1 = "https://crawler4ptt.herokuapp.com/news";
	xhr1.open('GET', url1);
	xhr1.responseType = 'json';
	xhr1.send();
	xhr1.onload = await
	function() {
		let analyze_data = xhr1.response;
		hot_news = analyze_data.hot
		console.log(hot_news);
		$('#sp0').css("display", "none");
		document.getElementById('n1').innerHTML = hot_news[0];
		document.getElementById('n2').innerHTML = hot_news[1];
		document.getElementById('n3').innerHTML = hot_news[2];
		document.getElementById('n4').innerHTML = hot_news[3];
		document.getElementById('n5').innerHTML = hot_news[4];
		$('#caro').css("display", "block");
		$('#prev').css("visibility", "visible");
		$('#next').css("visibility", "visible");
		$('#indi').css("visibility", "visible");
	}
}
