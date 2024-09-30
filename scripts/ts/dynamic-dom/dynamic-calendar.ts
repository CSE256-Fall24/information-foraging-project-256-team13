import { HTMLLoader } from '../core/utils/html_loader';
import { doSomething } from './do-something';
import { HTMLContent, itemsToCache } from './html-imports';
import { wunsCalendar } from './calendar';

// Put all function calls that need to be made on every page load inside the setupAll function body.
export function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    doSomething();
}

export async function setupAll() {
    await new Promise((r: any) => setTimeout(r, 100));
    console.log('reloading');
    wunsCalendar.setupAll();
    PutStudentPageLoadOperationsInsideThisStudentBody();
    console.log('reloaded');
}

(window as any).setupAll = setupAll;

itemsToCache.forEach((item: HTMLContent) => {
    HTMLLoader.cacheHTML(item.name, item.content);
});
(window as any).HTMLLoader = HTMLLoader;

console.log('calendar loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', () => setupAll());
