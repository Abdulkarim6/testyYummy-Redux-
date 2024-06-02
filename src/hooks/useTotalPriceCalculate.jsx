import { useGetmyCartMenusQuery } from "../features/api/cartApi";

const useTotalPriceCalculate = () =>{

    const { data } = useGetmyCartMenusQuery();
    const seletedDataForOrder = data?.filter(item => item.checked === true)
        let totalprice = 0;
        for(let i = 0; i < seletedDataForOrder?.length; i++){
            const item = seletedDataForOrder[i];
            totalprice = totalprice + (item.price * item.quantity);  
        }
      return totalprice;  
}

export default useTotalPriceCalculate;