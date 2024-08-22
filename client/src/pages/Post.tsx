import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

interface Post {
  id: number
  title: string
  postText: string
  username: string
}

function Post() {

  const { id } = useParams()
  const [postObject, setPostObject] = useState<Post>({} as Post)

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      console.log(res.data)
      setPostObject(res.data)
    })
  }, [id])

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id='individual'>
          <div className="title"> {postObject.title}</div>
          <div className="body"> {postObject.postText}</div>
          <div className="footer"> {postObject.username}</div>
        </div>
      </div>
      <div className="rightSide"> Comemet Section</div>
    </div>
  );
}

export default Post