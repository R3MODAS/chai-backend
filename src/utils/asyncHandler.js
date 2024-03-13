// const AsyncHandler = (fn) => async (req,res,next) => {
//     try{
//       await fn(req,res,next)
//     }catch(err){
//       res.status(err.code || 500).json({
//         success: false,
//         message: err.message
//       })
//     }
// }

const AsyncHandler = (fn) => (req,res,next) => {
  return Promise.resolve(fn(req,res,next)).catch(err => next(err))
}

export {AsyncHandler}