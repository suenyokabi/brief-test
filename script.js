function myFunction() {
        var inpObj = document.getElementById("id1");
        if (!inpObj.checkValidity()) {
          document.getElementById("result").innerHTML = inpObj.validationMessage;
        } else {
          document.getElementById("result").innerHTML = "Input OK";
        } 
      } 