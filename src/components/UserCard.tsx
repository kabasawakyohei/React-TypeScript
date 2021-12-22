
import { FC} from "react";
import { UserProfile } from "../types/userProfile"

type Props = {
  hoge: UserProfile;
}


export const UserCard: FC<Props> = (props) => {
  const {hoge} = props;

  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
  }

  return (
    <div style={style}>
      <dl>
        <dt>{hoge.name}</dt>
        <dd></dd>
        <dt>{hoge.email}</dt>
        <dd></dd>
        <dt>{hoge.address}</dt>
        <dd></dd>
      </dl>
    </div>
  )
}