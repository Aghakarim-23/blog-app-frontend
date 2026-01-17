import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await axios.get("http://localhost:8001/api/auth/me", {
          withCredentials: true,
        });

        setUser(res.data.user);
      } catch (error) {
        setUser(null);
        console.error(error?.response?.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, []);

  useEffect(() => {
    const publicRoutes = ["/login", "/register", "/forgot-password"];

    if (!user && !loading && !publicRoutes.includes(router.pathname)) {
      router.push("/login");
    }
  }, [user, loading, router.pathname]);

  const login = async (formData) => {
    const res = await axios.post(
      "http://localhost:8001/api/auth/login",
      formData,
      { withCredentials: true }
    );

    setUser(res.data.user);

    return res;
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:8001/api/auth/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
