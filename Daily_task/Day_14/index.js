fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
.then((data) =>{
    return data.json();
}
)
.then((data)=>{
    console.log(data);
    let ne =document.getElementById('nameemail');
    displayTable(1);

   for (i=1; i<=10; i++){
   
    let c =document.getElementById('pagenumber');
    let b =document.createElement('div');
    b.innerHTML = i;
    c.appendChild(b);
    b.onclick = ()=>{
        displayTable(event.target.innerHTML);
       }
       
   }
   function displayTable(number){
    ne.innerHTML='<tr><th>name</th><th>email</th></tr>'
   for (i=number*10-9; i<=number*10; i++){
    let tr =document.createElement('tr');
    let td1 =document.createElement('td');
    let td2 =document.createElement('td');
    td1.innerHTML=data[i-1].name;
    td2.innerHTML =data[i-1].email;
    tr.appendChild(td1);
    tr.appendChild(td2);
    ne.appendChild(tr);
   }
   }
   

}
)