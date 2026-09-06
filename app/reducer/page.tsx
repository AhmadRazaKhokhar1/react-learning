export default function page() {
    const arr = [1,2,3,4,5];
    const reducedSum = arr.reduce((prev, curr, index)=>{
        console.warn("current index:", index);
        console.warn("previous value:%s\n current value:%s", prev, curr);
        console.warn("previous value + current value:", prev + curr);
        return prev+curr
    });
    console.warn("reducedSum:", reducedSum)

    const obj = {
        firstValue:1,
        secondValue:2,
        thirdValue:3,
        fourthValue:4,
        fiftValue:5,
    };

    const arrOfValues = Object.values(obj);
    console.log("arrOfValues", arrOfValues)

    const reducedResult = arrOfValues.reduce((prev, curr)=>prev/curr);
    console.warn("new reduced result: ", reducedResult)
  return (
    <div>reducer page</div>
  )
}
