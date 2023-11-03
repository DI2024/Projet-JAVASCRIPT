function add(x, y) {
    if (typeof x === "string" && typeof y === "string") {

        const result = parseInt(x) + parseInt(y);
      return isNaN(result) ? null : result;
    } else if (typeof x === "number" && typeof y === "number") {

        return x.toString() + y.toString();
    } else {

        return null;
    }
  }
  
  console.log(add("2", "3"));  
  console.log(add(2, 3));      
  console.log(add("2", 3));    
  