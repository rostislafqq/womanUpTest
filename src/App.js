import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import './style.less';
import ToDoItem from './components/toDoItem';
import ToDoInputs from './components/toDoInputs';

function App() {
  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');
  const [date, setDate] = useState('');
  const [toDos, setToDos] = useState([]);

  /**
   * чтение файла
   *
   */
  const uploadFile = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setBodyInput(reader.result);
      setTitleInput(reader.result);
    };
  };
  /**
   * отправляем состояние bodu инпута в фаербейс
   */
  const submitValue = () => {
    if (bodyInput.length > 0 && date.length > 0) {
      addDoc(collection(db, 'testToDo'), {
        title: titleInput,
        body: bodyInput,
        date,
        complited: false,
      });
      setTitleInput('');
      setBodyInput('');
    } else {
      alert('что-то не заполнено!');
    }
  };
  /**
   * удаляем нужный пункт(по id) .
   * @param {string} id
   */

  const deleteItem = (id) => {
    deleteDoc(doc(db, 'testToDo', id));
  };

  /**
   * обновляем пункт(по id)
   * @param {string} bodyInput
   * @param {string} id
   */
  const updateItem = (titleInput, bodyInput, id) => {
    updateDoc(doc(db, 'testToDo', id), { body: bodyInput, title: titleInput });
  };

  /**
   * переключатель !complited
   * @param {boolean} complited
   * @param {string} id
   */
  const complite = (complited, id) => {
    updateDoc(doc(db, 'testToDo', id), { complited: !complited });
  };
  useEffect(() => {
    const q = query(collection(db, 'testToDo'));
    /**
     * принимаем все из фаербейса в toDos
     */
    const getToDos = onSnapshot(q, (QuerySnapshot) => {
      let toDo = [];
      QuerySnapshot.forEach((val) => {
        toDo.push({ ...val.data(), id: val.id });
      });
      setToDos(toDo);
    });
    return () => getToDos();
  }, []);

  return (
    <>
      <ToDoInputs
        setTitleInput={setTitleInput}
        titleInput={titleInput}
        setBodyInput={setBodyInput}
        bodyInput={bodyInput}
        uploadFile={uploadFile}
        date={date}
        setDate={setDate}
        submitValue={submitValue}
      />
      {toDos.map((v) => (
        <ToDoItem
          key={v.id}
          bodyInput={v.body}
          complited={v.complited}
          id={v.id}
          date={v.date}
          deleteItem={deleteItem}
          updateItem={updateItem}
          complite={complite}
          titleInput={v.title}
        />
      ))}
    </>
  );
}

export default App;
