$("#up_button").on('click', function () {



	$.ajax({

		type: "post",
		url: "/testpage/testpage",
		data: { recom_up: "1" },

		success: function (data) {

			alert("추천 전송성공");
		},

		error: function (request) {
			alert("추천 전송 에러");
		}

	});
});


$("#under_button").on('click', function () {

	$.ajax({

		type: "post",
		url: "/testpage/testpage",
		data: { recom_down: "1" },

		success: function (data) {

			alert("비추천 전송성공");
		},

		error: function (request) {
			alert("비추천 전송 에러");
		}

	});
});


$("#browser_wid_hei").change(function () {


	var window_width = window.outerWidth;
	var window_height = window.outerHeight;

	var bro_wid_hei = $("#browser_wid_hei");
	bro_wid_hei.text("window_width = " + window_width + ", window_height = " + window_height);

});


$(window).resize(function() {
	

	var window_width = window.outerWidth;
	var window_height = window.outerHeight;

	var bro_wid_hei = $("#browser_wid_hei");
	bro_wid_hei.text("window_width = " + window_width + ", window_height = " + window_height);

});


var login_id;

sessionStorage.setItem("login_id", login_id);