// import { Card, Divider, Textarea, Input, Button, Autocomplete, AutocompleteItem, card, CardBody, User } from '@nextui-org/react'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import { setListUpdate, setProductName, setProductPrice, setProductQuantity, setProductURL } from '../pages/products/productsSlice'
// import axios from 'axios'
// import { FaRegTrashCan, FaMinus, FaPlus } from "react-icons/fa6";

// const OrderAddEdit = () => {
//   const [products, setProducts] = useState([])
//   const [cart, setCart] = useState([])
//   const dispatch = useDispatch()

//   // const productName = useSelector((state) => state.product.productName)
//   // const productPrice = useSelector((state) => state.product.productPrice)
//   // const productURL = useSelector((state) => state.product.productURL)
//   // const productQuantity = useSelector((state) => state.product.productQuantity)
//   // const product_Id = useSelector((state) => state.product.product_Id)
//   const inventoryActionType = useSelector((state) => state.inventory.inventoryActionType)


//   useEffect(() => {
//     // dispatch(setProductPrice("")),
//     // dispatch(setProductQuantity(""))
//     axios.get('http://localhost:3000/api/products')
//       .then((res) => {
//         setProducts([...res.data])
//       })

//   }, [])


//   const handleOrder = async () => {
//     // switch (productActionType) {
//     //   case "add":
//     //     console.log("adding")
//     //     axios.post("http://localhost:3000/api/products", {
//     //       productName, productPrice, productURL, productQuantity
//     //     }).then((res) => {
//     //       console.log(res)
//     //       dispatch(setListUpdate())
//     //     })
//     //     return;
//     //   case "edit":
//     //     console.log("updating")
//     //     const updateProduct = { productName, productPrice, productURL,productQuantity }
//     //     const response = await axios.put(`http://localhost:3000/api/products/${product_Id}`, updateProduct)

//     //     console.log(response)
//     //     dispatch(setListUpdate())
//     //     return
//     //   default:
//     //     return;
//     // }
//   }
//   const [value, setValue] = useState('');
//   const [selectedKey, setSelectedKey] = useState("");


//   const onSelectionChange = (id) => {
//     // setSelectedKey(id);
//     // setCart([...cart, products.filter((item) => item._id === id)[0]])
//     // console.log(cart)
//     // console.log(selectedKey)
//     const selectedProduct = products.find((item) => item._id === id);
//     setCart((prevCart) => [...prevCart, { ...selectedProduct, productQuantity: 1 }]);
//   };

//   // const onInputChange = (value) => {
//   //   setValue(value)
//   // };

//   // const handleDecreaseProduct = (id) => {
//   //   const product = cart.find((item) => item._id === id)

//   //   let quantityKey = Object.keys(product).find((key) => key.includes("productQuantityForBuy"))

//   //   if (quantityKey) {
//   //     if (product[quantityKey] !== 0) {
//   //       product[quantityKey]--
//   //     }
//   //   }
//   //   console.log(cart)
//   // }

//   // const handleIncreaseProduct = (id) => {
//   //   const product = cart.find((item) => item._id === id)

//   //   let quantityKey = Object.keys(product).find((key) => key.includes("productQuantity"))

//   //   if (quantityKey) {
//   //     product[quantityKey]++
//   //   } else {
//   //     product.productQuantity = 1
//   //   }
//   //   console.log(cart)

//   // }

//   const handleDecreaseProduct = (id) => {
//     setCart((prevCart) => 
//       prevCart.map((product) => 
//         product._id === id && product.productQuantity > 0
//           ? { ...product, productQuantity: product.productQuantity - 1 }
//           : product
//       )
//     );
//   };

//   const handleIncreaseProduct = (id) => {
//     setCart((prevCart) => 
//       prevCart.map((product) => 
//         product._id === id
//           ? { ...product, productQuantity: product.productQuantity + 1 }
//           : product
//       )
//     );
//   };
//   return (
//     <Card className='flex-1 min-w-[17%] max-w-[20%] rounded-none p-2'>
//       <div className='text-center text-xl'>
//         {inventoryActionType === "edit" ? 'Update Order' : 'New Order'}
//       </div>
//       <Divider className='my-2' />
//       <div className='flex flex-col gap-5'>
//         <Autocomplete
//           label="Select Product"
//           placeholder="Search a product"
//           className="max-w-xs"
//           onSelectionChange={onSelectionChange}
//           // onInputChange={onInputChange}
//           defaultItems={products}
//         // selectedKey={value}
//         >
//           {
//             (item) => <AutocompleteItem key={item._id}>{item.productName}</AutocompleteItem>
//           }
//         </Autocomplete>
//         <Card >
//           {
//             cart.map((item) => (
//               <CardBody key={item._id} className='flex flex-row justify-between'>
//                 <User
//                   avatarProps={{ radius: "lg", src: item.productURL }}
//                   description={`Available : ${item.productStock}`}
//                   name={item.productName}
//                 />
//                 <div className='border-1 flex items-center gap-1 p-1'>
//                   <Button size='sm' variant='light' isIconOnly disabled={item.productQuantity===0&&true} onClick={() => handleDecreaseProduct(item._id)}><FaMinus /></Button>
//                   <p>{item.productQuantityForBuy ? item.productQuantity : 0}</p>
//                   <Button size='sm' variant='light' isIconOnly onClick={() => handleIncreaseProduct(item._id)}><FaPlus /></Button>
//                 </div>
//                 <Button isIconOnly variant='light' color='danger'><FaRegTrashCan /></Button>
//               </CardBody>
//             ))
//           }
//         </Card>

