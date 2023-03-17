const createState = (elements, totalQuantity, totalSum, cartEmpty) => {
    return { elements: elements, totalQuantity: totalQuantity, totalSum: totalSum, cartEmpty: cartEmpty };
};
const initState = createState([], 0, 0, true);

const ElementsSlice = createSlice({

})