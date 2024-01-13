const express=require("express");
const bodyParser=require("body-parser");
const app=express();
let items=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.set('view engine','ejs');
app.get("/",(req,res)=>{
const today=new Date();
let day;
let options={
    weekday:"long",
    day:"numeric",
    month:"long"
};
day=today.toLocaleDateString("en-US",options);
res.render('list',{kindOfDay:day,newItem:items});
res.send();

})
app.post("/",(req,res)=>{
var item=req.body.newItem;
items.push(item);
res.redirect("/");
});
app.listen(3000,()=>{
    console.log("server started");
})