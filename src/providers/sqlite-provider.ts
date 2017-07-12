// import { Injectable } from '@angular/core';
// import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
// import 'rxjs/add/operator/map';

// /*
//   Generated class for the SqliteProvider provider.

//   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//   for more info on providers and Angular 2 DI.
// */
// @Injectable()
// export class SqliteProvider {
// public sql: SQLiteObject;
// public Items: Array<Object>;
// public User: Array<Object>;
//   constructor(private sqlite:SQLite) {
//     console.log('Hello SqliteProvider Provider');
//   }
// createDatabase(){
//     this.sqlite.create({
//     name:'data.db',
//     location:'default' }).then((db:SQLiteObject)=>{
//     this.sql=db;
//     // create UserTable
//      db.executeSql("CREATE TABLE IF NOT EXISTS Usertbl (id INTEGER PRIMARY KEY AUTOINCREMENT, Uname TEXT, Email TEXT,Password TEXT)", {})
//     .then(()=>console.log('Executed SQL'))
//     .catch(e=>console.log("Test"+e));

//      db.executeSql("CREATE TABLE IF NOT EXISTS Peopletable (id INTEGER PRIMARY KEY AUTOINCREMENT, Uname TEXT, Email TEXT,Password TEXT)", {})
//     .then(()=>console.log('Executed SQL'))
//     .catch(e=>console.log("Test"+e));

//      }).catch(e=>console.log("Test:"+e));
 

//     }


//     public AddUserDetails(userDetails):any {
//      return new Promise((resolve)=>  {
//           this.sql.executeSql("INSERT INTO Usertbl (Uname,Email,Password) VALUES ('"+userDetails.Uname+"', '"+userDetails.Email+"','"+userDetails.Password+"')", []).then((data) => {
//             console.log("INSERTED: " + JSON.stringify(data));
//             resolve("User Details inserted")
//         }, (error) => {
//             console.log("ERROR: " + JSON.stringify(error.err));
//             resolve(JSON.stringify(error.err))
//         });
//      });
//     }

//      public getUserDetailsByNamePassword(userDetails):any{
//         return new Promise((resolve)=>{
//             this.sql.executeSql("SELECT * FROM Usertbl WHERE Uname='"+userDetails.Uname+"' and Password='"+userDetails.Password+"'",[])
//             .then((data)=>{
//                this.User = [];
//             if(data.rows.length > 0) {
//                 for(var i = 0; i < data.rows.length; i++) {
//                     this.User.push({id:data.rows.item(i).id,
//                          Uname: data.rows.item(i).Uname,
//                          Password: data.rows.item(i).Password,});
//                 }
//                 resolve(true);
//             }else{
//             resolve(false); 
//             }
//         },
//         (error) => {
//             console.log("ERROR: " + JSON.stringify(error));
//             resolve(JSON.stringify(error))
//         });
//         });
//     }

//     getUserDetails(){
//       return this.User;
//     }
// }
