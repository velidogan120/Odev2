class Request{
    static async get(url,sort){
        const response = await fetch(url + sort);
        console.log(url + sort)
        const data = await response.json();
        return data;
    }
    static async post(url,data){
        const response = await fetch(url,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json;",
            }
        });
        const response2 = await response.json();
        console.log(response2);
    }
    static async put(url,data,id){
        const response = fetch(url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json;",
            }
          })
    }
    static async delete(url,id){
        const response = await fetch(url + "/" + id,{
            method: "DELETE"
        });
    }
}