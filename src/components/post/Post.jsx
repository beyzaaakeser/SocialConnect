import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData.js"


const Post = ({post}) => {

const user = Users.filter((user) => user.id === post.userId);

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={user[0].profilePicture} alt="" />
                    <span className="postUsername">{user[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRigth">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>

                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like1.png" alt="" />
                    <img className="likeIcon" src="/assets/heart1.png" alt="" />

                    <span className="postLikeCounter">{post.like} people like it</span>
                </div>
                <div className="postBottomRigth">
                    <span className="postCommentText">{post.comment} comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post