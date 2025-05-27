import React from "react";
import FourColumnLayout from "../reusable/FourColumnLayout";
import Img1 from "../../../../../assets/linenLooks.avif"
import Img2 from "../../../../../assets/summerEssentials.avif"
import Img3 from "../../../../../assets/summertimePrep.avif"
import Img4 from "../../../../../assets/lightjacket.avif"
import Img5 from "../../../../../assets/denim.avif"
import Img6 from "../../../../../assets/holidayEdit.avif"
import Img7 from "../../../../../assets/dealnook.avif"
import Img8 from "../../../../../assets/adidas.avif"
import Img9 from "../../../../../assets/britisbrand.avif"
import Img10 from "../../../../../assets/thenorthface.avif"
import Img11 from "../../../../../assets/newlook.avif"


const newProducts = [
  { label: "View all", to: "/notfound" },
  { label: "Clothing", to: "/notfound" },
  { label: "Shoes", to: "/notfound" },
  { label: "New In: Today", bold: true, to: "/notfound" },
  { label: "New In: Selling Fast", bold: true, to: "/notfound" },
  { label: "T-Shirts & Vests", to: "/notfound" },
  { label: "Hoodies & Sweatshirts", to: "/notfound" },
  { label: "Jeans & Trousers", to: "/notfound" },
  { label: "Accessories", to: "/notfound" },
  { label: "Underwear", to: "/notfound" },
  { label: "Jumpers", to: "/notfound" },
];

const summer = [
  {
    imgSrc: Img1,
    label: "Linen Looks",
    to: "/notfound",
  },
  {
    imgSrc: Img2,
    label: "Summer Essentials",
    to: "/notfound",
  },
  {
    imgSrc: Img3,
    label: "Summertime Prep",
    to: "/notfound",
  },
  {
    imgSrc: Img4,
    label: "Light Jackets",
    to:"/notfound",
  },
  {
    imgSrc: Img5,
    label: "Denim",
    to: "/notfound",
  },
];

const brandDrops = [
  {
    imgSrc: Img7,
    label: "DEALNOOK DESIGN",
    to: "/notfound",
  },
  {
    imgSrc: Img8,
    label: "Adidas",
    to: "/notfound",
  },
  {
    imgSrc: Img9,
    label: "British Brands",
    to: "/notfound",
  },
  {
    imgSrc: Img9,
    label: "New Balance",
    to: "/notfound",
  },
  {
    imgSrc: Img10,
    label: "New Look",
    to: "/notfound",
  },
  {
    imgSrc: Img11,
    label: "The North Face",
    to: "/notfound",
  },
];

const newEdit = {
  imgSrc: Img6,
  label: "HOLIDAY EDIT",
  to: "/notfound",
};

function NewIn() {
  return (
    <FourColumnLayout
      newProducts={newProducts}
      summer={summer}
      brandDrops={brandDrops}
      newEdit={newEdit}
    />
  );
}

export default NewIn;

