//On page load set focus to name text input and hide hideen text fields

window.onload = function() {
    document.getElementById("name").focus();
    document.getElementById("other_text_container").style.display = "none";
};

// var e = document.getElementById("title");
// var strUser = e.value;


$('#title').change(function(){ 
    var value = $(this).val();
    if (value === "other") {
        document.getElementById("other_text_container").style.display = "block";
    } else
        document.getElementById("other_text_container").style.display = "none";
});



$('#design').change(function(){ 
    var value = $(this).val();
    console.log(value);
    if (value == "js puns") {
        var jsPuns = document.getElementById("color");
        jsPuns.remove(jsPuns.value(tomato));
       return$('$design');  
    }     
});

// var design = document.getElementById("design");
// var colors = document.getElementById("color"); 
// for (var i = 0; i < op.length; i++) {
//   // lowercase comparison for case-insensitivity
//   (op[i].value.toLowerCase() == "js puns") 
//     ? color.value(tomato).disabled = true 
//     : op[i].disabled = false ;
//     console.log(op);
//     console.log(i);

//}