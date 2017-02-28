var rs; 
var lyric = "Before this, did you really know what live was? Comprehend to the track, for it's why 'cause Getting measures on the tip of the vibers Rock and roll to the beat of the funk fuzz Wipe your feet really good on the rhythm rug If you feel the urge to freak, do the jitterbug Come and spread your arms if you really need a hug Afrocentric living is a big shrug"


// var lyrics = "hello";
function setup() {
    // we are using p5 but without the canvas, just html
    createCanvas(4000,300);
    visualize(lyric);
}

function visualize(str){
    // background(0);
    background(255);
    fill(0);
    textSize(40);
    rs = RiString(str);
    var words = rs.words();
    var pos = rs.pos();

    var xPos = 40;
    var yPos = 40;
    for (var i = 0; i < words.length; i++) {
        // var span = createElement('span', words[i]);
        if (pos[i] === 'nn') //noun
            fill(200,30,60);
        else if (pos[i] === 'jj') //adjective
            fill(15,150,70);
        else if (pos[i] === 'vb') //verb
            fill(255,240,0);
        else
            fill(0);
        text(words[i],xPos,yPos);
        xPos += textWidth(words[i]+ " ") ;
    }

}

// function rita() {
//     // str is the value we get from the input
//     var str = input.value();
//     // turning the string into a Rita String 
//     rs = RiString(str);
//     var words = rs.words();
//     var pos = rs.pos();
    
//     console.log(pos);
    
//     for (var i = 0; i < words.length; i++) {
//         var span = createElement('span', words[i]);
//         if (pos[i] === 'nn')
//             span.style('background', 'orange');
//     }
// }