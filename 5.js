const deepCopy = function (obj) {
   let tempObj = {};
   for (let key in obj) {
     tempobj = {
       ...tempObj,
       [key]:
        typeof obj[key] === 'object' && Array.isArray(obj [key])
       ? {...deepCopy(obj [key]) }
         : obj[key],
     };
   }
   return tempobj;
 };

       
