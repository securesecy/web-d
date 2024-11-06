function Download(url,Down){
    console.log("file start downloading....");
    setTimeout(()=>{
        let img = url.split('/').pop();
        Down(img);
    },3000);
}

function Compress(img,comp){
    console.log("fie start compressing....");
    setTimeout(()=>{
        let cmp = img.split('.')[0]+".zip";
        comp(cmp);
    },2000)
}

function Upload(cmp,upl){
    console.log("file start uploading...");
    setTimeout(()=>{
        let uploaded = "Data is uploaded at server"+cmp;
        upl(uploaded)
    },1000)
}

Download("https://www.facebook.com/img.jpg", function Down(img)
{
    console.log("file downloaded successfully..",img);
    Compress(img,function comp(cmp){
        console.log("file compressed successfully",cmp);
        Upload(cmp,function upl(uploaded){
            console.log("file uploaded succesfully", uploaded);
        })
    })
})