// <script type="text/javascript">
$(function () {



    // var phone = getCookie("phone");
    // var pwd = getCookie("pwd");
    // var autologin = getCookie("autologin");
    //
    //
    // $("#name").val(phone)
    // $("#password").val(pwd)

    // if (autologin) {
    //     var xhr = new XMLHttpRequest();
    //
    //     xhr.open("post", "http://localhost/wbiao/php/login.php", true);
    //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //     var str = "phone=" + $("#name").val() + "&pwd=" + $("#password").val();
    //     xhr.send(str);
    //
    //
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState == 4 && xhr.status == 200) {
    //             var obj = JSON.parse(xhr.responseText)
    //
    //
    //             if (obj.status == 1) {
    //                 $(".zidong").show()
    //                 $(".bbb").show()
    //                 $(".zidong a").eq(0).click(function (e) {
    //                     e.preventDefault();
    //                     $(".zidong").slideUp();
    //                     $(".bbb").slideUp();
    //                 })
    //                 $(".zidong a").eq(1).click(function (e) {
    //                     e.preventDefault();
    //                     window.location.href = "http://localhost/wbiao/html/index.html";
    //                 })
    //             }
    //
    //         }
    //     }
    // }

    $("#dl").click(function () {

        // if ($("#autologin").is(':checked')) {
        //
        //
        //     var d = new Date();
        //     d.setDate(d.getDate() + 10);
        //     setCookie("phone", $("#name").val(), d);
        //     setCookie("pwd", $("#password").val(), d);
        //     setCookie("autologin", $("#autologin").is(':checked'), d);
        //
        //
        // }
        // if ($("#rememble").is(':checked')) {
        //     var d = new Date();
        //     d.setDate(d.getDate() + 10);
        //     setCookie("phone", $("#name").val(), d);
        //     setCookie("pwd", $("#password").val(), d);
        // }

    })

    $("#dl").click(function () {

        // var xhr = new XMLHttpRequest();
        //
        // xhr.open("post", "http://localhost/wbiao/php/login.php", true);
        // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // var str = "phone=" + $("#name").val() + "&pwd=" + $("#password").val();
        // xhr.send(str);
        //
        //
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         var obj = JSON.parse(xhr.responseText)
        //
        //         alert(obj.msg)
        //         if (obj.status == 1) {
        //
        //             window.location.href = "http://localhost/wbiao/html/index.html";
        //         }
        //
        //     }
        // }
    })


})
// </script>