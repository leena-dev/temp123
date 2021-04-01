class Box {
constructor(x,y,width,height){
    this.x = x,
    this.y = y
    this.image = loadImage("box_close.png")
}
display(){
    imageMode(CENTER);
    image(this.image,this.x,this.y, 100, 100);
}
changeImage(newImage) {
    this.image = newImage;
}
}