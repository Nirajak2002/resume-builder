function addNew(ip,classField,field,btn)
{
    let newF=document.createElement(ip);
    newF.classList.add(classField);
    let weOb=document.getElementById(field);
    let weAdd=document.getElementById(btn);
    weOb.insertBefore(newF,weAdd);
    return false;

}

function addExp()
{
    let new1=document.createElement("input");
    let new2=document.createElement("input");
    let new3=document.createElement("input");
    let new4=document.createElement("input");
    let new5=document.createElement("textarea");
    let lab1=document.createElement("label");
    let lab2=document.createElement("label");
    let lab3=document.createElement("label");
    let lab4=document.createElement("label");
    let lab5=document.createElement("label");
    let weOb=document.getElementById("ExpField");
    let weAdd=document.getElementById("ExpField-add");
    new3.setAttribute("type","month");
    new4.setAttribute("type","month");

    new1.classList.add("OrganizationField");
    lab1.setAttribute("for","new1");
    lab1.innerHTML="Organization";
    weOb.insertBefore(lab1,weAdd);
   weOb.insertBefore(new1,weAdd);

   new2.classList.add("PostField");
    lab2.setAttribute("for","new2");
    lab2.innerHTML="Post";
    weOb.insertBefore(lab2,weAdd);
  weOb.insertBefore(new2,weAdd);

  new3.classList.add("StartDateField");
  lab3.setAttribute("for","new3");
  lab3.innerHTML="Start Date";
  weOb.insertBefore(lab3,weAdd);
 weOb.insertBefore(new3,weAdd);

 new4.classList.add("EndDateField");
 lab4.setAttribute("for","new4");
 lab4.innerHTML="End date";
 weOb.insertBefore(lab4,weAdd);
 weOb.insertBefore(new4,weAdd);

 new5.classList.add("ExpDescField");
 lab5.setAttribute("for","new5");
 lab5.innerHTML="Description";
 weOb.insertBefore(lab5,weAdd);
 weOb.insertBefore(new5,weAdd);
 return false;
}
 
function addEdu()
{
    let new1=document.createElement("input");
    let new2=document.createElement("input");
    let new3=document.createElement("input");
    let new4=document.createElement("input");
    new2.setAttribute("type","month");
    new3.setAttribute("type","month");
    new4.setAttribute("type","number");
    let lab1=document.createElement("label");
    let lab2=document.createElement("label");
    let lab3=document.createElement("label");
    let lab4=document.createElement("label");
    let weOb=document.getElementById("EduField");
    let weAdd=document.getElementById("EduField-add");

    new1.classList.add("InstuField");
    lab1.setAttribute("for","new1");
    lab1.innerHTML="Institution";
    weOb.insertBefore(lab1,weAdd);
   weOb.insertBefore(new1,weAdd);

   new2.classList.add("InstuFromField");
    lab2.setAttribute("for","new2");
    lab2.innerHTML="From";
    weOb.insertBefore(lab2,weAdd);
  weOb.insertBefore(new2,weAdd);

  new3.classList.add("InstuToField");
  lab3.setAttribute("for","new3");
  lab3.innerHTML="To";
  weOb.insertBefore(lab3,weAdd);
 weOb.insertBefore(new3,weAdd);

 new4.classList.add("InstuScoreField");
  lab4.setAttribute("for","new4");
  lab4.innerHTML="Score / CGPA";
  weOb.insertBefore(lab4,weAdd);
 weOb.insertBefore(new4,weAdd);
 return false;
}

function addProj()
{
    let new1=document.createElement("input");
    let new2=document.createElement("input");
    let new3=document.createElement("textarea");
    let lab1=document.createElement("label");
    let lab2=document.createElement("label");
    let lab3=document.createElement("label");
    let weOb=document.getElementById("ProjField");
    let weAdd=document.getElementById("ProjectField-add");
    new1.classList.add("ProjectNameField");
    lab1.setAttribute("for","new1");
    lab1.innerHTML="Project Name";
    weOb.insertBefore(lab1,weAdd);
   weOb.insertBefore(new1,weAdd);

   new2.classList.add("ProjectTechField");
    lab2.setAttribute("for","new2");
    lab2.innerHTML="Technologies used";
    weOb.insertBefore(lab2,weAdd);
  weOb.insertBefore(new2,weAdd);

  new3.classList.add("ProjectDescField");
  lab3.setAttribute("for","new3");
  lab3.innerHTML="Description";
  weOb.insertBefore(lab3,weAdd);
 weOb.insertBefore(new3,weAdd);
 return false;
}

