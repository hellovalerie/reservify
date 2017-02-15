function scroll_to (target) {
    if (typeof(target) == 'string') {
        target = $(target);
    }
    var y = target.offset().top;
    $('body').animate({scrollTop: y});
}
function submit_form(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var name=$.trim($('#name').val());
    var email=$.trim($('#email').val());

    if(name.length==0){
        alert('Please enter your name.');
        return;
    }

    if(!re.test(email)){
        alert('Please enter a valid email.')
        return;
    }

    $('.btn-send').html('Thank you!');
    $('#name').val('');
    $('#email').val('');
    $('.btn-send').addClass('disabled');
    $.post('email.php',{name:name,email:email});
}
