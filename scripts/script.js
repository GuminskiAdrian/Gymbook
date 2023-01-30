const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const submit = document.getElementById("submit");

const workoutContainer = document.getElementById("workoutContainer");
const template = document.getElementById("template");

addButton.addEventListener("click", (e) => {
    const addTemplate = document.importNode(template.content, true);
    workoutContainer.appendChild(addTemplate);
});

removeButton.addEventListener("click", (e) => {
    let childsNr = workoutContainer.childElementCount - 1;
    const limit = childsNr - 3;
    for (childsNr; childsNr >= limit; childsNr--) {
        workoutContainer.removeChild(workoutContainer.children[childsNr]);
    }
});
