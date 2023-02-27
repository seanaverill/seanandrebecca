function plusOne() {
    // Get the checkbox
    var checkBox = document.getElementById("plus1");
    // Get the output text
    var text = document.getElementById("plus1Name");
    var meal = document.getElementById("meal2");
    var allergy = document.getElementById("allergies2");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
      text.required = true;
      text.style.height = "40px";
      meal.style.display = "block";
      meal.style.height = "40px";
      meal.required = true;
      allergy.style.display = "grid";
      allergy.required = true;
    } else {
      text.style.display = "none";
      text.required = false;
      text.style.height = "0px";
      meal.style.display = "none";
      meal.required = false;
      allergy.style.display = "none";
      allergy.required = false;
      meal.style.height = "0px";
    }

  }
