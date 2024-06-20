import pork from "../assets/categories/pork.png";
import pasta from "../assets/categories/pasta.png";
import seafood from "../assets/categories/seafood.png";
import beef from "../assets/categories/beef.png";
import chicken from "../assets/categories/chicken.png";
import dessert from "../assets/categories/dessert.png";
import breakfast from "../assets/categories/breakfast.png";
import lamb from "../assets/categories/lamb.png";
import vegetarian from "../assets/categories/vegetarian.png";

import clock from "../assets/icon/clock.svg";
import phone from "../assets/icon/phone.svg";
import marker from "../assets/icon/marker.svg";

export const categories = [
  { categoryimg: beef, category: "Beef" },
  { categoryimg: chicken, category: "Chicken" },
  { categoryimg: dessert, category: "Dessert" },
  { categoryimg: pork, category: "Pork" },
  { categoryimg: seafood, category: "Seafood" },
  { categoryimg: vegetarian, category: "Vegetarian" },
  { categoryimg: breakfast, category: "Breakfast" },
  { categoryimg: pasta, category: "Pasta" },
  { categoryimg: lamb, category: "Lamb" },
];

export const infoData = [
  {
    icon: clock,
    title: "opening hours",
    subTitle1: "Mon - Fri: 08:00 - 22:00",
    subTitle2: "Sat - Sun: 10:00 - 23:00",
  },
  {
    icon: phone,
    title: "phone",
    subTitle1: "01632****52",
  },
  {
    icon: marker,
    title: "location",
    subTitle1: "Dhaka, Bangladesh",
  },
];
