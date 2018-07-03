window.jQuery = function (){

}

window.$=window.jQuery
window.jQuery.ajax = function (options){
    let url
    if(arguments.length ===1){
        url=options.url
    }else if (arguments.length === 2 ){
        url = arguments[0]
        options=arguments[1]
    }
    let {method,headers,body,successFn,failFn} = options
    // let method = options.method
    // let headers = options.headers
    // let body = options.body
    // let successFn = options.successFn
    // let failFn  = options.failFn

    let request = new XMLHttpRequest()
    request.open(method,url)
    for(let key in headers){
        request.setRequestHeader(key,headers[key])
    }
    request.onreadystatechange = (e)=>{
        if(request.readyState === 4){
            if(request.status <=300 && request.status>=200){
                successFn.call(undefined,request.responseText)
            }else if(request.status >=400){ 
                failFn.call(undefined,request)
            }
        }
    }

    request.send(body)
}

console.log(test)
test.addEventListener('click',(e)=>{
    window.$.ajax({url:'/test',
     method: 'post',
     body: 'name=111',
     successFn: ()=>{console.log('success')},
     failFn: ()=>{console.log('fail')},
     headers: {
         myOwnHeader:'666',
         'Content-type':'application/x-www-form-urlencoded'
        }
    })
})