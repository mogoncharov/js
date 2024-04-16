    const textInput = document.getElementById("textInput");
    const submitButton = document.getElementById("submitButton");
    const duplicateField = document.getElementById("duplicateField");

    textInput.addEventListener("input", () => {
        duplicateField.textContent = textInput.value;
    });

    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); 
        console.log("Введенный текст:", textInput.value);
        textInput.value = ""; 
        duplicateField.textContent = ""; 
    });

    function goBack() {
        window.history.back();
      }