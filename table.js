let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
let email = localStorage.getItem('email');
let phone = localStorage.getItem('phone');
let gender = localStorage.getItem('gender');
let sunday = localStorage.getItem('sunday', $('#sun').val())=="None"?"":localStorage.getItem('sunday', $('#sun').val());
let monday = localStorage.getItem('monday', $('#mon').val())=="None"?"":localStorage.getItem('monday', $('#mon').val());
let tuesday =localStorage.getItem('tuesday', $('#tue').val())=="None"?"":localStorage.getItem('tuesday', $('#tue').val());
let wednesday = localStorage.getItem('wednesday', $('#wed').val())=="None"?"":localStorage.getItem('wednesday', $('#wed').val());
let thursday = localStorage.getItem('thursday', $('#thurs').val())=="None"?"":localStorage.getItem('thursday', $('#thurs').val());
let friday = localStorage.getItem('friday', $('#fri').val())=="None"?"":localStorage.getItem('friday', $('#fri').val());
let saturday = localStorage.getItem('saturday', $('#sat').val())=="None"?"":localStorage.getItem('saturday', $('#sat').val());



                
{$('#displayArea').append(
    "<tr><td>" + name +
    "</td><td>" + age +
    "</td><td>" + email +
    "</td><td>" + phone +
    
    
    "</td><td>" + gender +
    "</td><td>" + sunday +
    "</td><td>" + monday +
    "</td><td>" + tuesday +
    "</td><td>" + wednesday +
    "</td><td>" + thursday +
    "</td><td>" + friday +
    "</td><td>" + saturday +
    "</td></tr>");


    

}   