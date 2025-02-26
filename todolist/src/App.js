import './App.css';
import FormArea from './components/FormArea';
import ListArea from './components/ListArea';
import FilterArea from './components/FilterArea';
import { useState } from 'react';

function App() {
  let [data, setData] = useState([
    {
      content: "打扫卫生",
      createdAt: "2.7",
      finished: true,
    },
    {
      content: "整理换季衣物",
      createdAt: "2.9",
      finished: false,
    },
    {
      content: "学习JavaScript",
      createdAt: "2.10",
      finished: false,
    }
  ]);

  const [filterType, setFilterType] = useState(0);

  const deleteItem = (itemId) => {
    const newData = data.filter((_, id) => id !== itemId);
    setData(newData)
  };

  const addItem = (item) => {
    setData([...data, item]);
  };

  const finishItem = (itemId) => {
    const newData = data.map((item, id) => {
      if (id === itemId) {
        return {...item, finished: true}
      }
      return item;
    });
    setData(newData)
  }

  const setFilter = (type) => {
    setFilterType(type);
  };

  const filterData = data.filter((item) => {
    if (filterType === 0) {
      return true;
    } else if (filterType === 1) {
      return item.finished === false;
    } else if (filterType === 2) {
      return item.finished === true;
    }

    return true;
  });

  return (
    <div className="App">
      <header>
        <h1>ToDoList</h1>
      </header>
      <main>
        <FormArea addItem={addItem} />
        <ListArea list={filterData} deleteItem={deleteItem} finishItem={finishItem} />
        <FilterArea setFilter={setFilter} />
      </main>
    </div>
  );
}

export default App;
