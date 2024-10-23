class Snake {
    constructor() {
    this.x = scl*2;
    this.y = scl*2;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    }

    dir(x, y) {
        // Prevent going backward
        if (((x === -1 && this.xspeed === 1) || (x === 1 && this.xspeed === -1) ||
            (y === -1 && this.yspeed === 1) || (y === 1 && this.yspeed === -1)) && this.total > 0)  {
            return; // Don't change the direction
        }
        this.xspeed = x;
        this.yspeed = y;
    } 
    update() {


        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1];
            }       
        }
        this.tail[this.total -1] = createVector(this.x, this.y);  

        this.x += this.xspeed * scl; 
        this.y += this.yspeed * scl; 
    
        // Constrain to keep the snake within the canvas
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    show() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }

    eat(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y)
        if (d < 1) {
            this.total++;
            score++;
            return true;
        } else {
            return false;
        }
    }

    death(){
        for (var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                console.log('starting over');
                this.total = 0;
                this.tail = [];
                currentState = GAME_STATE.GAME_OVER; // Set game state to GAME_OVER
                return; // Exit the function
            }
        }
    }
  }
