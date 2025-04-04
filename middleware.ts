import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from 'next/server';

// const isPublicRoute = createRouteMatcher(['/']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId, orgId } = await auth();
  // console.log(userId, 'userId')
 // If the user isn't signed in and the route is private, redirect to sign-in
//  if (!userId && !isPublicRoute(req)) {
//   const signInUrl = new URL('/sign-in', req.url);
//   return NextResponse.redirect(signInUrl);
// }

//   // If the user is logged in and on a public route, redirect to /select-org
//   if (userId && isPublicRoute(req)) {
//     const selectOrgUrl = new URL('/select-org', req.url);
//     return NextResponse.redirect(selectOrgUrl);
//   }

//   // If there is an organization, redirect to /organization/:id
//   if (userId && isPublicRoute(req)) {
//     let path = '/select-org';

//     if (orgId) {
//       path = `/organization/${orgId}`;
//     }

//     if (userId && !orgId && req.nextUrl.pathname !== "/select-org") {
//       const orgSelection = new URL(path, req.url);
//       return NextResponse.redirect(orgSelection);

//      }

//   }

//   // If the user is logged in and the route is protected, let them view
//   if (userId && !isPublicRoute(req)) {
//     return NextResponse.next();
//   }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};