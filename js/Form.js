class Form{
    constructor(){

    }
    
    display(){
        var title = createElement("h2");
        title.html("Racing Multiplayer");
        title.position(130,0);
        var input = createInput("Name: ");
        var button = createButton("play");
        //var greeting = createElement("h3");
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(
            function(){
                input.hide();
                button.hide();
                var name = input.value();
                console.log(name);
                playerCount+=1;
                player.update(name);
                player.updateCount(playerCount);
                var greeting = createElement('h3');

                greeting.html("Hello"+name);
                greeting.position(130,160);

            }
        )
    }
}