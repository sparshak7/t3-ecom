import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Loader2, User } from "lucide-react";

const AuthNavlink = () => {
  return (
    <div>
      <ClerkLoading>
        <Loader2 className="text-indigo-400 size-6 animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <SignInButton>
            <User />
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ClerkLoaded>
    </div>
  );
}
export default AuthNavlink