//         <Input
//           aria-label="Product Name"
//           isRequired
//           type="text"
//           label="Product Name"
//           variant="bordered"
//           placeholder='Enter product name'
//           className="max-w-xs text-default-900"
//         // defaultValue={productName}
//         // value={productName}
//         // onChange={(e) => dispatch(setProductName(e.target.value))}
//         />
//         <Input
//           aria-level="Product Price"
//           isRequired
//           type="text"
//           label="Product Price"
//           variant="bordered"
//           placeholder='Enter product price'
//           className="max-w-xs text-default-900"
//         // defaultValue={productPrice}
//         // value={productPrice}
//         // onChange={(e) => dispatch(setProductPrice(e.target.value))}
//         />
//         <Input
//           aria-level="Product Stock"
//           isRequired
//           type="text"
//           label="Product Stock"
//           variant="bordered"
//           placeholder='Enter product quantity'
//           className="max-w-xs text-default-900"
//         // defaultValue={productQuantity}
//         // value={productQuantity}
//         // onChange={(e) => dispatch(setProductQuantity(e.target.value))}
//         />
//         <Textarea
//           aria-label="Product URL"
//           isRequired
//           type="text"
//           label="Product URL"
//           variant="bordered"
//           placeholder='Enter product URL'
//           className="max-w-xs text-default-900"
//         // defaultValue={productURL}
//         // value={productURL}
//         // onChange={(e) => dispatch(setProductURL(e.target.value))}
//         />
//         <Button onClick={() => handleOrder()} onPress={handleOrder}>{inventoryActionType === "edit" ? 'Update Changes' : 'Save Changes'}</Button>
//       </div>
//     </Card>
//   )
// }

// export default OrderAddEdit

// import { Card, Divider, Input, Button, Autocomplete, AutocompleteItem, CardBody, User } from '@nextui-org/react';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { FaRegTrashCan, FaMinus, FaPlus } from "react-icons/fa6";

// const OrderAddEdit = () => {
//   const [products, setProducts] = useState([]);
//   // const [cart, setCart] = useState([]);
//   const [cart, setCart] = useState({
//     productList: [],
//     customerName: '',
//     totalPrice: 0,
//   });
//   const [totalPrice, setTotalPrice] = useState(0)
//   const dispatch = useDispatch();
//   const inventoryActionType = useSelector((state) => state.inventory.inventoryActionType);

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/products') 
//       .then((res) => {
//         setProducts(res.data);
//       });
//   }, []);

//   const onSelectionChange = (id) => {
//     const selectedProduct = products.find((item) => item._id === id);
//     selectedProduct.productQuantity = 1;

//     setCart((prevCart) => {
//       // Calculate the new total price by adding the price of the new product multiplied by its quantity
//       const updatedTotalPrice = prevCart.totalPrice + selectedProduct.productPrice * selectedProduct.productQuantity;

//       return {
//         ...prevCart,
//         productList: [...prevCart.productList, selectedProduct],
//         totalPrice: updatedTotalPrice,
//       };
//     });

//     setProducts([...products.filter((item)=>item._id!==id)])
//     console.log(products)
//     console.log(cart)
//     // const test = cart.filter((item) => item._id === selectedProduct._id)
//     // console.log(test)
//     // console.log(selectedProduct)
//     // cart.productList.push(selectedProduct)
//     // setCart([...cart.productList, selectedProduct]);
//     // handleTotalPrice()
//     // console.log(cart)




//   };

//   const handleDecreaseProduct = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((product) => product._id === id && product.productQuantity > 0 ? { ...product, productQuantity: product.productQuantity - 1 } : product)
//     );
//     handleTotalPrice()
//     console.log(cart)
//   };

