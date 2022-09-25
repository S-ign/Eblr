import { createRouter } from "./context";
import { z } from "zod";
import { trpc } from "../../utils/trpc";

export const postRouter = createRouter()
  .query("getPostById", {
    input: z.object({
        id: z.string(),
      }),
    async resolve({ ctx, input }) {
      const posts = await ctx.prisma.post.findMany({
        where: {
          id: input.id
        }
      })
      return posts.map((post) => post.content)
    },
  })
  .query("getUsersPosts", {
    input: z.object({
        userId: z.string(),
      }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.post.findMany({
        where: {
          authorId: input.userId,
        }
      })
    },
  })
  .mutation("createPost", {
    input: z.object({
      title: z.string(),
      content: z.string(),
      tags: z.string(),
    }),
    async resolve({ ctx, input }) {
      const { data: id } = trpc.useQuery(["user.getAuthorId", {email: ctx.session.user.email}])
      return await ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          tags: input.tags,
          authorId: id
        }
      })
    },
  });

