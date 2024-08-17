import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { MdOutlineEdit ,MdDeleteOutline} from "react-icons/md";

export default function Products() {
  const mainHeight = useSelector((state) => state.app.mainHeight)
  const [products, setProducts] = useState([])
  const [imageData, setImageData] = useState([])
  const list = [
    {
      title: "Urban Edge",
      img: "https://img.freepik.com/free-vector/monocolor-midnight-madness-marathon-t-shirt-design_742173-5733.jpg?t=st=1723899310~exp=1723902910~hmac=7f839903171e15010f5f4f5c1e1673244b244c499af10809b21fdb2a747e46a5&w=740",
      price: "$5.50",
    },
    {
      title: "Casual Vibe",
      img: "https://img.freepik.com/free-vector/colorful-flat-rainbow-run-marathon-t-shirt_742173-14080.jpg?t=st=1723899470~exp=1723903070~hmac=b536c1444494faabead8f5ea6324bd6f375f28973a1759a089d8790962a508f8&w=740",
      price: "$3.00",
    },
    {
      title: "Sunset Dreams",
      img: "https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups_126278-122.jpg?w=740&t=st=1723899470~exp=1723900070~hmac=2be3f70b94e5b1105150646e3d67278c911d7b5b9bdae83d0ef03fadae155292",
      price: "$10.00",
    },
    {
      title: "Stellar Stripes",
      img: "https://img.freepik.com/free-vector/simple-monocolor-home-run-hero-baseball-t-shirt_742173-8050.jpg?t=st=1723898846~exp=1723902446~hmac=022d2712af8fe63a0e4f57e40922ed9ecec6784492d78f3977047669657fe838&w=740",
      price: "$5.30",
    },
    {
      title: "Mystic Wave",
      img: "https://img.freepik.com/free-vector/pattern-cool-valentine-s-day-hearts-t-shirt_742173-13369.jpg?t=st=1723899474~exp=1723903074~hmac=f5ad8cd7ea9031089aa2520eaf4046886626f1abbee2e5b1145bf2c22303c3d7&w=740",
      price: "$5.30",
    },
    {
      title: "Bold Horizon",
      img: "https://img.freepik.com/free-photo/front-blank-white-tshirt-with-hanger-design_1409-4412.jpg?t=st=1723899476~exp=1723903076~hmac=a89d2126bdb4b343f33256fe2bd2c4a711bc5aab8c479eeebceafc36d0080b72&w=740",
      price: "$15.70",
    },
    {
      title: "Chill Chic",
      img: "https://img.freepik.com/free-photo/tattooed-biker-hand-holds-hang-with-blank-black-t-shirt-from-premium-thin-cotton-isolated-white_346278-1809.jpg?t=st=1723899477~exp=1723903077~hmac=8ff97e16760cf43741574a07b11a0b000b6565458e03e78837f435ed87b5882d&w=740",
      price: "$8.00",
    },
    {
      title: "Vibrant Groove",
      img: "https://img.freepik.com/free-photo/black-t-shirt-is-hanging-hanger-with-word-dope-it_1340-38184.jpg?t=st=1723899454~exp=1723903054~hmac=1e142421b6d4c9782238aedd8a7a414d3e21c2abb5ee35233961ec7f33dd662e&w=740",
      price: "$7.50",
    },
    {
      title: "Coastal Breeze",
      img: "https://img.freepik.com/free-photo/opened-white-tshirt-design_1409-4419.jpg?t=st=1723899073~exp=1723902673~hmac=4888d1b6d3629cc3b1693a7e00f994cd32be69b2b75d63d7e932d437483b4aa7&w=740",
      price: "$7.50",
    },
    {
      title: "Electric Pulse",
      img: "https://img.freepik.com/free-photo/isolated-opened-white-t-shirt_125540-1452.jpg?t=st=1723899336~exp=1723902936~hmac=c23981cbcbffc4e3d02edfeca3bbda5282445ab7a30527e943dfbd676348e5cb&w=1060",
      price: "$12.20",
    },
    {
      title: "Retro Fusion",
      img: "https://img.freepik.com/free-vector/flat-monocolor-volleyball-vibes-t-shirt_742173-14077.jpg?t=st=1723899483~exp=1723903083~hmac=120f38e1aa5a4ffe51a26bd8b10277baca4f9014ccbe6062a5f1c7443c8e77e4&w=740",
      price: "$12.20",
    },
    {
      title: "Lunar Light",
      img: "https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups-04_126278-125.jpg?w=740&t=st=1723899484~exp=1723900084~hmac=c49b0e703e8ff130d535e9b7bf7afa64d26f4d4453e28b735bbce551667fe355",
      price: "$12.20",
    },
    // {
    //   title: "Street Savvy",
    //   img: "https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups_126278-123.jpg?w=740&t=st=1723899486~exp=1723900086~hmac=e4a849afa33cd30129e56ae481ce8bc6e77c02d1a42e64f72e4f02dbfa6ba200",
    //   price: "$12.20",
    // },
    // {
    //   title: "Tropical Twist",
    //   img: "https://img.freepik.com/free-vector/retro-duotone-supernova-strikers-baseball-t-shirt_742173-12151.jpg?t=st=1723899488~exp=1723903088~hmac=d8669c167b3bea5dbf303bf6e68caba55614a4fdb0ab0cc91ec50f896e5ed06d&w=740",
    //   price: "$12.20",
    // },
  ];

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        setImageData([...res.data])
      })
      .then(() => {
        list.map((obj, i) => obj.img = imageData[i]?.url)
        setProducts(list)
      })

  }, [])


  console.log("producs")

  return (
    <div style={{ height: mainHeight - 65 }} className="max-w-[900px] mx-auto overflow-auto">
      <div className="flex justify-end my-5">
        <Button className="mr-5">Add Product</Button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 pb-4">
        {list.map((item, index) => (
          <Card className="max-w-xs" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                // width="100%"
                alt={item.title}
                className="w-[200px] object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col gap-2">
              <div className="flex flex-row justify-between w-full">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </div>
              <div className="flex flex-row justify-between w-full">
                <Button isIconOnly variant="light" color="danger"><MdDeleteOutline size={20} /></Button>
                <Button isIconOnly variant="light" color="secondary"><MdOutlineEdit size={20} /></Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
