import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          // Add your logic here to validate the credentials and return the user object
          // For example, you might fetch the user from your database and compare the hashed password
          // If the credentials are valid, return the user object
          // If the credentials are invalid, return null
        }
        return null;
      },
    }),
  ],
});
