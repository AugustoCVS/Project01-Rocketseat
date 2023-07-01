import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://github.com/AugustoCVS.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Larissa Cavalcante </strong>
                            <time title='01 de julho ás 12:43h' dateTime='2023-01-07 12:42:30'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom parabens</p>
                </div>


                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}