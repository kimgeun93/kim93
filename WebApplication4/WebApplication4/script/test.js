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