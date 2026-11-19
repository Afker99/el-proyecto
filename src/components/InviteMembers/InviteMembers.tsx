import global from "../../global.module.scss";
import utils from "../../scss/utilities.module.scss";
import styles from "./styles.module.scss";

import { X } from "lucide-react";

import Button from "../Button/Button";

function InviteMembers() {
  return (
    <>
      <div className={`${styles.titleContainer} ${utils.marginBottomLarge}`}>
        <h3 className={global.title}>Invite members for collabration</h3>
        <Button variant="Secondary" size="Small" round="Full" hasIcon>
          <X size={16} />
        </Button>
      </div>
      <form className={styles.form}>
        <label htmlFor="invite">Email(s):</label>
        <div>
          <input className={styles.formInput} type="text" />
        </div>
        <label htmlFor="role">Invite as: </label>
        <select name="" id="">
          <option value="admin">Admin</option>
          <option value="member">Memmber</option>
          <option value="guest">Guest</option>
        </select>
        <div>
          <button>Send Invites</button>
        </div>
      </form>
    </>
  );
}

export default InviteMembers;
