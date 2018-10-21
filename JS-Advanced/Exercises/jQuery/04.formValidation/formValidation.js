function validate() {

  $('#company').on('change', showHideCompany);

  function showHideCompany() {

      if($('#company').is(':checked')) {
            $('#companyInfo').css('display', 'block');
      } else {
        $('#companyInfo').css('display', 'none');
      }
  }

    $('#submit').on('click', (e) => {
        e.preventDefault();

        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;  
        let passwordRegex = /^\w{3,15}$/;
        let emailRegex = /@.*\.+/;
        let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;
        let allFieldsValid = true;

        //username
        if($('#username').val().match(usernameRegex)) {
            $('#username').css('border', 'none');
        } else {
            $('#username').css('border-color', 'red');
            allFieldsValid = false;        
        }

        //email
        if($('#email').val().match(emailRegex)) {
            $('#email').css('border', 'none');
        } else {
            $('#email').css('border-color', 'red');
            allFieldsValid = false;
        }

        //password
        if($('#password').val().match(passwordRegex)){
            $('#password').css('border', 'none');
        } else {
            $('#password').css('border-color', 'red');
            allFieldsValid = false;
        }

        //confirm-password
        if($('#confirm-password').val().match(passwordRegex) && $('#confirm-password').val().localeCompare($('#password').val()) === 0){
            $('#confirm-password').css('border', 'none');
        } else {
            $('#confirm-password').css('border-color', 'red');
            allFieldsValid = false;
        }

        //company
        if($('#companyNumber').val().match(companyNumberRegex)) {
            $('#companyNumber').css('border', 'none');
        } else {
            $('#companyNumber').css('border-color', 'red');
            allFieldsValid = false;
        }

        //isValid
        if(allFieldsValid) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
    });
}