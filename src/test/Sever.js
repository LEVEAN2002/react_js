import Dexie from 'dexie';   

export const db = new Dexie('myDatabase');
db.version(1).stores({
  dongho: '++id, category, name,code,selling,quantity,mota,img' // Primary key and indexed props
});  