//   const handleIncreaseProduct = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((product) => product._id === id ? { ...product, productQuantity: product.productQuantity + 1 } : product)
//     );
//     handleTotalPrice()
//     console.log(cart)
//   };

//   const handleDeleteProduct = (id) => {
//     setCart((prevCart) => prevCart.filter((product) => product._id !== id && { ...product }))
//     console.log(cart)
//   }

//   const handleTotalPrice = () => {
//     let productTotalPrice = cart.map(item => (item.productPrice * item.productQuantity))
//     console.log(productTotalPrice)
//   }

//   return (
//     <Card className='flex-1 min-w-[20%] max-w-[25%] rounded-none p-2'>
//       <div className='text-center text-xl'>
//         {inventoryActionType === "edit" ? 'Update Order' : 'New Order'}
//       </div>
//       <Divider className='my-2' />
//       <div className='flex flex-col gap-5'>
//         <Autocomplete
//           label="Select Product"
//           placeholder="Search a product"
//           className="max-w-xs"
//           onSelectionChange={onSelectionChange}
//           defaultItems={products}
//         >
//           {(item) => <AutocompleteItem key={item._id}>{item.productName}</AutocompleteItem>}
//         </Autocomplete>
//         <Card>
//           {cart.productList && cart.productList.map((item) => (
//             <CardBody key={item._id} className='flex flex-row justify-between'>
//               <User
//                 avatarProps={{ radius: "lg", src: item.productURL }}
//                 description={`Available: ${item.productStock}\nPrice: ${item.productPrice}`}
//                 name={item.productName}
//               />
//               <div className='border-1 flex items-center gap-1 p-1'>
//                 <Button
//                   size='sm'
//                   variant='light'
//                   isIconOnly
//                   disabled={item.productQuantity === 0}
//                   onClick={() => handleDecreaseProduct(item._id)}
//                 >
//                   <FaMinus />
//                 </Button>
//                 <p>{item.productQuantity}</p>
//                 <Button
//                   size='sm'
//                   variant='light'
//                   isIconOnly
//                   disabled={item.productStock <= item.productQuantity}
//                   onClick={() => handleIncreaseProduct(item._id)}
//                 >
//                   <FaPlus />
//                 </Button>
//               </div>
//               <Button isIconOnly variant='light' color='danger' onClick={() => handleDeleteProduct(item._id)}>
//                 <FaRegTrashCan />
//               </Button>
//             </CardBody>
//           ))}
//         </Card>
//         <div>
//           total Price ={cart.totalPrice}
//         </div>
//         {/* <Input
//           aria-label="Product Name"
//           isRequired
//           type="text"
//           label="Product Name"
//           variant="bordered"
//           placeholder='Enter product name'
//           className="max-w-xs text-default-900"
//         />
//         <Input
//           aria-level="Product Price"
//           isRequired
//           type="text"
//           label="Product Price"
//           variant="bordered"
//           placeholder='Enter product price'
//           className="max-w-xs text-default-900"
//         />
//         <Input
//           aria-level="Product Stock"
//           isRequired
//           type="text"
//           label="Product Stock"
//           variant="bordered"
//           placeholder='Enter product quantity'
//           className="max-w-xs text-default-900"
//         />
//         <Button>
//           {inventoryActionType === "edit" ? 'Update Changes' : 'Save Changes'}
//         </Button> */}
//       </div>
//     </Card>
//   );
// };

// export default OrderAddEdit;



import {
  Card,
  Divider,
  Input,
  Button,
  Autocomplete,
  AutocompleteItem,
  CardBody,
  User,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FaRegTrashCan, FaMinus, FaPlus } from 'react-icons/fa6';

