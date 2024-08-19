let list=[]
function addtodo(){
    const content=document.querySelector("input").value;
    if(content===""){
        alert("add the task first")
    }
    else{
        const newele=createtodoele(content);

        let parent=document.querySelector("#todos")
        parent.appendChild(newele)
    }
    document.querySelector("input").value=""
    
}
function createtodoele(content){
    let newele=document.createElement("div")
    newele.id="task"

    let insidecontent=document.createElement("h3")
    insidecontent.innerHTML=content;

    let delbutton=createdeletebutton(newele)
    // let editbutton=createditbutton(newele)

    newele.appendChild(insidecontent)
    newele.appendChild(delbutton)
    // newele.appendChild(editbutton)
    // console.log(newele)
    return newele

    
}


// function createditbutton(tododiv){
//     let editbutton=document.createElement("button")
//     editbutton.id="editbutton"
//     editbutton.innerTex="edit"

//     editbutton.onclick=function (){

//     }
// }
function createdeletebutton(tododiv){
    let delbutton=document.createElement("button")
    delbutton.id="delbutton"
    delbutton.innerText="completed"

    delbutton.onclick=function(){
        let upperdiv=document.querySelector("#todos")
        upperdiv.removeChild(tododiv)
    }
    return delbutton
}