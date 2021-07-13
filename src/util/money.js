
function formatarParaReal(valor){
  return 'R$' + valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default {formatarParaReal};
