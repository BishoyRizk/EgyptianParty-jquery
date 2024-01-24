
$('.close').on('click',function(){
    $('.slidebox').animate({width:'0'},1000)
    $('.mainparty').animate({marginLeft:'0px' },1000)
    $('.iconforlinks').animate({left:"0px"},1000)

})




// animate({width:'toggle'},2000)
$('.iconforlinks').on('click',function(){
    $('.iconforlinks').animate({left:"190px"},1000)
    $('.slidebox').animate({width:'175px'},1000)
    $('.mainparty').animate({marginLeft:'130px' },1000)
   
    
})





let counter = 100


$('#textmessage').keyup(function(){
    let length = $(this).val().length
    let amount = counter - length

    if (amount <= 0) {

        $("#counterspan").addClass("d-none")
        $("#valditaion").removeClass("d-none")
    }
    else{
        $("#counterspan").text(amount)
    }
})


$("#slide").on('click',function(){
    $('#slideson').slideToggle(1000)
})









$('#about .open-close').on("click", function(){
    $('.text').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});




let countdown = new Date("Dec 31 , 2024 23:59:59").getTime()
console.log(countdown);


let counters = setInterval(() => {


    let datenow = new Date().getTime()


    let diffrence = countdown - datenow


    let days = Math.floor(diffrence /1000 / 60 /60 /24)
    let hours = Math.floor ((diffrence % (1000*60*60*24)) /1000 / 60 /60  )
    let mintus = Math.floor ((diffrence % (1000 * 60 *60)) / (1000 * 60))
    let seconds = Math.floor ((diffrence % (1000 * 60 )) / (1000 )) 

    $(".dayscounter").html(days)
    $(".hourscounter").html(hours)
    $(".mintuscounter").html(mintus)
    $(".secondscounter").html(seconds)

    if(diffrence < 0) {
        clearInterval(counters)
    }

    console.log(days);

},1000)