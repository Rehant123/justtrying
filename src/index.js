let project = [
  {
    _id: 0,
    _title: 'The Great Gatsby',
    _dueDate: '13/45/2023'
  },
  {
    _id: 1,
    _title: 'To Kill a Mockingbird',
    _dueDate: '06/30/2023'
  },
  {
    _id: 2,
    _title: '1984',
    _dueDate: '09/30/2023'
  }
];
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#Date');
const prioritySelect = document.querySelector('#priority');
const submitButton = document.querySelector(".submit");
const htmlProjects = document.querySelector(".project");






let projectid = 0;

class Task {
  constructor( projectid,title, dueDate, priority) {
    this._id = projectid;
    this._title = title;
    this._dueDate = dueDate;
  
  }
}

let title = "";

// function render() {
//     title = "";
//   project.forEach((x,index) => {
   
//     console.log("As as");
//     title += `
//     <li id = ${index}>${x._title}    ${x._dueDate}  <span class ="cross"> x</span> </li> `;
//   });
//   htmlProjects.innerHTML = "";
//   htmlProjects.innerHTML = title;
// }



render();


submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!nameInput.value && !dateInput.value) {
    return;
  } else {
    projectid++;
    const newTask = new Task(projectid,nameInput.value, dateInput.value);
    
    project.push(newTask);
    render();
  }
});


// if(project.length>0){
//     const x = document.querySelectorAll(".cross");
    
//     x.addEventListener("click",function(e){
//         console.log("S");
//         console.log(e.target.parentNode);
//     }
//     )
// }



class Task2 {
    constructor(projectid,name, dueDate, priority,description) {
    this._id = projectid;
      this._name = name;
      this._dueDate= dueDate;
      this._priority = priority;
      this._description = description;
    }

  }


function render() {
    title = "";
    project.forEach((x, index) => {
    
      title += `<li id="${index}">${x._title} ${x._dueDate} <span class="cross">x</span></li>`;
    });
    htmlProjects.innerHTML = "";
    htmlProjects.innerHTML = title;

  
    // add click event listener to all 'x' spans
    const crossSpans = document.querySelectorAll(".cross");
    crossSpans.forEach((span) => {
      span.addEventListener("click", (event) => {
        const li = event.target.parentNode;
        const taskId = li.getAttribute("id");
        project.splice(taskId,1);
        const liToDelete = document.querySelector(`li[id='${taskId}']`);
        liToDelete.remove(); // remove the 'li' with the specified 'id'
      });
    });


    
  const getliofproject = document.querySelectorAll(".project li");

  getliofproject.forEach(x=>{
    x.addEventListener("click",function(e){
      //change render id to that clicked
   renderid = e.target.id;

   renderspecific();
    })
  })

  }
  
  const tasks = [
    { 
      _id: 0,
      _name: 'Just Surfing',
      _dueDate: '12/05/2023',
      _priority: 'High',
      _description: 'They are a good support'
    },
    {
      _id: 1,
      _name: 'Finish Report',
      _dueDate: '07/31/2023',
      _priority: 'Medium',
      _description: 'Compile data and create summary for quarterly report'
    },
    {
      _id: 1,
      _name: 'Buy Groceries',
      _dueDate: '07/24/2023',
      _priority: 'Low',
      _description: 'Pick up milk, eggs, and bread from the store'
    }
  ];
//render specific task
let renderid = 0;
const projectNameInputtask = document.getElementById('project-name');
const dueDateInputtask = document.getElementById('due-date');
const prioritySelecttask = document.getElementById('priority');
const descriptionTextarea = document.getElementById('description');
const taskul = document.querySelector(".tasks")
const submitButtontask = document.querySelector('.tasksubmit');


let title2;






function renderspecific() {
    title2 = "";
    
    tasks.forEach((x, index) => {
      
      if(renderid == x._id)
      title2 += `<li id="${index}">${x._name} ${x._dueDate}  ${x._description} <span class="cross"> x </span></li>`;
     
    });
  
    taskul.innerHTML = "";
    taskul.innerHTML = title2;
}
//i want to render the task of the project with active



submitButtontask.addEventListener("click",(e)=>{
    e.preventDefault();

   
    if (!projectNameInputtask.value) {
        return;
      } 
      else{
        const a  = new Task2(renderid,projectNameInputtask.value,dueDateInputtask.value,prioritySelecttask.value,descriptionTextarea.value);
        tasks.push(a);
        renderspecific();
        
        console.log(tasks);
      }

  });


  renderspecific();



