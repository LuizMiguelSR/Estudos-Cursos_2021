setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback...')
        
        setTimeout(function(){
            console.log('Executando callback...')
        })
    }, 2000)
}, 2000)