import { doc, getDoc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../services/firebaseConnection";
import { redirect } from "next/navigation";
import { Comments } from "./comments";
import styles from "./styles.module.css";

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

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const id = params.id;

  const docRef = doc(db, "tarefas", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    redirect("/");
  }

  const data = snapshot.data();

  if (!data?.public) {
    redirect("/");
  }

  const miliseconds = data.created?.seconds * 1000;

  const item: TaskProps = {
    tarefa: data.tarefa,
    created: new Date(miliseconds).toLocaleDateString(),
    public: data.public,
    user: data.user,
    taskId: id,
  };

  const q = query(collection(db, "comments"), where("taskId", "==", id));
  const snapshotComments = await getDocs(q);

  const allComments: CommentProps[] = [];
  snapshotComments.forEach((doc) => {
    allComments.push({
      id: doc.id,
      comment: doc.data().comment,
      user: doc.data().user,
      name: doc.data().name,
      taskId: doc.data().taskId,
    });
  });

  return (
    <div className={styles.container}>
      <h1>Tarefa</h1>

      <main className={styles.main}>
        <article className={styles.task}>
          <p>{item.tarefa}</p>
        </article>
      </main>

      <Comments item={item} allComments={allComments} />
    </div>
  );
}
