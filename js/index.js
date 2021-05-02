$(document).ready(function(){
    $(".nav-item").click(function() {
        $(".nav-item").removeclass("active");
        $(this).addclass("active");
    });
});