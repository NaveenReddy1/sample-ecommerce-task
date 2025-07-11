import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './Reducer'

const store = configureStore({
  reducer: {
    todos: todosReducer
  },
})

export default store
