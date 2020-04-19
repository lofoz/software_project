var video_num;
var page_num = 0;
var page_size = [];
var page_content = [];
var page_list = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
var pagination_li;
var info;
var ser_page_num = 0;
var ser_page_size = [];
var ser_page_content = [];
var state = 0; //home
var pre_text;
$(document).ready(function() {
	$.ajax({
		url: "https://cors-anywhere.herokuapp.com/https://japan-drama.herokuapp.com/",
		type: "GET",
		dataType: 'json',
		success: function(data) {
			video_num = data.length;
			cal_page(video_num);
			init_card(data);
			init_pagination(page_num);
			init_carousel(page_num);
			$('.cardset').html(page_content[0]);
			info = data;
		},
	});



	function cal_page(num) {
		var len = num;
		while (len > 0) {
			len = len - 20;
			page_num = page_num + 1;
			page_size.push(20);
		}
		if (len < 0) {
			page_size.pop();
			page_size.push(len + 20);
		}
		return;
	}

	function ser_cal_page(num) {
		var len = num;
		while (len > 0) {
			len = len - 20;
			ser_page_num = ser_page_num + 1;
			ser_page_size.push(20);
		}
		if (len < 0) {
			ser_page_size.pop();
			ser_page_size.push(len + 20);
		}
		return;
	}


	function init_card(data) {
		for (var index = 0; index < page_num; index++) {
			var content = '';
			var rate;
			var actor = [];
			for (var i = 0; i < 20; i++) {
				if ((i + 20 * index) == video_num)
					break;
				actor = [];
				if (typeof(data[i + 20 * index].aggregateRating) != "undefined") {
					rate = (data[i + 20 * index].aggregateRating.ratingValue);
				} else {
					rate = 'None';
				}


				if (data[i + 20 * index].actor.length >= 3) {
					for (var j = 0; j < 3; j++)
						actor.push(data[i + 20 * index].actor[j].name);
				} else {
					for (var j = 0; j < data[i + 20 * index].actor.length; j++)
						actor.push(data[i + 20 * index].actor[j].name);
					var rest = 3 - data[i + 20 * index].actor.length;
					for (var j = 0; j < rest; j++)
						actor.push('');
				}

				content += '<div class="col-6 col-sm-6 col-md-6 col-lg-6" style="display:flex">' +
					'<div class="card border-dark mb-3" >' +
					'<img src=' + data[i + 20 * index].image[0] + ' class="card-img-top img-fluid" alt="...">' +
					' <h5><span class="badge badge-pill badge-primary rate" style="right:0;position:absolute;margin-top:-0.5rem;">' +
					rate + '</span></h5>' +
					'<div class="card-body">' +
					'<h5 class="card-title">' + data[i + 20 * index].name + '</h5>' +
					'<div class="text-part" style="margin-bottom: 0;">' + data[i + 20 * index].description.substring(0, 50) + '...' +
					'</div>' +
					'<div class="actor">' + actor[0] + ' ' + actor[1] + ' ' + actor[2] +
					'</div>' +
					'</div>' +
					'<a class="btn btn-primary link align-self-end" href="' + data[i + 20 * index].url + '" role="button">前往看片</a>' +
					'</div>' +
					'</div>';
			}
			page_content.push(content);
		}
	}




	function init_pagination(num) {
		content = '';
		for (var i = 0; i < num; i++) {
			content += '<li class="page-item ' + page_list[i] + ' ">' + '<a class="page-link " >' + (i + 1) +
				'</a>' +
				'</li>';
		}
		pagination_li = content;
		$('.pagination').html(content);
		$('.one').click(function() {
			$('.cardset').html(page_content[0]);
			console.log('ome');
			$('html,body').scrollTop(0);
		})

		$('.two').click(function() {
			$('.cardset').html(page_content[1]);
			$('html,body').scrollTop(0);
		})

		$('.three').click(function() {
			$('.cardset').html(page_content[2]);
			$('html,body').scrollTop(0);
		})

		$('.four').click(function() {
			$('.cardset').html(page_content[3]);
			$('html,body').scrollTop(0);
		})

		$('.five').click(function() {
			$('.cardset').html(page_content[4]);
			$('html,body').scrollTop(0);
		})

		$('.six').click(function() {
			$('.cardset').html(page_content[5]);
			$('html,body').scrollTop(0);
		})

		$('.seven').click(function() {
			$('.cardset').html(page_content[6]);
			$('html,body').scrollTop(0);
		})
	}



	function init_carousel(num) {
		$.ajax({
			url: "https://cors-anywhere.herokuapp.com/https://japan-drama.herokuapp.com/banner",
			type: "GET",
			dataType: 'json',
			success: function(data) {
				banner_num = data.length;
				content = '';
				for (var i = 0; i < banner_num; i++) {
					if (i == 0) {
						content += '<div class="carousel-item active">' + '<a href=' + data[i].url + '>' +
							'<img src=' + data[i].img + '  class="d-block w-100" alt="..."></a>' +
							'<div class="carousel-caption ">' + '<h5 class="font-weight-bold ">' + data[i].name + '</h5>' +
							'</div>' + ' </div>';
					} else {
						content += '<div class="carousel-item ">' + '<a href=' + data[i].url + '>' +
							'<img src=' + data[i].img + '  class="d-block w-100" alt="..."></a>' +
							'<div class="carousel-caption ">' + '<h5 class="font-weight-bold ">' + data[i].name + '</h5>' +
							'</div>' + ' </div>';
					}
				}
				$('.carousel-inner').html(content);
			},
		});
	}



	function ser_card(result) {
		for (var index = 0; index < ser_page_num; index++) {
			var content = '';
			var rate;
			var actor = [];
			for (var i = 0; i < 20; i++) {
				if ((i + 20 * index) == ser_num)
					break;
				actor = [];
				if (typeof(result[i + 20 * index].aggregateRating) != "undefined") {
					rate = (result[i + 20 * index].aggregateRating.ratingValue);
				} else {
					rate = 'None';
				}


				if (result[i + 20 * index].actor.length >= 3) {
					for (var j = 0; j < 3; j++)
						actor.push(result[i + 20 * index].actor[j].name);
				} else {
					for (var j = 0; j < info[i + 20 * index].actor.length; j++)
						actor.push(result[i + 20 * index].actor[j].name);
					var rest = 3 - result[i + 20 * index].actor.length;
					for (var j = 0; j < rest; j++)
						actor.push('');
				}

				content += '<div class="col-6 col-sm-6 col-md-6 col-lg-6" style="display:flex">' +
					'<div class="card border-dark mb-3" >' +
					'<img src=' + result[i + 20 * index].image[0] + ' class="card-img-top img-fluid" alt="...">' +
					' <h5><span class="badge badge-pill badge-primary rate" style="right:0;position:absolute;margin-top:-0.5rem;">' +
					rate + '</span></h5>' +
					'<div class="card-body">' +
					'<h5 class="card-title">' + result[i + 20 * index].name + '</h5>' +
					'<div class="text-part" style="margin-bottom: 0;">' + result[i + 20 * index].description.substring(0, 50) +
					'...' +
					'</div>' +
					'<div class="actor">' + actor[0] + ' ' + actor[1] + ' ' + actor[2] +
					'</div>' +
					'</div>' +
					'<a class="btn btn-primary link align-self-end" href="' + result[i + 20 * index].url +
					'" role="button">前往看片</a>' +
					'</div>' +
					'</div>';
			}
			ser_page_content.push(content);
			$('.cardset').html(ser_page_content[0]);
		}
	}

	function ser_pagination(num) {
		content = '';
		for (var i = 0; i < ser_page_num; i++) {
			content += '<li class="page-item ' + page_list[i] + ' ">' + '<a class="page-link " >' + (i + 1) +
				'</a>' +
				'</li>';
		}
		$('.pagination').html(content);
		$('.one').click(function() {
			$('.cardset').html(ser_page_content[0]);
			console.log('ome');
			$('html,body').scrollTop(0);
		})

		$('.two').click(function() {
			$('.cardset').html(ser_page_content[1]);
			$('html,body').scrollTop(0);
		})

		$('.three').click(function() {
			$('.cardset').html(ser_page_content[2]);
			$('html,body').scrollTop(0);
		})

		$('.four').click(function() {
			$('.cardset').html(ser_page_content[3]);
			$('html,body').scrollTop(0);
		})

		$('.five').click(function() {
			$('.cardset').html(ser_page_content[4]);
			$('html,body').scrollTop(0);
		})

		$('.six').click(function() {
			$('.cardset').html(ser_page_content[5]);
			$('html,body').scrollTop(0);
		})

		$('.seven').click(function() {
			$('.cardset').html(ser_page_content[6]);
			$('html,body').scrollTop(0);
		})
	}

	function state_dec() {
		if (state == 0) {


			ser_num = 0;
			ser_page_num = 0;
			ser_page_size = [];
			ser_page_content = [];
			var value = $('.inputtext').val();
			pre_text = value;
			var result = find(value);
			if (result.length == 0) {
				$('.cardset').html('查無結果');
				$('.pagination').html('');
			} else {
				state = 1;
				ser_num = result.length;
				ser_cal_page(ser_num);
				ser_card(result);
				ser_pagination(ser_page_num);
			}

		} else {
			var value = $('.inputtext').val();
			if (value == pre_text) {
				$('.cardset').html(ser_page_content[0]);
			} else {
				state = 0;
				state_dec();
			}
		}
	}

	$('.search').click(function(e) {
		e.preventDefault();
		if ($('.inputtext').val() == '') {
			state = 0;
			$('.cardset').html(page_content[0]);
			init_pagination(page_num);
		} else {
			state_dec();
		}
	})

	function find(text) {
		var res = [];
		for (var i = 0; i < info.length; i++) {
			var obj = info[i];
			if (obj.name.includes(text)) {
				res.push(obj);
				// console.log(obj);
				continue;
			}
			var actor_list = obj.actor;
			// console.log(actor_list);
			for (var j = 0; j < actor_list.length; j++) {
				if (actor_list[j].name.includes(text)) {
					res.push(obj);
					// console.log(obj);
					break;
				}
			}
		}
		return res;
	}



});
