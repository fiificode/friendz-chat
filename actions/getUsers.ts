import db from "@/libs/prismadb";
import { clerkClient, currentUser } from "@clerk/nextjs";

const getUsers = async () => {
  const user = await currentUser();
  const userCurrent = await clerkClient.users.getUser(user?.id as string);

  if (!user) {
    return [];
  }

  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          username: userCurrent.username as string,
        },
      },
    });
    return users;
  } catch (error) {
    return [];
  }
};

export default getUsers;
