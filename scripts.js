// to add new tast in your list
//using the form to add new task
const frm_Add = document.querySelector(".add_box");
// select the task list
const task = document.querySelector(".tasks");

// to select teh button for clear
const clearAll = document.querySelector(".clear");

// to select the message box and show content in the tasks ul
const msgBox = document.querySelector(".message_box");

// to do search, select the search class, use keyup to track typing keys and
// then filter you li's based on the typed letter
const frm_Search = document.querySelector(".search");


// updating task message
function msgUpdate(){
    let count = task.children.length;
    //to show number of tasks in your lodger
    msgBox.children[0].innerText = `You have ${count} pending tasks!`;
}

// add eventlistener to the form above
frm_Add.addEventListener("submit", (event)=> {
    event.preventDefault();
//remove wwhie space using trim()
    const newValue = frm_Add.task.value.trim();
    if(newValue.length){
        //console.log(newValue);
        // to add new task
        task.innerHTML += `<li><span>${newValue}</span><i class='bi bi-trash-fill delete'></i></li>`;

        frm_Add.reset();
        
        //to show number of tasks in your lodger
        msgUpdate();    
    }
    msgUpdate();    
    
});
//document.getElementById("task").focus();

clearAll.addEventListener("click", (event)=>{
    const taskItems = task.querySelectorAll("li");
    taskItems.forEach((item)=>{
        item.remove();        
    });    
    msgUpdate()
});

// how to delete any task
//<li><span>Task number 3</span><i class="bi bi-trash-fill delete"></i></li>
//update the message
// to delete existing task
task.addEventListener("click", (event)=> {
    if(event.target.classList.contains("delete")) {
        event.target.parentElement.remove();

        //to show number of tasks in your lodger
        msgUpdate();    
    };
    
});


//function to filter the words
function filter_Term(term){
    Array.from(task.children)  
    .filter((task) =>{
        return !task.textContent.includes(term);
    })
    .forEach(task => {
        task.classList.add("hide");
    })

    // remove the hide class from all the list
    Array.from(task.children)  
    .filter((task) =>{
        return task.textContent.includes(term);
    })
    .forEach(task => {
        task.classList.remove("hide");
    })

    
    
}
    //searching form using keyup and filtering li's
frm_Search.addEventListener('keyup', (event) => {
    const srch_term = frm_Search.task.value.trim();
    // to filter everytime you type a letter
    filter_Term(srch_term);

})

// //to reset the search box
frm_Search.addEventListener("click", (event)=> {
    if(event.target.classList.contains("reset")){
        frm_Search.reset(); //reset teh form
        //then update the filter out 
        const wordSearch = frm_Search.task.value.trim();
        // to filter everytime you type a letter
        filter_Term(wordSearch);
         

    }
})
//to show number of tasks in your lodger
msgUpdate();    


