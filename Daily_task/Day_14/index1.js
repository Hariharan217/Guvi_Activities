console.log("hi");

let gender = document.getElementsByClassName('gender');
let button = document.getElementById("button");
let result = document.getElementById('table');
let fname = document.getElementById('Fname').value;
let lname = document.getElementById('Lname').value;
let addrress = document.getElementById('Address').value;
let pincode = document.getElementById('Pincode').value;
let food = document.getElementById('Food').value;
let state = document.getElementById('State').value;
let country = document.getElementById('Country').value;

button.onclick=()=>{
    for(i=0; gender.length; i++){
    if(gender[i].checked){
        // td.innerHTML =`you clicked ${gender[i].value}`;
        let tr1 =document.createElement('tr');
        let td1 =document.createElement('td');
        let td2 =document.createElement('td');
        let td3 =document.createElement('td');
        let td4 =document.createElement('td');
        let td5 =document.createElement('td');
        let td6 =document.createElement('td');
        let td7 =document.createElement('td');
        let td8 =document.createElement('td');
        td1.innerHTML = fname;
        tr1.appendChild(td1);
        td2.innerHTML = lname;
        tr1.appendChild(td2);
        td3.innerHTML = addrress;
        tr1.appendChild(td3);
        td4.innerHTML = pincode;
        tr1.appendChild(td4);
        td5.innerHTML = gender[i].value;
        tr1.appendChild(td5);
        td6.innerHTML = food;
        tr1.appendChild(td6);
        td7.innerHTML = state;
        tr1.appendChild(td7);
        td8.innerHTML = country;
        tr1.appendChild(td8);
        result.appendChild(tr1);
    }
}
}



