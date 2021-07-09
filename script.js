function  addIP(id,inputType)
{
var ip = document.createElement(inputType);               
document.getElementById(id).appendChild(ip); 
return false; 
}

function addExp()
{
    var ip1 = document.createElement("input");               
    document.getElementById('ExpField').appendChild(ip1);  
    var ip2 = document.createElement("input");               
    document.getElementById('ExpField').appendChild(ip2);  
    var startDate=document.createElement("input");   
    startDate.setAttribute("type","month");
    document.getElementById('ExpField').appendChild(startDate); 
    var endDate=document.createElement("input");   
    endDate.setAttribute("type","month");
    document.getElementById('ExpField').appendChild(endDate); 
}

function addEdu()
{
    var ip1 = document.createElement("input");               
    document.getElementById('EduField').appendChild(ip1);  
    var startDate=document.createElement("input");   
    startDate.setAttribute("type","month");
    document.getElementById('EduField').appendChild(startDate); 
    var endDate=document.createElement("input");   
    endDate.setAttribute("type","month");
    document.getElementById('EduField').appendChild(endDate); 
    var score= document.createElement("input");    
    score.setAttribute("type","number");           
    document.getElementById('EduField').appendChild(score);  
}

function addProj()
{
    var ip1 = document.createElement('input');               
    document.getElementById('ProjField').appendChild(ip1);  
    var ip1 = document.createElement('input');               
    document.getElementById('ProjField').appendChild(ip1);  
    var ta = document.createElement('textarea');               
    document.getElementById('ProjField').appendChild(ta);  
}

function addDomain()
{
    var ip1 = document.createElement('input');               
    document.getElementById('TechField').appendChild(ip1); 
    var lab = document.createElement('label');  
    // lab.setAttribute("for","Skills");
    lab.innerHTML='Skills';
    document.getElementById('TechField').appendChild(lab); 
    var ip2 = document.createElement('input');               
    document.getElementById('TechField').appendChild(ip2); 
    
}

function change()

{
    console.log("shownig");
    document.getElementById("shrutiHTML").style.display="block";
    document.getElementById("shrutiHTML").scrollIntoView();
    document.getElementById("font_1").innerHTML=document.getElementById("NameField").value;
    document.getElementById("font_2").innerHTML=document.getElementById("AboutField").value;
    let rmt=document.getElementById("ReachAtField");
    let str="";
    for(let e of rmt){
        str=str+ `<li> ${e.value}</li>`;
    }
    document.getElementById("reachT").innerHTML=str;
    return false;
}








function printCV()
{
    document.getElementById("main").style.display="none";
    window.print();
}
