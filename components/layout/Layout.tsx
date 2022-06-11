import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import { useStore } from "../../contexts";
import { ActionTypes } from "../../contexts/store";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import { Header } from "./Header/Header";
import { PageToolBar } from "./PageToolBar/PageToolBar";
import Tabs from "./Tabs/Tabs";

export interface ILayoutProps {}

export function Layout({
  children: pageContent,
}: PropsWithChildren<ILayoutProps>) {
  const { dispatch } = useStore();
  const router = useRouter();

  useEffect(() => {
    const handlePathChange = (path: string) => {
      dispatch({ type: ActionTypes.OpenTab, payload: path });
    };
    handlePathChange(router.asPath);
  }, [router.asPath, dispatch]);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <PageToolBar />

      <div className="h-8 bg-background-2 border-y border-background-3"></div>
      <div className="flex flex-col sm:flex-row divide-y sm:divide-x divide-background-3 flex-1 min-h-0">
        <DrawerMenu />
        <div className="flex-1 min-w-0 min-h-0 max-h-full">
          <div className="hidden sm:block">
            <Tabs />
          </div>
          {pageContent}
        </div>
      </div>
    </div>
  );
}
