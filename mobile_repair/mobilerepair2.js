
var _json ={
    "iphone": [
        {"main_image":"src='https://newrepair.mycellphonesforless.com/uploads/1603721580_2020-10-26.png'"},    
   
    ],
    
    
    "samsung": [
        {"main_image":"src='https://newrepair.mycellphonesforless.com/uploads/1603723667_2020-10-26.jpg'"},    
    ],
    
    
    "android":[
        {"main_image":"src='https://newrepair.mycellphonesforless.com/uploads/1603723762_2020-10-26.jpg'"},
       
    ],
    
    "tablets": [
        {"main_image":"src='https://newrepair.mycellphonesforless.com/uploads/1603724298_2020-10-26.png'"},       
     ],
    
    "watches": [
        
        {"main_image":"src='https://newrepair.mycellphonesforless.com/uploads/1603724477_2020-10-26.png'"}
        
    
] ,  
};




var inc = 1;
var mobile = "";
for (var key in _json) {
    mobile += '<div class="col-sm-3" onclick=loadbranches("'+key+'")>';
    mobile += '<div class="card">';
    mobile += '<div class="card-body mx-auto">';
    mobile += '<img data_id='+key+' no='+inc+' '+_json[key][0].main_image+' >';
    mobile += '</div>';
    mobile += '<div class="card-footer"><span data_id='+key+' no='+inc+'>'+capitalizeFirstLetter(key)+'</span></div>';
    mobile += '</div>';
    mobile += '</div>';
    inc ++;
};
document.getElementById("main_mobile").innerHTML = mobile;       

var main = key;



 function loadbranches(key) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST","bilal.json",true);
xhr.onload  = function() {
    var json = JSON.parse(this.responseText);
    var sub ="";
    if (key != "android") {
        
        for (let index = 1; index < json[key].length; index++) {
            sub += '<div class="col-sm-3" onclick=problems("'+key+'","'+index+'")>';
            sub += '<div class="card">';
            sub += '<div class="card-body mx-auto">';
            sub += json[key][index].image;
            sub += '</div>';
            sub += '<div class="card-footer">'+capitalizeFirstLetter(json[key][index].name)+'</div>';
            sub += '</div>';
            sub += '</div>';
        }
        document.getElementById("main_mobile").innerHTML = sub; 
    }else{
        for (let index = 1; index < json[key].length; index++) {
            sub += '<div class="col-sm-3" onclick=load2("'+key+'","'+index+'")>';
            sub += '<div class="card">';
            sub += '<div class="card-body mx-auto">';
            sub += json[key][index].image;
            sub += '</div>';
            sub += '<div class="card-footer">'+capitalizeFirstLetter(json[key][index].name)+'</div>';
            sub += '</div>';
            sub += '</div>';
        }
        document.getElementById("main_mobile").innerHTML = sub; 
    }
}

    xhr.send();
};





function load2(key,index) {

    var xhr = new XMLHttpRequest();
    xhr.open("POST","bilal.json",true);
xhr.onload  = function() {
   
    var sub="";
    var json = JSON.parse(this.responseText);
    for (let thisindex = 0; thisindex < json[key][index].sub_array.length; thisindex++) {
    
     
        sub += '<div class="col-sm-3" onclick=problems("'+key+'","'+index+'","'+thisindex+'")>';
        sub += '<div class="card">';
        sub += '<div class="card-body mx-auto">';
        sub += json[key][index].sub_array[thisindex].image;
        sub += '</div>';
        sub += '<div class="card-footer">'+capitalizeFirstLetter(json[key][index].sub_array[thisindex].name)+'</div>';
        sub += '</div>';
        sub += '</div>';
    }
    document.getElementById("main_mobile").innerHTML = sub; 
}
xhr.send();
}

