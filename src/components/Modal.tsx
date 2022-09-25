import React from 'react'
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react"

type ModalProps = {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = (props) => {
  const { data: session } = useSession()

  let email = ''
  if (session) {
    email = session.user.email
  }

  const [postTitle, setPostTitle] = React.useState<string>('')
  const [postContent, setPostContent] = React.useState<string>('')
  const [postTags, setPostTags] = React.useState<string>('')

  const titleHandler = (e: any) => {
    setPostTitle(e.target.value)
  }
  const contentHandler = (e: any) => {
    setPostContent(e.target.value)
  }
  const tagsHandler = (e: any) => {
    setPostTags(e.target.value)
  }

  const {mutate} = trpc.useMutation("post.createPost")

  const addPostHandler = () => {
    // TODO: Add the correct authorId based off of who is logged in
    mutate({
      title: postTitle,
      content: postContent,
      tags: postTags
    })
    props.setShowModal(false)
  }

  return (
    <>
      {props.showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-10 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-5 rounded-t">

                  <h3 className="text-md font-semibold">

                    {props.name}
                  </h3>

                  <div className="w-5">
                    <svg id="managed-icon__settings-alt" fill="var(--icon-color-primary, #6E6E6E)" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4a1 1 0 1 1 2 0c0 2.06 2.491 3.094 3.95 1.636a1 1 0 1 1 1.414 1.414C16.906 8.508 17.939 11 20 11a1 1 0 1 1 0 2c-2.061 0-3.093 2.492-1.636 3.95a1 1 0 0 1-1.414 1.414C15.493 16.907 13 17.938 13 20a1 1 0 1 1-2 0c0-2.061-2.492-3.094-3.95-1.636a1 1 0 0 1-1.414-1.414C7.094 15.492 6.061 13 4 13a1 1 0 1 1 0-2c2.06 0 3.094-2.492 1.636-3.95A1 1 0 1 1 7.05 5.636C8.51 7.095 11 6.06 11 4Zm5.967-.577a2.998 2.998 0 0 1 2.811.799 2.998 2.998 0 0 1 0 4.243A.314.314 0 0 0 20 9a2.98 2.98 0 0 1 1.577.447A2.998 2.998 0 0 1 23 12a2.998 2.998 0 0 1-3 3c-.28 0-.42.338-.222.536a2.98 2.98 0 0 1 .799 1.431 2.998 2.998 0 0 1-.799 2.811 2.998 2.998 0 0 1-4.242 0A.314.314 0 0 0 15 20a2.98 2.98 0 0 1-.447 1.577A2.998 2.998 0 0 1 12 23a2.998 2.998 0 0 1-3-3c0-.28-.338-.42-.536-.222a2.98 2.98 0 0 1-1.432.799 2.998 2.998 0 0 1-2.81-.799 2.998 2.998 0 0 1 0-4.242A.314.314 0 0 0 4 15a2.982 2.982 0 0 1-1.577-.447A2.998 2.998 0 0 1 1 12a2.998 2.998 0 0 1 3-3c.28 0 .42-.338.222-.535a2.98 2.98 0 0 1-.799-1.432 2.998 2.998 0 0 1 .799-2.811 2.998 2.998 0 0 1 4.242 0A.314.314 0 0 0 9 4a2.981 2.981 0 0 1 .447-1.577A2.998 2.998 0 0 1 12 1a2.998 2.998 0 0 1 3 3c0 .28.338.42.536.222a2.981 2.981 0 0 1 1.432-.799ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                    </svg>
                  </div>

                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <textarea onChange={titleHandler} className="flex text-3xl w-full border-none overflow-auto focus:overflow-auto outline-none resize-none" id="" name="" cols={30} rows={1} placeholder="Title"></textarea>
                </div>

                <div className="relative p-6 flex-auto">
                  <textarea onChange={contentHandler} className="flex text-md w-full border-none overflow-auto focus:overflow-auto outline-none resize-none" id="" name="" cols={30} rows={3} placeholder="Go ahead, put anything."></textarea>
                </div>

                <div onChange={tagsHandler} className="flex-auto grow p-6 w-full">
                  <textarea className="flex-auto grow w-full overflow-hidden focus:outline-none resize-none" maxLength={139} placeholder="#add tags"></textarea>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="flex text-gray-600 rounded-2xl bg-slate-300 font-bold w-20 h-8 items-center justify-center"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="flex text-white rounded-2xl bg-sky-500 font-bold w-32 h-8 items-center justify-center"
                    type="button"
                    onClick={addPostHandler}
                  >
                    Post now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-90 fixed inset-0 z-40 bg-eblr-blue"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal
