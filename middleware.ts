import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define protected routes using valid path patterns
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/api/budgets(.*)',
  '/api/incomes(.*)',
  '/api/expenses(.*)',
  '/api/transactions(.*)',
  '/api/dashboard(.*)',
]);

// Define public routes that should bypass authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/health(.*)',
  '/api/webhooks(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  // Check if the route is protected and not public
  if (isProtectedRoute(req) && !isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};