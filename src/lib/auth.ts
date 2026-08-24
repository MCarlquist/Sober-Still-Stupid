import { APIError, betterAuth } from 'better-auth'
import { prismaAdapter } from '@better-auth/prisma-adapter'
import { tanstackStartCookies } from 'better-auth/tanstack-start'
import { prisma } from '#/db'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  databaseHooks: {
    user: {
      create: {
        before: async () => {
          const userCount = await prisma.user.count()

          if (userCount > 0) {
            throw new APIError('FORBIDDEN', {
              message: 'Only one account can be created.',
            })
          }
        },
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [tanstackStartCookies()],
})
