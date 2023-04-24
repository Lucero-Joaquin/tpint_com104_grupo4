$(document).ready(function() {
    $("#formulario").validate({
        nombre: {

            required: true,

            errorLabelContainer: '#errorName',
            
            },
            
            apellido: {
            
            required: true,
            
            errorLabelContainer: '#errorSurnameName',
            },
            
    });
});
    