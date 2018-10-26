export default class changeColor {
  constructor() {}

  /* ボックスの色を変えます */
  changeColor(colorcode, $item) {
    $item.style.backgroundColor = colorcode;
  }
}
