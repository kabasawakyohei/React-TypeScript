import { FC } from "react";
import { User } from "./types/user"

// import したUserの型一式をPropsとする
type Props = {
  user: User;
};

export const UserProfile: FC<Props> = (props)=>{
  const { user } = props;
  return (
    <div>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
      </dl>
      <dl>
        <dt>趣味</dt>
        <dd>{user.hobbies?.join("/")}</dd>
      </dl>
    </div>
  )
};