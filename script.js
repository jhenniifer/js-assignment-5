fetch("http://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(result => {
    console.log(result)
    
    result.forEach(each => {
        let todoList = document.createElement("p")
        todoList.textContent += ` Userid: ${each.userId}, Id: ${each.id}, Title: ${each.title},
        Completed: ${each.completed}`
        document.querySelector('.to-do').appendChild(todoList)
todoList.style.fontSize = '20px'
        if(each.completed === false){
            todoList.style.backgroundColor = "red"
        }else {
            todoList.style.backgroundColor = "green"
        }
        todoList.addEventListener("click",function() {alert(each.title)})
     let newTab = todoList.addEventListener("click",function() {window.open(each.title)})
        
      
    });
}


)
.catch(err => {console.log(err)})