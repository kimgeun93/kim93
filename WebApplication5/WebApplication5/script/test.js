$(function () {


    var window_width = window.outerWidth;
    var window_height = window.outerHeight;


    var bro_wid_hei = $("#browser_wid_hei");
    bro_wid_hei.text("window_width = " + window_width + ", window_height = " + window_height);

    var comment = $("#comment").children("#comment_add");
    comment.width(window_width);

    $("#up_data_like").width(window_width);
    $("input[type=text]").width(window_width - ($("#comment_bnt").width() ));
    $("img").width(window_width);
    
    $("#up_list").width(window_width);
   
    $(".button_wrap").css('margin-left', window.outerWidth / 9)
    $(".button_wrap span").css('margin-left', window.outerWidth / 9);
    $(".button_wrap span").css('left', window.outerWidth / 9);


    var menu_width = (window_width - (window_width / 4));

    $("#menu_list").width(menu_width);
    $("#menu_list").height(window_height);
    $("#menu_list").css('left', -(window_width - (window_width / 10)));
});

$(window).resize(function () {


    var window_width = window.outerWidth;
    var window_height = window.outerHeight;


    var bro_wid_hei = $("#browser_wid_hei");
    bro_wid_hei.text("window_width = " + window_width + ", window_height = " + window_height);

    var comment = $("#comment").children("#comment_add");
    comment.width(window_width);

    $("#up_data_like").width(window_width);
    $("input[type=text]").width(window_width - ($("#comment_bnt").width()));
    $("img").width(window_width);
  
    $("#up_list").width(window_width);
    
    $(".button_wrap").css('margin-left', window.outerWidth / 9)
    $(".button_wrap span").css('margin-left', window.outerWidth / 9)
    $(".button_wrap span").css('left', window.outerWidth / 9);

    $("#menu_list").width(window_width - (window_width / 4));
    $("#menu_list").height(window_height);
    $("#menu_list").css('left', -(window_width - (window_width / 10)));
});



$("#up_button").on('click', function () {



	$.ajax({

		type: "post",
		url: "/testpage/testpage",
		data: { recom_up: "1" },

        success: function (data) {
            var com = data.split(":");

            var up_recom = com[1].replace(/[^\d]/gi, "");
            $("#up_button").text(up_recom + " 추천");
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
            var com = data.split(":");

            var down_recom = com[2].replace(/[^\d]/gi, "");
            $("#under_button").text(down_recom + " 비추천");
			alert("비추천 전송성공");
		},

		error: function (request) {
			alert("비추천 전송 에러");
		}

	});
});





$("#comment_bnt").on('click', function () {


	var input_val = $("#input_val").val();
    var comment = $("#comment");
    var comment_div_length = $("#comment div").length;
    var comment_length;

    if (input_val.search(/\s/) == -1 || input_val.search(/^(댓글을 입력해주세요)$/) == -1) {
			$.ajax({

				type: "post",
				url: "/testpage/testpage",
				data: { comment: input_val },

                success: function (data) {
                   
                    var com = data.split(":");
                    
                   
                    comment_length = com[3].replace(/\"|\}/gi, "");
                    if (comment_div_length < 10) {
                            comment.append("<div id=\"comment_add\">" + input_val + "</div>");
                    }

                    if ((comment_length % 10) == 0) {
                            $("#comment_list").append("<a id=\"comment_list_a\" href=\"testpage/testpage?i=" + ((comment_length / 10) + 1) + "\">" + ((comment_length / 10) + 1) + "</a >");
                    }
                   
              
                     $("#teiki").text(comment_length);
                     

					
				},
				error: function (request) {
					alert("코멘트 전송 에러");
				}
			});
        $("#input_val").val("");
	}
});











$("#teiki").on('click', function () {

    var regex = new RegExp("/[가-힣]/g;", 'g');
	
	$(this).text(regex);



});


$("#like").on('click', function () {

    $("#up_data_like").animate({
        left: 0,
        top:30
    },1000);


});

$("body").click(function (e) {
    var window_width = window.outerWidth;
    var window_height = window.outerHeight;
    var righ = window_width - (window_width / 10);

    if ($(e.target).hasClass('up_data_like')) {      /** 움직이는거 클릭했을때 안들어가도록 **/
        return false;
    }
    if ($(e.target).hasClass('db_like')) {
        return false;
    }
    if ($(e.target).hasClass('db_like_button')) {
        return false;
    }
    if ($(e.target).hasClass('menu_list')) {
        return false;
    }
    if ($(e.target).hasClass('auto_display')) {
        return false;
    }
    if ($(e.target).hasClass('up_data_div')) {
        return false;
    }
    if ($("#up_data_like").position().top == 30) {
        $("#up_data_like").animate({
            left: 0,
            top: -105
        },1000);

    }
    if ($("#menu_list").position().left == 00) {
        $("#menu_list").animate({
            left: -righ
           
        }, 1000);

    }

    $("#auto_display li").remove();

});



$("#input_val").click(function () {
    $(this).val("");
    $("#auto_display ul").css('display', 'block');

});


$("#db_like_button").on('click', function () {

    var db_like_val = $("#db_like").val();
    sessionStorage.setItem(db_like_val, 'db_like_val');
    
    $.ajax({
        type: "post",
        url: "/testpage/testpage",
        data: { auto_display : db_like_val },

        success: function (data) {

           /** alert("자동검색어 전송성공") **/
        },

        error: function (data) {
            alert("자동검색어 전송실패")
        }
    });
    $("#db_like").val("");
});


$("#db_like").focus( function () {
    $(this).val("");

    $("#auto_display ul").css("display", "block");
    for (var i = 0; i < sessionStorage.length; i++){
        var db_like_getitem = sessionStorage.key(i);
        
        $("#auto_display ul").append("<li>최근검색어</li><li class=\"auto_li\">" + db_like_getitem + "</li>");
    }

});
$("#db_like").blur(function () {
    $("#auto_display ul li").remove();

});

$("#menu_click").on('click', function () {

    var window_width = window.outerWidth;
    var window_height = window.outerHeight;
    var righ = window_width - (window_width / 10);
    $("#menu_list").animate({

        left: 0
        
    });

});

$(".auto_li").on('click', function () {

    var auto_li = $(".auto_li").val();
    $("#db_like").val(auto_li);
    $("#auto_display ul li").remove();

});