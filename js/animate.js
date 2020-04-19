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
	$('.news_pagination').html("");
	$('.news_pagination').css("display", "block");
	$('.display_news').css("display", "block");
	$('#firstpage').addClass('active');
	get_news();
});

$('#1').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.news_pagination').css("display", "none");
	$('.display_1').css("display", "block");
	$('#1').addClass('active');
	$('#seasonpage').addClass('active');
	analyze(1);
});

$('#2').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.news_pagination').css("display", "none");
	$('.display_1').css("display", "block");
	$('#2').addClass('active');
	$('#seasonpage').addClass('active');
	analyze(2);
});

$('#3').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.news_pagination').css("display", "none");
	$('.display_1').css("display", "block");
	$('#3').addClass('active');
	$('#seasonpage').addClass('active');
	analyze(3);
});

$('#4').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.news_pagination').css("display", "none");
	$('.display_1').css("display", "block");
	$('#4').addClass('active');
	$('#seasonpage').addClass('active');
	analyze(4);
});

$('#5').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.news_pagination').css("display", "none");
	$('.display_1').css("display", "block");
	$('#5').addClass('active');
	$('#seasonpage').addClass('active');
	analyze(5);
});

$('#6').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.news_pagination').css("display", "none");
	$('.display_1').css("display", "block");
	$('#6').addClass('active');
	$('#seasonpage').addClass('active');
	analyze(6);
});

$('#7').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.news_pagination').css("display", "none");
	$('.display_1').css("display", "block");
	$('#7').addClass('active');
	$('#seasonpage').addClass('active');
	analyze(7);
});

$('#b1').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('.display_search').css("display", "none");
	$('.display_2').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_1').css("display", "none");
	$('.news_pagination').css("display", "none");
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
	$('.news_pagination').css("display", "none");
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
	$('.news_pagination').css("display", "none");
	$('.display_board').css("display", "block");
	$('#b3').addClass('active');
	$('#boardpage').addClass('active');
	get_board(3);
});

$('#searchpage').click(function() {
	$('#select .nav-link').removeClass('active');
	$('.dropdown-item').removeClass('active');
	$('#searchpage').addClass('active');
	$('.display_1').css("display", "none");
	$('.display_news').css("display", "none");
	$('.display_board').css("display", "none");
	$('.news_pagination').css("display", "none");
	$('.display_2').css("display", "block");
	$('.display_search').css("display", "block");
});

function get_news() {
	// 處理 data
	$('.display_news').html("");
	$('#loading').css("display", "block");
	var xhr1 = new XMLHttpRequest;
	var url1 = "https://bh-animate.herokuapp.com/show_animates_news";
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
	var url1 = "https://bh-animate.herokuapp.com/show_hot_animate_" + num;
	xhr1.open('GET', url1);
	xhr1.responseType = 'json';
	xhr1.send();
	xhr1.onload = function() {
		let analyze_data = xhr1.response;
		board(analyze_data);
	}

}

function analyze(day) {
	// 處理 data
	$('.display_1').html("");
	$('#loading').css("display", "block");
	var xhr1 = new XMLHttpRequest;
	var url1 = "https://bh-animate.herokuapp.com/animate_new_season_" + day;
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
			var url1 = "https://bh-animate.herokuapp.com/search_animate/" + str;
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


var page_card = [];

function news(analyze_data) {
	var page = Math.ceil(analyze_data['title'].length / 10);
	var cards = '';
	page_card = [];
	for (let i = 0; i < page - 1; i++) {
		cards = '';
		for (let j = 0; j < 10; j++) {
			cards += '<div class="card bg-dark text-white border-secondary">' + '<img src="\
			' + analyze_data['img_link'][i *
					10 + j
				] +
				'" class="card-img-top" alt="...">\
			' + '<div class="card-body">' + '<h5 class="card-title">' + '<b>' +
				analyze_data[
					'title'][i * 10 + j] + '</b>' + '</h5>\
			' + '<a href="' + analyze_data['link'][i * 10 + j] +
				'" target="_blank" class="btn btn-primary">Link</a></div></div>';
		}
		page_card.push(cards);
	}
	cards = '';
	for (let i = 0; i < analyze_data['title'].length % 10; i++) {
		cards += '<div class="card bg-dark text-white border-secondary">' + '<img src="\
		' + analyze_data['img_link'][page * 10 +
				i - 10
			] +
			'" class="card-img-top" alt="...">\
		' + '<div class="card-body">' + '<h5 class="card-title">' + '<b>' +
			analyze_data[
				'title'][page * 10 + i - 10] + '</b>' + '</h5>\
		' + '<a href="' + analyze_data['link'][page * 10 + i - 10] +
			'" target="_blank" class="btn btn-primary">Link</a></div></div>';
	}
	page_card.push(cards);
	$('#loading').css("display", "none");
	add_new(0)
	// $('.display_news').html(cards);
}

function add_new(now_page) {
	$('.display_news').html(page_card[now_page]);
	var pagination = '';
	pagination += '<nav aria-label="Page navigation">' + '<ul class="pagination justify-content-center">';
	for (let i = 0; i < page_card.length; i++) {
		if (i == now_page) {
			pagination += '<li class="page-item active"><a class="page-link" onclick="add_new(' + i + ')" id="page_' + (i + 1) +
				'" href="#">' + (i + 1) +
				'</a></li>';
		} else {
			pagination += '<li class="page-item"><a class="page-link" onclick="add_new(' + i + ')" id="page_' + (i + 1) +
				'" href="#">' + (i + 1) +
				'</a></li>';
		}
	}
	$('.news_pagination').html(pagination);
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
		boardlist += '<img src="' + analyze_data['img_link'][i] + '" class="mr-3" alt="...">\
		' +
			'<div class="media-body">' + '<h5 class="mt-0 mb-1">\
			' + '<b class="text-danger">No.' + (i + 1) + '</b>    ' +
			'<b>' + analyze_data['title']
			[i] + '</b>' + '</h5>\
		' + '<p>' + analyze_data['date'][i] + '<br>' + analyze_data['animates_star'][i] + '<br>' +
			analyze_data['animates_hot'][i] + '<br>' +
			analyze_data['animates_text'][i] + '</p>\
		' + '<a href="' + analyze_data['link'][i] +
			'" target="_blank" class="btn btn-primary">Link</a></div></li>';
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
			' + '<p class="card-text">' + analyze_data['animates_text'][i] + '</p>\
			' +
				'<a href="' +
				analyze_data['link'][i] + '" target="_blank" class="btn btn-primary">Link</a></div></div>';
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
		' + '<h6 class="card-subtitle mb-2 text-white">' + analyze_data['date'][i] +
			'<br>' +
			analyze_data['animates_star'][i] + '<br>\
		' + analyze_data['animates_hot'][i] + '</h6>\
		' +
			'<p class="card-text">' +
			analyze_data['animates_text'][i] + '</p>\
		' + '<a href="' +
			analyze_data['link'][i] + '" target="_blank" class="btn btn-primary">Link</a></div></div>';

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
