import PlaceholderDocument from "./PlaceholderDocument";
import { auth } from "@clerk/nextjs/server";
import Document from "./Document";

async function Documents() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  return (
    <div className="flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto">
      <PlaceholderDocument />
    </div>
  );
}
export default Documents;
