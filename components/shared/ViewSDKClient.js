class ViewSDKClient {
    constructor() {
        this.readyPromise = new Promise((resolve) => {
            if (window.AdobeDC) {
                resolve();
            } else {
                document.addEventListener("adobe_dc_view_sdk.ready", () => {
                    resolve();
                });
            }
        });
        this.adobeDCView = undefined;
    }
    ready() {
        return this.readyPromise;
    }
    previewFile(divId, viewerConfig, url) {
        const config = {
            clientId: "c56f4dc06bd445cb82264e10e2366790" //Enter your Client ID here
        };
        if (divId) {
            config.divId = divId;
        }
        this.adobeDCView = new window.AdobeDC.View(config);
        const previewFilePromise = this.adobeDCView.previewFile(
            {
                content: {
                    location: {
                        url: url
                    }
                },
                metaData: {
                    fileName: viewerConfig.name ?? url,
                    id: process.env.NEXT_PUBLIC_ADOBE_CLIENT_ID
                }
            },
            viewerConfig
        );
        return previewFilePromise;
    }
    previewFileUsingFilePromise(divId, filePromise, fileName) {
        this.adobeDCView = new window.AdobeDC.View({
            clientId: process.env.NEXT_PUBLIC_ADOBE_CLIENT_ID,
            divId
        });
        this.adobeDCView.previewFile(
            {
                content: {
                    promise: filePromise
                },
                metaData: {
                    fileName: fileName
                }
            },
            {}
        );
    }
    registerSaveApiHandler() {
        const saveApiHandler = (metaData, content, options) => {
            console.log(metaData, content, options);
            return new Promise((resolve) => {
                setTimeout(() => {
                    const response = {
                        code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
                        data: {
                            metaData: Object.assign(metaData, {
                                updatedAt: new Date().getTime()
                            })
                        }
                    };
                    resolve(response);
                }, 2000);
            });
        };
        this.adobeDCView.registerCallback(
            window.AdobeDC.View.Enum.CallbackType.SAVE_API,
            saveApiHandler,
            {}
        );
    }
    registerEventsHandler() {
        this.adobeDCView.registerCallback(
            window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
            (event) => {
                console.log(event);
            },
            {
                enablePDFAnalytics: false
            }
        );
    }
}
export default ViewSDKClient;