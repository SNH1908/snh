import { ref, provide, inject } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function useAuth() {
  const user = ref(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
    
  });

  provide("user", user);
  return { user };
}

export function useUser() {
  return inject("user");
}
