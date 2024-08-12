import { updateQuantity } from "./actions";
import {
  ADD_TO_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "./actionTypes";

const initialState = {
  items: [
    {
      id: 1,
      name: "Lenovo Monitor",
      description:
        "Lenovo Legion R25f-30 24.5 inch Monitor, Immerses you in your victories; • View your games in extremely sharp clarity on the large, 24.5-inch, VA panel with its FHD resolution; • Experience unparalleled smoothness in all your games on the 280Hz Legion R25f-30; • Stay a step ahead of the competition with ultra-responsive gameplay supported by 0.5ms MPRT response times; • Game without any stutter or motion blur thanks to AMD FreeSync™ Premium and the ClearMR 7000 certification; Powers high visual fidelity gaming; • The color of all your game visuals pops on the display with its 99% sRGB and 90% DCI-P3 color space coverage; • Lighting and shadows in your games look super realistic on the HDR-supported monitor",
      price: 10,
      quantity: 0,
      category: "Electronics",
      img: "/public/stateImages/electronics/LenovoMonitor.jpg",
    },
    {
      id: 2,
      name: "MSI Case",
      description:
        "MSI MAG FORGE 100R Mid-Tower Case (2x120mm ARGB + 1x12mm BLACK), Standard ATX 160 mm, max to 200 mm (without 3.5” HDD case installed) with Addressable RGB and Front: 2 x 120 mm addressable RGB LED Fan included Rear: 1 x 120mm System Fan included ",
      price: 20,
      quantity: 0,
      category: "Electronics",
      img: "/public/stateImages/electronics/msiCase.jpg",
    },
    {
      id: 3,
      name: "PS5 Controller",
      description:
        "Discover an even more intense and engaging gaming experience1 that brings the action in your hands to life,The dualsense wireless controller provides immersive haptic feedback, dynamic adaptive triggers,Take control with an advanced two tone design that combines an iconic, intuitive layout with improved sticks",
      price: 30,
      quantity: 0,
      category: "Electronics",
      img: "/public/stateImages/electronics/PS5controller.jpg",
    },
    {
      id: 4,
      name: "GIGABYTE GeForce RTX 4070",
      description:
        "    NVIDIA DLSS 3 support, Ultra-efficient Ada Lovelace architecture, Full ray tracing support, 4th Generation Tensor Cores: Up to 4X performance with DLSS 3 vs. brute-force rendering, 3rd Generation RT Cores: Up to 2X ray tracing performance, 16GB GDDR6X, 256-bit memory interface, WINDFORCE Cooling System, RGB Fusion",
      price: 40,
      quantity: 0,
      category: "Electronics",
      img: "/public/stateImages/electronics/rtx4070.jpg",
    },
    {
      id: 5,
      name: "Xbox Elite Wireless Controller",
      description:
        "Play like a pro with the world's best performing controller. The Xbox Elite Series 2 Wireless Controller in White gives you more than 30 ways to play like a pro thanks to the new adjustable tension sticks, new interchangeable components (sold separately), and rechargeable battery offering up to 40 hours of battery life and endless customization via the Xbox Accessories app. Compatible with all your devices: Xbox Series X|S, Xbox One X, Xbox One S, Xbox One, Windows 10|11 PC, Android and iOS.​",
      price: 50,
      quantity: 0,
      category: "Electronics",
      img: "/public/stateImages/electronics/seriesXcontroller.jpg",
    },
    {
      id: 6,
      name: "Trident Z Ram",
      description:
        "Trident Z RGB DDR4-2400 CL15-15-15-35 1.20V 16GB (2x8GB),Featuring the award-winning Trident Z heatspreader design, the Trident Z RGB memory series combines vivid RGB lighting with awesome DDR4 DRAM performance. ",
      price: 50,
      quantity: 0,
      category: "Electronics",
      img: "/public/stateImages/electronics/TridentZRam.jpg",
    },
    {
      id: 7,
      name: "Western Digital SSD",
      description:
        "For use in laptops and desktop PCs, WD Green SSDs provide high performance and reliability to enhance your daily computing activities. With WD F.I.T. Lab tested, and available in 2.5”/7mm casing or M.2 2280, WD Green SSDs are compatible with most computers. The free WD SSD Control Panel* lets you monitor your storage, and when combined with the 3-year limited warranty, upgrading your digital storage is worry-free.",
      price: 50,
      quantity: 0,
      category: "Electronics",
      img: "/public/stateImages/electronics/WesternDigitalSSD.png",
    },
    {
      id: 8,
      name: "Razer Black Shark V2 X",
      description:
        "Face the competition head-on with a lightweight esports headset that thrives under pressure. Introducing the Razer BlackShark V2 X—a triple threat of amazing audio, superior mic clarity and supreme sound isolation that’s approved by pros.",
      price: 50,
      quantity: 0,
      category: "Electronics",
      img: "/public/stateImages/electronics/RAZERBLACKSHARK.jpg",
    },
    {
      id: 9,
      name: "Red dragon M991 Gaming Mouse",
      description:
        "Face the competition head-on with a lightweight esports headset that thrives under pressure. Introducing the Razer BlackShark V2 X—a triple threat of amazing audio, superior mic clarity and supreme sound isolation that’s approved by pros.",
      price: 50,
      quantity: 0,
      category: "Electronics",
      img: "/public/stateImages/electronics/reddragonm991.jpg",
    },
    {
      id: 10,
      name: "MEN Black Jacket",
      price: 50,
      quantity: 0,
      category: "MEN'S WEAR",
      img: "/public/stateImages/Clothing/MenBlackJacket.jpg",
    },
    {
      id: 11,
      name: "MEN Brown Jacket",
      price: 50,
      quantity: 0,
      category: "MEN'S WEAR",
      img: "/public/stateImages/Clothing/MenLightBrownJacket.jpg",
    },
    {
      id: 12,
      name: "MEN Summer Shirt",
      price: 50,
      quantity: 0,
      category: "MEN'S WEAR",
      img: "/public/stateImages/Clothing/MenSummerShirt.jpg",
    },
    {
      id: 13,
      name: "MEN Summer Shirt Gray",
      price: 50,
      quantity: 0,
      category: "MEN'S WEAR",
      img: "/public/stateImages/Clothing/MenSummerShirtGray.jpg",
    },
    {
      id: 14,
      name: "Women Black Shirt",
      price: 50,
      quantity: 0,
      category: "WOMEN'S WEAR",
      img: "/public/stateImages/Clothing/WomenBlackShirt.jpg",
    },
    {
      id: 15,
      name: "Women Brown Jacket",
      price: 50,
      quantity: 0,
      category: "WOMEN'S WEAR",
      img: "/public/stateImages/Clothing/WomenBrownJacket.jpg",
    },
    {
      id: 16,
      name: "Women Hoddie",
      price: 50,
      quantity: 0,
      category: "WOMEN'S WEAR",
      img: "/public/stateImages/Clothing/WomenHoddie.jpg",
    },
    {
      id: 17,
      name: "Women Short Jacket",
      price: 50,
      quantity: 0,
      category: "WOMEN'S WEAR",
      img: "/public/stateImages/Clothing/WomenShortJacket.jpg",
    },
  ],
  cart: [],
  cartNumbers: "",
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const currentItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      const newCart = currentItem
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        : [...state.cart, action.payload];

      // Calculate total quantity
      const totalQuantity = newCart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      return {
        ...state,
        cart: newCart,
        cartNumbers: totalQuantity,
      };

    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );

      // Calculate total quantity
      const updatedQuantity = updatedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      return {
        ...state,
        cart: updatedCart,
        cartNumbers: updatedQuantity,
      };

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: [],
        cartNumbers: "",
      };

    case UPDATE_QUANTITY:
      const modifiedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      // Calculate total quantity
      const newQuantity = modifiedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      return {
        ...state,
        cart: modifiedCart,
        cartNumbers: newQuantity,
      };

    default:
      return state;
  }
};

export default shopReducer;
