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
        document.getElementById("other_title").focus();
    } else
        document.getElementById("other_text_container").style.display = "none";
});


//determine which option was selected for 'design'
$('#design').change(function(){ 
    var value = $(this).val();
    console.log(value);
    //compare that to "js puns" then remove the div that does not 
    //contain the colors for that design
 if (value == "js puns") {
        // var colorJS = document.getElementById("color_js");
        $("#color option[value='tomato']").hide();
        $("#color option[value='steelblue']").hide();
        $("#color option[value='dimgrey']").hide();
        $("#color option[value='cornflowerblue']").show();
        $("#color option[value='darkslategrey']").show();
        $("#color option[value='gold']").show();
        return this.defaultSelected;
    }
 if (value == "heart js") {
        // var colorJS = document.getElementById("color_js");
        $("#color option[value='cornflowerblue']").hide();
        $("#color option[value='darkslategrey']").hide();
        $("#color option[value='gold']").hide();
        $("#color option[value='tomato']").show();
        $("#color option[value='steelblue']").show();
        $("#color option[value='dimgrey']").show();
        return this.defaultSelected;
  } 
  if (value == "default") {
        $("#color option[value='tomato']").show();
        $("#color option[value='steelblue']").show();
        $("#color option[value='dimgrey']").show();
        $("#color option[value='cornflowerblue']").show();
        $("#color option[value='darkslategrey']").show();
        $("#color option[value='gold']").show();
        return this.defaultSelected;
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
