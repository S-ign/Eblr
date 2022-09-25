import React from 'react'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

type postInfo = {
  username: string | null
  title: string
  content: string | null
  tags: string
}

const Post: React.FC<postInfo> = (props) => {

  return (

    <div className="container flex flex-wrap rounded-lg bg-white shadow-lg max-w-lg">

      {/*poster username | follow | options*/}
      <div className="flex p-3 grow w-full justify-between">
        <div><p className="text-sm font-bold">{props.username}</p></div>
        <div className="pr-5 flex content-center"><p className="text-4xl text-gray-400 leading-3 hover:cursor-pointer">...</p></div>
      </div>

      {/*main content*/}
      <div className="p-3">
        <h3 className="p-3 text-3xl">{props.title}</h3>

        <blockquote>{props.content}</blockquote>
      </div>

      {/*post tags*/}
      <div className="flex w-full">
        <p className="font-serif text-slate-500 italic p-5">{props.tags}</p>
      </div>

      {/*notes and actions*/}
      <div className="flex w-full justify-between p-3">
        <div className="font-bold text-gray-500">30 notes</div>
        <div className="flex gap-5">
          <ReplyRoundedIcon />
          <ChatBubbleOutlineRoundedIcon />
          <RepeatRoundedIcon />
          <FavoriteBorderRoundedIcon />
        </div>
      </div>

    </div>
  )
}

export default Post
