    import React, {useEffect, useState} from 'react'
    import { useParams } from 'react-router-dom';
    import MenuService from '../services/menuService';
    import IMG from '../assets/Bonne-App.png'
    import '../componants/ProductDetails.css'

    const ProductDetails = () => {
        const { productId } = useParams();
        const [productData, setproductData] = useState(null);
        

        //this input is for the quantity !
        const [quantity, setQuantity] = useState("1");
        const quantityHandler = (e) => {
            setQuantity(e.target.value);
        }


        

        useEffect(() => {
            const fetchData = async () => {
                const data = await new MenuService().getProduct(parseInt(productId));
                setproductData(data[0]);
            };
        
            fetchData();
        }, [productId]);

    
        

    const handelClick =  (e) => {
        //ICI normalement je vais juste devois envoyer les donnees a la BDD ? !
        e.preventDefault();
            if (isNaN(parseInt(quantity))) {
                alert("le champ quantité requiert un nombre !");
            } else {
                //setQuantity(parseInt(quantity));
                console.log(quantity, "quantity ?");
                alert("produit ajouter au panier");
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
                        <p class="quantity-txt">quantité : </p>
                        <input type="number" class="quantity-input" id = "input-number" defaultValue = "1" min="1" max="20"
                                    value = {quantity} onChange = {quantityHandler}></input>
                    </div>

                    <p class="price">{productData?.price}£</p>
                    <button class="submitButton" onClick = {handelClick}  >Ajouter au panier</button>

                </div>
            
            </div>
        )
    }

    export default ProductDetails;
