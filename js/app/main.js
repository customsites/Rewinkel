

$(window).load(function() {

    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;

    //initialize function doStuff
    doStuff();
});

function doStuff() {

    $(".slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
    });

    $('.open-close').click(function () {
        $('header').toggleClass('open');
        $(this).toggleClass('open');
        $('.bar').toggleClass('open');
    });


      $('#suportClubForm').validate({
    rules: {
        firstName: {
            required: true,
            minlength: 2
        },
        lastName: {
            required: true,
            minlength: 2
        },
         adres: {
            required: true,
            minlength: 2
        },
        postalCode: {
            required: true,
            minlength: 2
        },
         phoneNumber: {
            required: true,
            minlength: 6
        },
        email: {
            required: true,
            email: true
        },
    },
    messages: {

        firstName: {
            required: 'Vul uw voornaam in a.u.b',
            minlength: 'Vul een naam in met minimaal 2 karakters'
        },
        lastName: {
            required: 'Vul uw achternaam in a.u.b',
            minlength: 'Vul een naam in met minimaal 2 karakters'
        },
        adres: {
            required: 'Vul uw adres in a.u.b',
            minlength: 'Vul een adres in met minimaal 2 karakters'
        },
        postalCode: {
            required: 'Vul uw adress en postcode in a.u.b',
            minlength: 'Vul een adress en postcode in met minimaal 2 karakters'
        },

        email: {
            required: 'Vul uw e-mailadres in',
            email: 'Vul een geldig e-mailadres in'
        },
        phoneNumber: {
            required: 'Vul uw telefoon nummer in a.u.b',
            minlength: 'Vul uw telefoon nummer in a.u.b met minimaal 6 karakters'
        },
    },
    submitHandler: function(form) {
        $.ajax( {
            url: $(form).attr('action'),
            type: 'POST',
            data: new FormData(form),
            processData: false,
            contentType: false,
            beforeSend: function() {
                $(form).find('input, button').attr('disabled', true);
            }
        }).done(function(result) {

            if(result.result == 'ok') {
                $(form).html('<div class="row"><div class="succes-message col-sm-8 col-sm-offset-2"><h2>Gelukt!</h2><p>Bedankt voor uw aanmelding.</p></div></div>');
            } else {
                alert('Er is iets mis gegaan, neem alsublieft contact op met supportersclub@ernstdubbink.com');
            }
        });
    }
});

$('.ajax_load_more_news:not(.loading)').click(function () {

    var that = $(this);
    var page = that.data('page');
    var newPage = page+1;
    var ajaxurl = that.data('url');

    that.addClass('loading');

    $.ajax({

        url : ajaxurl,
        type : 'post',
        data : {
            page : page,
            action : 'ajax_load_more_news',
        },
        error: function ( response ) {
            console.log(response);
        },
        success : function ( response ) {

            setTimeout(function () {

                if ( response.length != 0 ) {
                    that.data('page', newPage);
                    $('.post-list').append(response);
                    that.removeClass('loading');

                } else {

                    that.removeClass('loading');
                    that.html("alle nieuws berichten zijn geladen");
                    that.addClass('done');
                }

            },1000);
        }
    });
});


//open close kalender-item 

$('.event-item').click( function(){
    $(this).toggleClass('open');
    $('.leesmeer').toggleClass('open');
});


//end dostuff
};

