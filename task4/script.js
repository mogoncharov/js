        const link = document.getElementById("link");
      
    link.addEventListener("click", (event) => {
            event.preventDefault();
  
            const newText = prompt("Введите текст для ссылки:");
  
           if (newText !== null && newText !== "") {
       
        link.textContent = newText;
      }
    });
  

    function goBack() {
      window.history.back();
    }