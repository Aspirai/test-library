import React from 'react';
import { useParams } from 'react-router-dom';

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // 根据id获取文章内容
  return (
    <div>
      <h1>文章标题</h1>
      <div>文章内容</div>
    </div>
  );
};

export default Post;