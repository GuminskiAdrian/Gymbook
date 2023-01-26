const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const submit = document.getElementById("submit");

const workoutContainer = document.getElementById("workoutContainer");
const template = document.getElementById("template");

let number = 5;

addButton.addEventListener("click", (e) => {
    const addTemplate = document.importNode(template.content, true);
    workoutContainer.appendChild(addTemplate);
    workoutContainer.lastElementChild.setAttribute('id', `nr${number.toString()}`)
    number++;
});

removeButton.addEventListener("click", (e) => {
    workoutContainer.removeChild(workoutContainer.lastChild);
});
