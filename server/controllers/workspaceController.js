import prisma from "../configs/prisma.js";

export const getUserWorkspace = async (req, res) => {
  try {
    const { userId } = await req.auth();

    const workspaces = await prisma.workspace.findMany({
      where: {
        members: { some: { userId } },
      },
      include: {
        owner: true,
        members: {
          include: { user: true },
        },
        projects: {
          include: {
            members: { include: { user: true } },
            tasks: {
              include: {
                assignee: true,
              },
            },
          },
        },
      },
    });

    return res.json({ workspaces });
  } catch (error) {
    console.error("getUserWorkspace error:", error);
    return res.status(500).json({
      message: error.code || error.message,
    });
  }
};


export const addMember = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const { email, role, workspaceId, message } = req.body;

    if (!workspaceId || !role || !email) {
      return res.status(400).json({ message: "Missing required parameters" });
    }

    if (!["ADMIN", "MEMBER"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
      include: { members: true },
    });

    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found" });
    }

    const isAdmin = workspace.members.some(
      (member) => member.userId === userId && member.role === "ADMIN"
    );

    if (!isAdmin) {
      return res
        .status(401)
        .json({ message: "You do not have admin privileges" });
    }

    const existingMember = workspace.members.some(
      (member) => member.userId === user.id
    );

    if (existingMember) {
      return res
        .status(400)
        .json({ message: "User is already a member" });
    }

    const member = await prisma.workspaceMember.create({
      data: {
        userId: user.id,
        workspaceId,
        role,
        message,
      },
    });

    return res.json({
      member,
      message: "Member added successfully",
    });
  } catch (error) {
    console.error("addMember error:", error);
    return res.status(500).json({
      message: error.code || error.message,
    });
  }
};
