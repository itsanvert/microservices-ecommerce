import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  avatar?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (token) {
          const response = await axios.get(
            "http://localhost:3000/auth/profile",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });
      localStorage.setItem("access_token", response.data.access_token);
      const userResponse = await axios.get(
        "http://localhost:3000/auth/profile",
        {
          headers: { Authorization: `Bearer ${response.data.access_token}` },
        }
      );
      setUser(userResponse.data);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
  };

  return { user, login, logout };
};
