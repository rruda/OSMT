type TaddSearchParams = ((url:URL,params:{}) => URL ) 

export const addSearchParams:TaddSearchParams = (url,params)=>{
    const newURL = new URL(url.href)
    Object.keys(params)
    .forEach(key => {
        // @ts-ignore: error message
        if(params[key]){
            // @ts-ignore: error message
            newURL.searchParams.append(key, params[key])
        }
    })
    return newURL
}