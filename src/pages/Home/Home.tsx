import { Outlet } from "react-router-dom";
import MainPagesLayout from "../../layout/MainPages/MainPagesLayout";
function Home() {
  return (
    <MainPagesLayout>
      <Outlet />
    </MainPagesLayout>
  );
}

export default Home;
