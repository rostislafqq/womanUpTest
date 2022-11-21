import { useEffect, useState } from 'react';
import s from './toDoItem.module.less';
import dayjs from 'dayjs';
const ToDoItem = ({
  titleInput,
  bodyInput,
  date,
  deleteItem,
  updateItem,
  id,
  complited,
  complite,
}) => {
  const [bodyNew, setBody] = useState(bodyInput);
  const [titlenew, setTitleNew] = useState(titleInput);
  const time = dayjs(date);
  const timeNow = dayjs();
  const [timeEnd, setTimeEnd] = useState(null);
  //проверка на дедлайн
  useEffect(() => {
    if (time.isBefore(timeNow)) {
      setTimeEnd(true);
    }
  });

  return (
    <div className={timeEnd ? s.broken : s.wrapper}>
      <div className={s.inputs}>
        <div className={s.title}>
          <h3>заголовок:</h3>
          <input
            value={titlenew}
            onChange={(e) => {
              setTitleNew(e.target.value);
            }}
          />
        </div>
        <div className={s.body}>
          <h3>описание:</h3>
          <input
            value={bodyNew}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={s.buttons}>
        <span>
          {timeEnd ? 'время вышло 🤔 ' : 'дэдлайн '}: {date}
        </span>

        <button
          className={s.update}
          onClick={() => {
            updateItem(titlenew, bodyNew, id);
          }}>
          🖊️
        </button>
        <button
          className={complited ? s.complite__active : s.complite}
          onClick={() => {
            complite(complited, id);
          }}>
          ✔️
        </button>
        <button
          className={s.delite}
          onClick={() => {
            deleteItem(id);
          }}>
          ❌
        </button>
      </div>
    </div>
  );
};
export default ToDoItem;
