export const iamgeValidaion = (file:File[]) => {
    return file.filter((i)=>{
        if(i.type=='image/jpeg' && i.size < 25000000){
            return true
        }
    })
} 