import { getAdd } from "../store/reducers/add";

export const getAdds = (userDate) => {
   
    return async dispatch  => {
        
        const res = await fetch(`http://localhost:8090/ads`)
        const data = res.json()
        data.then((result) => {
            dispatch(getAdd(result))
           
        }).catch((err) => {
            
        });
    }
}