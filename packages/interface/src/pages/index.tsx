import { Header } from "@/components/layouts/Header";
import { Main } from "@/components/layouts/Main";
import { MainHome } from "@/components/layouts/Main/MainHome";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <MainHome />
      </Main>
    </>
  );
}
