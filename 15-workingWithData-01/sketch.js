// This is a constructed Javascript object that works the way I want it to work
var category = {
    name: "Garbage",
    items: [
        {
        name: "Construction & Demolition",
        items: [ 
        {
            name: "Untreated Dimensional Lumber/Pallets/Crates"
        },
        {
            name: "Treated/Contaminated Wood"
        },
        {
            name: "Other C&D Debris Not Elsewhere Classified"
        }
        ]
        },
        {
        name: "E-Waste",
        items: [ 
        {
            name: "Audio/Visual Equipment",
            items: [
                {
                    name: "TV Peripherals (Covered)"
                },
                {
                    name: "Other (Non-Covered)"
                }
            ]
        }
        ]
        }
    ]
}

function setup(){
    // I know the data set is a maximum of 5 levels deep
    var string1, string2, string3, string4, string5;

    if(category.items!=undefined){
        string1 = category.name;
        console.log(string1);
        // one for loop for each level (i, j, k, l, m)

        for(var i=0; i<category.items.length; i++){
            string2 = category.items[i].name;
            console.log(string1 + " > " + string2 );

                for(var j=0; j<category.items[i].items.length; j++){
                    string3 = category.items[i].items[j].name;
                    console.log(string1 + " > " + string2 + " > " + string3);
                }
        }
    }
}


function draw(){}