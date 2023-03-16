const data = require('../API/menu.json')

class MenuService {
    

    //Get the Menu 
    getMenu = () => {
        try {
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    //Get product by ID
    getProduct = (id) => {
        console.log(data, '____DATA');
        try{    
            const productId = parseInt(id); //
            console.log(id, 'IDD')
            console.log(productId, 'productIDD')
            let res = data.filter((e) => e.id === productId);
            return res;
        }catch(error){
            console.log(error)
        }
    }



}

export default MenuService;