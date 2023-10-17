fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
      .then((data)=>{
        return data.json();
      })
      .then((data)=>{
        console.log(data);
        })