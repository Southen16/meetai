"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged in as {session.user.name}</p>
      <Button
        onClick={async () => {
          try {
            await authClient.signOut();
            router.push("/sign-in");
          } catch (err) {
            alert("Error signing out");
          }
        }}
      >
        Sign out
      </Button>
    </div>
  );
};
