// // import {
// //   AgentsView,
// //   AgentsViewLoading,
// // } from "@/modules/agents/ui/views/agents-view";
// // import { getQueryClient, trpc } from "@/trpc/server";
// // import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
// // import React, { Suspense } from "react";

// // const page = async () => {
// //   const queryClient = getQueryClient();
// //   void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
// //   return;
// //   <HydrationBoundary state={dehydrate(queryClient)}>
// //     <Suspense fallback={<AgentsViewLoading />}>
// //       <AgentsView />
// //     </Suspense>
// //   </HydrationBoundary>;
// // };

// // export default page;

// import {
//   AgentsView,
//   AgentsViewLoading,
// } from "@/modules/agents/ui/views/agents-view";
// import { getQueryClient, trpc } from "@/trpc/server";
// import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
// import React, { Suspense } from "react";

// const Page = async () => {
//   const queryClient = getQueryClient();
//   queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <Suspense fallback={<AgentsViewLoading />}>
//         <AgentsView />
//       </Suspense>
//     </HydrationBoundary>
//   );
// };

// export default Page;

import {
  AgentsView,
  AgentsViewLoading,
} from "@/modules/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import React, { Suspense } from "react";
import ErrorPage from "@/app/(dashboard)/agents/error";
import { ErrorBoundary } from "react-error-boundary";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<AgentsViewLoading />}>
          <AgentsView />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
};

export default Page;
