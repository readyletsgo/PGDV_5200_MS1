var table;
var taxonomy = {};

function preload(){
    table = loadTable("data/Taxonomy.csv", "csv", "header");
}

function setup(){
    // I know the data set is a maximum of 5 levels deep
    console.log("rowCount: " + table.getRowCount());
    createTaxonomy();
    logCategories();
}


// The hard way
function createTaxonomy(){
    var cat0, cat1, cat2, cat3, cat4;   
    var cat0Object, cat1Object, cat2Object, cat3Object;

    for(var i=0; i<table.getRowCount(); i++){
        
        // CATEGORY 0
        if(table.rows[i].get(0) != cat0){
            cat0 = table.rows[i].get("Diversion Category");            
            cat0Object = addItem(taxonomy, {name: cat0});
        }

        // CATEGORY 1
        if(table.rows[i].get(2) != "" && table.rows[i].get(2) != cat1){
            cat1 = table.rows[i].get("Material");     
            cat1Object = addItem(cat0Object, {name: cat1});
        }
        // CATEGORY 2
        if(table.rows[i].get(3) != "" && table.rows[i].get(3) != cat2){
            cat2 = table.rows[i].get("SubMaterial");     
            cat2Object = addItem(cat1Object, {name: cat2});
        
        }
        // CATEGORY 3
        if(table.rows[i].get(4) != "" && table.rows[i].get(4) != cat3){
            cat3 = table.rows[i].get("SubSub");    
            cat3Object = addItem(cat2Object, {name: cat3});
        }

    }
}


function addItem(obj, subItem){
    if(obj.items==undefined){
                obj.items = [];
    }
    if(obj.items!=undefined){
            obj.items.push(subItem);
            
    }
    return obj.items[obj.items.length-1];   
}



function draw(){}

function logCategories(){
        // I know the data set is a maximum of 5 levels deep
    var string1, string2, string3, string4, string5;
        
        // Category 0
        for(var i=0; i<taxonomy.items.length; i++){
            string1 = taxonomy.items[i].name;
            console.log(string1);
                
                // Category 1
                if(taxonomy.items[i].items !=undefined){
                for(var j=0; j<taxonomy.items[i].items.length; j++){
                    string2 = taxonomy.items[i].items[j].name;
                    console.log(string1 + " > " + string2);

                    // Category 2
                    if(taxonomy.items[i].items[j].items !=undefined){
                        for(var k=0; k<taxonomy.items[i].items[j].items.length; k++){
                            string3 = taxonomy.items[i].items[j].items[k].name;
                            console.log(string1 + " > " + string2 + " > " + string3);
                            
                            // Category 3
                            if(taxonomy.items[i].items[j].items[k].items !=undefined){
                                for(var l=0; l<taxonomy.items[i].items[j].items[k].items.length; l++){
                                    string4 = taxonomy.items[i].items[j].items[k].items[l].name;
                                    console.log(string1 + " > " + string2 + " > " + string3 + " > " + string4);
                                }   
                            }

                        }   
                    }
                }
            }
        }

}






/*
//This is a complicated way to do it

function createTaxonomyOld(){
    var cat0, cat1, cat2, cat3, cat4;   
    var cat0Object, cat1Object, cat2Object, cat3Object;

    for(var i=0; i<table.getRowCount(); i++){
        
        // CATEGORY 0
        if(table.rows[i].get(0) != cat0){
            cat0 = table.rows[i].get("Diversion Category");            
            
            if(taxonomy.items==undefined){
                taxonomy.items = [];
            }
            if(taxonomy.items!=undefined){
                taxonomy.items.push({name: cat0});
                cat0Object = taxonomy.items[taxonomy.items.length-1];
            }
        }

        // CATEGORY 1
        if(table.rows[i].get(2) != "" && table.rows[i].get(2) != cat1){
            cat1 = table.rows[i].get("Material");     
            if(cat0Object.items==undefined){                
                cat0Object.items = [];
            }
            if(cat0Object.items!=undefined){
                cat0Object.items.push({name: cat1});
                cat1Object = cat0Object.items[cat0Object.items.length-1];
            }
        }
        // CATEGORY 2
        if(table.rows[i].get(3) != "" && table.rows[i].get(3) != cat2){
            cat2 = table.rows[i].get("SubMaterial");     
            if(cat1Object.items==undefined){                
                cat1Object.items = [];
            }
            if(cat1Object.items!=undefined){
                cat1Object.items.push({name: cat2});
                cat2Object = cat1Object.items[cat1Object.items.length-1];
            }
        }
        
        // CATEGORY 3
        if(table.rows[i].get(4) != "" && table.rows[i].get(4) != cat3){
            cat3 = table.rows[i].get("SubSub");     
            if(cat2Object.items==undefined){                
                cat2Object.items = [];
            }
            if(cat2Object.items!=undefined){
                cat2Object.items.push({name: cat3});
                cat3Object = cat2Object.items[cat2Object.items.length-1];
            }
        }
    }
}*/