function addDomain()
{   
    let new1=document.createElement("input");
    let new2=document.createElement("textarea");
    let weOb=document.getElementById("TechField");
    let weAdd=document.getElementById("DomainField-add");
    let lab1=document.createElement("label");
    let lab2=document.createElement("label");
    new1.classList.add("DomainField");
    lab1.setAttribute("for","new1");
    lab1.innerHTML="Domain";
    weOb.insertBefore(lab1,weAdd);
   weOb.insertBefore(new1,weAdd);

   new2.classList.add("SkillsField");
    lab2.setAttribute("for","new2");
    lab2.innerHTML="Skills";
    weOb.insertBefore(lab2,weAdd);
  weOb.insertBefore(new2,weAdd);
  return false;
}

function change()

{
    console.log("start");
    document.getElementById("shrutiHTML").style.display="block";
    document.getElementById("shrutiHTML").scrollIntoView();
   document.getElementById("font_1").innerHTML=document.getElementById("NameField").value;
   document.getElementById("font_2").innerHTML=document.getElementById("AboutField").value;
   let wes=document.getElementsByClassName("ReachAtField");
   let str="";
    for (let e of wes)
    {
            str=str+Array(10).fill('\xa0').join('')+`${e.value}`;
    }
   document.getElementById("reachT").innerHTML=str;
   str="";
   wes=document.getElementsByClassName("AchieveField");
    for(let e of wes)
    {
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById("achieveT").innerHTML=str;
    wes=document.getElementsByClassName("InterestsField");
    str="";
    for(let e of wes)
    {
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById("interestsT").innerHTML=str;
     wes=document.getElementsByClassName("ProfilesField");
     str="";
    for(let e of wes)
    {
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById("progprofT").innerHTML=str;
    wes=document.getElementsByClassName("CWField");
     str="";
    for(let e of wes)
    {
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById("cwT").innerHTML=str;
    str="";
    let wes1=document.getElementsByClassName("OrganizationField");
    let wes2=document.getElementsByClassName("PostField");
    let wes3=document.getElementsByClassName("StartDateField");
    let wes4=document.getElementsByClassName("EndDateField");
    let wes5=document.getElementsByClassName("ExpDescField");
    let flg=0;
    for(i=0;;i++){
        try{
            str=str+`<li> ${wes2[i].value}`+" at "+` ${wes1[i].value}`+"<br>From : "+` ${wes3[i].value}`+"  To : "+ ` ${wes4[i].value}`+"<br>"+` ${wes5[i].value}`;
            flg=1;}
            catch(ex){flg=0;}
        if(flg==0)break;
   }
   document.getElementById("expT").innerHTML=str;
   str="";
   wes1=document.getElementsByClassName("ProjectNameField");
   wes2=document.getElementsByClassName("ProjectTechField");
   wes3=document.getElementsByClassName("ProjectDescField");
   for(i=0;;i++){
       try{
           str=str+`<li> ${wes1[i].value}`+"<br>Technologies used : "+` ${wes2[i].value}`+"<br>"+ ` ${wes3[i].value}</li>`;
           flg=1;}
           catch(ex){flg=0;}
       if(flg==0)break;
  }
  document.getElementById("projT").innerHTML=str;
  str="";
  wes1=document.getElementsByClassName("InstuField");
  wes2=document.getElementsByClassName("InstuFromField");
  wes3=document.getElementsByClassName("InstuToField");
  wes4=document.getElementsByClassName("InstuScoreField");
  for(i=0;;i++){
      try{
          str=str+`<li> ${wes1[i].value}`+"<br>From : "+` ${wes2[i].value}`+"  To : "+ ` ${wes3[i].value}`+"  Score : "+ `${wes4[i].value}</li>`;
          flg=1;}
          catch(ex){flg=0;}
      if(flg==0)break;
 }
 document.getElementById("eduT").innerHTML=str;
 wes1=document.getElementsByClassName("DomainField");
  wes2=document.getElementsByClassName("SkillsField");
  str="";
  for(i=0;;i++){
    try{
        str=str+`<li> ${wes1[i].value}`+"<br>        "+` ${wes2[i].value}</li>`;
        flg=1;}
        catch(ex){flg=0;}
    if(flg==0)break;
}
document.getElementById("skillsT").innerHTML=str;
document.getElementById("main").style.display="none";
    return false;
}
function printCV()
{
    var printButton = document.getElementById("printBtn");
        printButton.style.visibility = 'hidden';
        window.print();
        printButton.style.visibility = 'visible';
}