function problems(key,index,thisindex) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST","bilal.json",true);
    xhr.onload = function () {
        var json = JSON.parse(this.responseText);
        if (key != "android") {
            
            var problems="";
            for (let myi = 0;myi<json[key][index].problems.length;myi++) {
                problems +='<div class="col-sm-3" id="pro" onclick=form()>';
                problems +='<div class="card" >';
                problems +='<div class="card-body mx-auto">';
                problems +='<div class="prob">'+json[key][index].problems[myi].image+'</div>';
                problems +='<div class="mobile_problem_div">';
                problems +='<div class="problem_name">'+capitalizeFirstLetter(json[key][index].problems[myi].f1)+'</div>';
                problems +='<div class="problem_price">'+json[key][index].problems[myi].price+'</div>';
                problems +='<div class="problem_Schedule">Schedule</div>';
                problems +='</div> ';
                problems +='</div> ';
                problems +='</div> ';
                problems +='</div> ';
                
            };
            document.getElementById("main_mobile").innerHTML = problems;
        }    else{
            var problems ="";
            for (let myi = 0; myi<json[key][index].sub_array[thisindex].problems.length;myi++) {
                problems +='<div class="col-sm-3" id="pro" onclick=form()>';
                problems +='<div class="card" >';
                problems +='<div class="card-body mx-auto">';
                problems +='<div class="prob">'+json[key][index].sub_array[thisindex].problems[myi].image+'</div>';
                problems +='<div class="mobile_problem_div">';
                problems +='<div class="problem_name">'+capitalizeFirstLetter(json[key][index].sub_array[thisindex].problems[myi].f1)+'</div>';
                problems +='<div class="problem_price">'+json[key][index].sub_array[thisindex].problems[myi].price+'</div>';
                problems +='<div class="problem_Schedule">Schedule</div>';
                problems +='</div> ';
                problems +='</div> ';
                problems +='</div> ';
                problems +='</div> ';
                
            };
            document.getElementById("main_mobile").innerHTML = problems;

        }
    }
    xhr.send();
}


function form() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST","form.php",true);
    xhr.onload = function () {
     var a =   document.getElementById("main_mobile").innerHTML =this.responseURL;
        window.location=a;
    }
    xhr.send();
}

function info() {
    
  
        document.getElementById('modal').style.display="block";
        document.getElementById('backdrop').style.display="block"; 

}
function modalclose() {
    document.getElementById('modal').style.display="none";
    document.getElementById('backdrop').style.display="none"; 
}
    
// function load(bilal){
    
//     document.getElementById("homealone").style.display="block";
//     document.getElementById("select_name_home").addEventListener("click",function(){
//         home();
//     })
//         document.getElementById("first").style.display="block";
//         document.getElementById("select_name_1").innerHTML=capitalizeFirstLetter(bilal);
//         var type =document.getElementById("select_name_1");
//          type.classList.add("text-muted")
    
//     var me_1 = document.getElementById("home");
//     me_1.classList.remove("active")
//  var me = document.getElementById("devices");
//     me.classList.add("active")
    
//     if (_json[bilal] != _json.android) {
//         var sub = "";
//         for(let i = 1; i < _json[bilal].length; i++){
//                             sub += '<div class="col-sm-3" onclick=problems("'+bilal+'","'+i+'")>';
//                             sub += '<div class="card">';
//                             sub += '<div class="card-body mx-auto">';
//                             sub += _json[bilal][i].image;
//                             sub += '</div>';
//                             sub += '<div class="card-footer">'+capitalizeFirstLetter(_json[bilal][i].name)+'</div>';
//                             sub += '</div>';
//                             sub += '</div>';
//                         }
//                         document.getElementById("main_mobile").innerHTML = sub;
//                     } 
//                     else if (_json[bilal] == _json.android) {
//                         var sub = "";
//                         for(let i = 1; i < _json[bilal].length; i++){
//                             sub += '<div class="col-sm-3" onclick=load_2("'+bilal+'","'+i+'")>';
//                             sub += '<div class="card">';
//                             sub += '<div class="card-body mx-auto">';
//                             sub += _json[bilal][i].image;
//                             sub += '</div>';
//                             sub += '<div class="card-footer">'+capitalizeFirstLetter(_json[bilal][i].name)+'</div>';
//                             sub += '</div>';
//                             sub += '</div>';
//                         }
//                         document.getElementById("main_mobile").innerHTML = sub;
//                     }
//                     document.getElementById("id_1").value= bilal;
                    
//                 };
//                 function load_2(my_parent,my_key) {
                    
//                     document.getElementById("select_name_1").innerHTML+='<i class="fas fa-arrow-right"></i>';
//                     document.getElementById("select_name_1").addEventListener("click",function(){
//                         load("android");
//                     });
//                     var type= document.getElementById("select_name_1");
//                     type.classList.remove("text-muted"); 
//                      var subtype= document.getElementById("select_name_2");
//                     subtype.classList.add("text-muted");
//                     document.getElementById("secound").style.display="block";
//                     document.getElementById("select_name_2").innerHTML=capitalizeFirstLetter(_json.android[my_key].name);

