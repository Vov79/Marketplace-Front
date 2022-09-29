import React, { createContext } from "react";


export const data = createContext();
const products = [
    {
      id: 1,
      title: "Iphone XR",
      category: "phone",
      price: 700,
      brand: "apple",
      img: "https://darwin.md/images/product/2022/01/darwin-apple-xr-3-gb-128-gb-coral-09.webp"
    },
    {
      id: 2,
      title: "Realme 8i",
      category: "phone",
      price: 350,
      brand: "realme",
      img: "https://darwin.md/images/product/2021/11/darwin-realme-8i-4-gb-128-gb-black-094.webp"
    },
    {
      id: 3,
      title: "Samsung Galaxy A53",
      category: "phone",
      price: 370,
      brand: "samsung",
      img: "https://darwin.md/images/product/2022/03/darwin-samsung-a53-8-gb-256-gb-black-029.webp"
    },
    {
      id: 4,
      title: "Realme GT 2 Pro",
      category: "phone",
      price: 750,
      brand: "realme",
      img: "https://darwin.md/images/product/2022/03/darwin-realme-gt-2-pro-12-gb-256-gb-black-078.webp"
    },
    {
      id: 5,
      title: "Huawei Nova 8i",
      category: "phone",
      price: 200,
      brand: "huawei",
      img: "https://darwin.md/images/product/2021/12/darwin-huawei-nova-8i-6-gb-128-gb-black-069.webp"
    },
    {
      id: 6,
      title: "Huawei P50 Poket",
      category: "phone",
      price: 900,
      brand: "huawei",
      img: "https://darwin.md/images/product/2022/06/darwin-huawei-p50-poket-8-gb-256-gb-white-086.webp"
    },
    {
      id: 7,
      title: "Iphone 13 pro",
      category: "phone",
      price: 1200,
      brand: "apple",
      img: "https://darwin.md/images/product/2022/03/darwin-apple-iphone-13-pro-6-gb-256-gb-green-089.webp"
    },
    {
      id: 8,
      title: "Iphone SE 2020",
      category: "phone",
      price: 710,
      brand: "apple",
      img: "https://darwin.md/images/product/2020/11/apple_iphone_se_2020_white1_1.webp"
    },
    {
      id: 9,
      title: "Iphone SE 2020",
      category: "phone",
      price: 720,
      brand: "apple",
      img: "https://darwin.md/images/product/2020/11/apple_iphone_se_2020_black1d-201113115346-darwin.webp"
    },
    {
      id: 10,
      title: "Iphone se 2022",
      category: "phone",
      price: 600,
      brand: "apple",
      img: "https://darwin.md/images/product/2020/11/apple_iphone_se_2020_red1_1.webp"
    },
    {
      id: 11,
      title: "Iphone 13 Pro Max",
      category: "phone",
      price: 1300,
      brand: "apple",
      img: "https://darwin.md/images/product/2021/09/darwin-apple-iphone-13-pro-max-8-gb-128-gb-blue-050.webp"
    },
    {
      id: 12,
      title: "Iphone 13 Pro Max",
      category: "phone",
      price: 1800,
      brand: "apple",
      img: "https://darwin.md/images/product/2021/09/darwin-apple-iphone-13-pro-max-8-gb-128-gb-gold-036.webp"
    },
    {
      id: 13,
      title: "Iphone 13",
      category: "phone",
      price: 780,
      brand: "apple",
      img: "https://darwin.md/images/product/2021/09/darwin-apple-iphone-13-6-gb-128-gb-pink-042.webp"
    },
    {
      id: 14,
      title: "Iphone 13",
      category: "phone",
      price: 790,
      brand: "apple",
      img: "https://darwin.md/images/product/2021/09/darwin-apple-iphone-13-128-gb-blue-048.webp"
    },
    {
      id: 15,
      title: "Samsung Galaxy M23",
      category: "phone",
      price: 290,
      brand: "samsung",
      img: "https://darwin.md/images/product/2022/07/darwin-samsung-galaxy-m23-4-gb-64-gb-light-blue-068.webp"
    },
    {
      id: 16,
      title: "Samsung Galaxy A73",
      category: "phone",
      price: 635,
      brand: "samsung",
      img: "https://darwin.md/images/product/2022/03/darwin-samsung-galaxy-a73-8-gb-256-gb-gray-031.webp"
    },
    {
      id: 17,
      title: "Samsung Galaxy A13",
      category: "phone",
      price: 240,
      brand: "samsung",
      img: "https://darwin.md/images/product/2022/05/darwin-samsung-galaxy-a13-4-gb-128-gb-white-025.webp"
    },
    {
      id: 18,
      title: "Samsung Galaxy A23",
      category: "phone",
      price: 345,
      brand: "samsung",
      img: "https://darwin.md/images/product/2022/04/darwin-samsung-galaxy-a23-4-gb-64-gb-orange-048.webp"
    },
    {
      id: 19,
      title: "Samsung Galaxy S22 Ultra",
      category: "phone",
      price: 1750,
      brand: "samsung",
      img: "https://darwin.md/images/product/2022/06/darwin-samsung-galaxy-s22-ultra-12-gb-256-gb-black-051.webp"
    },
    {
      id: 20,
      title: "Samsung Galaxy S22 Ultra",
      category: "phone",
      price: 1550,
      brand: "samsung",
      img: "https://darwin.md/images/product/2022/06/darwin-samsung-galaxy-s22-ultra-12-gb-256-gb-burgundy-018.webp"
    },
    {
      id: 21,
      title: "Samsung Galaxy S22+",
      category: "phone",
      price: 1150,
      brand: "samsung",
      img: "https://darwin.md/images/product/2022/02/darwin-samsung-galaxy-s22-8-gb-128-gb-pink-055.webp"
    },
    {
      id: 22,
      title: "Samsung Galaxy S22+",
      category: "phone",
      price: 1250,
      brand: "samsung",
      img: "https://darwin.md/images/product/2022/02/darwin-samsung-galaxy-s22-8-gb-128-gb-white-075.webp"
    },
    {
      id: 23,
      title: "Realme GT2 Pro",
      category: "phone",
      price: 610,
      brand: "realme",
      img: "https://darwin.md/images/product/2022/03/darwin-realme-gt-2-12-gb-256-gb-white-09.webp"
    },
    {
      id: 24,
      title: "HRealme GT 5G Master",
      category: "phone",
      price: 475,
      brand: "realme",
      img: "https://darwin.md/images/product/2021/09/darwin-realme-gt-5g-master-edition-6-gb-128-gb-black-065.webp"
    },
    {
      id: 25,
      title: "Realme C35",
      category: "phone",
      price: 225,
      brand: "realme",
      img: "https://darwin.md/images/product/2022/04/darwin-realme-c35-4-gb-64-gb-green-057.webp"
    },
    {
      id: 26,
      title: "Realme 9",
      category: "phone",
      price: 330,
      brand: "realme",
      img: "https://darwin.md/images/product/2022/03/darwin-realme-9-pro-8-gb-128-gb-black-051.webp"
    },
    {
      id: 27,
      title: "Realme C31",
      category: "phone",
      price: 170,
      brand: "realme",
      img: "https://darwin.md/images/product/2022/04/darwin-realme-c31-4-gb-64-gb-green-074.webp"
    },
    {
      id: 28,
      title: "Realme 9 Pro Plus",
      category: "phone",
      price: 440,
      brand: "realme",
      img: "https://darwin.md/images/product/2022/03/darwin-realme-9-pro-8-gb-128-gb-green-040.webp"
    },
    {
      id: 29,
      title: "Realme 9 Pro",
      category: "phone",
      price: 380,
      brand: "realme",
      img: "https://darwin.md/images/product/2022/05/darwin-realme-9-8-gb-128-gb-black-090.webp"
    },
    {
      id: 30,
      title: "Realme GT Neo",
      category: "phone",
      price: 550,
      brand: "realme",
      img: "https://darwin.md/images/product/2021/12/darwin-realme-gt-neo-2-12-gb-256-gb-blue-079.webp"
    }, 
    {
      id: 32,
      title: "Huawei P50 Pro",
      category: "phone",
      price: 1125,
      brand: "huawei",
      img: "https://darwin.md/images/product/2022/05/darwin-huawei-p50-pro-8-gb-256-gb-gold-045.webp"
    },
    {
      id: 33,
      title: "Huawei Nova 9",
      category: "phone",
      price: 560,
      brand: "huawei",
      img: "https://darwin.md/images/product/2022/07/darwin-huawei-nova-9-8-gb-128-gb-blue-029.webp"
    },
    {
      id: 34,
      title: "Huawei Nova 8i",
      category: "phone",
      price: 345,
      brand: "huawei",
      img: "https://darwin.md/images/product/2021/12/darwin-huawei-nova-8i-6-gb-128-gb-black-069.webp"
    },
    {
      id: 35,
      title: "Xiaomi Black Shark 5",
      category: "phone",
      price: 660,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/06/darwin-xiaomi-black-shark-5-12-gb-256-gb-black-022.webp"
    },
    {
      id: 36,
      title: "Xiaomi Black Shark 5 Pro",
      category: "phone",
      price: 670,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/07/darwin-xiaomi-black-shark-5-pro-12-gb-256-gb-stellar-black-031.webp"
    },
    {
      id: 37,
      title: "Xiaomi Redmi 10 2022",
      category: "phone",
      price: 210,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/07/darwin-xiaomi-redmi-10-2022-4-gb-64-gb-gray-089.webp"
    },
    {
      id: 38,
      title: "Xiaomi Redmi Note 11S",
      category: "phone",
      price: 345,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/04/darwin-xiaomi-redmi-note-11s-6-gb-128-gb-white-061.webp"
    },
    {
      id: 39,
      title: "Xiaomi Redmi 9C",
      category: "phone",
      price: 150,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/04/darwin-xiaomi-redmi-9c-2-gb-32-gb-gray-047.webp"
    },
    {
      id: 40,
      title: "Xiaomi 12 Lite",
      category: "phone",
      price: 470,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/07/darwin-xiaomi-12-lite-8-gb-256-gb-black-058.webp"
    },
    {
      id: 41,
      title: "Xiaomi Redmi 10A",
      category: "phone",
      price: 180,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/06/darwin-xiaomi-redmi-10a-4-gb-128-gb-gray-025.webp"
    },
    {
      id: 42,
      title: "Xiaomi Black Shark 4 Pro",
      category: "phone",
      price: 810,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/03/darwin-xiaomi-black-shark-4-pro-12-gb-256-gb-black-096.webp"
    },
    {
      id: 43,
      title: "Xiaomi 12X",
      category: "phone",
      price: 615,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/03/darwin-xiaomi-12x-8-gb-256-gb-purple-083.webp"
    },
    {
      id: 44,
      title: "Xiaomi 12X",
      category: "phone",
      price: 630,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2022/03/darwin-xiaomi-12x-8-gb-256-gb-blue-098.webp"
    },
    {
      id: 45,
      title: "Xiaomi 11T Pro",
      category: "phone",
      price: 565,
      brand: "xiaomi",
      img: "https://darwin.md/images/product/2021/09/darwin-xiaomi-11t-pro-8-gb-128-gb-gray-023.webp"
    }
  ];
export default function Context({children}){


    return(
    <data.Provider value={products}>
        {children}
    </data.Provider>
    );

}