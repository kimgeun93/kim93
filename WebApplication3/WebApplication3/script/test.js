
$("#up_button").on('click', function () {

	

	$.ajax({

		type: "post",
		url: "/testpage/testpage",
		data: {up_val :  "1"},

		success: function (data) {

			alert("전송성공");
		}

	});
});


$("#under_button").on('click', function () {

	$.ajax({

		type: "post",
		url: "/testpage/testpage",
		data: { down_val: "1" },

		success: function (data) {

			alert("전송성공");
		}

	});
});
