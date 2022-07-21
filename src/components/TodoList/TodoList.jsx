
const TodoList = ({ todos,onDeleteTodo }) => (
  <ul style={{
          display:'flex'
        }}>
    {todos.map(({ id, text }) => (
      <li
        key={id}
        style={{
          border: '1px solid black',
          
        }}
      >
        <p>{text}</p>
        <button type="button" onClick={()=>onDeleteTodo(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
