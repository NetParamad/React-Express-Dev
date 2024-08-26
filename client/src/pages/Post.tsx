import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  postText: string;
  username: string;
}
interface Comment {
  id: number;
  commentBody: string;
  username: string;
}

function Post() {
  const { id } = useParams();
  const [postObject, setPostObject] = useState<Post>({} as Post);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      // console.log(res.data);
      setPostObject(res.data);
    });
    axios.get(`http://localhost:3001/comments/${id}`).then((res) => {
      // console.log(res.data);
      setComments(res.data);
    });
  }, [id]);

  const addComment = () => {
    axios.post("http://localhost:3001/comments", {
      commentBody: newComment,
      PostId: id,
      
    }).then((res) => {
      // console.log(res.data);
      setComments([...comments, res.data]);
    })
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postObject.title}</div>
          <div className="body"> {postObject.postText}</div>
          <div className="footer"> {postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          {" "}
          <input type="text" placeholder="Add a comment" autoComplete="off" onChange={(e) => setNewComment(e.target.value)}/>
          <button onClick={addComment}>Add a comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((value, key) => {
            return (
              <div className="comment">
                <div key={key} className="commentBody"> {value.commentBody}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
