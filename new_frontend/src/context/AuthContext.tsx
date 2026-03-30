/*import { createContext, useEffect,useState, type ReactNode } from 'react';

    name:string
    email:string
}
type UserAuth={
    isLoggedIn:boolean;
    user:User|null;
    login:(email:string, password:string)=>Promise<void>;
    signup:(email:string, password:string)=>Promise<void>;
    logout:()=>Promise<void>;
}

const AuthContext=createContext<UserAuth| null>(null);
export const AuthProvider= ({children}:{children :ReactNode})=> {
    const [user,setUser]= useState<User|null>(null);
    const [isLoggedIn,setIsLoggedIn]= useState(false);

    useEffect(() => {
        //fetch if the user's cookies are valid then skip login
    },[]);
    const login=async(email: String, password: string)=>{};
    const signup=async(name:string,email:string,password:string)=>{};
    const logout=async()=>{};

    const value={
        user,isLoggedIn,login,logout,signup,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};type User={ */




import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
        //fetch if the user's cookies are valid then skip login
    },[]);
    const login=async(email: String, password: string)=>{};
    const signup=async(name:string,email:string,password:string)=>{};
    const logout=async()=>{};

  /*const login = async (email: string, password: string) => {
    setUser({ name: "Demo", email });
    setIsLoggedIn(true);
  };

  const signup = async (email: string, password: string) => {
    setUser({ name: "New User", email });
  };

  const logout = async () => {
    setUser(null);
  }; */

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!user,
        user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};