$(document).ready(function() {
    $(".form").hide();
});


var form_box = '<div class="form"><label>Name</label><input type="text"/><input type="submit"/></div>'
var flag = 0
function show_func(citybox) {
    if(flag == 0)
    {
        $(".city").hide();
        $("#"+citybox).append(form_box)
        flag = 1;
    }
}

