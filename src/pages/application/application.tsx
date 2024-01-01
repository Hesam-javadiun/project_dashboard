import useTheme from "~hooks/useTheme";
import Layout from "./components/layout";

function Application() {
  const { ToggleTheme } = useTheme();

  return (
    <Layout>
      <>
        <button
          onClick={() => {
            ToggleTheme();
          }}
        >
          change theme
        </button>
      </>
    </Layout>
  );
}

export default Application;
