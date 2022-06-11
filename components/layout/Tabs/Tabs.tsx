import { useRouter } from "next/router";
import Link from "next/link";
import { useStore } from "../../../contexts";
import { ActionTypes, ITab } from "../../../contexts/store";

const Tabs = () => {
  const { state, dispatch } = useStore();
  const { tabs } = state;

  const closeTab = (path: string) => {
    if (path !== router.asPath) {
      return dispatch({ type: ActionTypes.CloseTab, payload: path });
    }

    const tabLeft = tabs[tabs.findIndex((tab) => tab.path === path) - 1];
    const tabRight = tabs[tabs.findIndex((tab) => tab.path === path) + 1];

    const tabToFocus = tabLeft ?? tabRight;

    router.push(tabToFocus.path);
    dispatch({ type: ActionTypes.CloseTab, payload: path });
  };

  const router = useRouter();

  return (
    <div className="min-h-[26px] bg-background-3 cursor-default divide-x-2 divide-background-3 overflow-x-auto whitespace-nowrap">
      {tabs.map((tab) => {
        const isActive = router.asPath === tab.path;
        return (
          <div
            key={tab.name}
            className={`transition-all group inline-block items-center px-2 h-[26px] ${
              isActive ? "bg-background-1" : "hover:bg-background-2"
            }`}
          >
            <div className="h-full flex items-center">
              <Link href={tab.path}>
                <a className={!isActive ? "cursor-pointer" : "font-semibold"}>
                  {tab.name}
                </a>
              </Link>
              {tabs.length > 1 ? (
                <span
                  className={`ml-4 cursor-pointer font-semibold ${
                    !isActive
                      ? "transition-all group-hover:inline-block group-hover:opacity-70 none opacity-0"
                      : ""
                  }`}
                  onClick={() => closeTab(tab.path)}
                >
                  x
                </span>
              ) : (
                <span className="ml-4 w-[8.64px]" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
