function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;

    // validation principal input
    if (principal == "" || principal < 1){
        alert("Please inser a positive value")

        // focus on princpal afer ok pressd from alert
        document.getElementById("principal").focus();
    } else  {
    // converting the string value of interst, years & rate to num;
    var p_principal = parseFloat(principal);
    var p_rate = parseFloat(rate);
    var p_year = parseFloat(year);
    
    //calculating interest 
    var interest = p_principal * p_year * p_rate /100;

    // displaying interest reuslt 
    var result = document.getElementById("result");
    result.innerHTML = "<strong> " + interest +"</strong>";

    // write message to user;
    var d = new Date();
    var current_year = d.getFullYear();
    var display_year = Number(current_year) + p_year;
    var total = p_principal + parseFloat(interest);
    
    var message =  "<p> If you deposit " + principal + "<br>"
    + " at an interest rate of " + rate + ". <br>" +
    "You will receive as interest amount of " +
     interest + ",<br>" + "in the year " + display_year  + 
     ".<br>" + "Total amount, interest plus initial principal is " +
      total;
    document.getElementById("message").innerHTML = message;
    }
}
  
//displaying rate value on slider activations
function rateChange(){
    var rate = document.getElementById("rate").value;
    document.getElementById("ratedisplay").innerHTML = rate + " %";
}