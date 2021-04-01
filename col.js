class Col {
    constructor(x,y,width,height, index){
        this.x = x,
        this.y = y
        this.image = loadImage("col.png")
        this.index=index;
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 200, 150);
        textSize(22);
        
        if (!openedSuitcases.includes(this.index)) {
            fill("black");
            text(arr[this.index], this.x, this.y);
        } else {
            //
        }
    }
    }