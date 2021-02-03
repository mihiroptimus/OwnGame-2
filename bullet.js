class Bullet {
    constructor(x, y) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 30
      this.image = loadImage("bomb.png")
      
        
      World.add(world, this.body);
      }
    

    
    display(){
      imageMode(CENTER);
      fill("white");
      image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
    };

    function drawBullet(){
        bullets.forEach(element => {
            element.display();
    })};

    function createBullet(x,y){
        var bullet = new Bullet(x,y);
        bullets.push(bullet);
        Matter.Body.applyForce(bullet.body, {x: 85, y: -85});
        return bullet;
    }