import { Header } from "@/components/layouts/Header";
import { Main } from "@/components/layouts/Main";
import { MainPage1 } from "@/components/layouts/Main/MainPage1";

export default function Page1() {
  return (
    <>
      <Header />
      <Main>
        <MainPage1 />
      </Main>
    </>
  );
}
