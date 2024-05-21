function mixItem(array: any){
  let tempArray=array
  for(let i=0;i<tempArray.length;i++){
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }
  
  return tempArray
}
export default mixItem