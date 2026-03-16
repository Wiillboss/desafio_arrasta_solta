document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstar', dragStar);
    item.addEventListener('dragend', dragEnd); 
});

document.querySelectorAll('.area').forEach(area => {
    // vai ser rodada sempre que estiver arrastando um item e esse item passar por cima da area em que adicionou o evento
    area.addEventListener('dragover', dragOver);

    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

//Functions Item
function dragStar(e) {
    e.currentTarget.classList.add('dragging');
}
function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

//Functions Area
function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}
function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}
function drop(e) {
    e.currentTarget.classList.remove('hover');

    let dragItem = document.querySelector('.item.dragging');
    console.log(dragItem);
}
