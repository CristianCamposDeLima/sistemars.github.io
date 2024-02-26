/* const columns = document.querySelectorAll(".column");

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
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;

        if (posY >= boxCenterY) result = refer_card;
    }
    return result;
} */

//=================================================================

const columns = document.querySelectorAll(".column");

// Função para salvar o estado das colunas
function saveColumnState() {
    const columnStates = {};
    columns.forEach((column, index) => {
        const columnId = `column_${index}`;
        const items = Array.from(column.querySelectorAll('.item'));
        const itemIds = items.map(item => item.id);
        columnStates[columnId] = itemIds;
    });
    localStorage.setItem('columnStates', JSON.stringify(columnStates));
}

// Função para restaurar o estado das colunas
function restoreColumnState() {
    const savedColumnStates = localStorage.getItem('columnStates');
    if (savedColumnStates) {
        const columnStates = JSON.parse(savedColumnStates);
        Object.entries(columnStates).forEach(([columnId, itemIds]) => {
            const column = document.getElementById(columnId);
            if (column) {
                itemIds.forEach(itemId => {
                    const item = document.getElementById(itemId);
                    if (item) {
                        column.appendChild(item);
                    }
                });
            }
        });
    }
}

// Adicionando evento de carga da página para restaurar o estado
window.addEventListener("load", () => {
    restoreColumnState();
});

document.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
    saveColumnState(); // Salvar o estado após o término do arrasto
});

columns.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        const applyAfter = getNewPosition(item, e.clientY);
   
        if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
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
