// import React from 'react'
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'
// import { setListUpdate, setProductName, setProductPrice, setProductQuantity, setProductURL } from '../../pages/products/productsSlice'
// import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react'


// const ProductModal = ({ isOpen, modalType, onOpenChange }) => {
//   const dispatch = useDispatch()

//   const productName = useSelector((state) => state.product.productName)
//   const productPrice = useSelector((state) => state.product.productPrice)
//   const productURL = useSelector((state) => state.product.productURL)
//   const productQuantity = useSelector((state)=>state.product.productQuantity)
//   const product_Id = useSelector((state) => state.product.product_Id)


//   const handleProduct = async () => {
//     switch (modalType) {
//       case "add":
//         axios.post("/api/products", {
//           productName, productPrice, productURL,productQuantity
//         }).then((res) => {
//           console.log(res)
//           dispatch(setListUpdate())
//         })
//         return;
//       case "edit":
//         const updateProduct = { productName, productPrice, productURL }
//         const response = await axios.put(`/api/products/${product_Id}`, updateProduct)

//         console.log(response)
//         dispatch(setListUpdate())
//         return
//       default:
//         return;
//     }
//   }

//   return (
//     <div>
//       <Modal aria-label="Product Modal" isOpen={isOpen} onOpenChange={onOpenChange} className="bg-default-900 max-w-xs" >
//         <ModalContent>
//           {(onClose) => {
//             return (
//               <>
//                 <ModalHeader className="flex flex-col gap-1 text-default">Give you customer details</ModalHeader>
//                 <ModalBody className="flex justify-center">
//                   <div className='flex flex-col gap-5'>
//                     <Input
//                       aria-label="Product Name"
//                       isRequired
//                       type="text"
//                       label="Product Name"
//                       variant="bordered"
//                       placeholder='Enter product name'
//                       className="max-w-xs text-default"
//                       defaultValue={productName}
//                       value={productName}
//                       onChange={(e) => dispatch(setProductName(e.target.value))}
//                     />
//                     <Input
//                       aria-level="Product Price"
//                       isRequired
//                       type="text"
//                       label="Product Price"
//                       variant="bordered"
//                       placeholder='Enter product name'
//                       className="max-w-xs text-default"
//                       defaultValue={productPrice}
//                       value={productPrice}
//                       onChange={(e) => dispatch(setProductPrice(e.target.value))}
//                     />
//                     <Input
//                       aria-level="Product Quantity"
//                       isRequired
//                       type="text"
//                       label="Product Quantity"
//                       variant="bordered"
//                       placeholder='Enter product quantity'
//                       className="max-w-xs text-default"
//                       defaultValue={productQuantity}
//                       value={productQuantity}
//                       onChange={(e) => dispatch(setProductQuantity(e.target.value))}
//                     />
//                     <Textarea
//                       aria-label="Product URL"
//                       isRequired
//                       type="text"
//                       label="Product URL"
//                       variant="bordered"
//                       placeholder='Enter product URL'
//                       className="max-w-xs text-default"
//                       defaultValue={productURL}
//                       value={productURL}
//                       onChange={(e) => dispatch(setProductURL(e.target.value))}
//                     />
//                   </div>
//                 </ModalBody>
//                 <ModalFooter>
//                   <Button color="danger" variant="light" onPress={onClose}>
//                     Close
//                   </Button>
//                   <Button color="primary" onPress={onClose} onClick={() => handleProduct(modalType)}>
//                     Action
//                   </Button>
//                 </ModalFooter>
//               </>
//             )
//           }}
//         </ModalContent>
//       </Modal>
//     </div>
//   )
// }

// export default ProductModal