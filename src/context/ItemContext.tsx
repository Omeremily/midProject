import { createContext, useState } from "react";
import { StoreItemProps } from "../types/storeTypes";

export const ItemContext = createContext({});

export default function ItemContextProvider({ children }: { children: React.ReactNode }) {


    //רשימת המוצרים בחנות
    
    const [items, setItems] = useState<StoreItemProps[]>([
        {
            "id": 1,
            "name": "Vita JYM Sports Multivitamin",
            "shortDescription": "Multivitamin",
            "longDescription": "Vita JYM Sports Multivitamin & Mineral Support, Vitamin A, C, B6, B12, E, K, Boron, Biotin, Potassium | JYM Supplement Science | 60 Tablets",
            "minimum": 1,
            "maximum": 10,
            "imgUrl": '/public/imgs/cart-items/item1.jpg',
            "price": 259.99,
            "salePrice": 250,    
        },
        {
            "id": 2,
            "name": "3 Color Bottles Pack",
            "shortDescription": "Fitness accessories",
            "longDescription": "3 Color Pack(Black,White,Pink)w.Scale 12oz & 400ml for Protein Shake Drink Mix,BPA Free,Classic Loop,Dishwasher Safe,Easy to Clean,Leak Resistance,Whisk...",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 59.99,
            "price": 75,
            "imgUrl": "/public/imgs/cart-items/item2.jpg"
        },
        {
            "id": 3,
            "name": "Sparkling Energy Drink",
            "shortDescription": "Drinks",
            "longDescription": "Optimum Nutrition Amino Energy Sparkling Hydration Drink, Electrolytes, Caffeine, Amino Acids, BCAAs, Sugar Free, Juicy Strawberry, 12 Fl Oz, 12 Pack (Packaging May Vary)",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 70,
            "imgUrl": "/public/imgs/cart-items/item3.jpg"

        },
        {   
            "id": 4,
            "name": "Whey Protein Powder",
            "shortDescription": "Protein Powders",
            "longDescription": "Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 199.99,
            "price": 220,
            "imgUrl": "/public/imgs/cart-items/item4.jpg"
        },
        {
            "id": 5,
            "name": "BLESSED Protein Powder",
            "shortDescription": "Protein Powder",
            "longDescription": "Plant Based Protein Shake Meal Replacement Powder - 23g of Pea Protein Powder for Women & Men, Dairy Free, Gluten Free, No Sugar Added, 30 Servings (Pumpkin Spice)",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 220,
            "price": 220,
            "imgUrl": "/public/imgs/cart-items/item5.jpg"
        },
        {   
            "id": 6,
            "name": "FIORETTO Gym Tote Bag",
            "shortDescription": "Bags",
            "longDescription": "FIORETTO Gym Tote Bag Duffle Bag with Separated Shoes Compartment & Wet Pocket, Gray color, Travel Bag Weekend Overnight Bags, Water-Resistant Carry On Bag",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 160,
            "price": 180,
            "imgUrl": "/public/imgs/cart-items/item6.jpg"
        },
        {
            "id": 7,
            "name": "Folding home treadmill",
            "shortDescription": "Fitness equipment",
            "longDescription": "Electric treadmill for beginners Zoom1 which includes a shock absorbing surface and 4 air shock absorbers.<br>Engine: 6.5 hp at peak. Speed: up to 14 km/h. Inclination: mechanical 3 positions.",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 10000,
            "price": 12000,
            "imgUrl": "/public/imgs/cart-items/item7.jpg"
        },
        {
            "id": 8,
            "name": "Adjustable Weight Bench",
            "shortDescription": "Fitness Equipment",
            "longDescription": "Adjustable Weight Bench, Foldable Workout Bench for Full Body Exercise, Multi-Purpose Incline Decline Bench for Home Gym Strength Training - 550 lbs Capacity",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 349,
            "price": 427,
            "imgUrl": "/public/imgs/cart-items/item8.jpg"
        },
        {
            "id": 9,
            "name": "Stationary Exercise Bike",
            "shortDescription": "Fitness Equipment",
            "longDescription": "Stationary Exercise Bike with Magnetic Resistance, Quiet Indoor Cycling Bike with Comfortable Seat Cushion, LCD Monitor, Tablet Holder, for Home Cardio Workout",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 599.99,
            "price": 750,
            "imgUrl": "/public/imgs/cart-items/item9.jpg"
        },
        {
            "id": 10,
            "name": "TRX® Suspension Training",
            "shortDescription": "Fitness Equipment",
            "longDescription": "Suspension Trainer Kit, Home Gym Training Straps, Workout Straps with Door Anchor, Extension Strap, Handles and Carry Bag, Full Body Resistance Exercise for Indoor and Outdoor",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 119.99,
            "price": 150,
            "imgUrl": "/public/imgs/cart-items/item10.jpg"
        },
        {
            "id": 11,
            "name": "Sports Duffle Bag",
            "shortDescription": "Duffle Bag",
            "longDescription": "Sports Duffle Bag with Shoes Compartment and Wet Pocket, 42L Waterproof Gym Bag for Men and Women, Durable Travel Duffel Bag with Shoulder Strap and Combination Lock",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 135,
            "price": 150,
            "imgUrl": "/public/imgs/cart-items/item11.jpg"
        },
        {
            "id": 12,
            "name": "FORICH Cooler Backpack",
            "shortDescription": "Cooler Backpack",
            "longDescription": "FORICH Insulated Cooler Backpack Lightweight Soft Cooler Bag Leakproof Backpack Cooler for Men Women to Lunch Work Picnic Beach Camping Hiking Park Day Trips, 30 Cans",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 80,
            "price": 80,
            "imgUrl": "/public/imgs/cart-items/item12.jpg"
        }        
 ]);
    

    //רשימת מוצרים במבצע בדף הראשי
    const [saleItems, setSaleItems] = useState<StoreItemProps[]>([
        {
            "id": 1,
            "name": "Vita JYM Sports Multivitamin",
            "shortDescription": "Multivitamin",
            "longDescription": "Vita JYM Sports Multivitamin & Mineral Support, Vitamin A, C, B6, B12, E, K, Boron, Biotin, Potassium | JYM Supplement Science | 60 Tablets",
            "minimum": 1,
            "maximum": 10,
            "imgUrl": '/public/imgs/cart-items/item1.jpg',
            "price": 259.99,
            "salePrice": 250,    
        },
        {
            "id": 2,
            "name": "3 Color Bottles Pack",
            "shortDescription": "Fitness accessories",
            "longDescription": "3 Color Pack(Black,White,Pink)w.Scale 12oz & 400ml for Protein Shake Drink Mix,BPA Free,Classic Loop,Dishwasher Safe,Easy to Clean,Leak Resistance,Whisk...",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 59.99,
            "price": 75,
            "imgUrl": "/public/imgs/cart-items/item2.jpg"
        },
        {
            "id": 3,
            "name": "Sparkling Energy Drink",
            "shortDescription": "Drinks",
            "longDescription": "Optimum Nutrition Amino Energy Sparkling Hydration Drink, Electrolytes, Caffeine, Amino Acids, BCAAs, Sugar Free, Juicy Strawberry, 12 Fl Oz, 12 Pack (Packaging May Vary)",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 50,
            "price": 70,
            "imgUrl": "/public/imgs/cart-items/item3.jpg"

        },
        {   
            "id": 4,
            "name": "Whey Protein Powder",
            "shortDescription": "Protein Powders",
            "longDescription": "Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 199.99,
            "price": 220,
            "imgUrl": "/public/imgs/cart-items/item4.jpg"
        },
        {
            "id": 5,
            "name": "BLESSED Protein Powder",
            "shortDescription": "Protein Powder",
            "longDescription": "Plant Based Protein Shake Meal Replacement Powder - 23g of Pea Protein Powder for Women & Men, Dairy Free, Gluten Free, No Sugar Added, 30 Servings (Pumpkin Spice)",
            "minimum": 1,
            "maximum": 10,
            "salePrice": 220,
            "price": 220,
            "imgUrl": "/public/imgs/cart-items/item5.jpg"
        }
    ]);

    function AddItemToStore(item:StoreItemProps) {
        setItems([...items, item]);
        localStorage.setItem("items", JSON.stringify([...items, item]));
    }

    function EditItem(id:number, item:StoreItemProps) {
        setItems(items.map((i) => i.id === id ? item : i));
        localStorage.setItem("items", JSON.stringify(items.map((i) => i.id === id ? item : i)));
    }

    // function DeleteProduct(id:number) {
    //     setItems(items.filter((item) => item.id !== id));
    //     localStorage.setItem("items", JSON.stringify(items.filter((item) => item.id !== id)));
    // }

    //  function UpdateProduct(id:number, item:StoreItemProps) {
    //     setItems(items.map((i) => i.id === id ? item : i));
    //     localStorage.setItem("items", JSON.stringify(items.map((i) => i.id === id ? item : i)));
    // }

    const value ={
        items,
        setItems,
        saleItems,
        setSaleItems,
        AddItemToStore,
        EditItem
    }

    return (
        <ItemContext.Provider value={value as any}>
            {children}
        </ItemContext.Provider>
    );
}