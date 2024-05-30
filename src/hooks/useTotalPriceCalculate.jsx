import { useGetmyCartMenusQuery } from "../features/api/cartApi";

const useTotalPriceCalculate = () =>{

    const { data : items } = useGetmyCartMenusQuery();

        let totalprice = 0;
        for(let i = 0; i < items?.length; i++){
            const item = items[i];
            totalprice = totalprice + (item.price * item.quantity);  
        }
      return totalprice;  
}

export default useTotalPriceCalculate;