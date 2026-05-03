let fs=require('fs');
let filename1="asyncio/sampleData.json";
let filename2="asyncio/courseDetails.json";
function readfile1(filename1){
    fs.readFile(filename1,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Data from file 1: ",data);
            console.log("Data from file 1 read ");
        }
    })
}
function readfile2(filename2){
    fs.readFile(filename2,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Data from file 2: ",data.toString());
            console.log("Data from file 2 read ");
        }
    })
}

