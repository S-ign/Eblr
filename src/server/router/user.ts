import { useSession } from "next-auth/react"
import { createRouter } from "./context";
import { z } from "zod";

export const userRouter = createRouter()
  .query("getUserByEmail", {
    input: z.object({
        email: z.string(),
      }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.findUnique({
        where: {
          email: input.email
        }
      })
    },
  })
  .query("getAuthorId", {
    input: z.object({
        email: z.string(),
      }),
    async resolve({ ctx, input }) {
      const user =  await ctx.prisma.user.findUniqueOrThrow({
        where: {
          email: input.email
        }
      })
      return user.id
    },
  })
  .query("getUserName", {
    input: z.object({
        email: z.string(),
      }),
    async resolve({ ctx, input }) {
      const user =  await ctx.prisma.user.findMany({
        where: {
          email: input.email
        }
      })
      return user.map((u) => u.name)
    },
  })
  .query("getUserPosts", {
    input: z.object({
        email: z.string(),
      }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.findUnique({
        where: {
          email: input.email
        },
        include: {
          posts: true,
        },
      })
    },
  })
  .query("getByName", {
    input: z
      .object({
        text: z.string(),
      }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.findMany({
        where: {
          name: input.text
        }
      })
    },
  })
  .query("getAllUserEmails", {
    async resolve({ ctx }) {
      const emails = await ctx.prisma.user.findMany()
      return emails.map((user) => user.email)
    },
  })
  .mutation("createUser", {
    input: z.object({
      name: z.string(),
      email: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
        }
      })
    },
  });
