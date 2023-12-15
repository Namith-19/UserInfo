const getContent=document.getElementById("getContent");
const getButton=document.getElementById("getButton");

const nameInput=document.getElementById('inpName');
const ageInput=document.getElementById('inpAge');
const phInput=document.getElementById('inpPh');
const mailInput=document.getElementById('inpMail');

const saveButton=document.getElementById("saveButton");

try{
    let functions={
        address:[],
        addAddress:function(){
            let Name=nameInput.value;
            let Age=parseInt(ageInput.value);
            let PhNo=phInput.value;
            let Mail=mailInput.value;
            if(Name.length==0){
                alert("Enter a valid name");
                throw "Non Valid name"
            }
            if(Age==0){
                alert("Enter a valid Age");
                throw "Non Valid Age"
            }
            if(PhNo.length!=10||parseInt(PhNo)==0 ||parseInt(PhNo)>9999999999){
                PhNo=parseInt(PhNo);
                alert("Enter a valid Phone number");
                throw "Non Valid PhNo"
            }
            if(Mail.length==0 || Mail.indexOf("@")==-1){
                alert("Enter a valid Mail");
                throw "Non Valid Mail"
            }
            let temp={name:Name,age:Age,phNo:PhNo,mail:Mail};
            this.address.push(temp);
        },
        getAddress:function(){
            let opText=""
            for (let i in this.address){
                opText+=`user${i+1}<br>Name: ${this.address[i].name}<br>Phone Number: ${this.address[i].phNo}<br>Age: ${this.address[i].age}<br> Mail: ${this.address[i].mail}<br>` 
            }
            getContent.innerHTML=`<p>${opText}</p>`;
        }
    }
    saveButton.addEventListener("click",function(){
    functions.addAddress();
    nameInput.value="";
    ageInput.value="";
    mailInput.value="";
    phInput.value="";
    })

    getButton.addEventListener("click",function(){
        functions.getAddress();
    })
}catch(err){
console.log("error: "+err);
}
