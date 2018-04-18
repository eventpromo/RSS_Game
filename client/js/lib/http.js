export default class Http{  
    handler(xhr, resolve, reject){
        xhr.onload = function() {            
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
    
        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };
    }   
    
    get(url, async = true){
        let scope = this;
        let promise = new Promise(function(resolve, reject){
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, async);  
            scope.handler(xhr, resolve, reject);
            xhr.send();
        });
        return promise;    
    }

    post(url, data, async = true){
        let scope = this;
        let promise = new Promise(function(resolve, reject){
            let xhr = new XMLHttpRequest();
            let json = JSON.stringify(data);
            xhr.open('POST', url, async);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');    
            scope.handler(xhr, resolve, reject);    
            xhr.send(json);
        });
        return promise;    
    }
}