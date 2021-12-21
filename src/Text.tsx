import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
}

// 関数コンポーネント(ファンクショナルコンポーネント)を明示的に表示する ⇨ FC
// propsに対しての型の指定はFCにくっつけることとなる
// FCを記述する場合、暗黙的にpropsにchildrenを受け取れるようになる
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style = {{ color, fontSize }}>テキストです</p>;
};