const OrderAddEdit = () => {
  const [products, setProducts] = useState([]);
  const [customers,setCustomers] = useState([])
  const [paidAmount,setPaidAmount] = useState(0)
  const [dueAmount,setDueAmount] = useState(0)
  const [cart, setCart] = useState({
    productList: [],
    customerName: '',
    totalPrice: 0,
  });
  const dispatch = useDispatch();
  const inventoryActionType = useSelector(
    (state) => state.inventory.inventoryActionType
  );

  useEffect(() => {
    axios.get('http://localhost:3000/api/products').then((res) => {
      setProducts(res.data);
    });

    axios.get('http://localhost:3000/api/customers').then((res)=>{
      setCustomers(res.data)
    })
  }, []);

  const updateTotalPrice = (productList) => {
    const total = productList.reduce((sum, product) => {
      return sum + product.productPrice * product.productQuantity
    }, 0)
    return total;
  };

  const onSelectionChangeProducts = (id) => {
    const selectedProduct = products.find((item) => item._id === id);
    selectedProduct.productQuantity = 1;

    setCart((prevCart) => {
      const updatedProductList = [...prevCart.productList, selectedProduct];
      const updatedTotalPrice = updateTotalPrice(updatedProductList);

      return {
        ...prevCart,
        productList: updatedProductList,
        totalPrice: updatedTotalPrice,
      };
    });

    setProducts(products.filter((item) => item._id !== id));
  };

  const onSelectionChangeCustomers = (id) =>{

  }

  const handleDecreaseProduct = (id) => {
    setCart((prevCart) => {
      const updatedProductList = prevCart.productList.map((product) => {
        if (product._id === id && product.productQuantity > 0) {
          return {
            ...product,
            productQuantity: product.productQuantity - 1,
          };
        }
        return product;
      });

      const filteredProductList = updatedProductList.filter(
        (product) => product.productQuantity > 0
      );

      return {
        ...prevCart,
        productList: filteredProductList,
        totalPrice: updateTotalPrice(filteredProductList),
      };
    });
  };

  const handleIncreaseProduct = (id) => {
    setCart((prevCart) => {
      const updatedProductList = prevCart.productList.map((product) => {
        if (product._id === id) {
          return {
            ...product,
            productQuantity: product.productQuantity + 1,
          };
        }
        return product;
      });

      return {
        ...prevCart,
        productList: updatedProductList,
        totalPrice: updateTotalPrice(updatedProductList),
      };
    });
  };

  const handleDeleteProduct = (id) => {
    setCart((prevCart) => {
      const deletedProduct = prevCart.productList.find((product) => product._id === id);

      const updatedProductList = prevCart.productList.filter(
        (product) => product._id !== id
      );

      // Add the deleted product back to the products array
      setProducts((prevProducts) => [...prevProducts, deletedProduct]);

      return {
        ...prevCart,
        productList: updatedProductList,
        totalPrice: updateTotalPrice(updatedProductList),
      };
    });
  };

  const handlePaidAmount = (amount)=>{
    setPaidAmount(amount)
    setDueAmount(cart.totalPrice-amount)

  }

  return (
    <Card className='flex-1 min-w-[20%] max-w-[25%] rounded-none p-2'>
      <div className='text-center text-xl'>
        {inventoryActionType === 'edit' ? 'Update Order' : 'New Order'}
      </div>
      <Divider className='my-2' />
      <div className='flex flex-col gap-5'>
        <Autocomplete
          label='Select Product'
          placeholder='Search a product'
          className='max-w-xs'
          onSelectionChange={onSelectionChangeProducts}
          defaultItems={products}
        >
          {(item) => (
            <AutocompleteItem key={item._id}>{item.productName}</AutocompleteItem>
          )}
        </Autocomplete>
        <Card>
          {cart.productList &&
            cart.productList.map((item) => (
              <CardBody key={item._id} className='flex flex-row justify-between'>
                <User
                  avatarProps={{ radius: 'lg', src: item.productURL }}
                  description={`Available: ${item.productStock}\nPrice: ${item.productPrice}`}
                  name={item.productName}
                />
                <div className='border-1 flex items-center gap-1 p-1'>
                  <Button
                    size='sm'
                    variant='light'
                    isIconOnly
                    disabled={item.productQuantity === 0}
                    onClick={() => handleDecreaseProduct(item._id)}
                  >
                    <FaMinus />
                  </Button>
                  <p>{item.productQuantity}</p>
                  <Button
                    size='sm'
                    variant='light'
                    isIconOnly
                    disabled={item.productStock <= item.productQuantity}
                    onClick={() => handleIncreaseProduct(item._id)}
                  >
                    <FaPlus />
                  </Button>
                </div>
                <Button
                  isIconOnly
                  variant='light'
                  color='danger'
                  onClick={() => handleDeleteProduct(item._id)}
                >
                  <FaRegTrashCan />
                </Button>
              </CardBody>
            ))}
        </Card>
        <Autocomplete
          label='Select Customer'
          placeholder='Search a customer'
          className='max-w-xs'
          onSelectionChange={onSelectionChangeCustomers}
          defaultItems={customers}
        >
          {(item) => (
            <AutocompleteItem key={item._id}>{item.customerName}</AutocompleteItem>
          )}
        </Autocomplete>
        <Input
          aria-level="Paid Amount"
          isRequired
          type="text"
          label="Paid Amount"
          variant="bordered"
          placeholder='Enter paid amount'
          className="max-w-xs text-default-900"
          defaultValue={paidAmount}
          value={paidAmount}
          onChange={(e)=>handlePaidAmount(e.target.value)}
        />
        <div>Total = {cart.totalPrice}</div>
        <div>Due = {dueAmount}</div>
      </div>
    </Card>
  );
};

export default OrderAddEdit;

