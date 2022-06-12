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
    if (router.asPath.startsWith("/[...")) return;

    const handlePathChange = (path: string) => {
      dispatch({ type: ActionTypes.OpenTab, payload: path });
    };
    handlePathChange(router.asPath);
  }, [router.asPath, dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <Header className="shrink-0" />
      <PageToolBar className="shrink-0 hidden sm:block" />
      <div className="shrink-0 hidden sm:block h-8 bg-background-2 border-y border-background-3" />
      <div className="flex-1 overflow-hidden flex flex-col sm:flex-row divide-y sm:divide-x divide-background-3">
        <DrawerMenu />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Tabs className="shrink-0 overflow-x-auto" />
          <div className="flex-1 overflow-auto">{pageContent}</div>
        </div>
      </div>
    </div>
  );
}
