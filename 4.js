'use strict';
const User = function () {
  let name = '';
  Object.defineProperties(this, {
    id: {
      enumerable: true,
      value: 'UID-${parseInt(Math.random() * 30000)}-XZ',
      },
    name: {
      enumerable: true,
      get() {
        return name;
        },
      set(val) {
        name = val;
      },
    },
  });
};
let joe new User();
joe.name = joe.name = 'Joe Mockery';
console.log(joe.id, joe.name);

        
      
      
        
      
  
    
    
      