//                     var android_1 = "";
//                     for (let my_index=0;my_index < _json.android[my_key].sub_array.length;my_index++) {
//                         android_1 += '<div class="col-sm-3" onclick=problems("'+my_parent+'","'+my_key+'","'+my_index+'")>';
//                             android_1 += '<div class="card">';
//                             android_1 += '<div class="card-body mx-auto">';
//                             android_1 += _json.android[my_key].sub_array[my_index].image;
//                             android_1 += '</div>';
//                             android_1 += '<div class="card-footer">'+capitalizeFirstLetter(_json.android[my_key].sub_array[my_index].name)+'</div>';
//                             android_1 += '</div>';
//                             android_1 += '</div>';
//                             inc ++;
//                         };
//                         document.getElementById("main_mobile").innerHTML = android_1;
//                     };
//                     function problems(my_key,my_index,sub_index) {

//                         if (my_key == "" || my_key == undefined) {
//                             alert("Select Model First.")
//                             // var me_2 =document.getElementById("home");
//                             // me_2.classList.add("active");
//                             var mei = document.getElementById("Problems");
//                             mei.classList.remove("active");
                           
//                         }
//                         if (my_key == "android") {
//                             var subtype= document.getElementById("select_name_2");
//                             subtype.classList.remove("text-muted"); 
//                              var subtypekisub= document.getElementById("select_name_3");
//                              subtypekisub.classList.add("text-muted");
//                         }
//                         if (my_key != "android") {
//                             var type= document.getElementById("select_name_1");
//                             type.classList.remove("text-muted"); 
//                             var subtype= document.getElementById("select_name_2");
//                             subtype.classList.add("text-muted"); 
//                         }
//                         if( my_key != undefined){
//                             var me_1 = document.getElementById("devices");
//                             me_1.classList.remove("active")
//                          var me = document.getElementById("Problems");
//                             me.classList.add("active")

//                 }      

                      
// if (my_key == "android"){
//     var problems="";
//     for (let myi = 0;myi<_json.android[my_index].sub_array[my_index].problems.length;myi++) {
//         problems +='<div class="col-sm-3" id="pro" onclick=form()>';
//         problems +='<div class="card" >';
//         problems +='<div class="card-body mx-auto">';
//         problems +='<div class="prob">'+_json.android[my_index].sub_array[my_index].problems[myi].image+'</div>';
//         problems +='<div class="mobile_problem_div">';
//         problems +='<div class="problem_name">'+capitalizeFirstLetter(_json.android[my_index].sub_array[my_index].problems[myi].f1)+'</div>';
//         problems +='<div class="problem_price">'+_json.android[my_index].sub_array[my_index].problems[myi].price+'</div>';
//         problems +='<div class="problem_Schedule">Schedule</div>';
//         problems +='</div> ';
//         problems +='</div> ';
//         problems +='</div> ';
//         problems +='</div> ';
        
//     };
//     document.getElementById("main_mobile").innerHTML = problems;
// }
// //    other
// if (my_key != "android") {
//     var problems="";
//     for (let myi = 0;myi<_json[my_key][my_index].problems.length;myi++) {
//         problems +='<div class="col-sm-3"  id="pro"  onclick=form()>';
//         problems +='<div class="card" >';
//         problems +='<div class="card-body mx-auto">';
//         problems += '<div class="prob">'+_json[my_key][my_index].problems[myi].image+'</div>';
//         problems +='<div class="mobile_problem_div">';
//         problems +='<div class="problem_name">'+capitalizeFirstLetter(_json[my_key][my_index].problems[myi].f1)+'</div>';
//         problems +='<div class="problem_price">'+_json[my_key][my_index].problems[myi].price+'</div>';
//         problems +='<div class="problem_Schedule">Schedule</div>';
//         problems +='</div> ';
//         problems +='</div> ';
//         problems +='</div> ';
//         problems +='</div> '; 
//     };
//     document.getElementById("main_mobile").innerHTML = problems;
// }
//     if (my_key != "android"){
//         document.getElementById("first").style.display="block";
//         document.getElementById("secound").style.display="block";
//         document.getElementById("select_name_1").innerHTML=my_key+'<i class="fas fa-arrow-right"></i>';
//         document.getElementById("select_name_2").innerHTML=capitalizeFirstLetter(_json[my_key][my_index].name);
        
//     };
//     if (my_key === "android") {
//         console.log(my_key)
//         document.getElementById("first").style.display="block";
//         document.getElementById("secound").style.display="block";
//         document.getElementById("third").style.display="block";
//         document.getElementById("select_name_1").innerHTML=capitalizeFirstLetter(my_key)+'<i class="fas fa-arrow-right"></i>';
//         document.getElementById("select_name_2").innerHTML=capitalizeFirstLetter(_json[my_key][my_index].name)+'<i class="fas fa-arrow-right"></i>';
//         document.getElementById("select_name_3").innerHTML=capitalizeFirstLetter(_json.android[my_index].sub_array[sub_index].name);
//   };

