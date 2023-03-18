    import React, {useEffect, useState} from 'react'
    import { useParams, useLocation } from 'react-router-dom';
    import MenuService from '../services/menuService';
    import IMG from '../assets/Bonne-App.png';
    import '../componants/ProductDetails.css';

const ProductDetails = () => {
        const { productId } = useParams();
        const [productData, setproductData] = useState(null);
        

        const [quantity, setQuantity] = useState("1");
        const quantityHandler = (e) => {
            setQuantity(parseInt(e.target.value));
        }
        
        
        useEffect(() => {
            const fetchData = async () => {
                const data = await new MenuService().getProduct(parseInt(productId));
                setproductData(data[0]);
            };
        
            fetchData();
        }, [productId]);

    
        
    const location = useLocation();
    const handelClick = () => {
            if (isNaN(quantity)) {
                alert("le champ quantité requiert un nombre !");
            } else {
                // ------ sending the quantity + product to the 
                let item = {
                    id : productId,
                    quantite : quantity 
                }

                if (location.state && location.state.addToCart) {
                    location.state.addToCart(item);
                    alert("produit ajouter au panier");
                  } else {
                    alert("addToCart function not found in location.state");
                  }
              
            }
        }
    
        
        return (
           
            <div className = "product-infos">   
               
                
                <img src= {IMG} alt="IMG" className="product-img"/>
                <div className="ProdcuctContainer">
                    <p className ="category">{productData?.category}</p>
                    <p className = "title">{productData?.name}</p>
                    <p className = "description">{productData?.description}</p>

                    <div className="quantity">
                        <p className="quantity-txt">quantité : </p>
                        <input type="number" className="quantity-input" id = "input-number"  min="1" max="20"
                                    value = {quantity} onChange = {quantityHandler}></input>
                    </div>

                    <p className="price">{productData?.price}£</p>
                    <button className="submitButton" onClick = {handelClick}  >Ajouter au panier</button>

                </div>

               
                   
            
            </div>
        )
    }

    export default ProductDetails;
