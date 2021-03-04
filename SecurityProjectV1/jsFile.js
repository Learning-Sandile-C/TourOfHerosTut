function clearVars(){
    document.getElementById("inName").value = null;
    document.getElementById("inSurname").value = null;

}

function showAlert() {
    var name =document.getElementById("inName").value;
    var surname =document.getElementById("inSurname").value;
    
    var myText = "Your name is " + name + " and your surname is " + surname;
      alert (myText);
}