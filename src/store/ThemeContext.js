import {useState, createContext, useContext, useEffect, useReducer} from 'react'

  const ModalContext = createContext();
  const ModalToggleContext = createContext();
  const ThemeContext = createContext();
  const ThemeUpdateContext = createContext();
  const CategoryContext = createContext();
  const CategoryUpdateContext = createContext(); 
  const ItemsContext = createContext();
  const ItemsUpdateContext = createContext(); 
  const FilterContext = createContext();


  export function useTheme() {
  	return useContext(ThemeContext);
  }

  export function useThemeUpdate() {
  	return useContext(ThemeUpdateContext);
  }

  export function useModal() {
  	return useContext(ModalContext);
  }

  export function useModalToggle() {
  	return useContext(ModalToggleContext);
  }

  export function useCategory() {
  	return useContext(CategoryContext);
  }

  export function useCategoryUpdate() {
  	return useContext(CategoryUpdateContext);
  }

    export function useItems() {
  	return useContext(ItemsContext);
  }

  export function useItemsUpdate() {
  	return useContext(ItemsUpdateContext);
  }

  export function useFilter() {
    return useContext(FilterContext);
  }






  export function ThemeProvider({children}) {
  	const [category, setCategory] = useState(null);
  	const [theme, setTheme] = useState(false);
  	const [items, setItems] = useState(() => {
  		console.log("Getting items");
  		const localData = localStorage.getItem('ac-items');
  		return localData ? JSON.parse(localData) : []
  	});
  	const [modal, setModal] = useState(null);

    const [filter, setFilter] = useState({
      month: -1,
      time: -1,
      hemisphere: 'northern'
    });


  	const updateCategory = (e) => {
    	setCategory(e.target.id);
  	}

  	const toggleTheme = () => {
    	setTheme(prevTheme => !prevTheme)
  	}
  	const toggleModal = (name) => {
      if(name !== null){
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'visible'
      }
    	setModal(name);
  	}
  	const updateItems = (item) => {
      if(items.includes(item)){
      console.log("Remove");
      let newItems = [...items];
      const result = newItems.filter(arrItem => arrItem !== item);
      let uniq = [...new Set(result)];
      setItems(uniq);
      } else {
      let newItems = [...items];
      newItems.push(item);
      let uniq = [...new Set(newItems)];
      setItems(uniq);
    }
  	}


  	useEffect(() => {
  		localStorage.setItem('ac-items', JSON.stringify(items))
  	}, [items]);


  	return (
  		<ThemeContext.Provider value={theme}>
  		<ThemeUpdateContext.Provider value={toggleTheme}>
      <FilterContext.Provider value={{...filter, setFilter: (data) => setFilter({...filter, ...data})}}>
  		<ModalContext.Provider value={modal}>
  		<ModalToggleContext.Provider value={toggleModal}>
  		<ItemsContext.Provider value={items}>
  		<ItemsUpdateContext.Provider value={updateItems}>
  		<CategoryContext.Provider value={category}>
  		<CategoryUpdateContext.Provider value={updateCategory}>
  		{children}
  		</CategoryUpdateContext.Provider>
  		</CategoryContext.Provider>
  		</ItemsUpdateContext.Provider>
  		</ItemsContext.Provider>
  		</ModalToggleContext.Provider>
  		</ModalContext.Provider>
      </FilterContext.Provider>
  		</ThemeUpdateContext.Provider>
  		</ThemeContext.Provider>
  	)
  }