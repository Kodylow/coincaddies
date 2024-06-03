import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

new Elysia()
  .use(cors())
  .post(
    "/register",
    async ({ body }: any) => {
      const { task, resources, nwcString, budget } = body;
      const workflow = await prisma.agentWorkflow.create({
        data: {
          task: task,
          resources: resources,
          nwc_string: nwcString,
          budget: budget,
        },
      });
      return { id: workflow.id }; // Return the ID of the newly created workflow
    },
    {
      body: t.Object({
        task: t.String(),
        resources: t.String(),
        nwcString: t.String(),
        budget: t.Number(),
      }),
    }
  )
  .get(
    "/status",
    async ({ set, query }: any) => {
      const id = query.id;
      if (!id) {
        set.status = 400;
        return "Invalid request: ID is required";
      }
      const workflow = await prisma.agentWorkflow.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (workflow == null) {
        set.status = 404;
        return "Workflow not found";
      }
      return {
        status: "Active",
        workflow: {
          task: workflow.task,
          resources: workflow.resources,
          nwcString: workflow.nwc_string,
          budget: workflow.budget,
        },
      };
    },
    {
      query: t.Object({
        id: t.String(),
      }),
    }
  )
  .listen(8080);
console.log("Server running on http://localhost:8080");
