function hey(name){
    this.name = name
}

const resp = new hey("sachin");
console.log(resp.name);
const sec = resp
console.log(sec.name);



