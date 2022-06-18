$(document).ready(function () {
    // event.defaultPrevented();
    $('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                onlytext: true,
                 },
            Age:{
                required: true,
                min: 18,
                max: 25,
                Age:true,
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
                phone: true,
                
            },
            email: {
                required: true,
                minlength:5,
               email:true,
                
            },
            gender: {
                required: true
            }
        },
        
    
        messages : {
            name: {
                required: "Enter Name",
                minlength: "Name should be atleast 3 Characters",
                onlytext:"Name should be only text."
            },
            Age: {
                required:"Enter an age",
                min:"minimum required age is 18.",
                max:"maximum required age is 25.",
            },
            phone:
            {
                required: "Enter Phone number",
                minlength: "phone number should be 10 characters",
                maxlength: "phone number should be 10 characters",
                
            },
            email: {
                required: "The email should be in the format : abc@tntra.io",
            },
            
            gender: {
                required: "Please select a gender",
            },
        },
        // errorPlacement: function (error, element) {
        //   if (element.is(":radio")) {
        //     error.appendTo('#radio');
        //   }
        //   else {
        //     error.insertAfter(element);
        //   }
        // },
        
      }); 
    });
    $.validator.addMethod(
      "onlytext",
      function (value) {
        return /^[a-zA-Z]*$/.test(value);
      },
      "enter a valid input"
    );
    
    $.validator.addMethod(
      "age",
      function (value) {
        return /[0-9]$/.test(value);
        if (!age >= 18 && !age <= 25) {
          return true;
        }
      },
      "enter valid age"
    );
    
    $.validator.addMethod(
      "phone",
      function (value) {
        return /[0-9]$/.test(value);
      },
      "enter valid phone number"
    );
    $.validator.addMethod(
      "email",
      function (value) {
        return /^([A-Za-z0-9_\-\.])+\@([tntra|gmail])+\.(io)$/ .test(value);
      },
      "enter a valid mail"
    );

    $(function() {
      enable_cb();   // this function will enable all the days
      $("#config").click(enable_cb);
      disable_cb();
      $('#config').click(disable_cb);
    });
    
  function enable_cb() {
      if (this.checked) {
          $("#sunday").removeAttr("disabled");
          $("#monday").removeAttr("disabled");
          $("#tuesday").removeAttr("disabled");
          $("#wednesday").removeAttr("disabled");
          $("#thursday").removeAttr("disabled");
          $("#friday").removeAttr("disabled");
          $("#saturday").removeAttr("disabled");
      } 
  }
  function disable_cb(){
      if (!this.checked){
          $("#sunday").attr('disabled',true);
          $("#monday").attr('disabled',true);
          $("#tuesday").attr('disabled',true);
          $("#wednesday").attr('disabled',true);
          $("#thursday").attr('disabled',true);
          $("#friday").attr('disabled',true);
          $("#saturday").attr('disabled',true);
          $('#sun').attr('disabled',true);
            $('#mon').attr('disabled',true);
            $('#tues').attr('disabled',true);
            $('#wed').attr('disabled',true);
            $('#thurs').attr('disabled',true);
            $('#fri').attr('disabled',true);
            $('#sat').attr('disabled',true);
          
      }
  }



  //   now enable each select time based on the day is cheked or not
  $(function(){
      enable_cb1();  // this function will enable sunday pickup time
      $('#sunday').click(enable_cb1);
      disable_cb1();
      $("#sunday").click(disable_cb1)
  });
  function enable_cb1(){
    if (this.checked){
        $('#sun').removeAttr('disabled');
    }
}
function disable_cb1(){
    if(!this.checked){
        $('#sun').attr('disabled',true);
    }
}
  

  $(function(){
      enable_cb2();  // this function will enable sunday pickup time
      $('#monday').click(enable_cb2);
      disable_cb2();
      $("#monday").click(disable_cb2)
  });
  function enable_cb2(){
    if (this.checked){
        $('#mon').removeAttr('disabled');
    }
}
function disable_cb2(){
    if(!this.checked){
        $('#mon').attr('disabled',true);
    }
}

  

  $(function(){
      enable_cb3();  // this function will enable sunday pickup time
      $('#tuesday').click(enable_cb3);
      disable_cb1();
      $("#tuesday").click(disable_cb3)
  });
  function enable_cb3(){
    if (this.checked){
        $('#tues').removeAttr('disabled');
    }
}
function disable_cb3(){
    if(!this.checked){
        $('#tues').attr('disabled',true);
    }
}
  

  $(function(){
      enable_cb4();  // this function will enable sunday pickup time
      $('#wednesday').click(enable_cb4);
      disable_cb4();
      $("#wednesday").click(disable_cb4)
  });

  function enable_cb4(){
    if (this.checked){
        $('#wed').removeAttr('disabled');
    }
}
function disable_cb4(){
    if(!this.checked){
        $('#wed').attr('disabled',true);
    }
}

  $(function(){
      enable_cb5();  // this function will enable sunday pickup time
      $('#thursday').click(enable_cb5);
      disable_cb1();
      $("#thursday").click(disable_cb5)
  });
  function enable_cb5(){
    if (this.checked){
        $('#thurs').removeAttr('disabled');
    }
}
function disable_cb5(){
    if(!this.checked){
        $('#thurs').attr('disabled',true);
    }
}


  
  
  $(function(){
      enable_cb6();  // this function will enable sunday pickup time
      $('#friday').click(enable_cb6);
      disable_cb6();
      $("#saturday").click(disable_cb6)
  });
  function enable_cb6(){
    if (this.checked){
        $('#fri').removeAttr('disabled');
    }
}
function disable_cb6(){
    if(!this.checked){
        $('#fri').attr('disabled',true);
    }
}
  
  

  $(function(){
      enable_cb7();  // this function will enable sunday pickup time
      $('#saturday').click(enable_cb7);
      disable_cb7();
      $("#saturday").click(disable_cb7)
  });
  function enable_cb7(){
    if (this.checked){
        $('#sat').removeAttr('disabled');
    }
}
function disable_cb7(){
    if(!this.checked){
        $('#sat').attr('disabled',true);
    }
}

 
 
 
    


    $('#form').submit(function (event) {
        event.preventDefault();
        
    
    
        let name = $('#name').val();
        let age = $('#age').val();
        let email = $('#email').val();
        let phone = $('#phone').val();

        
       
        let gender = $("input[name='gender']:checked").val();
        let sunday = $('#pickupTime1').val();
        let monday = $('#pickupTime2').val();
        let tuesday = $('#pickupTime3').val();
        let wednesday = $('#pickupTime4').val();
        let thursday = $('#pickupTime5').val();
        let friday = $('#pickupTime6').val();
        let saturday = $('#pickupTime7').val();

        if (
            $('#name').valid()  &&
            $('#age').valid() &&
            $('#email').valid() &&
            
            $('#phone').valid() &&
            
           
            $("input[name='gender']:checked").val() != undefined
            )
            {

        
        

                localStorage.setItem('name',$('#name').val());
                localStorage.setItem('age',$('#age').val());
                localStorage.setItem('email',$('#email').val());
                localStorage.setItem('phone',$('#phone').val());
                
                
                localStorage.setItem('gender',$("input[name='gender']:checked").val());
                localStorage.setItem('sunday',$('#sun').val());
                localStorage.setItem('monday',$('#mon').val());  
                localStorage.setItem('tuesday',$('#tues').val());
                localStorage.setItem('wednesday',$('#wed').val());
                localStorage.setItem('thursday',$('#thurs').val());  
                localStorage.setItem('friday',$('#fri').val());   
                localStorage.setItem('saturday',$('#sat').val());      


                location.href = '../Evaluation Test/table.html'
                    
            }
            
}
)
