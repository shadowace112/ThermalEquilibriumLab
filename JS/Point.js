class Point{
    constructor(x, y){
        if(!x){
            x = 0
        }
        if(!y){
            y = 0
        }
        this.x = x;
        this.y = y;
    }
    fill(c, size){
        c.beginPath()
        var x = c.canvas.width*(this.x/100);
        var y = c.canvas.width*(this.y/100);
        size = c.canvas.width*(size/100);
        c.moveTo(x, y+size);(pizzaSlider);
        switch(pizzaSlider){
            case(4):
                c.arcTo(x+size, y+size, x+size, y, size);
                c.arcTo(x+size, y-size, x, y-size, size);
                c.arcTo(x-size, y-size, x-size, y, size);
                c.arcTo(x-size, y+size, x, y+size, size);
                break;
            case(3):
                c.arcTo(x+size, y+size, x+size, y, size);
                c.arcTo(x+size, y-size, x, y-size, size);
                c.arcTo(x-size, y-size, x-size, y, size);
                break;
            case(2):
                c.arcTo(x+size, y+size, x+size, y, size);
                c.arcTo(x+size, y-size, x, y-size, size);
                break;
            case(1):
                c.arcTo(x+size, y+size, x+size, y, size);
                break;
        }
        
        c.lineTo(x, y);
        c.closePath();
        c.fill()
        c.closePath()
        return this;
    }
    stroke(c, size){
        var oldWidth = c.lineWidth;
        c.lineWidth *= c.canvas.width/100
        c.beginPath()
        var x = c.canvas.width*(this.x/100);
        var y = c.canvas.width*(this.y/100);
        size = c.canvas.width*(size/100);
        c.arc(x, y, size, 0, 2*Math.PI*(pizzaSlider/100))
        c.stroke()
        c.closePath()
        c.lineWidth = oldWidth;
        return this;
    }
    distance(otherPoint){
        var distance = new Point(this.x-otherPoint.x, this.y-otherPoint.y);
        return distance;
    }
    makeGradiant(color1, color2, size, offset){
        var scaledPoint = new Point(this.x, this.y).scale(c.canvas.width/100);
        offset.scale(c.canvas.width/100);
        offset.x += scaledPoint.x;
        offset.y += scaledPoint.y;
        size *= c.canvas.width/100;
        var gradiant = ctx.createRadialGradient(scaledPoint.x, scaledPoint.y, this.radius, offset.x, offset.y, size);
        gradiant.addColorStop(0, color1);
        gradiant.addColorStop(1, color2);
        return gradiant;
    }
    scale(scalar){
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    get rad(){
        return Math.atan2(this.y, this.x)
    }
    get deg(){
        return (this.rad*180)/Math.PI
    }
    get r(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
    set rad(rad){
        var x = this.r * Math.cos(rad)
        var y = this.r * Math.sin(rad)
        this.x = x
        this.y = y
    }
    set deg(deg){
        var rad = (Math.PI * deg)/180
        this.rad = rad
    }
    set r(r){
        var x = r * Math.cos(this.rad)
        var y = r * Math.sin(this.rad)
        this.x = x
        this.y = y
    }
}
