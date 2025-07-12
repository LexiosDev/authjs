import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-[100dvh] w-[100dvw] bg-gradient-to-tl from-violet-500 to-fuchsia-500">
      <div className="flex justify-center items-center flex-col gap-10 text-white text-2xl font-semibold bg-indigo-500/50 duration-200 rounded-2xl h-2/3 w-2/3 md:w-2/6 border-2 p-4">
        <h1>
          Nome de Usuario:{" "}
          <strong className="text-amber-200">{session?.user?.name}</strong>
        </h1>
        <h1>
          Email:{" "}
          <strong className="text-amber-200">{session?.user?.email}</strong>
        </h1>
        <div className="w-1/3">
          <Image
            src={session.user?.image!}
            height={1}
            width={1}
            layout="responsive"
            alt="Imagem do usuario"
            className="border-4 border-amber-200 rounded-2xl"
          ></Image>
        </div>

        <form
          className="h-1/4 w-full flex justify-center items-center"
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="text-white text-2xl font-semibold bg-indigo-500/50 duration-200 hover:bg-indigo-600/100 rounded-2xl h-1/2 w-1/2 border-2"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
