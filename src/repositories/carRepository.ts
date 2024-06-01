import { CarsModel } from "../models/CarsModel";

//Get All Cars
export const get = () => {
 return CarsModel.query();
}

//Get By ID
export const getById = (id: number) => {
 return CarsModel.query().findById(id)
}

//Create Car

export const create = (args: any) => {

 return CarsModel.query().insert(args)
}

//Update
export const update = (id: number,args: any) =>{
    
    return CarsModel.query().findById(id).patch(args)
}

//Delete
export const deleteCars = (id: number) =>{
    return CarsModel.query().deleteById(id)
}

//

//