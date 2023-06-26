new VenoBox({
    selector: ".popUp",
    share: true,
    spinner: 'fold'
});


$(".timer ul")
  .countdown("2023/07/30", function(event) {
    $('.timer ul .days').html(event.strftime('%D'))
    $('.timer ul .hours').html(event.strftime('%H'))
    $('.timer ul .minutes').html(event.strftime('%M'))
    $('.timer ul .seconds').html(event.strftime('%S'))
   
    
  });
