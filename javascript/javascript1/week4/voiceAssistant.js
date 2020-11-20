'use strict'
const todoList = []
const userName = []
const userAge = []
var splitedCommand = []

// Main function
function getReply(command) {
    // we split the command in an array so we can work with it
    splitedCommand = command.split(' ')
    //we loop througth the array command
    for (let i=0; i<splitedCommand.length; i++){   
       if (splitedCommand[i] === "name"){  
            return nameFunc(splitedCommand)          
        }
       else if(splitedCommand[i] === "todo"){
           return todoFunc(splitedCommand)
       }
       else if (splitedCommand[i] === "day"){
           return getTodaysDay()
       }
       else if (splitedCommand[i] === "+" | splitedCommand[i] === "-" | splitedCommand[i] === "*" | splitedCommand[i] === "/"){
           return doMath()
       }
       else if(splitedCommand[i] === "Set"){
           return setTimer()
       }
       else if(splitedCommand[i] === "age"){
           return ageFunc()
       }
    }
    return "I don't undestand this command."
}

// function that handles name greetings and saving
// We know that it contains the word 'name'
function nameFunc(splitedCommand){
    for (let i=0; i<splitedCommand.length; i++){
        if (splitedCommand[i] === "Hello" | splitedCommand[i] === "hello"){
            // save user name in variable 'givenName'
            const givenName = splitedCommand[splitedCommand.length -1]
            // check if user name saved in array 'userName'
            if (userName.includes(givenName)){
                return "hello again "+ givenName
            }
            // if its not saved, add it to array 'userName' and replay with nice to meet you + username
            else{
                userName.push(givenName)
                return "nice to meet you "+ givenName
            }
        }
        // handles user asking what is his name
        else if (splitedCommand[i] === "What"){
            const lastAddedName = userName[userName.length -1]
            // if a user name is found in array 'userName' 
            if (lastAddedName !== undefined){
                return "Your name is "+ lastAddedName
            }
            // else return user not found
            else{   
                return "You haven't gived me you name yet"
            }
        }
    }
    return "I don't understand, try 'My name is x' or ask 'What is my name ?'"
}

// main functions for todo list
// We know that is contains the wold 'todo'
function todoFunc(splitedCommand){
    for (let i=0; i<splitedCommand.length; i++){
        if (splitedCommand[i] === "What"){
            return getTodoItems()
        }
        else if(splitedCommand[i] === "Add"){
           return addTodo()
        }
        else if(splitedCommand[i] === "Remove"){
            return removeTodo()
        }
        return " I dont understand your todo command"
    }
}

// find out if todoList contains item, if it does return them
function getTodoItems(){
    if (todoList != undefined){
        return "You have " + todoList.length + " todo: " + strTodoItems()
    }
    return "todo list is empty"
}

// get todo items one by one in a str
function strTodoItems(){
    let strItems = ''
    for (let i=0; i<todoList.length; i++){
        strItems += todoList[i] + ' ' 
    
    }
    return strItems
}

//function that Handles adding new todo to array todoList 
function addTodo(){
    let todoCommand = ''
    // we loop through the command after the world 'add' til the word 'to'
    // and add all those words as a todo string and push it to 'todoList' array
    for(let i=1; i<splitedCommand.length; i++){
        if (splitedCommand[i] !== "to"){
            todoCommand += splitedCommand[i] + ' '
        }
        else{
            todoList.push(todoCommand)
            return todoCommand + " added to your todo"
        }
    }
}

// we loop through the command after the world 'Remove' til the word 'from'
// and all those words as a todo string and remove it from 'todoList' array if exist
function removeTodo(splitedCommand){
    let todoCommand = ''
    for(let i=1; i<splitedCommand.length; i++){
        if (splitedCommand[i] !== "from"){
            console.log(splitedCommand[i])
            todoCommand += splitedCommand[i] + ''
        }
        else{
            for (let i=0; i<todoList.length; i++){
                if (todoCommand === todoList[i]){
                    todoList.splice(todoList[i], todoList[i+1])
                    return "Removed " + todoCommand + " from your list"
                }
            }
            return todoCommand + " not found in the todo list"
        }
    }

}

// functions handles get date command
function getTodaysDay(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date()
    const day = d.getDate()
    const month = months[d.getMonth()]
    const year = d.getFullYear()
    return "Today is: " + day + " of " + month + " " + year

}

// function that handles math
function doMath(){
    for(let i=0; i<splitedCommand.length; i++){
        if (splitedCommand[i] === "+"){
            const result = parseInt(splitedCommand[i-1]) + parseInt(splitedCommand[i+1])
            return result
        }
        else if (splitedCommand[i] === "-"){
            const result = parseInt(splitedCommand[i-1]) - parseInt(splitedCommand[i+1])
            return result
        }
        else if (splitedCommand[i] === "*"){
            const result = parseInt(splitedCommand[i-1]) * parseInt(splitedCommand[i+1])
            return result
        }
        else if (splitedCommand[i] === "/"){
            const result = parseInt(splitedCommand[i-1]) / parseInt(splitedCommand[i+1])
            return result
        }
    }
}

// These functions handle the timer
function setTimer(){
    for (let i=0; i<splitedCommand.length; i++){
        if (splitedCommand[i] === "minutes"){
            let minLeft = parseInt(splitedCommand[i-1]) 
            let secLeft = minLeft*60
            setTimeout(timerDone, secLeft*1000)
        }
    }
    return "working"
}

function timerDone(){
    console.log("timer done")
    return "timer done"
}

// EXTRA
// this function handles the age keyword
function ageFunc(){
    for (let i=0; i<splitedCommand.length; i++){
        if (splitedCommand[i] === "age" && splitedCommand[i + 1] === "is" && userAge.length === 0){
            userAge.push(splitedCommand[i+2])
            return "Thank you for sharing your age"
        }
        else if(splitedCommand[i] === "What"){
            if(userAge.length > 0){
                return "Your age is "+ userAge[0]
            }
            else{
                return "You haven't told me your age"
            }
        }
        return "I dont understand this command. Try e.g. 'My age is x' or 'What is my age ?'"
    }
}

// console.log(getReply("My name is Enqira"))
// console.log(getReply("What is my name ?"))
// console.log(getReply("Add fishing to my todo"))
// console.log(getReply("Add fishing to my todo"))
// console.log(getReply("What day is it today?"))
// console.log(getReply("what is 100 - 33"))
// console.log(getReply("Set a timer for 6 minutes"))
// console.log(getReply("do you know age"))