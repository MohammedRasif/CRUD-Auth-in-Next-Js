import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  {
    id: 1,
    name: "rasif",
    email: "rasif@gmail.com",
    password: "password",
  },
];

const handler = NextAuth({
    session:{
        strategy:"jwt"
    },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          return null;
        }


        return true;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
