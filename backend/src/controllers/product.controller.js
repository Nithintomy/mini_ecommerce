import Product from "../models/product.model.js";


export const getProducts = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort,
      search,
      category,
      minPrice,
      maxPrice,
    } = req.query;

    const query = { isActive: true };

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(query)
      .sort(sort)

    const total = await Product.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      data: products,
    });
  } catch (error) {
    next(error);
  }
};


export const getProductsBySlug = async(req,res,next)=>{

    const product = await Product.findOne({
        slug:req.params.slug,
        isActive:true
    })

    if(!product){
        return res.status(404).json({message:"Product not found"})
    }

    res.json(product)
}

export const getProductsById =async(req,res,next)=>{

  try {

      const product = await Product.findById(req.params.id)

    if(!product){
         return res.status(404).json({message:"Product not found"})
    }

    res.json(product)

    
  } catch (error) {
    
  }
}

export const createProduct =async(req,res,next)=>{
    try {

        const product = await Product.create(req.body)

        res.status(201).json(product)
        
    } catch (error) {
        next(error)        
    }
}


export const updateProduct =async(req,res,next)=>{

    try {

        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{raw:true})

        
    if(!product){
         return res.status(404).json({message:"Product not found"})
    }


    res.status(200).json({message:product})
        
    } catch (error) {
        next(error)
    }

}

export const deleteProduct = async(req,res,next)=>{
    try {

        const product = await Product.findByIdAndUpdate(
            req.params.id, {isActive:false},{new:true}
        )

            
    if(!product){
         return res.status(404).json({message:"Product not found"})
    }


    res.status(200).json({message:"Product soft deleted"})
        
    } catch (error) {

        next(error)
        
    }
}