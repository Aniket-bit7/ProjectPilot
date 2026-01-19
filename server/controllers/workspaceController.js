import prisma from "../configs/prisma.js";

export const getUserWorkspace = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const workspaces = await prisma.workspace.findMany({
      where: {
        members: { some: { userId: userId } }
      },
      include: {
        members: { include: { user: true } },
        projects: {
          include: {
            tasks: {
              include: {
                assignee: true, comments: {
                  include:
                    { user: true }
                }
              }
            },
            members: { include: { user: true } }
          }
        },
        owner: true
      }
    });
    res.json({ workspaces })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.code || error.message })
  }
}

export const addMember = async (req, res) => {
  try {
    const { userId } = await req.auth();
    const { email, role, workspaceId, message } = req.body;

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      res.status(404).json({ message: "User not found" })
    }

    if (!workspaceId || !role) {
      res.status(400).json({ message: "Missing required parameters" })
    }

    if (!["ADMIN", "MEMBER"].includes(role)) {
      res.status(400).json({ message: "Invalid role" })
    }

    // fetching workspace 
    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId }, include: { members: true }
    })

    if (!workspace) {
      res.status(404).json({ message: "Workspace not found" })
    }

    // checking if creator has admin role
    if (!workspace.members.find((member) => member.userId === userId && member.role === "ADMIN")) {
      res.status(401).json({ message: "You do not have admin privilages" })
    }

    const existingMember = workspace.members.find((member) => member.userId === userId);

    if (existingMember){
      return res.status(400).json({message: "User is already a member"})
    }

    const member = await prisma.workspaceMember.create({
      data: {
        userId: user.id,
        workspaceId,
        role,
        message
      }
    })

    res.json({member, message: "Member added successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.code || error.message })
  }
}