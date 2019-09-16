+function () {
    window.Block = function () {
        var alltype = ["S", "Z", "L", "O", "T", "J", "I"];
        this.type = alltype[parseInt(Math.random() * alltype.length)];
        this.alldir = fangkuai[this.type].length;
        this.dir = parseInt(Math.random() * this.alldir);
        this.code = fangkuai[this.type][this.dir];
        this.row = 0;
        this.col = 4;
    }
    Block.prototype.render = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.code[i][j] != 0) {
                    game.setColor(i + this.row, j + this.col, this.code[i][j]);
                }
            }
        }
    }
    Block.prototype.check = function (row, col) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.code[i][j] != 0 && game.map.mapcode[row + i][col + j] != 0) {
                    return false
                }
            }
        }
        return true;
    }
    Block.prototype.checkDown = function () {
        if (this.check(this.row + 1,this.col)) {
            this.row++;
        }else{
            game.block=new Block();
            this.xrb();
            game.map.remove();
            this.godie();
        }
    }
    Block.prototype.checkLeft = function () {
        if (this.check(this.row,this.col - 1)) {
            this.col--;
        }
    }
    Block.prototype.checkRight = function () {
        if (this.check(this.row,this.col + 1)) {
            this.col++;
        }
    }
    Block.prototype.checkdaodi=function(){
        while(this.check(this.row+1,this.col)){
            this.row++
        }
    }
    Block.prototype.checkdir=function(){
        var old=this.dir;
        this.dir++;
        if(this.dir>this.alldir-1){
            this.dir=0;
        }
        this.code=fangkuai[this.type][this.dir];
        if(!this.check(this.row,this.col)){
            this.dir=old;
            this.code=fangkuai[this.type][this.dir];
        }
    }
    Block.prototype.xrb=function(){
        for(var i=0;i<4;i++){
            for(var j=0;j<4;j++){
                if(this.code[i][j]!=0){
                    game.map.mapcode[this.row+i][this.col+j]=this.code[i][j];
                }
            }
        }
    }
    Block.prototype.godie=function(){
        for(var i=0;i<12;i++){
            if(game.map.mapcode[0][i]!=0){
                clearInterval(game.timer);
                alert("游戏结束")
            }
        }
    }
}()