// ball
const Initial_Velocity=0.6;
const increase=0.00001;
export default class Ball{
    constructor(ballele){
        this.ballele=ballele;
        this.reset();
    }
    get x(){
        return parseFloat(getComputedStyle(this.ballele).getPropertyValue("--x"));
    }
    set x(value){
        this.ballele.style.setProperty("--x",value);
    }
    get y(){
        return parseFloat(getComputedStyle(this.ballele).getPropertyValue("--y"));
    }
    set y(value){
        this.ballele.style.setProperty("--y",value);
    }
    rect(){
        return this.ballele.getBoundingClientRect();
    }
    reset(){
        this.x=50;
        this.y=50;
        this.direction = { x:0 };
        while(Math.abs(this.direction.x)<=0.2 || Math.abs(this.direction.x)>=0.9){
            const heading = randomnumberbetween(0,2*Math.PI);
            this.direction={x: Math.cos(heading),y:Math.sin(heading)};
        }
        this.velocity= Initial_Velocity;
    }
    update(delta,paddlerect){
        this.x+=this.direction.x*this.velocity*delta;
        this.y+=this.direction.y*this.velocity*delta;
        this.velocity+=increase*delta;
        const rect=this.rect();

        if(rect.bottom >= window.innerHeight || rect.top<=0){
            this.direction.y*=-1;
        }
        if(paddlerect.some(r=> isCollision(r,rect))){
        // if(rect.right >= paddlerect.innerWidth || rect.left<=0)
            this.direction.x*=-1;
        }

    }
}
function randomnumberbetween(max,min){
    return Math.random()*(max-min)+min;   
}

function isCollision(rec1,rec2){
    return rec1.top<=rec2.bottom && rec1.bottom>=rec2.top && rec1.left<=rec2.right && rec1.right>=rec2.left;
}
// ball
