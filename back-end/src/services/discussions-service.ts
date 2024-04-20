import db from "../config/db";

class DiscussionsService {
  public async create(data: any) {
    const discussion = await db.discussion.create({
      data: {
        user_id: data.user_id,
        file_id: data.file_id,
        message: data.message,
        discussion_id: data.discussion_id,
      },
    });

    return discussion;
  }
}

export default DiscussionsService;
