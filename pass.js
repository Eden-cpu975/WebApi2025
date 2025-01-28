const bcrypt=require('bcrypt');//קישור לספריית ביקריפט 
const pass="edent";
const rounds=10;
//תהליך של הרשמה 
//נשתמש בפונקציה להצפנה של הסיסמה 
bcrypt.hash(pass,rounds,(err,hashString)=>{

    if(err){
       console.log(err.message);
   }
    else{
       console.log(hashString); 
    }
});
//שמירה של הסיסמה בdb 
let hashFromDb="$2b$10$.PeCcT8xuEAGNMVByF9VAeH6iTgZq/IKhp93aEUBIfz.8dCHmQMfi";
bcrypt.compare(pass,hashFromDb).then((ans)=>{
    if(ans)
        console.log('ok');
    else
    console.log('not ok');
});