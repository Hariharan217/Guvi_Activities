
let countDown = document.getElementById('container');


function wishes (callback){
    setTimeout(callback,1000);
}

wishes(()=>{
    countDown.innerHTML=10;
    wishes(()=>{
        countDown.innerHTML=9;
        wishes(()=>{
            countDown.innerHTML=8;
            wishes(()=>{
                countDown.innerHTML=7;
                wishes(()=>{
                    countDown.innerHTML=6;
                    wishes(()=>{
                        countDown.innerHTML=5;
                        wishes(()=>{
                            countDown.innerHTML=4;
                            wishes(()=>{
                                countDown.innerHTML=3;
                                wishes(()=>{
                                    countDown.innerHTML=2;
                                    wishes(()=>{
                                        countDown.innerHTML=1;
                                        wishes(()=>{
                                            countDown.innerHTML="Wish you happy NEW YEAR";;
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});