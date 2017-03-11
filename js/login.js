$('#login-button').click(function (event) {
    var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="叶梦瑶" && pwd=="20000323") { 
        event.preventDefault();
        $('form').fadeOut(500);
        $('#name-text').fadeIn(2000);
        $('.wrapper').addClass('form-success');
        setTimeout(function(){location.href="cake.html";},3500);
    }
    else {
        if(userName!="叶梦瑶") {
            alert("姓名错误！这好像不是为你准备的");
        }
        else {
            alert("密码错误！\n提示：你的生日（8位数字，例：19491001）");
        }
    }
});
