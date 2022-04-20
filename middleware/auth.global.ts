export default defineNuxtRouteMiddleware((to, from) => {
  //console.log(to);
  if (to.path === "/admin") {
    //HAS LS TOKEN OR NOT
    if (process.client) {
      if (!localStorage.getItem("token")) {
        return navigateTo("/login");
      }
    }
  }
  //return navigateTo('/')
});
