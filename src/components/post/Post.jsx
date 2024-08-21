import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
                    <span className="postUsername">Safak Dogar </span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRigth">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post.)</span>

                <img className="postImg" src="assets/post/1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like1.png" alt="" />
                    <img className="likeIcon" src="/assets/heart1.png" alt="" />

                    <span className="postLikeCounter">38 people like it</span>
                </div>
                <div className="postBottomRigth">
                    <span className="postCommentText">9 comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post