// Função para formatar números em moeda BRL
function formatarMoeda(input) {
  let num = input.value.replace(/\D/g,'').replace(/^0+/,'');
  if(num !== '') {
    num = (parseInt(num) / 100).toFixed(2).replace('.', ',');
    num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    input.value = "R$ " + num;
  } else {
    input.value = '';
  }
}

// Event listeners para chamar a função de formatação quando o valor é alterado
document.getElementById('purchase_price').addEventListener('input', function() {
  formatarMoeda(this);
});

document.getElementById('selling_price').addEventListener('input', function() {
  formatarMoeda(this);
});