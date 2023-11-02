let Data = [
    {
        id: "1",
        title: "Redmi Note 4",
        description: " Redmi Note 4 (Black, 64GB)",
        price: 1000,
        image: "https://m.media-amazon.com/images/I/81D3rG7FlsL._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://amzn.to/3s7lkLj",
        rating: "4.5"
    },
    {
        id: "2",
        title: "IQOO 9",
        description: "iQOO 9 5G (Alpha, 8GB RAM, 128GB Storage) | Qualcomm Snapdragon 888+ | 120W FlashCharge",
        price: 800,
        image: "https://m.media-amazon.com/images/I/51rdqH+GhgL._SL1200_.jpg",
        category: "SMARTPHONE",
        link: "https://bit.ly/45WWoUk",
        rating: "4"
    }, 
    {
        id: "3",
        title: "Vivo V27",
        description: "Vivo V27 5G (Noble Black, (128GB) (8GB RAM))",
        price: 900,
        image: "https://m.media-amazon.com/images/I/31KVYyRbWsL.jpg",
        category: "SMARTPHONE",
        link: "https://bit.ly/3FIwlWy",
        rating: "3.8"
    },
    {
        id: "4",
        title: "Asus Tuff F17",
        description: "ASUS TUF Gaming F17, Intel Core i5-11400H 11th Gen, 17.3-inch (43.94 cm) FHD 144Hz, Gaming Laptop (8GB/512GB SSD/4GB NVIDIA GeForce RTX 2050/Win 11/ RGB Backlit KB/Black/2.60 kg), FX706HF-HX018W",
        price: 1100,
        image: "https://m.media-amazon.com/images/I/71-Fx3Vfq5L._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/ASUS-i5-11400H-17-3-inch-GeForce-FX706HF-HX018W/dp/B0C27VNNWH/ref=sr_1_1_sspa?keywords=asus+tuf&qid=1698865496&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        rating: "4.4"
    },
    {
        id: "5",
        title: "Macbook air M1",
        description: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold",
        price: 1300,
        image: "https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5XSG8Z/ref=sr_1_1_sspa?crid=5TNZCXJUHUXQ&keywords=macbook+air&qid=1698864702&sprefix=macbook+air%2Caps%2C2993&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        rating: "4.1"
    },
    {
        id: "6",
        title: "Macbook pro 2020",
        description: "Apple 2020 MacBook Pro (13.3-inch/33.78 cm, M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey",
        price: 1200,
        image: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5VSQNG/ref=sr_1_4?crid=2YPDN7GO4O6N&keywords=macbook+pro&qid=1698864754&sprefix=macbook+ai%2Caps%2C1142&sr=8-4",
        rating: "4.7"
    },
    {
        id: "7",
        title: "iQOO Z7 Pro 5G",
        description: "iQOO Z7 Pro 5G (Graphite Matte, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor | 64MP Aura Light OIS Camera | Segment's Slimmest & Lightest Smartphone",
        price: 24999,
        image: "https://m.media-amazon.com/images/I/6196XqJjUZL._SL1200_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/iQOO-Graphite-MediaTek-Processor-Smartphone/dp/B07WFPLDPR/ref=sr_1_1_sspa?crid=ON9KXLAA60SB&keywords=smartphone&qid=1698915515&sprefix=smartphone%2Caps%2C416&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
        rating: "4.7"
    },
    {
        id: "8",
        title: "Samsung Galaxy M13",
        description: "Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
        price: 9228,
        image: "https://m.media-amazon.com/images/I/81fVPmkBsIL._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2TTTS/ref=sr_1_4?crid=ON9KXLAA60SB&keywords=smartphone&qid=1698915515&sprefix=smartphone%2Caps%2C416&sr=8-4&th=1",
        rating: "3.2"
    },
    {
        id: "9",
        title: "Lava Blaze 5G",
        description: "Lava Blaze 5G (Glass Green, 4GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | Upto 7GB Expandable RAM | Charger Included | Clean Android (No Bloatware)",
        price: 9499,
        image: "https://m.media-amazon.com/images/I/51EknP3PutL._SL1000_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/Lava-Blaze-5G-Green-Expandable/dp/B0BKJRHV2M/ref=sr_1_9?crid=ON9KXLAA60SB&keywords=smartphone&qid=1698915515&sprefix=smartphone%2Caps%2C416&sr=8-9&th=1",
        rating: "3.8"
    },
    {
        id: "10",
        title: "realme narzo N53",
        description: "realme narzo N53 (Feather Black, 8GB+128GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display",
        price: 11999,
        image: "https://m.media-amazon.com/images/I/71DSxfKzkJL._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/realme-Feather-Segment-Charging-Slimmest/dp/B0CKN56PQ8/ref=sr_1_13?crid=ON9KXLAA60SB&keywords=smartphone&qid=1698915515&sprefix=smartphone%2Caps%2C416&sr=8-13&th=1",
        rating: "4.1"
    },
    {
        id: "11",
        title: "Nokia G42 5G ",
        description: "Nokia G42 5G | Snapdragon® 480+ 5G | 50MP Triple AI Camera | 11GB RAM (6GB RAM + 5GB Virtual RAM) | 128GB Storage | 5000mAh Battery | 2 Years Android Upgrades | 20W Fast Charger Included | So Pink",
        price: 11999,
        image: "https://m.media-amazon.com/images/I/71lPcWlgL4L._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/Nokia-Snapdragon%C2%AE-Virtual-Upgrades-Included/dp/B0CHFBKXHP/ref=sr_1_15?crid=ON9KXLAA60SB&keywords=smartphone&qid=1698915515&sprefix=smartphone%2Caps%2C416&sr=8-15&th=1",
        rating: "4.4"
    },
    {
        id: "12",
        title: "Oppo A79 5G",
        description: "Oppo A79 5G (Glowing Green, 8GB RAM, 128GB Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger | 50MP AI Rear Camera",
        price: 19999,
        image: "https://m.media-amazon.com/images/I/81fNK5+o63L._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/Oppo-Glowing-SUPERVOOC-Additional-Exchange/dp/B0CL53RJML/ref=sr_1_16?crid=ON9KXLAA60SB&keywords=smartphone&qid=1698915515&sprefix=smartphone%2Caps%2C416&sr=8-16&th=1",
        rating: "3.4"
    },
    {
        id: "13",
        title: "Dell 15 Laptop",
        description: `Dell 15 Laptop, Intel Core i3-1115G4 Processor/8GB DDR4/512GB SSD/Intel UHD Graphics/15.6" (39.6cm) FHD 120Hz Refresh Rate 250 nits/Thin & Light 1.66kg/Win 11+MSO'21/15 Month McAfee/Carbon Black`,
        price: 34990,
        image: "https://m.media-amazon.com/images/I/715AMs200XL._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/Dell-i3-1115G4-Processor-Graphics-Refresh/dp/B0CCSPWCQY/ref=sr_1_1_sspa?keywords=laptop&qid=1698942749&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
        rating: "4.1"
    },
    {
        id: "14",
        title: "HP Laptop 15s",
        description: `Dell 15 Laptop, Intel Core i3-1115G4 Processor/8GB DDR4/512GB SSD/Intel UHD Graphics/15.6" (39.6cm) FHD 120Hz Refresh Rate 250 nits/Thin & Light 1.66kg`,
        price: 35990,
        image: "https://m.media-amazon.com/images/I/71fSS6dVWzL._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/HP-i3-1115G4-Micro-Edge-Anti-Glare-15s-fq2673TU/dp/B0B4N6JVMW/ref=sr_1_3?keywords=laptop&qid=1698942749&sr=8-3&th=1",
        rating: "4.6"
    },
    {
        id: "15",
        title: "Dell Vostro 3510 Laptop",
        description: `Dell Vostro 3510 Laptop, Intel i3-1115G4, 8GB/512GB SSD/15.6" (39.62cm) FHD, TÜV Rheinland Certified Comfortview Reduce Harmful Blue Light Emissions/Win 11 + MSO'21/15 Months McAfee/Dark Silver/1.69kg`,
        price: 35000,
        image: "https://m.media-amazon.com/images/I/71Lz10Ln2BL._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/Dell-i3-1115G4-Rheinland-Certified-Comfortview/dp/B09T5YYDH7/ref=sr_1_2_sspa?keywords=laptop&qid=1698942749&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        rating: "4.5"
    },
    {
        id: "16",
        title: "Acer Aspire Lite 11th Gen",
        description: `Acer Aspire Lite 11th Gen Intel Core i3 Premium Metal Laptop (8GB RAM/512GB SSD/Windows 11 Home) AL15-51, 39.62cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.59 Kg`,
        price: 28990,
        image: "https://m.media-amazon.com/images/I/617rprfdhRL._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/Acer-Premium-Windows-AL15-51-39-62cm/dp/B0C8P8G3WJ/ref=sr_1_4?keywords=laptop&qid=1698942749&sr=8-4&th=1",
        rating: "3.9"
    },
    {
        id: "17",
        title: "Chuwi HeroBook Pro",
        description: `Chuwi HeroBook Pro 14.1'' Laptop, 8GB RAM 256GB SSD, Windows 11 Laptop, 1TB SSD Expand, Intel Celeron N4020(up to 2.8GHz), FHD IPS Display, Ultra Slim, Mini-HDMI, USB3.0, Webcam,TF Card`,
        price: 18990,
        image: "https://m.media-amazon.com/images/I/61Iyy+2damL._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/Chuwi-HeroBook-Pro-Windows-Celeron/dp/B08316YSKH/ref=sr_1_11_sspa?keywords=laptop&qid=1698942749&sr=8-11-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1",
        rating: "3.5"
    },
    {
        id: "18",
        title: "MSI Gaming GF63 Thin",
        description: `MSI Gaming GF63 Thin, Intel Core i7-11800H, 40CM FHD 144Hz Gaming Laptop (8GB/512GB NVMe SSD/Windows 10 Home/Nvidia GTX1650 4GB GDDR6/ Black/1.86Kg), 11SC-852IN`,
        price: 54990,
        image: "https://m.media-amazon.com/images/I/61cgS33eaRL._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/MSI-i7-11800H-Windows-GTX1650-11SC-852IN/dp/B09YY3FVTB/ref=sr_1_12_sspa?keywords=laptop&qid=1698942749&sr=8-12-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1",
        rating: "4.2"
    },
    {
        id: "19",
        title: "Lenovo IdeaPad 3 11th",
        description: `[SmartChoice] Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6" FHD Thin & Light Laptop(8GB/512GB SSD/Windows 11/Office 2021/1Yr Warranty/3months Xbox Game Pass/Platinum Grey/1.7Kg)`,
        price: 32990,
        image: "https://m.media-amazon.com/images/I/61jyqpkeJQL._SL1080_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/Lenovo-IdeaPad-Warranty-Platinum-81X800LGIN/dp/B0B2RBP83P/ref=sxin_25_sbv_search_btf?content-id=amzn1.sym.10447c6b-3f84-4df3-b999-01a8bbbf010e%3Aamzn1.sym.10447c6b-3f84-4df3-b999-01a8bbbf010e&cv_ct_cx=laptop&keywords=laptop&pd_rd_i=B0B2RBP83P&pd_rd_r=ad0ab42a-d060-4bc0-8ee1-13886f8be1ef&pd_rd_w=LNjcG&pd_rd_wg=ozr6a&pf_rd_p=10447c6b-3f84-4df3-b999-01a8bbbf010e&pf_rd_r=CBDYHTRXQ7D90JBG27YK&qid=1698942749&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-b614a050-8d70-4320-9c19-cc457ab2a351&th=1",
        rating: "4.1"
    },
    {
        id: "20",
        title: "Lenovo ThinkPad A475",
        description: `(Refurbished) Lenovo ThinkPad A475 AMD PRO A12, 8 GB Ram, 256 GB SSD, Windows 10 Pro, 14 Inches FHD Display`,
        price: 16750,
        image: "https://m.media-amazon.com/images/I/518bmBdGwgL._SL1024_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/Refurbished-Lenovo-ThinkPad-Windows-Display/dp/B0CDCMB2ZR/ref=sr_1_14?keywords=laptop&qid=1698942749&sr=8-14",
        rating: "4.0"
    },
    {
        id: "21",
        title: "ASUS VivoBook 15 (2021)",
        description: `ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg)`,
        price: 22990,
        image: "https://m.media-amazon.com/images/I/71lYhcc++AL._SL1500_.jpg",
        category: "LAPTOP",
        link: "https://www.amazon.in/ASUS-15-6-inch-Integrated-Transparent-X515MA-BR011W/dp/B09SGGB687/ref=sr_1_18?keywords=laptop&qid=1698942749&sr=8-18&th=1",
        rating: "3.9"
    },
    {
        id: "22",
        title: "iQOO Neo 7 5G ",
        description: `iQOO Neo 7 5G (Frost Blue, 8GB RAM, 128GB Storage) | Dimensity 8200, only 4nm Processor in The Segment | 50% Charge in 10 mins | Motion Control & 90 FPS Gaming`,
        price: 27999,
        image: "https://m.media-amazon.com/images/I/61JS7lF2aqL._SL1200_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/iQOO-Storage-Dimensity-Processor-Segment/dp/B07WGPKNGT/ref=sr_1_32_sspa?keywords=smartphones&qid=1698945119&sr=8-32-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&th=1",
        rating: "4.6"
    },
    {
        id: "23",
        title: "Redmi 12C",
        description: `Redmi 12C (Lavender Purple, 4GB RAM, 64GB Storage) | High Performance Mediatek Helio G85 | Big 17cm(6.71) HD+ Display with 5000mAh(typ) Battery`,
        price: 6799,
        image: "https://m.media-amazon.com/images/I/81Zo3lcSZeL._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/Redmi-Lavender-Storage-Performance-Mediatek/dp/B0BYN5555J/ref=sr_1_33_sspa?keywords=smartphones&qid=1698945119&sr=8-33-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&th=1",
        rating: "3.8"
    },
    {
        id: "24",
        title: "realme narzo 60 5G",
        description: `realme narzo 60 5G (Mars Orange,8GB+256GB) | 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger`,
        price: 17749,
        image: "https://m.media-amazon.com/images/I/8195A49fZbL._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/realme-Display-Premium-Leather-SUPERVOOC/dp/B0C787P8BV/ref=sr_1_28?keywords=smartphones&qid=1698945119&sr=8-28&th=1",
        rating: "4.4"
    },
    {
        id: "25",
        title: "itel A60s",
        description: `itel A60s (4GB RAM + 64GB ROM, Up to 8GB RAM with Memory Fusion | 8MP AI Rear Camera | 5000mAh Battery with 10W Charging | Faceunlock & Fingerprint - Moonlit Violet`,
        price: 5999,
        image: "https://m.media-amazon.com/images/I/81L9MMAR+wL._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/itel-5000mAh-Charging-Faceunlock-Fingerprint/dp/B0C8W9727Z/ref=sr_1_47?keywords=smartphones&qid=1698945418&sr=8-47&th=1",
        rating: "3.2"
    },
    {
        id: "26",
        title: "vivo Y27",
        description: `vivo Y27 (Burgundy Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers`,
        price: 13999,
        image: "https://m.media-amazon.com/images/I/61e96Ni41BL._SL1200_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/Burgundy-Storage-Additional-Exchange-Offers/dp/B07WGPKTST/ref=sr_1_40?keywords=smartphones&qid=1698945418&sr=8-40&th=1",
        rating: "4.0"
    },
    {
        id: "27",
        title: "Motorola G84 5G",
        description: `Motorola G84 5G (Marshmallow Blue, 12GB RAM, 256GB Storage) | 50MP (OIS) | 16MP Front Camera | Snapdragon 695 Processor | Ultra Premium Vegan Leather Design | Unbelievable 5G Speeds with 14 5G Bands`,
        price: 22990,
        image: "https://m.media-amazon.com/images/I/71UzHfelApL._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/Motorola-Marshmallow-Snapdragon-Processor-Unbelievable/dp/B0CJQ76RF2/ref=sr_1_51?keywords=smartphones&qid=1698945418&sr=8-51&th=1",
        rating: "4.7"
    },
    {
        id: "28",
        title: "Redmi Note 12 5G",
        description: `Redmi Note 12 5G Matte Black 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera`,
        price: 17499,
        image: "https://m.media-amazon.com/images/I/81ZZPvIWnYL._SL1500_.jpg",
        category: "SMARTPHONE",
        link: "https://www.amazon.in/Redmi-AMOLED-Snapdragon%C2%AE-Triple-Camera/dp/B0BQ3MT8P2/ref=sr_1_54_sspa?keywords=smartphones&qid=1698945418&sr=8-54-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&th=1",
        rating: "4.1"
    },
]

export default Data
