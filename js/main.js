window.onload = function() {
    document.getElementById("name").focus();
    document.getElementById("role_other_text").style.display = "none";
};

var e = document.getElementById("title");
var strUser = e.value;



$('#title').change(function(){ 
    var value = $(this).val();
    if (value === "other") {
        // document.getElementById('role_other_text').style.display= "inline-flex";
        // append.input()
        // function myFunction() {
        //     var x = document.createElement("INPUT");
        //     x.setAttribute("type", "text");
        //     x.setAttribute("value", "Hello World!");
        //     document.body.appendChild(x);
        // }
        console.log(value);
    }
});
