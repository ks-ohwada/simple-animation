import changeColor from './changecolor';
import Animation from './animation';

class Index {
  constructor() {
    this.changecolor = new changeColor();
    this.animation = new Animation();

    this.bind();
  }

  bind() {
    this.animation.on('changeColor', (colorcode, $item) => {
      this.changecolor.changeColor(colorcode, $item);
    });
  }
}

new Index();
