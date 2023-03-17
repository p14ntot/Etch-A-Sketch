const container=document.getElementById('main-container');


// use the css function repeat function repeat() to create 16 rows and colums


container.style.gridTemplateColumns='repeat(16,1fr)'
container.style.gridTemplateRows='repeat(16,1fr)'

for(let rows=0; rows<16; rows++){
    
    for(let colums=0; colums<16; colums++){

        //create new divs
        const newDiv=document.createElement('div');
        newDiv.setAttribute('class', 'newDiv');
        newDiv.style.border=' 1px solid #000'
        container.appendChild(newDiv);

        
        
    }
}
    


// I put every item with class .newDiv in the neo
const neo=document.querySelectorAll('.newDiv');

// I use the for each to get access to every element
neo.forEach(function(newDiv){
    newDiv.addEventListener( "mouseover",function(){
                newDiv.style.backgroundColor="#000"
            })
})

function reset(){
    const res=document.querySelectorAll('.newDiv');
    res.forEach(function(newDiv){
        
                    newDiv.style.backgroundColor="white"
                })
    
}
    

function change(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      let num = parseInt(prompt('Give number of rows and columns'));

      container.style.gridTemplateColumns=`repeat(${num},1fr)`
      container.style.gridTemplateRows=`repeat(${num},1fr)`
      
    

    for(let rows=0; rows<num; rows++){
    
        for(let colums=0; colums<num; colums++){
    
            //create new divs
            const newDiv=document.createElement('div');
            newDiv.setAttribute('class', 'newDiv');
            newDiv.style.border=' 1px solid #000'
            container.appendChild(newDiv);
    
            
            
        }
    }
        
    
    
    // I put every item with class .newDiv in the neo
    const neo=document.querySelectorAll('.newDiv');
    
    // I use the for each to get access to every element
    neo.forEach(function(newDiv){
        newDiv.addEventListener( "mouseover",function(){
                    newDiv.style.backgroundColor="#000"
                })
    })

}
    
            
            
        
        
    
    
   
