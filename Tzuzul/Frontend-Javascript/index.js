const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeBtn');
const acceptBtn = document.getElementById('acceptBtn');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

document.body.onclick = ()=> {
    alert('Click en el body');
}


modalBtn.onclick = (evento)=> {
    modal.style.display = 'flex';
     evento.stopPropagation();
}

closeBtn.onclick = ()=> {
    modal.style.display = 'none';
}

acceptBtn.onclick = ()=> {
    modal.style.display = 'none';
}

modal.onclick = (evento)=> {
    modal.style.display = 'none';
    evento.stopPropagation();
}

modalContent.onclick = (evento)=> {
    evento.stopPropagation();
}