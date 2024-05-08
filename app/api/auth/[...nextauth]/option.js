import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const option = {
  providers: [
    GithubProvider({
      profile(profile) {
        console.log("profile Github:", profile);
        return {
          ...profile,
          id: profile.sub,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("profile Google:", profile);
        return {
          ...profile,
          id: profile.sub,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
