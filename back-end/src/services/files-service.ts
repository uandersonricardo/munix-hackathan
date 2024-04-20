import db from "../config/db";

class FilesService {
  public async index(params: any) {
    const files = await db.file.findMany({
      where: {
        type: params.type ?? undefined,
        current_version: {
          title: params.title ? { contains: params.title } : undefined,
          content: params.content ? { contains: params.content } : undefined,
          date: params.date ? { contains: params.date } : undefined,
          access_points: params.accessPoints
            ? {
                some: {
                  vocabulary: { text: { contains: params.access_points } },
                },
              }
            : undefined,
          tags: params.tags
            ? { some: { text: { contains: params.tags } } }
            : undefined,
        },
      },
      include: {
        current_version: true,
      },
    });

    return files;
  }

  public async show(id: number) {
    const file = await db.file.findUnique({
      where: {
        id,
      },
      include: {
        current_version: {
          include: {
            access_points: {
              include: {
                vocabulary: true,
              },
            },
            tags: true,
            user: true,
          },
        },
        versions: {
          include: {
            access_points: {
              include: {
                vocabulary: true,
              },
            },
            tags: true,
            user: true,
          },
        },
        discussions: {
          include: {
            user: true,
            replies: {
              include: {
                user: true,
              },
            },
          },
          where: {
            discussion_id: null,
          },
        },
      },
    });

    if (!file) {
      throw new Error("File not found");
    }

    return file;
  }

  public async update(data: any) {
    const newVersion = await db.version.create({
      data: {
        title: data.title,
        content: data.content,
        file_id: data.id,
        user_id: data.user_id,
        access_points: {
          create: data.accessPoints.map((accessPoint: any) => ({
            vocabulary: {
              connectOrCreate: {
                where: {
                  text: accessPoint,
                },
                create: {
                  text: accessPoint,
                },
              },
            },
          })),
        },
        tags: {
          create: data.tags.map((tag: any) => ({
            text: tag,
          })),
        },
        date: data.date,
        verified: data.verified ?? false,
      },
    });

    const file = await db.file.update({
      where: {
        id: data.id,
      },
      data: {
        current_version_id: newVersion.id,
      },
    });

    return file.id;
  }
}

export default FilesService;
