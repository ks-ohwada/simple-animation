class Animation {
  constructor() {
    /* エレメント取得 */
    this.$item = document.querySelector('.box-animation');
    this.$button = document.querySelector('.button');
    this.$width =
      document.querySelector('.box').clientWidth -
      document.querySelector('.box-animation').clientWidth;
    this.moved = false;
    this.animating = false;

    this.bind();
  }

  bind() {
    this.$button.addEventListener('click', e => {
      this.moveBox();
    });
  }

  /* ボックスを動かします */
  moveBox() {
    if (this.moved) {
      this.$item.style.transform = `translateX(0px)`;
      this.moved = false;
    } else {
      this.$item.style.transform = `translateX(${this.$width}px)`;
      this.moved = true;
    }
  }
}

new Animation();
