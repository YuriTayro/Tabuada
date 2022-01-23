function clicar(){
  let num = window.document.querySelector('input#numero')
  let tab = window.document.querySelector('select#seltab')
  if (num.value.length == 0) {
    window.alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c<=10) {
      let item = window.document.createElement("option")
      item.text = `${n} x ${c} = ${n*c}`
      tab.appendChild(item)
      item.value = `tab${c}` //linha q permite selecionar o valor da tabuada com o mouse
      c++
    }
  }
}
