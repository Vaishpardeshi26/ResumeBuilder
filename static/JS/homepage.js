

  function Validate() {
      
      let a = document.getElementById("number").value;
      let b = document.getElementById("validationDefault01").value;
    
      if(b=="")
      {
        alert("Enter All Required Fields");
        document.getElementById("validationDefault01").focus();
        return false;

      }
      if(a=="")
      {
      alert("Please Enter Your Mobile Numbers");
      document.getElementById("number").focus();
      
      return false;
      }
      if(isNaN(a))
      {
      alert("Please Enter Only Numbers");
      document.getElementById("number").focus();
      
      return false;
      }
      if (a.length<10||a.length>10)
      {
      alert("Your mobile Number must be 10 Digits");
      document.getElementById("number").focus();
      
      return false;
      }
      return true;
  }
