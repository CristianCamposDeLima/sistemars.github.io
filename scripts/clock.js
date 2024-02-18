setInterval ( ()=> {
    const clock = document.querySelector('div#clock')
    
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    hora = hora <= 9 ? '0' + hora : hora
    minutos = minutos <= 9 ? '0' + minutos : minutos
    clock.innerHTML = `${hora}:${minutos}`
    
    const weekDay = document.querySelector('div#week-day')
    let diadasemana = data.getDay()
    diadasemana= diadasemana == 0 ? "Dom" : diadasemana
    diadasemana= diadasemana == 1 ? "Seg" : diadasemana
    diadasemana= diadasemana == 2 ? "Ter" : diadasemana
    diadasemana= diadasemana == 3 ? "Qua" : diadasemana
    diadasemana= diadasemana == 4 ? "Qui" : diadasemana
    diadasemana= diadasemana == 5 ? "Sex" : diadasemana
    diadasemana= diadasemana == 6 ? "Sab" : diadasemana
    weekDay.innerHTML = `${diadasemana},`
    
    const day = document.querySelector('div#day')
    let dia = data.getDate()
    day.innerHTML = `${dia}  de`
    
    const month = document.querySelector('div#month')
    let mes = data.getMonth()
    mes = mes == 0 ? "janeiro" : mes
    mes = mes == 1 ? "fevereiro" : mes
    mes = mes == 2 ? "março" : mes
    mes = mes == 3 ? "abril" : mes
    mes = mes == 4 ? "maio" : mes
    mes = mes == 5 ? "junho" : mes
    mes = mes == 6 ? "julho" : mes
    mes = mes == 7 ? "agosto" : mes
    mes = mes == 8 ? "setembro" : mes
    mes = mes == 9 ? "outubro" : mes
    mes = mes == 10 ? "novembro" : mes
    mes = mes == 11 ? "dezembro" : mes
    month.innerHTML = `${mes}`
    })




    const columns = document.querySelectorAll(".section-boxes");

document.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
});

columns.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        e.preventDefault(); // Prevenir comportamento padrãodo navegador. Isso é necessário para permitir a queda de elementos arrastados na área especificada.
        const dragging = document.querySelector(".dragging");
        const applyAfter = getNewPosition(item, e.clientY);

        if (applyAfter) {
        applyAfter.insertAdjacentElement("afterend", dragging);
    }else {
        item.prepend(dragging);
    }
    });
});

function getNewPosition(column, posY) {
    const cards = column.querySelectorAll("a:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;

        if (posY >= boxCenterY) result = refer_card;
    }
    return result;
}
