window.jQuery = function (){

}

window.$=window.jQuery
window.jQuery.ajax = function ({url,method,headers,body}){
    return new Promise(function (resolve,reject){
        let request = new XMLHttpRequest()
        request.open(method,url)
        for(let key in headers){
            request.setRequestHeader(key,headers[key])
        }
        request.onreadystatechange = ()=>{
            if(request.readyState === 4){
                if(request.status <=300 && request.status>=200){
                    resolve.call(undefined,request.responseText)
                }else if(request.status >=400){ 
                    reject.call(undefined,request)
                }
            }
        }
    
        request.send(body)
    })
}

test.addEventListener('click',(e)=>{
    window.$.ajax({url:'/test',
    method: 'post',
    body: 'name=111',
    headers: {
        myOwnHeader:'666',
        'Content-type':'application/x-www-form-urlencoded'
        }
    }).then(()=>{console.log('success')},()=>{console.log('fail')})
})