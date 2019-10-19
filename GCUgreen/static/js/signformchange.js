$(function ()
{
        $('.change a').click(function ()
        {
            $('.signform').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
        });
})

function start() {
document.getElementById('signform').style.display=""
    document.getElementById('error').style.display="none"
}
function out(){
    localStorage.clear();
    loadLogin();
}

function signclose() {
    document.getElementById('signform').style.display="none"
    document.getElementById('registerform').style.display="none"
}

function login(){
    var user = document.getElementById('user').value
    var password = document.getElementById('pwd').value
     $.ajax({
                            url: "http://localhost:8080/gcugreen/LoginJWXTController",
                            type: "GET",
                            data: {'username': user,'password':password},
                            dataType: 'json',
                            success: function (data) {
                                console.log(data);
                                document.getElementById('signform').style.display="none"
                                document.getElementById('registerform').style.display="none"
                                localStorage.setItem("name",data.data[0].name)
                                localStorage.setItem("sno",data.data[0].sno)
                                localStorage.setItem("xzb",data.data[0].xzb)
                                loadLogin();
                            },
                            error: function () {
                                document.getElementById('error').style.display=""
                            }
                        });
}

function loadLogin(){
        if(window.localStorage["name"]){
            document.getElementById('logindiv').style.display="none"
            document.getElementById('outdiv').style.display=""
            document.getElementById('loginName').innerText=window.localStorage["name"]+" "+ window.localStorage["sno"]+" "
        }else{
            document.getElementById('logindiv').style.display=""
            document.getElementById('outdiv').style.display="none"
        }
}
