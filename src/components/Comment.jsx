import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/GabrielLazaroni.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Lazaroni</strong>
              <time dateTime="2022-0b  5-11 08:00"></time>
            </div>
            <button title="Deletar comentaario">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, parabens!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
