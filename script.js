function calculate(){

    inputelement = document.getElementById("sample").value;
    answer=eval(inputelement)
    alert(answer)
    document.getElementById("sample").value = answer 
}