// require('dotenv').config();
// // const {Pool} = require('pg');
// // const development = new development(process.env.DATABASE_URL,{
// //     dialect:"postgres"
// // })
// // module.exports = {
// //     development:{
// //         use_env_variable:'DATABASE_URL',
// //         dialect:'postgres'  
// //     }
// // }
// const pool = new Pool
// ({
//     connectionString:process.env.DATABASE_URL,
//     ssl:{rejectUnauthorized:false}
// });

require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
