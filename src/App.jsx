import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import style from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabriellazaroni.png",
      name: "Gabriel Gomes",
      role: "Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala akjsdhaksjhdaksdaksjdkasjhdkajhdasd",
      },
      {
        type: "paragraph",
        content: "Fala akjsdhaksjhdaksdaksjdkasjhdkajhdasd",
      },
      {
        type: "paragraph",
        content: "Fala akjsdhaksjhdaksdaksjdkasjhdkajhdasd",
      },
      {
        type: "link",
        content: "Fala akjsdhaksjhdaksdaksjdkasjhdkajhdasd",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rodolfocoding.png",
      name: "Sandra Helena",
      role: "CEO",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala akjsdhaksjhdaksdaksjdkasjhdkajhdasd",
      },
      {
        type: "paragraph",
        content: "Fala akjsdhaksjhdaksdaksjdkasjhdkajhdasd",
      },
      {
        type: "paragraph",
        content: "Fala akjsdhaksjhdaksdaksjdkasjhdkajhdasd",
      },
      {
        type: "link",
        content: "Fala akjsdhaksjhdaksdaksjdkasjhdkajhdasd",
      },
    ],
    publishedAt: new Date("2022-05-10 20:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
