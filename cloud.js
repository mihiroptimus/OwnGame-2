var clouds = []
class Cloud {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("cloud.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y)

    }
  };
  function drawClouds(){
    clouds.forEach(element => {
        element.display();
    });
}
  function createCloud(x,y,width,height){
      var cloud = new Cloud(x,y,width,height);
      clouds.push(cloud);
      return cloud;
  }