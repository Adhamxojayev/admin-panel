import model from './model.js'

const GET = async (req, res) => {
  try {
    const categories = await model.GET()
    return res.status(200).send(categories)
  } catch (error) {
    console.log(error.message);
  }
}

export default {
  GET
}