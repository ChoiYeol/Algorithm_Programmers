function solution(answers) {
    let p1=0
    let p2=0
    let p3=0
    let filt;
    let res=[];
    let arr1=[1, 2, 3, 4, 5]
    let arr2=[2, 1, 2, 3, 2, 4, 2, 5]
    let arr3=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    answers.map((v, i)=>{
      if( arr1[i%arr1.length] === v )p1++
      if( arr2[i%arr2.length] === v )p2++
      if( arr3[i%arr3.length] === v )p3++
    })
    filt = [p1, p2, p3]
    filt.filter((el, i)=>{
        if(el== Math.max(...filt)){
            res.push(i+1)
        }
    })
    return res;
}
