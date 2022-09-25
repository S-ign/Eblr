import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react"

import Nav from '../components/Nav'
import Post from '../components/Post'
import ContentToolbox from '../components/ContentToolbox'
import Categories from '../components/Categories'

import defaultProfile from '../assets/defaultProfile.png'

const Home: NextPage = () => {

  const { data: session } = useSession()

  let email = ''
  let name = ''

  if (session) {
    email = session.user.email
    name = session.user.name
  }
  const {data: userPosts } = trpc.useQuery(["user.getUserPosts", {email: email}]);

  return (
    <>
      <Head>
        <title>Eblr</title>
        <meta name="description" content="post your memes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Nav name={name}/>
        <div className="flex grow h-screen w-screen justify-center gap-6 pt-8 bg-eblr-blue">
          <div className="flex">
            <picture><img className="rounded-md" src={defaultProfile.src} alt="" /></picture>
          </div>
          <div className="flex gap-5 flex-col">
            <ContentToolbox name={name}/>
            <Categories />
            {
              userPosts
                ? userPosts.posts.map((post) => {
                  return <Post key={userPosts.id} username={userPosts.name} title={post.title} content={post.content} tags={post.tags}/>
                })
                :
                  null
            }
          </div>
          <div className="flex text-yellow-600 w-2/12">
            Suggestions & Advertisment
          </div>
        </div>
      </main>

    </>
  );
};

export default Home;
