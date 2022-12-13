var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


function validateform(){  
var name=document.myform.name.value;  
var gender=document.myform.gende.value;  
var problem=document.myform.problem.value;  
var telephonenumber=document.myform.telephonenumber.value;  
if (name==null || name=="")
{  
  alert("Name can't be blank");  
  return false;  
 }
else if(gender==null || gender==""){  
  alert("gender must be at least 6 characters long.");  
  return false;  
  }  
else if(problem==null || problem==""){  
    alert("problem must be at least 6 characters long.");  
    return false; 
  }
else if(telephonenumber.length<6){  
    alert("telephonenumber must be at least 6 characters long.");  
    return false; 
  } 

}  
