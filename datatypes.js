//create an emty generic object
var obj=new Object();
document.write("<br/>"+typeof(obj));

document.write("<br/>"+obj.firstname+""+obj.LAstname);

//create a user defind object
var car={
    modal:"BMW X3",
    color:"white",
    doors:5
}
document.write("<br/>"+car.modal+""+car.color+""+car.doors);
//arry datatype
var cars=["BMW","Mercedes-Benz","volkswagen"];
document.write("<br/>"+car[0]);
document.write("<br/>"+car[1]);
document.write("<br/>"+car[2]);
//function datatype
var demo=function(){
    return "hello welcome to javascript!";
}
document.write("<br/>"+typeof(demo));
document.write("<br/>"+demo());