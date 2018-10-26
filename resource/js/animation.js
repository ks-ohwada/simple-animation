import events from 'events';

export default class Animation extends events {
  constructor() {
    super();

    /* エレメント取得 */
    this.$item = document.querySelector('.box-animation');
    this.$buttons = document.querySelectorAll('.button');
    this.$width =
      document.querySelector('.box').clientWidth -
      document.querySelector('.box-animation').clientWidth;
    this.moved = false;
    this.animating = false;

    this.bind();
  }

  bind() {
    this.$buttons.forEach(buttons => {
      buttons.addEventListener('click', e => {
        this.emit('changeColor', e.currentTarget.dataset.colorcode, this.$item);
        this.moveBox();
      });
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
