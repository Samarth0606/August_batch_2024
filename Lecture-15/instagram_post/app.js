// step 1 - select image - 4s ✅
// step 2 - add filter - 2s ✅
// step 3 - adding caption - 5s ✅
// step 4 - add audio - 1s
// step 5 - actually upload - 3s


function step1( fn ){
    console.log("Hey please wait I am selecting the Image...");
    setTimeout( function(){
        console.log("Image selected successfully");
        fn("Selected Image")
    } , 4000 )
}

function step2(image , fn){
    console.log(`Adding filter to ${image}...`);
    setTimeout( function(){
        console.log("Filter applied successfully");
        fn('Filtered Image')
    } , 2000 )
}

function step3(filter , fn){
    console.log(`Adding caption to ${filter}...`);
    setTimeout( function(){
        console.log("Caption Added successfully");
        fn('Captioned Image')
    } , 5000 )
}

function step4(caption , fn){
    console.log(`Adding audio to ${caption}`);
    setTimeout( function(){
        console.log("Audio Added successfully");
        fn('Audio Added Image')
    } , 1000 )
}

function step5(audio){
    console.log(`Finally uploading the ${audio}`);
    setTimeout( function(){
        console.log("Image FINALLY Uploasded");
    } , 3000 )
}

step1( function(image){
    step2(image , function(filter){
        step3(filter , function(caption){
            step4(caption , function(audio){
                step5(audio)
            } )
        } )
    } )
} )










