import { fetchAll } from '../../utils/db.js';

const GET = async ({productName, page, limit}) => {
  try {
    page = page || 1
    limit = limit || 10;
    return await fetchAll(`
      SELECT 
          *
      FROM products as p
      where product_name ilike concat('%', $1::varchar, '%') and p.deleted_at is null
      offset $2 limit $3
    `, [productName, (page - 1) * limit, limit]);
  } catch (error) {
    console.log(error.message);
  }
};


const PUT = async ({ productId },{ productName, productPrice, productDescription }) => {
  try {
    return await fetchAll(
      `
with  old_products as (
  select
    product_id,
    product_name,
    product_price,
    product_description
  from products 
  where product_id = $1 
) update products as p
      set
        product_name = case
                          when length($2) > 0 then $2
                          else o.product_name
                       end,
        product_price = case
                         when $3 > 0 then $3
                         else o.product_price
                      end,   
        product_description = case
                          when length($4) > 0 then $4
                          else o.product_description
                       end
      from old_products as o
      where p.product_id = $1 
      returning p.*
      `,
      [productId, productName, productPrice, productDescription]
    );
  } catch (error) {
    console.log(error.message);
  }
};
// , 
        
export default {
  GET,
  PUT
};
