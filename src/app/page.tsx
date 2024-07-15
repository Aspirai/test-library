/* import { Skeleton } from '@/components/ui/skeleton';

import style from './page.module.scss';

export default async function Home() {
  return (
    <div>
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <span className={style.title}>Hello</span>
      <span style={{ color: style.primaryColor }}>React!</span>
    </div>
  );
}
 */
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      {/* 左侧导航组件 */}

      <ResizablePanel defaultSize={11}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">
            Resizable Accessible resizable panel groups and layouts with keyboard support. Docs API Reference One Two
            Three
          </span>
        </div>
      </ResizablePanel>
      {/* 用于自定义拖动UI，可以是任意React元素。需要放置在两个ResizablePanel之间，不然无法拖动 */}

      <ResizableHandle className="rounded-lg border" />
      {/* 右侧图表组件 */}

      <ResizablePanel defaultSize={50} className="rounded-lg">
        {/* 设置direction属性为vertical，上下分割一次 */}
        <ResizablePanelGroup direction="vertical" className="max-w-md rounded-lg">
          <ResizablePanel defaultSize={50}>
            {/* 设置direction属性为horizontal，左右分割一次 */}
            <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">你好</div>
              </ResizablePanel>
              {/* 使左右图表可以移动 */}
              <ResizableHandle className="rounded-lg border" />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">你好</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle className="rounded-lg border" />
          <ResizablePanel defaultSize={50}>
            {/* 设置direction属性为horizontal，左右分割一次 */}
            <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">你好</div>
              </ResizablePanel>
              {/* 使左右图表可以移动 */}
              <ResizableHandle className="rounded-lg border" />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">你好</div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
    </ResizablePanelGroup>
    /* 
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
     */
  );
}
