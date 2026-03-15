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
    console.log("Passou por cima!");
}
function dragLeave() {

}
function drop() {

}
