//THESE ROUTES DO NOT REQUIRE AUTH:
export const publicRoutes = ["/"];

//THESE ROUTES DO REQUIRE AUTH AND NEED TO BE VERIFIED BY THE MIDDLEWARE
export const authRoutes = ["/auth/login", "/auth/register"];

//Routes that start with this prefix are used for authentication purposes
export const apiAuthPrefix = "/api/auth";

//Default redirect path after loggin in:
export const DEFAULT_LOGIN_REDIRECT = "/settings";
