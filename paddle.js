// playerPaddle

export default class Paddle{
    constructor(paddleEle){
        this.paddleEle=paddleEle;
        // this.reset();
    }
    rect(){
        return this.paddleEle.getBoundingClientRect();
    }
    get y(){
        return parseFloat(getComputedStyle(this.paddleEle).getPropertyValue("--position"));
    }
    set y(value){
        // console.log(this.paddleEle);
        this.paddleEle.style.setProperty("--position",value);
    }
}

// playerPaddle
