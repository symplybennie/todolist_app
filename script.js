/* use the browsers local storagehistory */
/* set the items, so we ca have a list of items in there, after refreshing

you ca use windows storage, cookies,  
*/
window.localStorage.setItem('lang', 'en');

/* solution: creaing a todo list app, that eables you to add tasks, edit tasks and delete atasks */
/* steps as follows */
/* 1: loading the window event */
window.addEventListener('load', ()=>{
    /*2:  getting our elements using selector query */
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    //console.log(form);
    /* 3: adding an event listener to the form */
    form.addEventListener('submit', (e)=>{
        e.preventDefault();  //stops it from refreshing the page

        const task = input.value;   //extracting the value of the input element and assigning to a variable called input

        /* 4: making sure that our form is not left empty */
        if(!task){
            alert("Please fill out the task");
            return;
        }

        /*5: creating a new parent div node to containing the two child nodes */
        const task_el = document.createElement("div");
        task_el.classList.add("task");   //adding a class named task to the new div

        /* 6: creating the first child node called content*/
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content"); //adding a class named content to the new div
        //task_content_el.innerHTML=task;

        task_el.appendChild(task_content_el); //appending the new child node(content) to the parent node

        /* 7: creating the input element node for the content div */
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");    //adding a class text to the input element
        task_input_el.type = "text";            //adding a class text to the input element
        task_input_el.value = task;             //adding a class text to the input element
        task_input_el.setAttribute("readony", "readonly");    //setting the attribute to readonly

        task_content_el.appendChild(task_input_el);    //appending the new input element to the contetdiv

        /*8: create a new parent div (sibling for the contet div) */
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");   //adds a class called actions to the created node

        /*9 creatint the two buttons nodes*/
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");         //adding a class edit to the first button element
        task_edit_el.innerHTML = "Edit";               //adding inner text to the edit button

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");         //adding a class edit to the second button element
        task_delete_el.innerHTML = "Delete";            //adding inner text to the delete button

        /*10: appending the new button elements to their parent element(actions) */
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        /*11: appending the new actions div to the its parent node, which is the task div */
        task_el.appendChild(task_actions_el);

        /*12: pass the task div node as a list to its parent node, which is the tasks node  */
        list_el.appendChild(task_el);  //pass the task element to the list element

        input.value = "";  //will prevent the task from having any issue here


        /*13: add eventlistener to the edit button, to tell us what will happen when we click the edit button */
        task_edit_el.addEventListener('click', ()=>{

            /* here we say, when someone clicks on the edit button do the following
                a. remove the readoly attribute from the input element
                b. focus the mouse on the input element, so user can type
                c. change the innertext of the edit button to save
                else
                d. set back the attribute of input to readonly
                e. and change to edit ...so susr can edit tasks at any time
             */

            if (task_edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                //console.log("Save"); 
                task_input_el.setAttribute("readonly", "readonly");  //to set it back to normal
                task_edit_el.innerText = "Edit";
            }
        });

        /*14: add eventlistener to the delete button, to tell us what will happen when we click the edit button */
        /* here we say, when the delete button is clicked, remove the div with class, task and its content,
        so this deletes each tasks inputted */
        task_delete_el.addEventListener('click', ()=>{
            list_el.removeChild(task_el);
        });

    });
    
});

/* add a fuction to your task list so that when you refresh te page
        your added tasks , reloads back in...instead of wippng off completely, except when deleted */
