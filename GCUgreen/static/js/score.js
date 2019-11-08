$(function ()
{
        $('.change a').click(function ()
        {
            $('.tableform').animate({height: 'toggle', opacity: 'toggle'}, 'slow');
        });
})

function world() {
    document.getElementById('worldscore').style.display=""
    $.ajax({
                    url: "http://localhost:8080/gcugreen/score/list",
                    type: "GET",
                    data:{'sno':"666"},
                    dataType: 'json',
                    async: false,
                    success: function (data) {
                        console.log(data)
                        var table=document.getElementById("tableworld");
                            var rowNum=table.rows.length;
                            for (i=0;i<rowNum;i++)
                            {
                                table.deleteRow(i);
                                rowNum=rowNum-1;
                                i=i-1;
                            }
                            var row=table.insertRow(table.rows.length);
                            for(var i=0;i<data.data.length;i++){
                                    var row=table.insertRow(table.rows.length);
                                    var c1=row.insertCell(0);
                                    c1.innerHTML=data.data[i].name;
                                    var c2=row.insertCell(1);
                                    c2.innerHTML=data.data[i].score;
                            }
                            },
                            error: function (data) {
						      console.log(data)
                            }
                });
}

function my(){
    if(window.localStorage["sno"]){
    document.getElementById('myscore').style.display=""
    var sno=window.localStorage["sno"]
    $.ajax({
                    url: "http://localhost:8080/gcugreen/score/list",
                    type: "GET",
                    data:{'sno':sno},
                    dataType: 'json',
                    async: false,
                    success: function (data) {
                        console.log(data)
                        var table=document.getElementById("tablemy");
                            var rowNum=table.rows.length;
                            for (i=0;i<rowNum;i++)
                            {
                                table.deleteRow(i);
                                rowNum=rowNum-1;
                                i=i-1;
                            }
                            var row=table.insertRow(table.rows.length);
                            for(var i=0;i<data.data.length;i++){
                                    var row=table.insertRow(table.rows.length);
                                    var c1=row.insertCell(0);
                                    c1.innerHTML=data.data[i].name;
                                    var c2=row.insertCell(1);
                                    c2.innerHTML=data.data[i].score;
                            }
                        
                    },
                    error: function (data) {
						console.log(data)
                    }
                });
    }
    else{
        alert("请先登录！");
    }
}

function scoreclose() {
    document.getElementById('worldscore').style.display="none"
    document.getElementById('myscore').style.display="none"
}
