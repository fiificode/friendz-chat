import db from "@/libs/prismadb";
import { clerkClient, currentUser } from "@clerk/nextjs";

const getCurrentUser = async () => {
  const userid = await currentUser();
  const user = await clerkClient.users.getUser(userid?.id as string);

  try {
    const currentUser = await db.user.findUnique({
      where: {
        username: user.username as string,
      },
    });
    if (!currentUser) {
      return null;
    }
    return currentUser;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
