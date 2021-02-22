import update from 'immutability-helper';

const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
      selected: false,
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
      selected: false,
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegitable',
      deliveryMethod: 'Ground',
      selected: false,
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
      selected: false,
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: '',
  },
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload, selected } = action;

  switch (type) {
    case ADD_ITEM:
      return update(state, {
        list: { $push: [payload] },
      });

    case REMOVE_ITEM:
      // Write a custom reducer that will remove an item from the list array
      let updatedList = state.list.filter(obj => obj.id !== payload)
      return {
        ...state,
        list: updatedList,
      };
      
    case SELECT_ITEM:
      // Write a custom reducer that will select an item
      const objIndex = state.list.findIndex((obj => obj.id == payload));
      const changeList = [...state.list]
      changeList[objIndex].selected = selected
      return {
        ...state,
        list: changeList,
      };

    case DESELECT_ITEM:
      // Write a customer reducer that will deselect an item
      return state;

    default:
      return state;
  }
};

// Action Creators
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const selectItem = (item, value) => ({
  type: SELECT_ITEM,
  payload: item,
  selected: value
});
