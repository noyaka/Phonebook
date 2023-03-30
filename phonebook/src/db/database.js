const {Client} = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// client.query(`create table Users (
//   user_id serial primary key,
//   first_name varchar(50) not null,
//   last_name varchar(50) not null,
//   nickname varchar(50) not null,
//   address varchar(100) not null);`, 
//   (err, res) =>{
//   if(!err){
//     console.log(res);
//   }
//   else {
//     console.log(err.message);
//   }
//   client.end;
// })

// client.query(`create table Phones (
//   phone_id serial primary key,
//   user_id int not null,
//   phone_number varchar(50) not null,
//   foreign key (user_id) references Users(user_id) on delete cascade)`, 
//   (err, res) =>{
//   if(!err){
//     console.log(res);
//   }
//   else {
//     console.log(err.message);
//   }
//   client.end;
// })

// client.query(`DELETE FROM Users WHERE first_name='Noya';`, 
//   (err, res) =>{
//   if(!err){
//     console.log(res);
//   }
//   else {
//     console.log(err.message);
//   }
//   client.end;
// })

// client.query(`insert into Users (first_name, last_name, nickname, address)
// values('Noya','Topaz','Noy-Noy','Rosh Haayin')`, 
//   (err, res) =>{
//   if(!err){
//     console.log(res);
//   }
//   else {
//     console.log(err.message);
//   }
//   // client.end;
// })

// client.query(`insert into Users (first_name, last_name, nickname, address)
// values('Roi','Topaz','Mami','Haifa')`, 
//   (err, res) =>{
//   if(!err){
//     console.log(res);
//   }
//   else {
//     console.log(err.message);
//   }
//   // client.end;
// })

// client.query(`select * from Users`, 
//   (err, res) =>{
//   if(!err){
//     console.log(res);
//   }
//   else {
//     console.log(err.message);
//   }
//   client.end;
// })

export default client;