const colors = require('colors')
const fs = require ('fs')
const process = require ('process')
const argumentos = process.argv;
let tasks = [];

console.log(argumentos);

function readTaskFile(){
  fs.readFile(
    'task.json',
    (error, fileContents)=>{
      if (error){
        throw error
      }else{
        const arrTasks = JSON.parse(fileContents);
        console.clear();
        for (let index = 0; index < arrTasks.length; index++) {
          console.log(arrTasks[index]["task"].red);
        }
      }
    }
  )
}

function writeTasks(taskToWrite){
  fs.readFile(
    'task.json',
    (error, fileContents)=>{
      if (error){
        throw error
      }else{
        tasks = JSON.parse(fileContents);
    
        tasks.push(taskToWrite);

        fs.writeFile(
          'task.json',
          JSON.stringify(tasks),
          (error)=>{
            if (error){
              throw error
            }else{
              console.log("Archivo guardado con éxito".green);
            }
          }
        )
      }
    }
  )
}

function deleteTask(number){
  fs.readFile(
    'task.json',
    (error, fileContents)=>{
      if (error){
        throw error
      }else{
        tasks = JSON.parse(fileContents);
        console.log(tasks)
        tasks.splice((number-1), 1);
        fs.writeFile(
          'task.json',
          JSON.stringify(tasks),
          (error)=>{
            if (error){
              throw error
            }else{
              console.log("Archivo borrado con éxito.".green);
            }
          }
        )
      }
    }
  )  
}


function editTask(number, taskToEdit){
  fs.readFile(
    'task.json',
    (error, fileContents)=>{
      if (error){
        throw error
      }else{
        tasks = JSON.parse(fileContents);
        console.log(tasks)
        tasks[number-1] = taskToEdit;
        fs.writeFile(
          'task.json',
          JSON.stringify(tasks),
          (error)=>{
            if (error){
              throw error
            }else{
              console.log("Archivo borrado con éxito.".green);
            }
          }
        )
      }
    }
  )  
}


  if (argumentos[2] === "--show"){
    readTaskFile();
  }

  if (argumentos[2] === "--add"){
    
    writeTasks( { task: argumentos[3] } )

  }

  if (argumentos[2] === "--delete"){
    
    deleteTask(argumentos[3])

  }

  if (argumentos[2] === "--edit"){
    
    editTask(argumentos[3], { task: argumentos[4]})

  }
  