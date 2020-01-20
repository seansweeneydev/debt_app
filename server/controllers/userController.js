const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');
    const {email, password} = req.body;
    const existingUser = await db.email_in_use(email);
    console.log(inUse)
    if (+inUse[0].count !== 0) {
      return(res.status(200).send({message: 'Email already in use'}))
    }
    const 
  } 
}