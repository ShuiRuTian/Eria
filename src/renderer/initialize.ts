import { downloader } from "@src/Downloader";

let initFailed = false;
let initFinished = false;
const unsubscribe = downloader.addEventListenerForWebSocket('message',()=>{
    console.log('Initialize restart!');
    initFailed =true;
});

 const initDownloadLists = async()=>{
    while(!initFinished){
        initFailed = false;
        let tmp1 = downloader.tellActive();
        let tmp2 = downloader.tellStopped(0,99);
        let tmp3 = downloader.tellWaiting(0,99);
        let results = await Promise.all([tmp1,tmp2,tmp3]);
        if(initFailed){
            initDownloadLists();
        }
        else{
            initFinished= true;
            // TODO: add notificationListener.

            // !! Could this Be OK? what would happen to event loop?
            // addlistener --> ... to current code
            // but event_triggered just when comes here(because it has listener, it would be added to message queue)
            // then remove the eventlistener, what would happen to this event in message queue? it would continue to happen even no listener?
            unsubscribe();
            // dispatch some events to Init store.
            store.dispatch();
        }
    }
}

