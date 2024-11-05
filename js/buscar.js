function submitForm() {
    var input = document.getElementById('busqueda');
    var searchTerm = encodeURIComponent(input.value.trim());
    var newUrl = `https://www.google.com/search?q=${searchTerm}`;
    
    document.getElementById('formSearch').action = newUrl;
    document.getElementById('formSearch').submit();
  }
  
  function checkEnter(event) {
    if (event.key === "Enter") {
      submitForm();
    }
  }