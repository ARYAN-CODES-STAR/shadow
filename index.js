function shadow(options){
    let images = document.querySelectorAll('.shadow');

    if(options.shadow_type === 'hard'){
        options.shadow_type = '0px'
    }
    else{
        options.shadow_type = '15px'

    images.forEach(image => {
        image.computedStyleMap.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if(options.padding){
            image.computedStyleMap.padding = '1em'
        }
    })  
    }
   
}

module.exports.shadow = shadow