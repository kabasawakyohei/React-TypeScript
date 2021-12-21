import { TodoType } from "./types/todo"
import { FC } from "react";

// // TodoTypeは型になる
// type TodoType = {
//   userId: number;
//   title: string;
//   completed: boolean;
// };

//PickやOmitを使うと親コンポーネントからkey={todo.id} を渡せれていても子コンポネーントでpropsとして渡さなくても怒られない
// type/todo.tsに切り出した型から必要な情報のみを取り出すのに便利！
export const Todo: FC <Omit<TodoType, "id">> = (props
) => {
  const { title, userId, completed,} = props;
  const completeMark = completed ? "[完]" : "[未]";

  return (
  <p>{`${completeMark} ${title} (ユーザー:${userId})`}</p>
  )
}