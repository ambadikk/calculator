function displayvalue(num){
result.value +=num
}
function allclear(){
    result.value=""
}
function evaluateOut(){
    result.value=eval(result.value) 
}
function back(){
    result.value=result.value.slice(0,-1)
}