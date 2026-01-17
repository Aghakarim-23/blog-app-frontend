import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import api from "@/utils/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/me", {
          withCredentials: true,
        });

        setUser(res.data.user);
        console.log("Fetched user:", res.data.user);

      } catch (error) {
        setUser(null);
        console.error(error?.response?.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);


  const login = async (formData) => {
    const res = await api.post("/login", formData, {
      withCredentials: true,
    });

    setUser(res.data.user);

    return res;
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
