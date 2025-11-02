class  rectangle {
    constructor(width , height , color){
        this.width = width ;
        this.height = height ;
        this.color = color ;
    }

    area(){
        const area  = this.width * this.height;
        return area;
    }

    paint(){
        console.log(`painting the rectangle ${this.color}`);
    }
}

const rect = new rectangle(3,4,"yellow");
const area = rect.area();
const paint = rect.paint();
console.log(area)
