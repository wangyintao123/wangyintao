+function(){
    window.Game=function(){
        this.init();
        this.block=new Block();
        this.map=new Map();
        this.start();
        this.keydown();
    }
    Game.prototype.init=function(){
        for(var i=0;i<20;i++){
            var tr=$("<tr></tr>")
            for(var j=0;j<12;j++){
                var td=$("<td></td>")
                td.appendTo(tr)
            }
            tr.appendTo("table");
        }
    }
    Game.prototype.setColor=function(row,col,num){
        $("tr").eq(row).children("td").eq(col).addClass("c"+num)
    }
    Game.prototype.keydown=function(){
        var self=this;
        $(document).keydown(function(event){
            if(event.keyCode==37){
                self.block.checkLeft();
            }else if(event.keyCode==39){
                self.block.checkRight();
            }else if(event.keyCode==32){
                self.block.checkdaodi();
            }else if(event.keyCode==38){
                self.block.checkdir()
            }
        })
    }
    Game.prototype.clear=function(){
        for(var i=0;i<20;i++){
            for(var j=0;j<20;j++){
                $("tr").eq(i).children("td").eq(j).removeClass();
            }
        }
    }
    Game.prototype.start=function(){
        var self=this;
       this.timer=setInterval(function(){
            game.clear();
            self.block.render();
            self.map.render();
            self.block.checkDown();
        },500)
    }
}()