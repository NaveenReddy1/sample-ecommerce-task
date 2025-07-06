import {
  createSlice
} from '@reduxjs/toolkit';

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
                image: "01.png"
            },
            {
                id: 2,
                image: "02.png"
            },
            {
                id: 3,
                image: "03.png"
            },
            {
                id: 4,
                image: "04.png"
            },
            {
                id: 5,
                image: "05.png"
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

export const { changeState } = filtersSlice.actions

export default todosSlice.reducer
