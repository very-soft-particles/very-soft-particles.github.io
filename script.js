let objects = [];

function start_game() {
  objects.push(new game_object(30, 30, "purple", 10, 120));
  game_scene.start();
}

class game_object
{
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = game_scene.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let game_scene = {
  canvas : document.createElement("canvas"),

  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.context, document.body.childNodes[0]);
    this.frame_number = 0;
    this.interval = setInterval(update, 40);
  },

  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
}

function update() {

  game_scene.clear();
  objects.forEach((obj) => {
    obj.update();
  });

}
