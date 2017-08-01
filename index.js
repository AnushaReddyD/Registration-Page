
$(document).ready(function() {
    $("#username_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();
    $("#confirmPass_error_message").hide();

    var error_username=false;
    var error_email= false;
    var error_password =false;
    var error_retype_password = false;

    $("#userName").focusout(function(){
      check_username();
    });

      $("#userEmail").focusout(function(){
      check_email();
    });

        $("#userPassword").focusout(function(){
      check_password();
    });

          $("#userConfirmPass").focusout(function(){
      check_confirm_password();
    });


          function check_username()
          {
            var username_length = $("#userName").val().length;
            if(username_length<5 || username_length>30)
            {
              $("#username_error_message").html("Should be between 5-30 characters");
              $("#username_error_message").css("color", "red");
              $("#username_error_message").show();
              error_username=true;
            }
            else
            {
              $("#username_error_message").hide();
            }
          }


          function check_email()
          {
            var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
            if(pattern.test($("#userEmail").val()))
            {
              $("#email_error_message").hide();
              
            }else
            {
              $("#email_error_message").html("Invalid email address");
              $("#email_error_message").css("color", "red");
              $("#email_error_message").show();
            }
          }


          function check_password()
          {
            var pattern_password = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
            if(pattern.test($("#userPassword").val()))
            {
              $("#password_error_message").hide();
            }else
            {
              $("#password_error_message").html("Invalid password");
               $("#password_error_message").css("color", "red");
              $("#password_error_message").show();
              }
            }
          

          function check_confirm_password()
          {
            var password = $("#userPassword").val();
            var confirm_password=$("#userConfirmPass").val();

            if (password==confirm_password) {
              alert("password match");
            }
            else if(password != confirm_password)
            {
              $("#confirmPass_error_message").html("password don't match");
               $("#confirmPass_error_message").css("color", "red");
              $("#confirmPass_error_message").show();
              error_retype_password = true;
            }
            else
            {
              $("#confirmPass_error_message").hide();
            }
          }

          $("#btnregistrationBorder").submit(function()
          {
              error_username=false;
              error_password=false;
              error_email=false;
              error_retype_password=false;

              check_username();
              check_email();
              check_password();
              check_confirm_password();

              if(error_username==false && error_email==false && error_password==false && error_retype_password==false)
              {
                return true;
              }
              else
              {
                return false;
              }
         })
});
