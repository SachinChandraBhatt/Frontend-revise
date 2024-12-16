function fetchData() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("data fetched successfully");
            } else {
                rejected("error fetching data")
            }
        }, 3000);
    })
}

// let response = fetchData()
// console.log(response);

fetchData()
    .then( (data)=> {
        console.log(data)
        return data.toUpperCase()
    }).then((da)=>console.log(da))
    .catch((err)=>console.log(err))

