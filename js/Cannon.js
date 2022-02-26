class Cannon {
  constructor(x,y,w,h,angle){
      this.x=x
      this.y=y
      this.w=w
      this.h=h
      this.angle=angle

      this.Cannonimg = loadImage("assets/canon.png")
      this.Cannonbase = loadImage("assets/cannonBase.png")   
  }
  display(){
      push()
      translate(this.x,this.y)
      rotate(this.angle)
      imageMode(CENTER)
      image(this.Cannonimg,0,0,this.width,this.height)
      pop()
      image(this.Cannonbase,70,20,200,200)
      noFill()
  }
}

