import Link from 'next/link';
import { Announcement } from '../../lib/const/Announcement';
import Divider from '@mui/material/Divider';

const list = Announcement.map((post) => (
  <>
    <li>
      <div>
        <div>
          <time dateTime={`${post.year}-${post.month}-${post.day}`}>
            {post.year}年{post.month}月{post.day}日
          </time>
        </div>
        <Link href={`${post.link}`}>{post.title}</Link>
      </div>
    </li>
    <Divider />
  </>
));

const Post = () => {
  return (
    <>
      <ul style={{ listStyle: 'none' }}>{list}</ul>
    </>
  );
};

export default Post;