//   if(my_key != "android"){
//     document.getElementById("select_name_1").addEventListener("click",function(){
//         device();
//     });}
//     if (my_key == "android") {
//         console.log(my_key);
//         document.getElementById("select_name_1").addEventListener("click",function(){
//             document.getElementById("secound").style.display="none";
//         document.getElementById("third").style.display="none";
//             load();
//         });
//          document.getElementById("select_name_2").addEventListener("click",function(){
//             load_2(my_key,my_index);
//         });
//     }   

//   };
//     function guide() {
//         document.getElementById("homealone").style.display="none"; 
//         document.getElementById("first").style.display="none";
//         document.getElementById("secound").style.display="none";
//         document.getElementById("third").style.display="none";
//     }
// function home() {
//     guide();
//     var me_1 = document.getElementById("devices");
//     var me_2 = document.getElementById("Problems");
//     me_1.classList.remove("active")
//     me_2.classList.remove("active")
//  var me = document.getElementById("home");
//     me.classList.add("active")
//     var inc = 1;
//     var mobile = "";
//     for (var key in _json) {
//         mobile += '<div class="col-sm-3" onclick=load("'+key+'")>';
//         mobile += '<div class="card">';
//         mobile += '<div class="card-body mx-auto">';
//         mobile += '<img data_id='+key+' no='+inc+' '+_json[key][0].main_image+' >';
//         mobile += '</div>';
//         mobile += '<div class="card-footer"><span data_id='+key+' no='+inc+'>'+capitalizeFirstLetter(key)+'</span></div>';
//         mobile += '</div>';
//         mobile += '</div>';
//         inc ++;
//     };
//     document.getElementById("main_mobile").innerHTML = mobile;
// }
// function device() {
//     guide();
//     var param = document.getElementById("id_1").value;
//     if (param == "") {
//         alert("Select device first.")
        
//     }
//     if ( param != "") {
        
//         var me_1 = document.getElementById("home");
//         var me_2 = document.getElementById("Problems");
//         me_1.classList.remove("active")
//         me_2.classList.remove("active")
//         var me = document.getElementById("devices");
//         me.classList.add("active")
        
//         var sub = "";
//         for(let i = 1; i < _json[param].length; i++){
//             sub += '<div class="col-sm-3" onclick=problems("'+param+'","'+i+'")>';
//             sub += '<div class="card">';
//             sub += '<div class="card-body mx-auto">';
//             sub += _json[param][i].image;
//             sub += '</div>';
//             sub += '<div class="card-footer">'+capitalizeFirstLetter(_json[param][i].name)+'</div>';
//             sub += '</div>';
//             sub += '</div>';
//         }
//         document.getElementById("main_mobile").innerHTML = sub;
//         document.getElementById("homealone").style.display="block";
//         document.getElementById("select_name_home").addEventListener("click",function(){
//             home();
//         });   
        
//     }
        
//     }
    
    
    
    
    
//     function form() {
//    document.getElementById("container").style.display="block";
//    document.getElementById("backdrop").style.display="block";

// }
// // document.getElementById("close").addEventListener("click",function (){
// //     document.getElementById("form").style.display="none";
// //     document.getElementById("backdrop").style.display="none";
    
// // })

// function _submit(event) {
  
//     console.log("hi");
//     var _name = document.getElementById("name").value;
//     var mail = document.getElementById("mail").value;
//     var date = document.getElementById("date").value;
//     document.getElementById("time").defaultValue = "18:00";
//     var time = document.getElementById("time").value;
//     if (_name == undefined || _name == "") {
//     alert('Name is not defined.');
//     return false;
// }
// if (mail == undefined || mail == "") {
//     alert('Mail is not defined.');
//     return false;
//     }
//     if ( date == undefined || date == "") {
//     alert('Date is not defined.');
//     return false;
//     } 
//     if (time == undefined || time == "") {
//     alert('Time is not defined.');
//     return false;
//     }
//     if (_name != "" || _name != undefined && time != undefined || time != "" && date != undefined || date != "" && mail != undefined || mail != "") {
     
//         document.getElementById("main_mobile").style.display="none";
//         document.getElementById("_footer").style.display="none";
//         document.getElementById("container").style.display="none";
//         document.getElementById("modal").style.display="block";
        
//         event.preventDefault();
//         setTimeout(() => {
//             document.getElementById('modal').style.display="none";
//             document.getElementById('backdrop').style.display="none"; 
//         }, 1500);
        
//         setTimeout(() => {
            
//             window.location.reload();
//             return false;
//                     }, 1501);
            
//         }
        
//     }
    
      



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };