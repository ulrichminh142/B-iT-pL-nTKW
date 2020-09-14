$(document).ready(function() {
   $('.noi-dung').slideUp(); /*ẩn nội dung*/

   $('.mail h3').on('click', function(event) {
      // ngăn chặn mặc định
      event.preventDefault();
      // đóng/ mở
      $(this).next().slideToggle();
      // $(this).offset().top lấy vị trí của phần tử this
   });
   $(document).ready(function(){
       $('.mail h3').click(function(){
           $(".mail h3").animate({bottom: '250px'});
           event.preventDefault();
           
       });
     });
});
//Thumbail
$(document).ready(function() {
    $(".thumbail1 img").click(function() {
        $("#mainImg1").attr("src", $(this).attr('src'))
    })  
})
$(document).ready(function() {
    $(".thumbail2 img").click(function() {
        $("#mainImg2").attr("src", $(this).attr('src'))
    })  
})
$(document).ready(function() {
    $(".thumbail3 img").click(function() {
        $("#mainImg3").attr("src", $(this).attr('src'))
    })  
})
$(document).ready(function() {
    $(".thumbail4 img").click(function() {
        $("#mainImg4").attr("src", $(this).attr('src'))
    })  
})
$(document).ready(function() {
    $(".thumbail5 img").click(function() {
        $("#mainImg5").attr("src", $(this).attr('src'))
    })  
})
$(document).ready(function() {
    $(".thumbail6 img").click(function() {
        $("#mainImg6").attr("src", $(this).attr('src'))
    })  
})

$("#gototop").hide()
    $(window).scroll(function(){
        var t=$(this).scrollTop()
        if (t>=100)
            $("#gototop").show(500)
        else
            $("#gototop").hide(500)
    });

    $("#gototop").click(function(){
        $('html, body').animate({
            'scrollTop': 0
        }, 1000)
    })