    function calcular() {
        const salario = document.querySelector('.salario')
        const idade = document.querySelector('.idade')
        const resultado = document.querySelector('.result')
        const salarioValue = salario.value
        const idadeValue = idade.value
        const contribuicao = salarioValue/100*3.6
        
        if (salario.value && idade.value != 0 || null) {

            resultado.innerHTML = 'R$ '+contribuicao.toFixed(2)
        } else{
            resultado.innerHTML = 'Informe salário e idade.'
        }

    }
    

    
    /*     const tel = document.getElementById('tel') // Seletor do campo de telefone
    
    tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
    tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo
    
const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}*/
