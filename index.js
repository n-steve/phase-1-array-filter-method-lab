const names = [];
function findMatching(drivers, names) {
    const result = drivers.filter(drivers => drivers.toLowerCase()=== names.toLowerCase());
    console.log(result);
    return result;
}
const query =[];
function fuzzyMatch(drivers,query){
    
  const result =drivers.filter(drivers=>drivers.includes("Sa")&&query.includes("Sa"));
  console.log(result)
 return result;
}

    function matchName(drivers){
   const result = drivers.filter(drivers=>drivers.name ==="Bobby");
   return result;
    }