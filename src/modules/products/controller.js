import model from './model.js';

const GET = async (req, res) => {
  try {
    const products = await model.GET(req.query);
    return res.status(200).send(products);
  } catch (error) {
    console.log(error.message);
  }
};

const POST = async (req, res) => {
  try {
    const product = await model.POST(req.body);
    return res.status(201).send(product);
  } catch (error) {
    console.log(error.message);
  }
};


const PUT = async (req, res) => {
  try {
    const product = await model.PUT(req.params, req.body)
    return res.status(200).send(product);
  } catch (error) {
    console.log(error.message);
  }
};


const DELETE = async (req, res) => {
  try {
    const product = await model.DELETE(req.params);
    return res.status(200).send(product);
  } catch (error) {
    console.log(error.message);
  }
};


export default {
  GET,
  PUT,
  POST,
  DELETE,
};
