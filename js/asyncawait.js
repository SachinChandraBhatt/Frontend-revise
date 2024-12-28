function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("hey its you get data")
        }, 4000);
    })
}


function fetchDataSecond() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("hey its heyulow  you get data")
        }, 2000);
    })
}



async function getData() {
    try { 
        console.log('fetching the data....');
        // const response = await fetchData();
        // const responseSec = await fetchDataSecond();
        const [res1 , res2] = await Promise.all([fetchData() , fetchDataSecond()])
        console.log(res1);
        console.log(res2);
        console.log('data get fetched');
    } catch (error) {
        // throw new Error("Error getting data fetched", error);
        console.error(error);
        
    }
}
getData();

