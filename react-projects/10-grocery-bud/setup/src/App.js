import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  }
  return [];
};

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      showAlert(true, "Please provide an item name!", "danger");
    } else if (item && isEditing) {
      setList(
        list.map((specItem) => {
          if (specItem.id === editId) {
            return { ...specItem, name: item };
          }
          return specItem;
        })
      );
      setItem("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "Item was edited.", "success");
    } else {
      showAlert(true, `${item} was added to your list.`, "success");
      const newItem = { id: new Date().getTime().toString(), name: item };
      setList([...list, newItem]);
      setItem("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "Items cleared.", "success");
  };

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    showAlert(true, "Item was removed from your list.", "danger");
  };

  const editItem = (id) => {
    const specItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setItem(specItem.name);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && (
          <Alert
            msg={alert.msg}
            type={alert.type}
            clearAlert={showAlert}
            list={list}
          />
        )}
        <h3>Grocery list</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. milk'
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
