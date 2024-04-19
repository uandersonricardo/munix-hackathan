import db from "../config/db";

class AuthService {
  public async login(id: number) {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export default AuthService;
