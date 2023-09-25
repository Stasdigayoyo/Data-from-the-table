const UL = document.querySelectorAll("ul>li>span");

document.querySelector("table").onclick = function (event) {
  //получение клика на всю таблицу
  if (event.target.tagName !== "TD") return; // убрать клик с заголовка
  //console.log(event.target);
  let data = [...event.target.parentNode.children]; //получение всех 3 ячеек строки
  //console.log(data);
  let text = getDataFromTd(data); //передается массив ячеек data.
  //console.log(text);
  outText(text);
};
function getDataFromTd(tdArray) {
  return tdArray.map((item) => item.textContent); // используется метод .map(), чтобы перебрать все элементы массива tdArray и извлечь текстовое содержимое каждой ячейки.

  // let arr = [];
  // for (i = 0; i < tdArray.length; i++) {
  //   arr.push(tdArray[i].textContent);
  //  }
  // return arr;
}
function outText(text) {
  //Эта функция принимает массив текста (text), который был получен из ячеек.
  text.forEach((item, index) => (UL[index].textContent = item)); //Затем она использует метод .forEach(), чтобы перебрать массив элементов <span> (UL), и для каждого элемента устанавливает текстовое содержимое из массива text в соответствующий индекс элемента.

  // for (i = 0; i < text.length; i++) {
  //   UL[i].textContent = text[i];
  // }
}
