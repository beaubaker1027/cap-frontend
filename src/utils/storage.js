export function getFromStorage(key){
  return new Promise((resolve, reject) => {
    if(!key) reject('Error: Key is missing');

    try{
      const valueStr = localStorage.getItem(key);
      if(valueStr) resolve(JSON.parse(valueStr));
      resolve(null);
    } catch(err){
      reject(err);
    }
  })
}

export function setInStorage(key, obj){
  if(!key) console.error('Error: Key is missing');

  try {
    localStorage.setitem(key, JSON.stringify(obj));
  } catch(err) {
    console.error(err);
  }
}
