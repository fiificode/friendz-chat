import db from "@/libs/prismadb";
import { currentUser } from "@clerk/nextjs";

const getUsers = async () => {
  const userSession = await currentUser();

  if (!userSession) {
    return [];
  }

  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          username: userSession.username as string,
        },
      },
    });
    return users;
  } catch (error) {
    return [];
  }
};

export default getUsers;
