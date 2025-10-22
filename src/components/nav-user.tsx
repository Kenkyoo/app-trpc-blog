import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs"

import { SidebarMenu, SidebarMenuItem } from "~/components/ui/sidebar"
import { Button } from '~/components/ui/button';

export function NavUser() {
  const { user } = useUser()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {/* Si el usuario está logueado */}
        <SignedIn>
          <div className="flex items-center gap-2">
            <UserButton afterSignOutUrl="/" />
            <div className="flex flex-col text-sm">
              <span className="font-semibold truncate">
                {user?.fullName || "Usuario"}
              </span>
              <span className="text-xs text-gray-500 truncate">
                {user?.primaryEmailAddress?.emailAddress}
              </span>
            </div>
          </div>
        </SignedIn>

        {/* Si NO está logueado */}
        <SignedOut>
          <div className="flex flex-col gap-2">
            <SignInButton mode="modal">
              <Button>
                Iniciar sesión
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>
                Registrarse
              </Button>
            </SignUpButton>
          </div>
        </SignedOut>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

