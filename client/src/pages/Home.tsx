import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  postText: string;
  username: string;
}
function Home() {
  const history = useNavigate();

  const [listOfPosts, setListOfPosts] = useState<Post[]>([]);
  useEffect(() => {
    axios.get<Post[]>("http://localhost:3001/posts").then((res) => {
      setListOfPosts(res.data);
    });
  }, []);
  return (
    <div className="App">
      {listOfPosts.map((value, index) => {
        return (
          <div
            key={index}
            className="post "
            onClick={() => history(`/post/${value.id}`)}
          >
            <div className="title">{value.title} </div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
