import { TodoType } from "./types/todo"

// // TodoTypeは型になる
// type TodoType = {
//   userId: number;
//   title: string;
//   completed: boolean;
// };

//PickやOmitを使うと親コンポーネントからkey={todo.id} を渡せれていても子コンポネーントでpropsとして渡さなくても怒られない
export const Todo = (props: Omit<TodoType, "id">
) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title} (ユーザー:${userId})`}</p>
}