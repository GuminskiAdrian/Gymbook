const workoutContainer = document.getElementById('workoutContainer');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const submit = document.getElementById('submit');
const template = document.getElementById('template');

addButton.addEventListener('click', () => {
    const addTemplate = document.importNode(template.content, true);
    workoutContainer.appendChild(addTemplate);
})