$(document).ready(function() {
  $("#textomostrar").hide();
  $("#Mostrar").hide();
  $("#finWizard").hide();
  $("#Ocultar").on("click", function () {
    $(".wizard-section").hide();
    $("#textomostrar").show();
  });
  $("#Mostrar").on("click", function () {
    $("#formulario").show();
    $("#textomostrar").hide();
    $("#Mostrar").hide();
  });
  $("#Enviar").on("click", function (event) {
    if ($("#formulario").valid() == true ) {
      $("#textomostrar").show();
      $( "#Mostrar").show();
      $("#formulario").hide();
    } 
  });
  var rules_name = {
    required: true,
      minlength: 3,
  };
    $("#formulario").validate({
      rules: {
        nombre : rules_name,
        apellido: rules_name,
        mail: {
          required: true,
          email: true,
        },
        telefono:{
          required: true,
        }
      },
      messages : {
        nombre: {
          required: "Este campo es requerido",
          minlength: "Minimo 3 caracteres",
        },
        apellido: {
          required: "Este campo es requerido",
          minlength: "Minimo 3 caracteres"
        },
        mail: {
          required: "Este campo es requerido",
          email: "El formato de email debe ser: abc@gmail.com"
        },
        telefono: {
          required: "Este campo es requerido",
        }

      },
      errorPlacement: function(error, element) {
        if (element.attr("name") == "nombre")
            {
              error.appendTo($('#errorName'));
            } else if (element.attr("name") == "apellido") {
              error.appendTo($('#errorSurname'))
            } else {
              error.insertAfter(element);
            }
      }
    });
    $("#formulario").keyup(function () {
      if ($("#Nombre").valid() == true ) {
        $( "#Nombre" ).addClass( "is-valid" );
      } else {
        $( "#Nombre" ).removeClass( "is-valid" );
      }
      if ($("#Apellido").valid() == true ) {
        $( "#Apellido" ).addClass( "is-valid" );
      } else {
        $( "#Apellido" ).removeClass( "is-valid" );
      }
      if ($("#Email").valid() == true ) {
        $( "#Email" ).addClass( "is-valid" );
      } else {
        $( "#Email" ).removeClass( "is-valid" );
      }
      if ($("#Telefono").valid() == true ) {
        $( "#Telefono" ).addClass( "is-valid" );
      } else {
        $( "#Telefono" ).removeClass( "is-valid" );
      }
    });
    jQuery('.form-wizard-next-btn').click(function() {
      var parentFieldset = jQuery(this).parents('.wizard-fieldset');
      var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
      var next = jQuery(this);
      var nextWizardStep = true;
      parentFieldset.find('.wizard-required').each(function(){
        var thisValue = jQuery(this).val();
  
        if( thisValue == "") {
          jQuery(this).siblings(".wizard-form-error").slideDown();
          nextWizardStep = false;
        }
        else {
          jQuery(this).siblings(".wizard-form-error").slideUp();
        }
      });
      if( nextWizardStep) {
        next.parents('.wizard-fieldset').removeClass("show","400");
        currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
        next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
        jQuery(document).find('.wizard-fieldset').each(function(){
          if(jQuery(this).hasClass('show')){
            var formAtrr = jQuery(this).attr('data-tab-content');
            jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
              if(jQuery(this).attr('data-attr') == formAtrr){
                jQuery(this).addClass('active');
                var innerWidth = jQuery(this).innerWidth();
                var position = jQuery(this).position();
                jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
              }else{
                jQuery(this).removeClass('active');
              }
            });
          }
        });
      }
    });
    //click on previous button
    jQuery('.form-wizard-previous-btn').click(function() {
      var counter = parseInt(jQuery(".wizard-counter").text());;
      var prev =jQuery(this);
      var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
      prev.parents('.wizard-fieldset').removeClass("show","400");
      prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
      currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
      jQuery(document).find('.wizard-fieldset').each(function(){
        if(jQuery(this).hasClass('show')){
          var formAtrr = jQuery(this).attr('data-tab-content');
          jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
            if(jQuery(this).attr('data-attr') == formAtrr){
              jQuery(this).addClass('active');
              var innerWidth = jQuery(this).innerWidth();
              var position = jQuery(this).position();
              jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
            }else{
              jQuery(this).removeClass('active');
            }
          });
        }
      });
    });
    //click on form submit button
    jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
      var parentFieldset = jQuery(this).parents('.wizard-fieldset');
      var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
      parentFieldset.find('.wizard-required').each(function() {
        var thisValue = jQuery(this).val();
        if( thisValue == "" ) {
          jQuery(this).siblings(".wizard-form-error").slideDown();
        }
        else {
          jQuery(this).siblings(".wizard-form-error").slideUp();
        }
      });
    });
    // focus on input field check empty or not
    jQuery(".form-control").on('focus', function(){
      var tmpThis = jQuery(this).val();
      if(tmpThis == '' ) {
        jQuery(this).parent().addClass("focus-input");
      }
      else if(tmpThis !='' ){
        jQuery(this).parent().addClass("focus-input");
      }
    }).on('blur', function(){
      var tmpThis = jQuery(this).val();
      if(tmpThis == '' ) {
        jQuery(this).parent().removeClass("focus-input");
        jQuery(this).siblings('.wizard-form-error').slideDown("3000");
      }
      else if(tmpThis !='' ){
        jQuery(this).parent().addClass("focus-input");
        jQuery(this).siblings('.wizard-form-error').slideUp("3000");
      }
    });
  });