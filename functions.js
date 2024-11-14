
function studentName(){
    var studentName="studentName:"+"shakeena"
    console.log(studentName);
}
function surName(){
    surName="surName:"+"darla"
    console.log(surName)
}
surName()
studentName()

// executing the functions studentname and surname
// 1.Function calls: when you call studentname, the program goes to that function and starts running it. it creats a space in the memoery to 
// keep track of what this function is doing , like the name 
// 2.logging the first name:inside studentname ,it prints student first name :shakeena to the console.After it finishes ,this space is removed from the memeory
// 3.Next function call: Then, when you call another function surname , a new space is created for this function . it keeps track of surname.
// 4.logging the surname: inside surname , it prints "students surname : darla" to the console. After thisthe function finishes, its memory space also removed.
// call stack: think of the call stack like a stack of plates. Each time you call a function , a new plate added on the top. when the function is done , the plate is taken away.This is how javascript manages which function is running AT any time.
//  in short , each function creates a aspace to work in, does it work, and then that space is cleaned up when its done.
