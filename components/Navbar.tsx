import Link from "next/link";

import getCategories from "@/actions/get-categories";
import MainNav from "@/components/MainNav";
import NavbarActions from "@/components/NavbarActions";
import Container from "@/components/ui/container";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className=" font-extrabold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
