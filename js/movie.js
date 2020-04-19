$(document).ready(function() {
	get_news();
});

$('.btn').click(function() {
	search($('#search').val());
});

$('#firstpage').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_1').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_board').css("display", "none");
	$('.display_news').css("display", "block");
	$('#firstpage').addClass('active');
	get_news();
});

$('#seasonpage').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.display_1').css("display", "block");
	$('#seasonpage').addClass('active');
	analyze();
});


$('#b1').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_1').css("display", "none");
	$('.display_board').css("display", "block");
	$('#b1').addClass('active');
	$('#boardpage').addClass('active');
	get_board(1);
});

$('#b2').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_1').css("display", "none");
	$('.display_board').css("display", "block");
	$('#b2').addClass('active');
	$('#boardpage').addClass('active');
	get_board(2);
});

$('#b3').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_1').css("display", "none");
	$('.display_board').css("display", "block");
	$('#b3').addClass('active');
	$('#boardpage').addClass('active');
	get_board(3);
});

$('#b4').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_1').css("display", "none");
	$('.display_board').css("display", "block");
	$('#b4').addClass('active');
	$('#boardpage').addClass('active');
	get_board('pre');
});

$('#searchpage').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('#searchpage').addClass('active');
	$('.display_1').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.display_2').css("display", "block");
	$('.display_search').css("display", "block");
});

function get_news() {
	// 處理 data
	$('.display_news').html("");
	$('#loading').css("display", "block");
	var xhr1 = new XMLHttpRequest;
	var url1 = "https://ya-movie.herokuapp.com/show_movies_news";
	xhr1.open('GET', url1);
	xhr1.responseType = 'json';
	xhr1.send();
	xhr1.onload = function() {
		let analyze_data = xhr1.response;
		news(analyze_data);
	}

}

function get_board(num) {
	// 處理 data
	$('.display_board').html("");
	$('#loading').css("display", "block");
	var xhr1 = new XMLHttpRequest;
	var url1 = "https://ya-movie.herokuapp.com/show_hot_movies_" + num;
	xhr1.open('GET', url1);
	xhr1.responseType = 'json';
	xhr1.send();
	xhr1.onload = function() {
		let analyze_data = xhr1.response;
		board(analyze_data);
	}

}

function analyze() {
	// 處理 data
	$('.display_1').html("");
	$('#loading').css("display", "block");
	var xhr1 = new XMLHttpRequest;
	var url1 = "https://ya-movie.herokuapp.com/show_new_movies";
	xhr1.open('GET', url1);
	xhr1.responseType = 'json';
	xhr1.send();
	xhr1.onload = function() {
		let analyze_data = xhr1.response;
		specific(analyze_data);
	}

}

function search(str) {
	if (str != '') {
		// 處理 data
		var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~!@#￥……&*()——|{}【】‘;:”“'。,、?%]");
		var result = str.match(pattern);
		if (!result) {
			$('.display_2').html("");
			$('#loading').css("display", "block");
			var xhr1 = new XMLHttpRequest;
			var url1 = "https://ya-movie.herokuapp.com/search_moive/" + str;
			xhr1.open('GET', url1);
			xhr1.responseType = 'json';
			xhr1.send();
			xhr1.onload = function() {
				let analyze_data = xhr1.response;
				searchdis(analyze_data);
			}
		} else {

			alert("含有特殊字元，請重新輸入")
		}
	}
}

function news(analyze_data) {
	var cards = '';
	for (let i = 0; i < analyze_data['title'].length; i++) {
		cards += '<div class="card bg-dark text-white border-secondary">' + '<img src="\
		' + analyze_data['img_link'][i] +
			'" class="card-img-top" alt="...">\
		' + '<div class="card-body">' + '<h5 class="card-title">' + '<b>' +
			analyze_data[
				'title'][i] + '</b>' + '</h5>\
		' + '<a href="' + analyze_data['link'][i] +
			'" target="_blank" class="btn btn-primary">Link</a></div></div>';
	}
	$('#loading').css("display", "none");
	$('.display_news').html(cards);
}

