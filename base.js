class base{
    constructor(x, y, width, height){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.player = loadImage("asset/player.png");
        this.base = loadImage("asset/base.png");
        

    }
display(){

    image(this.player,100,100, this.width, this.height);
    pop();


    image(this.base ,120,140, 230, 200)


}


}