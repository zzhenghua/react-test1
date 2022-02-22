/*
 * @Descripttion: 
 * @Author: Zeng
 * @Date: 2022-02-23 01:04:03
 * @LastEditors: Zeng
 * @LastEditTime: 2022-02-23 01:04:03
 */
var result = cssar.reduce((res, m) => {
  let f = ar.filter(n => m.indexOf(n)>-1)
  if(f.length>0) {
      res.push(m)
  }
return res  
},[])
console.log(result)