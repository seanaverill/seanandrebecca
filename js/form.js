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
    } else {
      text.style.display = "none";
      text.required = false;
    }


        // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
            meal.style.display = "block";
            meal.required = true;
          } else {
            meal.style.display = "none";
            meal.required = false;
          }

                  // If the checkbox is checked, display the output text
        if (checkBox.checked == true){
          allergy.style.display = "grid";
          allergy.required = true;
        } else {
          allergy.style.display = "none";
          allergy.required = false;
        }
  }
