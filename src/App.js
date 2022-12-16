import React, { useState, useEffect } from 'react'
import View from './components/View';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, daleteToDo, updateToDo, daleteAllToDo } from './redux/actions/index'

const getData = () => {
  const data = localStorage.getItem('prod');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const App = () => {

  const [list, setList] = useState(getData());
  const [isEditing, setIsEditing] = useState(false);
  const [currentProd, setCurrentProd] = useState({});

  const [note, setNote] = useState('');

  const dispatch = useDispatch()
  const lists = useSelector((state) => state.todoReducer.list)

  useEffect(() => {
    setList(lists)
  },[lists])

  const handleAddFoodSubmit = (e) => {
    e.preventDefault();

    let Data = {
      id: Math.floor((Math.random() * 1000)).toString(),
      createdOn: new Date().getTime().toString(),
      note,
      deleted: false,
    }
    dispatch(addToDo(Data))
    setNote('');
    }

  const handleEditClick = (prod) => {
    setIsEditing(true)
    setCurrentProd({...prod})
  }

  const handleEditFoodSubmit = (e) => {
    e.preventDefault();
    
    handleUpdatedProd(currentProd.id, currentProd)
  }
  
  const handleEditInputChange = (name) => (e) => {
    setCurrentProd((currentProd)=> ({
      ...currentProd,
      updatedOn: new Date().getTime().toString(),
      [name]: e.target.value,
    }))
  }

  const handleUpdatedProd = (id, currentProd) => {
    setIsEditing(false)
    dispatch(updateToDo(id, currentProd))
  }

  const deleteTodoList = (id) => {
    dispatch(daleteToDo(id))
  }

  return (
    <div className='wrapper'>
      <h1>ToDoList App</h1>

      <div className='view-container'>
        {list.length > 0 && <>
          <div className='table-responsive'>
            <table id="customers">
              <tbody>
                <View handleEditClick={handleEditClick} list={list} deleteTodoList={deleteTodoList} />
              </tbody>
            </table>
          </div>
          <button className='btn btn-danger btn-md'
            onClick={() => dispatch(daleteAllToDo())}>Remove All</button>
        </>}
        {list.length < 1 && <div>No data are added yet</div>}
      </div>

      <div className='main'>
        {isEditing ? (   
        <div className='form-container h-100'>
          <h3>Edit Data</h3>
          <form autoComplete="off" className='form-group'
              onSubmit={handleEditFoodSubmit}>
            <h4>Title</h4>
              <input type="text" className='form-control' required value={currentProd.note}
                onChange={handleEditInputChange('note')}></input>
            <br></br>
            <button type="submit" className='btn btn-success mb-2 btn-md'>
              UPDATE
              </button>
            <button onClick={() => setIsEditing(false)}  className='btn btn-success btn-md'>
              CANCLE
            </button>
          </form>
        </div>
        
        ) : (
            <div className='form-container h-100'>
            <h3>Add Data</h3>
          <form autoComplete="off" className='form-group'
            onSubmit={handleAddFoodSubmit}>
            <h4>Title</h4>
            <input type="text" className='form-control' required
                  onChange={(e) => setNote(e.target.value)} value={note}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
          </div>
        )}

      </div>
    </div>
  )
}

export default App
