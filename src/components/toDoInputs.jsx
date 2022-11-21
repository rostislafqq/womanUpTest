import s from './toDoInputs.module.less';

const ToDoInputs = ({
  setTitleInput,
  titleInput,
  setBodyInput,
  bodyInput,
  uploadFile,
  date,
  setDate,
  submitValue,
}) => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>TODO</h1>
      <div className={s.inputContainer}>
        <span>Что сделать?</span>
        <input
          placeholder="title"
          type="text"
          onChange={(e) => {
            setTitleInput(e.target.value);
          }}
          value={titleInput}
        />
      </div>
      <div className={s.inputContainer}>
        <span>Опишите</span>
        <input
          placeholder="body"
          type="text"
          onChange={(e) => {
            setBodyInput(e.target.value);
          }}
          value={bodyInput}
        />
      </div>
      <div className={s.inputContainer}>
        <span>Или вставьте файл(.txt)</span>
        <input
          type="file"
          placeholder=""
          accept=".txt"
          onChange={(e) => {
            uploadFile(e);
          }}
        />
      </div>
      <div className={s.inputContainer}>
        <span>Когда я это сделаю?</span>
        <input
          value={date}
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <span>{date}</span>
      </div>
      <button
        className={s.button}
        onClick={() => {
          submitValue();
        }}>
        Я сделаю это! 😎
      </button>
    </div>
  );
};
export default ToDoInputs;
