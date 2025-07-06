import {
  createSlice
} from '@reduxjs/toolkit';

// import cat1 from "./assets/categories/01.png";
// import cat2 from "./assets/categories/02.png";
// import cat3 from "./assets/categories/03.png";
// import cat4 from "./assets/categories/04.png";
// import cat5 from "./assets/categories/05.png";
// const photo = require(`../../uploads/images/${obj.photo}`).default;
// import { cat1, cat2, cat3, cat4, cat5 } from "./Components/StaticImage";

const initialState = {
    navItems: [
            {
                id: 1,
                name: "Jewelleries & Accessories"
            },
            {
                id: 2,
                name: "Clothing & Shoes"
            },
            {
                id: 3,
                name: "Home & Living"
            },
            {
                id: 4,
                name: "Wedding Party"
            },
            {
                id: 5,
                name: "Toys & Entertainment"
            },
            {
                id: 6,
                name: "Art & Collectables"
            },
            {
                id: 7,
                name: "Creaft Supplies & Tools"
            }
        ],
      categories: [
            {
                id: 1,
                // image: cat1
                image: require("./assets/categories/02.png").default
            },
            {
                id: 2,
                // image: cat2
                image: require("./assets/categories/02.png").default
            },
            {
                id: 3,
                // image: cat3
                image: require("./assets/categories/02.png").default
            },
            {
                id: 4,
                // image: cat4
                image: require("./assets/categories/02.png").default
            },
            {
                id: 5,
                // image: cat5
                image: require("./assets/categories/02.png").default
            }
        ]
  };
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeState: {
      reducer(state, action) {
        let { type } = action.payload
        switch (type) {
          default:
            return
        }
      },
    }
  }
});

export const { changeState } = todosSlice.actions

export default todosSlice.reducer
