var rs, input; 

function setup() {
    // we are using p5 but without the canvas, just html
    noCanvas();

    // create an html input field
    input = createInput();
    input.changed(rita);
}

function rita() {
    // str is the value we get from the input
    var str = input.value();
    // turning the string into a Rita String 
    rs = RiString(str);
    var words = rs.words();
    var pos = rs.pos();
    
    console.log(pos);
    
    for (var i = 0; i < words.length; i++) {
        var span = createElement('span', words[i]);
        if (pos[i] === 'nn')
            span.style('background', 'orange');
    }
}