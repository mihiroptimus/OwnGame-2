class Troop{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("troop.png");
      this.image.scale = 0.5;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.y = pos.y + 1;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y)

    }
  };
  function drawTroop(){
    troops.forEach(element => {
        element.display();
    });
}
  function createTroop(x,y,width,height){
      var troop = new Troop(x,y,width,height);
      troops.push(troop);
      return troop;
  }