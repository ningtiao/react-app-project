import React, { Component } from 'react'

export default class demo extends Component {
    // ajax() {
    //     var xhr = new XMLHttpRequest()
    //     xhr.open('get',url,true)
    //     xhr.onreadystatechange((res)=>{
    //         if(res.readyState ==4 && res.status == 200) {
    //             xhr.resquestText
    //         }
    //     })
    //     xhr.send()
    // }
    // 手写一个Promise
    //防抖
    debounce(fn, wait,immediate) {
        let timer = null
        return function() {
            let args = arguments
            let context = this
            if(immediate && !timer) {
                fn.apply(context,args)
            }
            if(timer) crearTimeout(timer)
            timer = setTimeout(()=>{
                fn.apply(context,args)
            },wait)
        }
    }
    //节流
    throttle() {
        let timer  = null
        let callNow = immediate
        return function() {
            let context = this
            args = arguments
            if(callNow) {
                fn.apply(context,args)
                callNow = false
            }
            if(!timer) {
                timer = setTimeout(()=>{
                    fn.apply(context, args)
                    timer = null
                }, wait)
            }
        }
    }
    jsonp(url,jsonpCallback,success) {
        const script = document.createElement('script')
        script.src = url
        script.async = true
        script.type = 'text/javascript'
        window[jsonpCallback] = function(data) {
            success && success(data)
            
        }
        document.body.appendChild(script)
    }
    bubleSort(arr) {
        // let arr = [5,4,3,41,20,1,8,10]
        // let len = arr.length
        // for(let outer = len;outer>=2;outer--) {
        //     for(let inner =0;inner <= outer -1;inner++) {
        //         if(arr[inner] > arr[inner+1]) {
        //             [arr[inder],arr[inner+1]] = [arr[inder+1],arr[iner]]
        //         }
        //     }
        // }
        // return arr
        let len = arr.length
        for(let outer = len;outer >= 2; outer--) {
            for(let inner =0;inner <= outer-1;inter++) {
                if(arr[inner] > arr[inner+1]){
                    [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]
                }
            }
        }
        return arr
    }
    promise() {
        new Promise((resolve,reject)=> {
            setTimeout(() =>{
                resolve({text: 1})
                reject({text: 2})
            })
        }).then((data)=>{
            console.log(data)
        }) 
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
