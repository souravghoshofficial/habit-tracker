import { createContext, useContext, useEffect } from "react"
import { ID, Models } from "react-native-appwrite"
import { account } from "./appwrite";
import { useState } from "react";

type AuthContextType = {
    user: Models.User<Models.Preferences> | null;
    isLoadingUser: boolean; 
    signUp: (email: string, password: string) => Promise<string | null>;
    signIn: (email: string, password: string) => Promise<string | null>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)


export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true)
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)


    const getUser = async () => {
        try{
            const session = await account.get()
            setUser(session)
        }
        catch(error){
            setUser(null)
        }
        finally{
            setIsLoadingUser(false)
        }
    }

    

    useEffect(() => {
        getUser()
    } ,[])

    const signUp = async (email: string, password: string) => {
        try {
            await account.create(ID.unique() , email, password)
            await signIn(email , password)
            return null
        } catch (error) {
            if(error instanceof Error){
                return error.message
            }

            return "An error occurred during sign up"
        }
    }

    const signIn = async (email: string, password: string) => {
        try {
            await account.createEmailPasswordSession(email, password)
            const session = await account.get()
            setUser(session)
            return null
        } catch (error) {
            if(error instanceof Error){
                return error.message
            }

            return "An error occurred during sign in"
        }
    }

    const signOut = async () => {
        try {
            await account.deleteSessions()
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

  return (
   <AuthContext.Provider value={{user, isLoadingUser, signUp , signIn , signOut}}>
     {children}
   </AuthContext.Provider>
  )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(context === undefined){
        throw new Error("useAuth must be inside of the AuthProvider");
    }
    return context;
}