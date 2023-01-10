import { fetch } from '../../utils/db.js'

const LOGIN = async ({username, password}) => {
  try {
    return await fetch(`
      select 
        admin_id, 
        username
      from admins
      where  username = $1 and password = crypt($2, password)  
    `, [username, password])
  } catch (error) {
    console.log(error.message);
  }
}

export default {
  LOGIN
}