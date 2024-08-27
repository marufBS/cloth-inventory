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
import moment from 'moment'
import { setListUpdate } from '../orders/orderSlice';

const OrderProperties = () => {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([])
  const [paidAmount, setPaidAmount] = useState("")
  const [dueAmount, setDueAmount] = useState(0)
  const [cart, setCart] = useState({
    billNo: '',
    billDate: '',
    customerPhone: '',
    customerName: '',
    paidAmount: 0,
    dueAmount: 0,
    totalBill: 0,
    productList: [],
  });
  const dispatch = useDispatch();
  const orderActionType = useSelector(
    (state) => state.order.orderActionType
  );

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((res) => {
        if (res.data) {
          setProducts(res.data.filter((item) => item.productStock >= 0))
        }
      });

    axios.get('http://localhost:3000/api/customers').then((res) => {
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
        totalBill: updatedTotalPrice,
      };
    });

    setProducts(products.filter((item) => item._id !== id));
  };

  const onSelectionChangeCustomers = (id) => {
    const selectedCustomer = customers.find((item) => item._id === id)
    selectedCustomer.productId = selectedCustomer._id
    cart.customerId = selectedCustomer._id
    cart.customerName = selectedCustomer.customerName
    cart.customerPhone = selectedCustomer.customerPhone
    console.log(cart)
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
        totalBill: updateTotalPrice(filteredProductList),
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
        totalBill: updateTotalPrice(updatedProductList),
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
        totalBill: updateTotalPrice(updatedProductList),
      };
    });
  };

  const handlePaidAmount = () => {
    // setDueAmount(cart.totalBill - paidAmount)
    cart.dueAmount = paidAmount ? cart.totalBill - paidAmount : cart.totalBill
    cart.paidAmount = !paidAmount && 0
    console.log(cart)

  }

  const handlePlaceOrder = () => {
    handlePaidAmount()

    cart.productList.map((item) => delete item.productStock)
    console.log(cart)
    cart.billDate = moment().format('DD/MM/YY hh:mm:ss A')
    axios.post('http://localhost:3000/api/orders', {
      cart: cart
    })
      .then((res) => {
        console.log(res)
        setCart({
          billNo: '',
          billDate: '',
          customerPhone: '',
          customerName: '',
          paidAmount: '',
          dueAmount: '',
          totalBill: '',
          productList: [],
        });
        setPaidAmount("")
        dispatch(setListUpdate())
        console.log(products)
      })
  }

  return (
    <Card className='flex-1 rounded-none p-2'>
      <div className='text-center text-xl'>
        {orderActionType === 'edit' ? 'Update Order' : 'New Order'}
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
          onChange={(e) => setPaidAmount(e.target.value)}
        />
        <div>Total = {cart.totalBill}</div>
        <div>Due = {dueAmount}</div>
        <Button onPress={handlePlaceOrder} onClick={handlePlaceOrder}>Place Order</Button>
      </div>
    </Card>
  );
};

export default OrderProperties;

