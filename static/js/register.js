$(function () {

    var t1 = false;
    var t2 = false;
    var t3 = false;
    var t4 = false;

    $("#phone").blur(function () {
        var val = $(this).val();
        var ret = /^[\d]{5,20}$/;
        if (!ret.test(val)) {
            $("#phone").siblings(".err").show()

            $.get('/checkaccount/'), {'account':$(this).val()}, function (response) {
                console.log(response)
                if (response.status == 'fine'){
                    $("#phone").siblings(".err").hide();
                    t1 = true;
                }
                else if(response.status == 'error'){
                    $("#phone").siblings(".err").show()
                }
            }
        }
        else {
            $("#phone").siblings(".err").hide();
            t1 = true;
        }
    });

    $("#yzm").blur(function () {

        var val = $(this).val();
        var val1 = $(this).siblings("#yzm1").val();
        if (val == val1) {
            $("#yzm").siblings(".err").hide();
            t2 = true;
        }
        else {
            $("#yzm").siblings(".err").show();
        }

    });
    $("#yzm1").click(function () {
        var a = parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10);

        $("#yzm1").val(a);
    });

    $("#mima1").blur(function () {
        var val = $("#mima1").val();
        if (/^[0-9a-zA-Z_]{6,15}$/.test(val)) {
            $("#mima1").siblings(".err").hide();
            t3 = true;
        }
        else {
            $("#mima1").siblings(".err").show()
        }
    });

    $("#mima2").blur(function () {
        var val1 = $("#mima1").val();
        var val2 = $("#mima2").val();
        if (val1 == val2) {
            $("#mima2").siblings(".err").hide();
            t4 = true;
        }
        else {
            $("#mima2").siblings(".err").show();
        }
    });
});