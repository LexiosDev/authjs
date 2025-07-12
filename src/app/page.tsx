import { signIn } from "@/lib/auth";

export default function Home() {
  return (
      <form action={async() => {
        "use server"
        await signIn("google", ({redirectTo: '/dashboard'}))

      }} className="flex justify-center items-center h-[100dvh] w-[100dvw] bg-gradient-to-tl from-violet-500 to-fuchsia-500">
        <button type="submit" className="text-white text-2xl font-semibold bg-indigo-500/50 duration-200 hover:bg-indigo-600/100 rounded-2xl h-1/5 w-1/5 border-2">
          Login com Google
        </button>
      </form>
  );
}
