import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
  email: string;
  name: string;
}

interface StoredUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const SESSION_USER_KEY = "dairyfresh-auth-user";
const USERS_KEY = "dairyfresh-users";

function readUsers(): StoredUser[] {
  const usersJson = localStorage.getItem(USERS_KEY);
  if (!usersJson) return [];

  try {
    return JSON.parse(usersJson) as StoredUser[];
  } catch {
    return [];
  }
}

function persistUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedSession = localStorage.getItem(SESSION_USER_KEY);
    if (!storedSession) return null;

    try {
      return JSON.parse(storedSession) as User;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
      return;
    }

    localStorage.removeItem(SESSION_USER_KEY);
  }, [user]);

  const login = async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 600));

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (!normalizedEmail || !normalizedPassword) {
      throw new Error("Email and password are required.");
    }

    const users = readUsers();
    const existingUser = users.find((savedUser) => savedUser.email === normalizedEmail);

    if (existingUser && existingUser.password !== normalizedPassword) {
      throw new Error("The password is incorrect.");
    }

    if (existingUser) {
      setUser({ email: existingUser.email, name: existingUser.name });
      return;
    }

    // Auto-create a demo user so first-time login never blocks checkout flow.
    const fallbackUser: StoredUser = {
      email: normalizedEmail,
      password: normalizedPassword,
      name: normalizedEmail.split("@")[0] || "Customer",
    };

    users.push(fallbackUser);
    persistUsers(users);
    setUser({ email: fallbackUser.email, name: fallbackUser.name });
  };

  const signup = async (email: string, password: string, name: string) => {
    await new Promise(resolve => setTimeout(resolve, 600));

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();
    const normalizedName = name.trim();

    if (!normalizedName) {
      throw new Error("Name is required.");
    }

    if (!normalizedEmail || !normalizedPassword) {
      throw new Error("Email and password are required.");
    }

    const users = readUsers();
    const existingUser = users.find((savedUser) => savedUser.email === normalizedEmail);

    if (existingUser) {
      throw new Error("An account with this email already exists.");
    }

    const newUser: StoredUser = {
      email: normalizedEmail,
      password: normalizedPassword,
      name: normalizedName,
    };

    users.push(newUser);
    persistUsers(users);
    setUser({ email: newUser.email, name: newUser.name });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