function board(analyze_data) {
	var boardlist = '';
	for (let i = 0; i < analyze_data['title'].length; i++) {
		if (i == 0 || i == analyze_data['title'].length - 1) {
			if (i == 0) boardlist += '<li class="media ml-4 mt-4">';
			if (i == analyze_data['title'].length - 1) boardlist += '<li class="media ml-4 mb-4 mt-4">';
		} else {
			boardlist += '<li class="media ml-4 my-4">';
		}
		boardlist += '<img src="' + analyze_data['img_link'][i] + '"style="width:130px;" class="mr-3" alt="...">\
		' +
			'<div class="media-body">' + '<h5 class="mt-0 mb-1">\
			' + '<b class="text-danger">No.' + (i + 1) + '</b>    ' +
			'<b>' + analyze_data['title']
			[i] + '</b>' + '</h5>\
		' + '<p>' + analyze_data['date'][i] + '<br>' + '網友滿意度 ：' + analyze_data['movies_star'][i] + '<br>' +
			analyze_data['movies_text'][i] + '</p>\
		' + '<a href="' + analyze_data['link'][i] +
			'" target="_blank" class="btn btn-primary">Link</a>' + '<a href="' + analyze_data['movies_pre'][i] +
			'" target="_blank" class="btn btn-primary ml-2">預告片</a></div></li>';
	}
	$('#loading').css("display", "none");
	$('.display_board').html(boardlist);
}

function searchdis(analyze_data) {
	if (typeof(analyze_data) == "object") {
		var cards = '';
		for (let i = 0; i < analyze_data['title'].length; i++) {
			cards += '<div class="card bg-light border-secondary">' + '<img src="\
			' + analyze_data[
					'img_link'][i] +
				'" class="card-img-top" alt="...">\
			' + '<div class="card-body">' + '<h5 class="card-title">' + '<b>' +
				analyze_data[
					'title'][i] + '</b>' + '</h5>\
			' + '<p class="card-text">' + '日期：' + analyze_data['date'][i].substring(6) +
				'<br>' + analyze_data['movies_star'][i] + '</p>\
			' +
				'<a href="' +
				analyze_data['link'][i] + '" target="_blank" class="btn btn-primary">Link</a>' + '<a href="' + analyze_data['movies_pre'][i] +
			'" target="_blank" class="btn btn-primary ml-2">預告片</a></div></div>';
		}
		$('#loading').css("display", "none");
		$('.display_2').html(cards);
	} else {
		$('#loading').css("display", "none");
		$('.display_2').html(analyze_data);
	}
}

function specific(analyze_data) {
	var cards = '';
	for (let i = 0; i < analyze_data['title'].length; i++) {

		cards += '<div class="card text-white bg-secondary border-dark">' + '<img src="\
		' +
			analyze_data['img_link'][i] +
			'" class="card-img-top" alt="...">\
		' + '<div class="card-body">' + '<h5 class="card-title">' + '<b>' +
			analyze_data[
				'title'][i] + '</b>' + '</h5>\
		' + '<h7 class="card-subtitle mb-2 text-white">' + '日期：' + analyze_data['date'][i]
			.substring(6) +
			'<br>' +
			'好評值：' + analyze_data['movies_star'][i] + '</h7>\
		' +
			'<p class="card-text">' +
			analyze_data['movies_text'][i].substring(0, 50) + '...' + '</p>\
		' + '<a href="' +
			analyze_data['link'][i] + '" target="_blank" class="btn btn-primary">Link</a>' + '<a href="' + analyze_data['movies_pre'][i] +
			'" target="_blank" class="btn btn-primary ml-2">預告片</a></div></div>';

		// title += '<div id="title' + i + '">' + analyze_data['title'][i] + '</div>';
		// link += '<div id="link' + i + '">' + analyze_data['link'][i] + '</div>';
		// img_link += '<img id="img_link' + i + '" src="' + analyze_data['img_link'][i] + '">';
		// date += '<div id="date' + i + '">' + analyze_data['date'][i] + '</div>';
		// animates_text += '<div id=".animates_text' + i + '">' + analyze_data['animates_text'][i] + '</div>';
		// animates_star += '<div id="animates_star' + i + '">' + analyze_data['animates_star'][i] + '</div>';
		// animates_hot += '<div id="animates_hot' + i + '">' + analyze_data['animates_hot'][i] + '</div>';
	}
	$('#loading').css("display", "none");
	$('.display_1').html(cards);
}
