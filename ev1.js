$(document).ready(function () {
  $('#form').validate(
    {
      rules: {
        name: {
          required: true,
          minlength: 3,
          maxlength:15,
          onlytext: true,
        },
        
        phone: {
          required: true,
          minlength: 10,
          maxlength: 10,
          phone: true,

        },
        email: {
          required: true,
          minlength: 5,
          email: true,

        },
        gender: {
          required: true
        },


        age: {
          required: true,
          min: 18,
          max: 25,
          age: true,
        },
        config:{
          required:true,
        },
        sun: {
          required: true,
          min: 0,
          max: 23
        },
        mon: {
          required: true,
          min: 0,
          max: 23
        },
        tues: {
          required: true,
          min: 0,
          max: 23
        },
        wed: {
          required: true,
          min: 0,
          max: 23
        },
        thurs: {
          required: true,
          min: 0,
          max: 23
        },
        fri: {
          required: true,
          min: 0,
          max: 23
        },
        sat: {
          required: true,
          min: 0,
          max: 23
        },
        // sunday: {
        //   required: true,
        // },
        // monday: {
        //   required:true,
        // },
        // tuesday: {
        //   required:true,
        // },
        // wednesday: {
        //   required:true,
        // },
        // thursday: {
        //   required:true,
        // },
        // friday: {
        //   required:true,
        // },
        // saturday: {
        //   required:true,
        // },
      },
      errorPlacement: function (error, element) {
         if (element.attr("name") == "config"){
            error.insertAfter('#here')
        }
        else{
          error.insertAfter(element);
        }
    },



      messages: {
        name: {
          required: "Enter Your Name",
          minlength: "Name should be atleast 3 Characters",
          maxlength: "maximum length of name is 15 characters",
          onlytext: "Name should be only text."
        },
        age: {
          required: "Enter Your age",
          min: "minimum required age is 18.",
          max: "maximum required age is 25.",
        },
        phone:
        {
          required: "Enter  Your Phone number",
          minlength: "Phone number should be 10 characters",
          maxlength: "Phone number should be 10 characters",

        },
        email: {
          required: "The email should be in the format :abc@tntra.io",
        },

        gender: {
          required: "Please select a gender",
        },
        config:{
          required:"Please  select the checkbox "
        },
        sun: {
          required: "Please select time."
        },
        mon: {
          required: "Please select time."
        },
        tues: {
          required: "Please select time."
        },
        wed: {
          required: "Please select time."
        },
        thurs: {
          required: "Please select time."
        },
        fri: {
          required: "Please select time."
        },
        sat: {
          required: "Please select time."
        },
        // sunday: {
        //   required: "Please select checkbox"
        // },
        // monday: {
        //   required: "Please select checkbox"
        // },
        // tuesday: {
        //   required: "Please select checkbox"
        // },
        // wednesday: {
        //   required: "Please select checkbox"
        // },
        // thursday: {
        //   required: "Please select checkbox"
        // },
        // friday: {
        //   required: "Please select checkbox"
        // },
        // saturday: {
        //   required: "Please select checkbox"
        // },

      }
    });
  $('input:checkbox').on('change', function () {
    if (!$(this).is(':checked')) $(this).closest('#sunday').find('select').val('').change()
  })

}); 
      
   
    $('config').on('change', function () {
        if (!$(this).is(':checked')) $(this).closest('#sunday').find('select').val('');
    
      });
    $.validator.addMethod(
      "onlytext",
      function (value) {
        return /^[a-z A-Z]*$/.test(value);
      },
      "enter a valid input"
    );
    
    $.validator.addMethod(
      "age",
      function (value) {
        return /[0-9]$/.test(value);
       
      },
      "enter valid age"
    );
    
    $.validator.addMethod(
        "phone",
        function (value) {
          return /[7-9]{1}[0-9]{9}$/.test(value);
        },
        "enter valid phone number"
      );
    $.validator.addMethod(
      "email",
      function (value) {
        return /^([A-Za-z0-9_\-\.])+\@([tntra|gmail])+\.(io)$/ .test(value);
      },
      "The email should be in the format :abc@tntra.io"
    );

    $('#config').click(cb_func);
     cb_func();

  
  
  function cb_func() {
    if (!this.checked) {
      document.getElementById("sunday").checked=false;
      document.getElementById("monday").checked=false;
      document.getElementById("tuesday").checked=false;
      document.getElementById("wednesday").checked=false;
      document.getElementById("thursday").checked=false;
      document.getElementById("friday").checked=false;
      document.getElementById("saturday").checked=false;
      $("#sun")[0].value="None";
      $("#mon")[0].value="None";
      $("#tues")[0].value="None";
      $("#wed")[0].value="None";
      $("#thurs")[0].value="None";
      $("#fri")[0].value="None";
      $("#sat")[0].value="None";
            
      $("#sunday").attr('disabled', true);
      $("#monday").attr('disabled', true);
      $("#tuesday").attr('disabled', true);
      $("#wednesday").attr('disabled', true);
      $("#thursday").attr('disabled', true);
      $("#friday").attr('disabled', true);
      $("#saturday").attr('disabled', true);
      $('#sun').attr('disabled', true);
      $('#mon').attr('disabled', true);
      $('#tues').attr('disabled', true);
      $('#wed').attr('disabled', true);
      $('#thurs').attr('disabled', true);
      $('#fri').attr('disabled', true);
      $('#sat').attr('disabled', true);
    }else{
      $("#sunday").removeAttr("disabled");
      $("#monday").removeAttr("disabled");
      $("#tuesday").removeAttr("disabled");
      $("#wednesday").removeAttr("disabled");
      $("#thursday").removeAttr("disabled");
      $("#friday").removeAttr("disabled");
      $("#saturday").removeAttr("disabled");
    }
  }



  
  $(function(){
      enable_cb1();  
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
        $('#sun').val('None').change()
        $('#sun').attr('disabled',true);
    }
}
  

  $(function(){
      enable_cb2(); 
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
        $('#mon').val('None').change()
        $('#mon').attr('disabled',true);
    }
}

  

  $(function(){
      enable_cb3();  
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
        $('#tues').val('None').change()
        $('#tues').attr('disabled',true);
    }
}
  

  $(function(){
      enable_cb4(); 
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
        $('#wed').val('None').change()
        $('#wed').attr('disabled',true);
    }
}

  $(function(){
      enable_cb5(); 
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
        $('#thurs').val('None').change()
        $('#thurs').attr('disabled',true);
    }
}


  
  
  $(function(){
      enable_cb6(); 
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
        $('#fri').val('None').change()
        $('#fri').attr('disabled',true);
    }
}
  
  

  $(function(){
      enable_cb7();  
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
        $('#sat').val('None').change()
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
        let sunday = $('#sun').val();
        let monday = $('#mon').val();
        let tuesday = $('#tues').val();
        let wednesday = $('#wed').val();
        let thursday = $('#thurs').val();
        let friday = $('#fri').val();
        let saturday = $('#sat').val();

        if (
            $('#name').valid()  &&
            $('#age').valid() &&
            $('#email').valid() &&
            
            $('#phone').valid() &&
            
            
           
            $("input[name='gender']:checked").val() != undefined &&
            $('#sun').valid() ||
            $('#mon').valid() ||
            $('#tues').valid() ||
            $('#wed').valid() ||
            $('#thurs').valid() ||
            $('#fri').valid() ||
            $('#sat').valid() 
            // $('#monday').valid() &&
            // $('#tuesday').valid() &&
            // $('#wednesday').valid() &&
            // $('#thursday').valid() &&
            // $('#friday').valid() &&
            // $('#saturday').valid() 
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


                window.open( '../Evaluation Test/table.html')
                    
            }
            
}
)



