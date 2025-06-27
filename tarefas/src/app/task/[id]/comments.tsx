'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { Textarea } from "../../../components/textarea";
import styles from "./styles.module.css";
import { db } from "../../../services/firebaseConnection";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { FaTrash } from "react-icons/fa";

interface TaskProps {
  tarefa: string;
  created: string;
  public: boolean;
  user: string;
  taskId: string;
}

interface CommentProps {
  id: string;
  comment: string;
  taskId: string;
  user: string;
  name: string;
}

interface CommentsProps {
  item: TaskProps;
  allComments: CommentProps[];
}

export function Comments({ item, allComments }: CommentsProps) {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [comments, setComments] = useState<CommentProps[]>(allComments || []);

  async function handleComment(event: FormEvent) {
    event.preventDefault();
    if (input === "") return;
    if (!session?.user?.email || !session?.user?.name) return;

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        comment: input,
        created: new Date(),
        user: session.user.email,
        name: session.user.name,
        taskId: item.taskId,
      });

      const newComment = {
        id: docRef.id,
        comment: input,
        user: session.user.email,
        name: session.user.name,
        taskId: item.taskId,
      };

      setComments((prev) => [...prev, newComment]);
      setInput("");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteComment(id: string) {
    try {
      await deleteDoc(doc(db, "comments", id));
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <section className={styles.commentsContainer}>
        <h2>Deixar comentário</h2>
        <form onSubmit={handleComment}>
          <Textarea
            value={input}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInput(e.target.value)
            }
            placeholder="Digite seu comentário..."
          />
          <button
            type="submit"
            className={styles.button}
            disabled={!session?.user}
          >
            Enviar comentário
          </button>
        </form>
      </section>

      <section className={styles.commentsContainer}>
        <h2>Todos comentários</h2>
        {comments.length === 0 ? (
          <span>Nenhum comentário foi encontrado...</span>
        ) : (
          comments.map((comment) => (
            <article key={comment.id} className={styles.comment}>
              <div className={styles.headComment}>
                <label className={styles.commentsLabel}>{comment.name}</label>
                {comment.user === session?.user?.email && (
                  <button
                    className={styles.buttonTrash}
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    <FaTrash size={18} color="#EA3140" />
                  </button>
                )}
              </div>
              <p>{comment.comment}</p>
            </article>
          ))
        )}
      </section>
    </>
  );
}
