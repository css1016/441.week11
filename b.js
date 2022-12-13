var captcha = getCaptcha(); // 生成验证码
// 清空 input 标签后的提示信息
var tags = document.getElementsByTagName('input');
for (var i = 0; i < tags.length; i++) {
    tags[i].onchange = function(){
        var idname = this.name + "Err";
        document.getElementById(idname).innerHTML = '';
    }
}
// 显示错误消息
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
// 验证表单数据
function validateForm() {
    // 获取表单元素的值
    var name = document.querySelector("input[name='name']").value;
    var pwd = document.querySelector("input[name='pwd']").value;
    var email = document.querySelector("input[name='email']").value;
    var mobile = document.querySelector("input[name='mobile']").value;
    var captcha = document.querySelector("input[name='captcha']").value;
          
    if(name == "" || name == null){
        printError("nameErr", "User name cannot be empty");
        return false;
    }
    if(pwd == "" || pwd == null){
        printError("pwdErr", "Password cannot be empty");
        return false;
    }
    if(email == "" || email == null){
        printError("emailErr", "The email cannot be empty");
        return false;
    }
    if(mobile == "" || mobile == null){
        printError("mobileErr", "Mobile number cannot be empty");
        return false;
    }
    if(captcha == "" || captcha == null){
        printError("captchaErr", "The verification code cannot be empty");
        return false;
    }
}
// 获取验证码
function getCaptcha(){
    var cap = Math.floor(Math.random()*10000).toString();
    if(cap.length != 4) cap += "0";
    captcha = cap;
    document.getElementById("captcha").innerHTML = cap;
}