// step 1 - select image - 4s 
// step 2 - add filter - 2s 
// step 3 - adding caption - 5s 
// step 4 - add audio - 1s
// step 5 - actually upload - 3s


function step1(){
    console.log("Please wait i am selecitng image...");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('SELECTED IMAGE')
        }, 4000)
    })
}
function step2(image){
    console.log(`Please wait i adding filter to ${image}... `);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('FILTERED IMAGE')
        }, 2000)
    })
}
function step3(filter){
    console.log(`Please wait adding caption to ${filter}... `);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('CAPTIONED IMAGE')
        }, 5000)
    })
}
function step4(caption){
    console.log(`Please wait adding audio to ${caption}... `);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Audio Added IMAGE')
        }, 1000)
    })
}
function step5(audio){
    console.log(`finally uploading ${audio}... `);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('IMAGE Finally added')
        }, 3000)
    })
}

step1()
.then(function(image){ 
    console.log(image) 
    return step2(image)
})
.then(function(filter){
    console.log(filter) 
    return step3(filter)
})
.then(function(caption){
    console.log(caption);
    return step4(caption)
})
.then(function(audio){
    console.log(audio);
    return step5(audio)
})
.then(function(final){
    console.log(final);
})
.catch(function(err){ 
    console.log(err , "catch") 
})

