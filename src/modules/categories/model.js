import { fetchAll } from '../../utils/db.js';

const GET = async () => {
  try {
    return await fetchAll(`
      SELECT 
          c.category_id as "categoryId",
          c.category_name as "categoryName",
          json_agg( p.*  ) as products
      FROM categories as c
      JOIN products as p on p.category_id = c.category_id and p.deleted_at is null
      group by c.category_id
      order by "categoryId" asc
    `);
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  GET,
};
