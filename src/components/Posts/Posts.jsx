import { Comment } from '../Comment/Comment';
import styles from './Posts.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/AugustoCVS.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Augusto Santana</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='01 de julho ás 12:43h' dateTime='2023-01-07 12:42:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto </a> {" "}
                    <a href="">#nlw </a> {" "}
                    <a href="">#rocketseat</a>  {" "}
                </p>
            </div>  

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button> 
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}